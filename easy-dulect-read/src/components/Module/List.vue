<template>
    <div class="PullDown">
        <div class="title">
                <p>高分好书</p>
                <div>
                    <i ref="btnColor" :style="{transform:`translateX(${checkIndex*iWidths}px)`}"></i>
                    <div class="switch">
                        <span
                                v-for="(value,index) in title"
                                :key="index"
                                @click.stop="show(index)"
                        >{{value}}</span>
                    </div>
                </div>
            </div>
        <div class="van-list"
                    ref="list"
                    v-show="checkedGirl"
            >
                <div
                             class="van-cell"
                             v-for="(item,index) in girlList"
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
        <div class="van-list"
                    ref="list"
                    v-show="checkedBoy"
            >
                <div
                             class="van-cell"
                             v-for="item in boyList"
                             :key="item.id"
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
import { getBookList } from '../../api'
import { mapActions } from 'vuex'

export default {
  name: 'List',
  data () {
    return {
      girlList: [],
      boyList: [],
      checkedGirl: true,
      checkedBoy: false,
      iWidths: 0,
      checkIndex: 0,
      title: ['女生', '男生'],
      moreShow: false, // 控制显示隐藏
      nowPage: 1, // 当前有几页
      msg: '上拉加载更多...'
    }
  },
  props: {
    type: {
      type: String,
      default: '',
      require: true
    },
    name: {
      type: String,
      default: '',
      require: true
    }
  },
  methods: {
    ...mapActions([
      'setShowDetail',
      'setCurrentBook'
    ]),
    ShowDetail (value) {
      console.log(value)
      this.setShowDetail(true)
      this.setCurrentBook(value)
    },
    show (index) { // 控制男生/女生按钮
      // console.log(this.$refs.titleButton[0].offsetWidth)
      // console.log(this.$refs.btnColor.getBoundingClientRect().left)
      this.checkIndex = index
      // console.log(this.checkIndex)
      if (this.checkedGirl === true) {
        this.checkedGirl = false
        this.checkedBoy = true
      } else {
        this.checkedBoy = false
        this.checkedGirl = true
      }
    },
    init () { // 加载5条
      getBookList()
        .then(data => {
          // console.log(data.list.girlList)
          // console.log(data.list.boyList)

          if (data.list.girlList.length <= 5) { // 5条数据一页
            this.girlList = data.list.girlList
          } else {
            this.girlList = data.list.girlList.slice(0, 5)
          }
          if (data.list.boyList.length <= 5) { // 5条数据一页
            this.boyList = data.list.boyList
          } else {
            this.boyList = data.list.boyList.slice(0, 5)
          }
        })
        .catch(err => {
          console.error(err)
        })
    },
    scrollMore () { // 上拉查询更多
      if (this.nowPage >= 5) return
      getBookList().then(data => {
        // concat() 方法用于连接两个或多个数组
        this.girlList = this.girlList.concat(data.list.girlList.slice(this.nowPage * 5, (this.nowPage + 1) * 5))

        this.boyList = this.boyList.concat(data.list.boyList.slice(this.nowPage * 5, (this.nowPage + 1) * 5))

        this.nowPage++

        if (data.list.girlList.length <= this.nowPage * 5) {
          this.msg = '已加载全部'
        }

        if (data.list.boyList.length <= this.nowPage * 5) {
          this.msg = '已加载全部'
        }
      })
    }
  },
  mounted () {
    // 先渲染5个
    this.init()

    // Vue.nextTick()作用：在下次dom更新循环结束之后，执行延迟回调。在修改数据之后立即使用这个方法，获得更新后的dom
    this.$nextTick(function () {
      this.iWidths = this.$refs.btnColor.offsetWidth
    })
  },
  watch: {

  }
}
</script>

<style lang="scss">
.PullDown{
    width: 90%;
    background: #c2baee;
    margin: 0 auto;
    margin-top: 30px;
    .title{
        width: 100%;
        height: 100px;
        /*background: #d43c33;*/
        display: flex;
        justify-content: space-between;
        margin-bottom: 5px;
        line-height: 100px;
        p{
            font-size: 34px;
            font-weight: bold;
            color: #3e3e3e;
        }
        div{
            width: 150px;
            height: 40px;
            line-height: 40px;
            background: #dddddd;
            overflow: hidden;
            text-align: center;
            border-radius: 30px;
            margin-top: 25px;
            display: flex;
            justify-content: space-between;
            position: relative;
            transform: translate3d(0,0,0);
            i{
                position: absolute;
                left: 0;
                top: 0;
                display: inline-block;
                width: 50%;
                height: 100%;
                background: #fadd60;
                border-radius: 30px;
                transition: all 0.5s;
            }
            .switch{
                position: absolute;
                width: 100%;
                height: 100%;
                left: 0;
                top: -25px;
                background: transparent;
                span{
                    display: inline-block;
                    width: 50%;
                    height: 100%;
                    font-size: 22px;
                    border-radius: 30px;
                    color:#fff;
                }
            }
        }
    }
    .van-list{
        /*background: #70bfd3;*/
            .van-cell{
                position: relative;
                width: 100%;
                height: 210px;
                padding: 0;
                /*background: #ee9b9b;*/
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
        width: 100%;
        height: 50px;
        line-height: 50px;
        text-align: center;
        background: #ddd;
        color:#666;
        font-size: 23px;
    }
}

</style>
