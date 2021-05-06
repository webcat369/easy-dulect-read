<template>
    <div class="ScrollList">
        <div class="van-list">
            <div class="van-cell"
                 v-for="(item,index) in List"
                 :key="index"
                 @click.stop="ShowDetail(item)"
            >
                <div class="cell-left">
                    <img v-lazy="item.coverPicture" alt="">
                </div>
                <div class="cell-right">
                    <div class="right-top">
                        <p>{{item.title}}</p>
                        <p><i>{{item.grade}}</i> 分</p>
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
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'ScrollList',
  mounted () {
    console.log(this.Channel)
  },
  data () {
    return {
      List: [],
      msg: '上拉加载更多...'
    }
  },
  props: {
    Channel: {
      type: Array,
      default: () => [],
      require: true
    }
  },
  computed: {
    ...mapGetters([
      'nowPage'
    ])
  },
  watch: {
    Channel (newValue, oldValue) {
      console.log(newValue, '新的值')
      // console.log(oldValue, '旧的值')
      this.$nextTick(() => {
        // 不同型号手机截取数不同
        this.List = newValue.slice(0, 6)
      })
    }
  },
  methods: {
    ...mapActions([
      'setShowDetail',
      'setCurrentBook',
      'setPageNum'
    ]),
    scrollMore () {
      // 上拉查询更多
      const PageLength = parseInt(this.Channel.length / 5) + 1
      // console.log(PageLength)
      // console.log(this.nowPage)
      // console.log(PageLength)
      // concat() 方法用于连接两个或多个数组
      this.List = this.List.concat(this.Channel.slice(this.nowPage * 5, (this.nowPage + 1) * 5))
      let num = this.nowPage
      if (this.nowPage >= PageLength) return
      num++
      this.setPageNum(num)
      console.log(this.nowPage)
      console.log(this.List.length)
      console.log(this.Channel.length)
      if (this.Channel.length <= this.nowPage * 5) {
        this.msg = '轻悦读'
      }
    },
    ShowDetail (item) {
      console.log(item)
      this.setShowDetail(true)
      this.setCurrentBook(item)
    }
  }
}
</script>

<style scoped lang="scss">
.ScrollList{
    width: 100%;
    background: #ffffff;
    .van-list{
        /*background: #70bfd3;*/
        .van-cell{
            position: relative;
            left: 50%;
            transform: translateX(-50%);
            width: 90%;
            height: 210px;
            padding-top: 20px;
            box-sizing: border-box;
            /*background: #ee9b9b;*/
            margin-bottom: 35px;
            display: flex;
            justify-content: space-between;
            .cell-left{
                width:25%;
                /*background: #cccccc;*/
                img{
                    display:block;
                    height: 100%;
                    border-radius: 10px;
                    box-shadow:3px 0 5px 4px #c9c9ca;
                    box-sizing: border-box;
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
                            width: 380px;
                            font-size: 32px;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                        }
                        &:nth-of-type(2){
                            width: 80px;
                            line-height: 40px;
                            font-size: 22px;
                            color: #ee9b9b;
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
        background: #fff;
        color:#666;
        font-size: 28px;
    }
}
</style>
