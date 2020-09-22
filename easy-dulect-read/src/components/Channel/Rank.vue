<template>
    <ScrollView ref="ScrollView">
        <div class="Rank" ref="Rank">
            <div class="title">现代言情大热榜·9月3日</div>
            <div class="van-list">
                <div class="van-cell"
                     v-for="(item,index) in List"
                     :key="index"
                     @click.stop="ShowDetail(item)">
                    <div class="cell-left">
                        <img v-lazy="item.coverPicture" alt="">
                    </div>
                    <div class="cell-right">
                        <div class="right-top">
                            <p>{{item.title}}</p>
                            <p><i>{{index + 1}}</i></p>
                        </div>
                        <div class="right-middle">
                            <p>{{item.description}}</p>
                        </div>
                        <div class="right-bottom">
                            <p>
                                <span>{{item.author}}</span>
                                <span>{{item.wordCount}}万字</span>
                            </p>
                            <p>
                                <span>{{item.tag}}</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="more">{{msg}}</div>
        </div>
    </ScrollView>
</template>

<script>
import ScrollView from '../ScrollView'
import { mapActions } from 'vuex'
export default {
  name: 'Rank',
  mounted () {
    this.init()
    // 列表盒子高度
    const topHeight = window.innerHeight - this.Height
    // console.log(bottomHeight)
    this.$refs.ScrollView.scrolling((y) => {
      const RankHeight = this.$refs.Rank.offsetHeight
      // console.log(EndHeight)
      const scrollY = RankHeight + y
      // console.log(scrollY, 'mounted')
      // console.log(y)
      if (Math.abs(topHeight - scrollY) < 10) {
        this.scrollMore()
      }
    })
  },
  components: {
    ScrollView
  },
  data () {
    return {
      List: [],
      nowPage: 1, // 当前有几页
      msg: '上拉加载更多...'
    }
  },
  props: {
    Height: {
      type: Number,
      default: 0,
      require: true
    },
    Channel: {
      type: Array,
      default: () => [],
      require: true
    }
  },
  methods: {
    ...mapActions([
      'setShowDetail',
      'setCurrentBook'
    ]),
    init () { // 加载5条
      if (this.Channel.length <= 5) { // 5条数据一页
        this.List = this.Channel
      } else {
        this.List = this.Channel.slice(0, 5)
      }
    },
    scrollMore () { // 上拉查询更多
      if (this.nowPage >= 5) return
      // concat() 方法用于连接两个或多个数组
      this.List = this.List.concat(this.Channel.slice(this.nowPage * 5, (this.nowPage + 1) * 5))

      this.nowPage++

      if (this.Channel.length <= this.nowPage * 5) {
        this.msg = '轻悦读'
      }
    },
    ShowDetail (item) {
      // console.log(item)
      this.setShowDetail(true)
      this.setCurrentBook(item)
    }
  }
}
</script>

<style scoped lang="scss">
.Rank{
    width: 100%;
    background: #fdfdfe;
    overflow: hidden;
    .title{
        width: 90%;
        height: 100px;
        margin: auto;
        /*background: #e7555b;*/
        font-size: 40px;
        color: #333333;
        font-weight: bold;
    }
    .van-list{
        /*background: #70bfd3;*/
        .van-cell{
            position: relative;
            width: 90%;
            height: 210px;
            padding: 0;
            /*background: #ee9b9b;*/
            margin: 0 auto;
            margin-bottom: 35px;
            display: flex;
            justify-content: space-between;
            .cell-left{
                width:25%;
                /*background: #cccccc;*/
                img{
                    display: inline-block;
                    height: 100%;
                    border-radius: 10px;
                }
                img[lazy="loading"] {
                    display: inline-block;
                    width: 100px;
                }
            }
            .cell-right{
                width: 70%;
                /*background: #ffa74f;*/
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                .right-top{
                    width: 100%;
                    height: 50px;
                    /*background: #eeb7e4;*/
                    display: flex;
                    justify-content: space-between;
                    color: #333;
                    font-weight: revert;
                    p{
                        line-height: 50px;
                        &:nth-of-type(1){
                            font-size: 32px;
                        }
                        &:nth-of-type(2){
                            line-height: 40px;
                            font-size: 22px;
                            color: #e7555b;
                            i{
                                font-size: 32px;
                            }
                        }
                    }
                }
                .right-middle{
                    width: 100%;
                    /*height: 80px;*/
                    text-overflow: ellipsis;
                    /*background: #93d9b1;*/
                    p{
                        line-height:40px;
                        box-sizing: border-box;
                        font-size: 30px;
                        color: #575757;
                        overflow:hidden;
                        text-overflow:ellipsis;
                        display:-webkit-box;  //将对象作为弹性伸缩盒子模型显示。
                        -webkit-box-orient:vertical; //从上到下垂直排列子元素（设置伸缩盒子的子元素排列方式
                        -webkit-line-clamp:2; //这个属性不是css的规范属性，需要组合上面两个属性，表示显示的行数。
                    }
                }
                .right-bottom{
                    width: 100%;
                    height: 50px;
                    line-height: 60px;
                    /*background: #3face2;*/
                    display: flex;
                    justify-content: space-between;
                    p{
                        font-size: 28px;
                        color: #575757;
                        &:nth-of-type(1){
                            box-sizing: border-box;
                            span{
                                margin-right: 20px;
                            }
                        }
                        &:nth-of-type(2){
                            box-sizing: border-box;
                            span{
                                display: inline-block;
                                width: 110px;
                                height: 30px;
                                line-height:30px;
                                font-size: 22px;
                                text-align: center;
                                border: 1px solid #575757;
                                box-sizing: border-box;
                                border-radius: 5px;
                            }
                        }
                    }
                }
            }

        }
    }
    .more{
        width: 90%;
        height: 50px;
        margin: 0 auto;
        line-height: 50px;
        text-align: center;
        background: #ddd;
        color:#666;
        font-size: 23px;
    }
}
</style>
