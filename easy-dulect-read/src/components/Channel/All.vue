<template>
    <ScrollView ref="ScrollView">
        <div class="All" ref="All">
            <div class="select">
                <ul class="tag">
                    <li class="active">全部</li>
                    <li>总裁豪门</li>
                    <li>高干军婚</li>
                    <li>婚恋爱情</li>
                    <li>职场情缘</li>
                    <li>民国旧影</li>
                    <li>娱乐明星</li>
                    <li>重生异能</li>
                </ul>
                <ul class="end">
                    <li class="active">全部</li>
                    <li>完结</li>
                    <li>连载</li>
                </ul>
                <ul class="words">
                    <li class="active">全部</li>
                    <li>50万字以下</li>
                    <li>50-100万字</li>
                    <li>100200万字</li>
                    <li>200万字以上</li>
                </ul>
                <ul>
                    <li class="active">按热度</li>
                    <li>按更新</li>
                    <li>按评分</li>
                    <li>新书</li>
                </ul>
            </div>
            <div class="list">
                <div class="TopThree">
                    <div class="top">现代言情类全网最热前三名</div>
                    <ul class="bottom">
                        <li>
                            <i>1</i>
                            <img src="https://cdn.wtzw.com/bookimg/public/images/cover/a3c6/f74b8ce07e3e37db5ad063ea96977308_360x480.jpg" alt="">
                            <p>登雀枝</p>
                        </li>
                        <li>
                            <i>2</i>
                            <img src="https://cdn.wtzw.com/bookimg/public/images/cover/a3c6/72b3859ad460a1d5f2a8979c78c78c22_360x480.jpg" alt="">
                            <p>神探仵作娇王妃</p>
                        </li>
                        <li>
                            <i>3</i>
                            <img src="https://cdn.wtzw.com/bookimg/public/images/cover/a3c6/7be9859fe2072e14a7e56aa26aafcf5a_360x480.jpg" alt="">
                            <p>冲喜娘子病娇夫冲喜娘子病娇夫</p>
                        </li>
                    </ul>
                </div>
                <div class="van-list"
                >
                    <div class="van-cell" v-for="(item,index) in List" :key="index">
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
        </div>
    </ScrollView>
</template>

<script>
import ScrollView from '../ScrollView'
import { getBookList } from '../../api'
export default {
  name: 'All',
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
    }
  },
  methods: {
    init () { // 加载5条
      getBookList()
        .then(data => {
          if (data.list.girlList.length <= 5) { // 5条数据一页
            this.List = data.list.girlList
          } else {
            this.List = data.list.girlList.slice(0, 5)
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
        this.List = this.List.concat(data.list.girlList.slice(this.nowPage * 5, (this.nowPage + 1) * 5))

        this.nowPage++

        if (data.list.girlList.length <= this.nowPage * 5) {
          this.msg = '轻悦读'
        }
      })
    }
  },
  mounted () {
    this.init()
    // 列表盒子高度
    const topHeight = window.innerHeight - this.Height
    // console.log(bottomHeight)
    this.$refs.ScrollView.scrolling((y) => {
      const AllHeight = this.$refs.All.offsetHeight
      // console.log(AllHeight)
      const scrollY = AllHeight + y
      // console.log(scrollY, 'mounted')
      // console.log(y)
      if (Math.abs(topHeight - scrollY) < 10) {
        this.scrollMore()
      }
    })
  }
}
</script>

<style scoped lang="scss">
.All{
    width: 100%;
    background: #fdfdfe;
    overflow: hidden;
    .select{
        width: 100%;
        /*height: 500px;*/
        margin: 0 auto;
        /*background: #e7555b;*/
        margin-bottom: 20px;
        border-bottom: 1px solid #cccccc;
        ul{
            width: 100%;
            /*background: #c2baee;*/
            display: flex;
            flex-wrap: wrap;
            padding: 10px 20px;
            box-sizing: border-box;
            li{
                height: 50px;
                line-height:20px;
                border-radius: 20px;
                margin: 10px 10px;
                padding: 15px 15px;
                box-sizing: border-box;
                text-align: center;
                font-size: 28px;
                color: #333333;
                &.active{
                    border: 2px solid #fa8100;
                    color: #d86c00;
                }
            }
        }
    }
    .list{
        width: 100%;
        background: #fdfdfe;
        .TopThree{
            width: 100%;
            height: 480px;
            /*background: #fae34b;*/
            margin-bottom: 40px;
            border-bottom: 1px solid #cccccc;
            .top{
                width: 90%;
                height: 100px;
                line-height: 100px;
                margin: 0 auto;
                /*background: #e7555b;*/
                font-size: 38px;
                font-weight: bold;
                color: #333333;
            }
            .bottom{
                width: 90%;
                height: 380px;
                /*background: #70bfd3;*/
                margin: 0 auto;
                display: flex;
                justify-content: space-between;
                li{
                    width: 200px;
                    height: 100%;
                    /*background: #42b983;*/
                    position: relative;
                    img{
                        width: 100%;
                        border-radius: 10px;
                    }
                    p{
                        width: 100%;
                        font-size: 28px;
                        color: #333333;
                        /*background: #dddddd;*/
                        margin-top: 10px;
                    }
                    i{
                        width: 40px;
                        height: 40px;
                        text-align: center;
                        font-size: 28px;
                        color: #ffffff;
                        background: #fae34b;
                        position: absolute;
                        top: 0;
                        border-bottom-right-radius:15px;
                    }
                }
            }
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
            background: #ddd;
            color:#666;
            font-size: 23px;
        }
    }
}
</style>
