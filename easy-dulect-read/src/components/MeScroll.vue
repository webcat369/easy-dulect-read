<template>
    <div class="MeScroll">
        <!--mescroll滚动区域的基本结构-->
        <mescroll-vue ref="mescroll" :up="mescrollUp" :down="mescrollDown" id="mescroll" @init="mescrollInit">
            <!--由于里面的滚动内容不确定，所以放置插槽可以让谁使用谁滚动-->
            <!--        <slot></slot>-->
            <div class="box">
                <div class="item"
                     v-for="(value,index) in dataList"
                     :key="index"
                     @click.stop="ShowDetail(value)"
                >
                    <div class="left">
                        <img v-lazy="value.coverPicture">
                    </div>
                    <div class="right">
                        <div class="top">
                            <p>{{value.title}}</p>
                            <i v-if="index === 0"><img src="../assets/icon/goldmedal.svg" alt=""></i>
                            <i v-if="index === 1"><img src="../assets/icon/silvermedal.svg" alt=""></i>
                            <i v-if="index === 2"><img src="../assets/icon/coppermedal.svg" alt=""></i>
                            <i v-if="index > 2">{{index+1}}</i>
                        </div>
                        <div class="bottom">
                            <p>{{value.tag}}</p>
                            <p>{{value.popularity}}万热度</p>
                        </div>
                    </div>
                </div>
            </div>
        </mescroll-vue>
    </div>
</template>

<script>
// 引入mescroll的vue组件
import MescrollVue from 'mescroll.js/mescroll.vue'
import { mapActions } from 'vuex'
export default {
  name: 'MeScroll',
  created () {

  },
  mounted () {
    this.$nextTick(() => {
    })
  },
  components: {
    MescrollVue // 注册mescroll组件
  },
  data () {
    return {
      mescroll: null, // mescroll实例对象
      mescrollDown: { // 下拉刷新的配置. (如果下拉刷新和上拉加载处理的逻辑是一样的,则mescrollDown可不用写了)
        use: true,
        callback: this.DownCallback
      },
      mescrollUp: { // 上拉加载的配置.
        use: true,
        auto: true,
        callback: this.upCallback, // 上拉回调,此处简写; 相当于 callback: function(page, mescroll) { }
        page: {
          num: 0, // 当前页 默认0,回调之前会加1; 即callback(page)会从1开始
          size: 10 // 每页数据条数,默认10
        },
        htmlNodata: "<p class='upwarp-nodata'>没有更多数据啦…</p>",
        htmlLoading: '<p class="upwarp-progress mescroll-rotate"></p><p class="upwarp-tip">加载中…</p>',
        noMoreSize: 5 // 如果列表已无数据,可设置列表的总数量要大于5才显示无更多数据;
        // 避免列表数据过少(比如只有一条数据),显示无更多数据会不好看
        // 这就是为什么无更多数据有时候不显示的原因
      },
      dataList: [], // 列表数据
      mescrolls: {}
    }
  },
  watch: {
    CurrentRank (n, o) {
      // this.dataList = []
      // this.dataList = this.dataList.concat(this.CurrentRank.slice(0, 10))
    }
  },
  props: {
    CurrentRank: {
      type: Array,
      default: () => [],
      require: true
    },
    Tag: {
      type: String,
      default: 'rank',
      require: true
    }
  },
  methods: {
    ...mapActions([
      'setShowDetail',
      'setCurrentBook'
    ]),
    ShowDetail (value) {
      this.setShowDetail(true)
      this.setCurrentBook(value)
    },
    mescrollInit (mescroll) {
      this.mescroll = mescroll
    },
    // 上拉回调 page = {num:1, size:10}; num:当前页 ,默认从1开始; size:每页数据条数,默认10
    upCallback (page, mescroll) {
      this.page = page
      this.mescrolls = mescroll
      // // 如果是第一页需手动置空列表
      if (this.page.num === 1) this.dataList = []
      // 把请求到的数据添加到列表
      this.dataList = this.dataList.concat(this.CurrentRank.slice((this.page.num - 1) * 10, this.page.num * 10))
      // 数据渲染成功后,隐藏下拉刷新的状态
      this.$nextTick(() => {
        this.mescrolls.endSuccess(this.CurrentRank.length)
      })
    }
  }
}
</script>

<style lang="scss">
    .MeScroll{
        width: 100%;
        /*background: #facc41;*/
        /*通过fixed固定mescroll的高度*/
        .mescroll {
            position: absolute;
            top:0;
            bottom: 0;
            width: 100%;
            /*height: 100%;*/
            background: #ee9b9b;
            .mescroll-downwarp{
                background: #ee9b9b;
                .downwarp-content{
                    width: 400px;
                    position: absolute;
                    left: 40%;
                    transform: translateX(-50%);
                    .downwarp-progress{
                        width: 30px;
                        height: 30px;
                    }
                    .downwarp-tip{
                        font-size: 26px;
                        width: 200px;
                    }
                }
                &:nth-of-type(1){
                    display: none;
                }
            }
            .box{
                /*height: 2750px;*/
                .item{
                    width: 75%;
                    height: 150px;
                    /*background: #e7555b;*/
                    display: flex;
                    margin: 20px 18px;
                    .left{
                        width: 20%;
                        height: 100%;
                        /*background: #facc41;*/
                        img{
                            width: 100%;
                            height: 100%;
                            border-radius: 10px;
                            box-shadow: 0 2px 5px 2px #c9c9ca;
                        }
                    }
                    .right{
                        width: 80%;
                        height: 100%;
                        /*background: #42b983;*/
                        .top{
                            width: 100%;
                            height: 90px;
                            /*background: #10eeeb;*/
                            display: flex;
                            justify-content: space-between;
                            p{
                                font-size: 32px;
                                font-weight: bold;
                                color: #333333;
                                padding-top:10px;
                                padding-left: 15px;
                                box-sizing: border-box;
                            }
                            i{
                                width: 50px;
                                height: 50px;
                                text-align: center;
                                /*background: #cccccc;*/
                                font-size: 28px;
                                color: #333;
                                font-weight: bold;
                                img{
                                    display: inline-block;
                                    width: 50px;
                                    height: 50px;
                                }
                            }
                        }
                        .bottom{
                            width: 100%;
                            height: 60px;
                            /*background: #cccccc;*/
                            display: flex;
                            justify-content: space-between;
                            p{
                                font-size: 24px;
                                color: #d0d0d0;
                                padding: 10px 15px;
                                box-sizing: border-box;
                            }
                        }
                    }
                }
            }
            .mescroll-upwarp{
                width: 400px;
                position: absolute;
                left: 40%;
                transform: translateX(-50%);
                /*background: #ee9b9b;*/
                .upwarp-progress{
                    width: 30px;
                    height: 30px;
                    /*background: #facc41;*/
                }
                .upwarp-tip{
                    font-size: 26px;
                    width: 200px;
                    /*background: #c2baee;*/

                }
            }
        }
    }
</style>
