<template>
    <div class="MeScroll">
        <!--mescroll滚动区域的基本结构-->
        <mescroll-vue ref="mescroll" :up="mescrollUp" :down="mescrollDown" id="mescroll" @init="mescrollInit">
            <!--由于里面的滚动内容不确定，所以放置插槽可以让谁使用谁滚动-->
            <slot></slot>
        </mescroll-vue>
    </div>
</template>

<script>
// 引入mescroll的vue组件
import MescrollVue from 'mescroll.js/mescroll.vue'
export default {
  name: 'MeScroll',
  components: {
    MescrollVue // 注册mescroll组件
  },
  data () {
    return {
      mescroll: null, // mescroll实例对象
      mescrollDown: {}, // 下拉刷新的配置. (如果下拉刷新和上拉加载处理的逻辑是一样的,则mescrollDown可不用写了)
      mescrollUp: { // 上拉加载的配置.
        use: true, // 是否启用上拉加载; 默认true
        auto: true, // 是否在初始化完毕之后自动执行上拉加载的回调; 默认true
        isLock: false, // 是否锁定上拉加载,默认false;
        isBoth: false, // 上拉加载时,如果滑动到列表顶部是否可以同时触发下拉刷新;默认false,两者不可同时触发;
        isBounce: true, // 是否允许ios的bounce回弹;默认true,允许; 如果设置为false,则除了mescroll, mescroll-touch, mescroll-touch-x, mescroll-touch-y能够接收touchmove事件,其他部分均无法滑动,能够有效禁止boun
        callback: this.upCallback, // 上拉回调,此处简写; 相当于 callback: function(page, mescroll) { }
        scrollbar: {
          use: true, // use : 是否开启自定义滚动条;PC端默认true开启自定义滚动条; 移动端默认false不使用
          barClass: 'mescroll-bar'// barClass : 自定义滚动条的样式;
        },
        onScroll: this.onScroll
      },
      dataList: [], // 列表数据
      mescrolls: {}
    }
  },
  props: {
    // CurrentRank: {
    //   type: Array,
    //   default: () => [],
    //   require: true
    // }
  },
  methods: {
    mescrollInit (mescroll) {
      this.mescroll = mescroll
    },
    // 上拉回调 page = {num:1, size:10}; num:当前页 ,默认从1开始; size:每页数据条数,默认10
    upCallback (page, mescroll) {
      // console.log(page)
      // this.page = page
      // this.mescrolls = mescroll
      // // // 如果是第一页需手动置空列表
      // if (this.page.num === 1) this.dataList = []
      // // 把请求到的数据添加到列表
      // this.dataList = this.dataList.concat(this.CurrentRank.slice((this.page.num - 1) * 10, this.page.num * 10))
      // // 数据渲染成功后,隐藏下拉刷新的状态
      // this.$nextTick(() => {
      //   this.mescrolls.endSuccess(this.CurrentRank.length)
      // })
      this.$emit('getData')
    },
    // 获取记录的滚动位置
    getTop () {
      this.$refs.mescroll && this.$refs.mescroll.beforeRouteEnter()
    },
    // 记录位置
    setTop () {
      this.$refs.mescroll && this.$refs.mescroll.beforeRouteLeave()
    }
  }
}
</script>
<style lang="scss">
    .MeScroll{
        width: 100%;
        height: 100%;
        /*background: #facc41;*/
        /*通过fixed固定mescroll的高度*/
        .mescroll {
            width: 100%;
            /*background: #ee9b9b;*/
            .mescroll-downwarp{
                /*background: #ee9b9b;*/
                .downwarp-content{
                    width: 400px;
                    position: absolute;
                    left: 50%;
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
            }
            .item{
                width: 95%;
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
            .mescroll-upwarp{
                width: 400px;
                position: absolute;
                left: 50%;
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
                .upwarp-nodata{
                    font-size: 26px;
                    width: 200px;
                }
            }
        }
        .mescroll-bar::-webkit-scrollbar {
            width:4px;
        }
    }
</style>
