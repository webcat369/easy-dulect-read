<template>
    <transition appear name="detail">
        <div class="Detail">
            <div class="content">
                <ScrollView ref="ScrollView">
                    <div class="bookDetail" ref="bookDetail">
                        <div class="header" ref="header" style="margin-bottom: 25Px">
                            <div class="titleTop" v-show="this.ratio <= 0 ? true : false">
                                <img src="../assets/icon/backfff.svg" alt="">
                                <img src="../assets/icon/morefff.svg" alt="">
                            </div>
                            <div class="header-top" ref="bookDetailHeader">
                                <div class="top-left">
                                    <p>{{this.currentBook.title}}</p>
                                    <span>{{this.currentBook.author}}</span>
                                    <span>{{this.currentBook.tag}}·{{this.currentBook.state}}·{{this.currentBook.wordCount}}万字</span>
                                </div>
                                <div class="top-right">
                                    <img v-lazy="this.currentBook.coverPicture" alt="">
                                </div>
                            </div>
                            <div class="header-bottom">
                                <div class="bottom-left">
                                    <p><i>{{this.currentBook.grade}}</i>分</p>
                                    <span>在同类书中排{{this.currentBook.top}}</span>
                                </div>
                                <div class="bottom-right">
                                    <p><i>{{this.currentBook.popularity}}</i>万人气·排在同类书TOP5%</p>
                                    <p><i>{{this.currentBook.readingNumber}}</i>万人读·81%女生正在读</p>
                                </div>
                            </div>
                        </div>
                        <div class="particulars" ref="particulars" style="margin-bottom: 25Px">
                            <ul class="detailTab">
                                <li v-for="(value,index) in items"
                                    :key="index"
                                    @click.stop="selectItem(index)"
                                    ref="detailLi"
                                >
                                    {{value}}
                                </li>
                                <i class="bar"
                                   :style="{transform:`translateX(${iWidths/2+itemsIndex*iWidths}px) translateX(-50%)`}"></i>
                            </ul>
                            <div class="context">
                                <p>主要人物:{{this.currentBook.dominatingFigure}}</p>
                                <p ref="briefIntroduction"
                                   :class="[flag === false ?'briefIntroduction':'briefIntroduction-active']"
                                >
                                    简介： {{this.currentBook.description}}
                                </p>
                                <span @click.stop="pullDown"
                                      ref="triangle"
                                      :class="{'active':flag}"
                                ></span>
                            </div>
                            <div class="catalog">
                                <div class="box">
                                    <p class="catalog-left">
                                        <span>查看目录</span>
                                        <span>{{this.currentBook.state}}中 更新至{{this.currentBook.updateTo}}章</span>
                                    </p>
                                    <p class="catalog-right">
                                        <span>{{this.currentBook.updateTime}}更新</span>
                                        <span> > </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="comment" ref="comment" style="margin-bottom: 25Px">
                            <div class="comment-top">
                                <p class="book-review">书评</p>
                                <p class="write-review">
                                    <img src="../assets/icon/pen.svg" alt="">
                                    写评论
                                </p>
                            </div>
                            <div class="empty-box" v-show="true">
                                <p>本书暂无评价，</p>
                                <p>快来陈给第一个<i>写书评</i>的人 ></p>
                            </div>
                            <div class="comment-bottom" v-show="false">
                                <ul>
                                    <li>全部</li>
                                    <li>好评68</li>
                                    <li>中评66</li>
                                    <li>差评76</li>
                                </ul>
                                <div class="personal">
                                    <div class="left">
                                        <img class="photo" src="../assets/icon/photo.svg"/>
                                    </div>
                                    <div class="right">
                                        <div class="nickname">
                                            <p>Leo</p>
                                            <p>
                                                <img src="../assets/icon/littlemoe.svg" alt="">
                                            </p>
                                        </div>
                                        <div class="review">更新的太慢了,更新的太慢了,更新的太慢了,更新的太慢了,更新的太慢了</div>
                                        <div class="personal-bottom">
                                            <p class="time">2020-09-02</p>
                                            <p class="control">
                                        <span>
                                            回复
                                            <img src="../assets/icon/reply.svg" alt="">
                                        </span>
                                                <span>
                                            76
                                            <img src="../assets/icon/like.svg" alt="">
                                        </span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="allComment">
                                    点击查看全部评论 >
                                </div>
                            </div>
                        </div>
                        <div class="statement" ref="statement">
                            <p>声明：由于此项目是个人独立开发,如有侵权或疑问请及时联系开发人员QQ:2541873074</p>
                        </div>
                    </div>
                </ScrollView>
            </div>
            <div class="title" ref="title" :style="{opacity:`${ratio}`}">
            <span @click="back">
               <img src="../assets/icon/back.svg" alt="">
            </span>
                <p>{{this.currentBook.title}}</p>
                <span>
                <img src="../assets/icon/more.svg" alt="">
            </span>
            </div>
            <div class="TabBar">
                <p @click.stop="Classic">
                    <img src="../assets/icon/bookshelf.svg" alt="">
                    加入书架
                </p>
                <p>免费阅读全本</p>
                <p>
                    <img src="../assets/icon/download.svg" alt="">
                    下载
                </p>
            </div>
            <!--创建一个单独分组标题标签,实现吸顶效果-->
            <ul class="fix-Tab" v-show="isShow">
                <li v-for="(value,index) in items"
                    :key="index"
                    @click.stop="selectItem(index)"
                >
                    {{value}}
                </li>
                <i class="bar"
                   :style="{transform:`translateX(${iWidths/2+itemsIndex*iWidths}px) translateX(-50%)`}"></i>
            </ul>
        </div>
    </transition>
</template>

<script>
import ScrollView from './ScrollView'
import { mapGetters, mapActions } from 'vuex'
import { classic } from '../api/index'
export default {
  name: 'Detail',
  data () {
    return {
      ratio: 0,
      flag: false,
      items: ['详情', '书评'],
      itemsIndex: 0,
      iWidths: 0,
      isShow: false,
      scrollParticularsHeight: 0,
      statementHeight: 0
    }
  },
  components: {
    ScrollView
  },
  methods: {
    ...mapActions([
      'setShowDetail',
      'setTips',
      'setBookList'
    ]),
    back () {
      // window.history.back
      this.setShowDetail(false)
    },
    pullDown (el) {
      this.flag = !this.flag
      this.$refs.ScrollView.refresh()
    },
    selectItem (index) {
      this.itemsIndex = index
      if (index === 1) {
        this.isShow = true
        // this.flag = false
        this.ratio = 1
        this.$refs.ScrollView.scrollTo(0, -this.scrollToTabHeight)
      }

      if (index === 0) {
        this.isShow = true
        this.ratio = 1
        this.$refs.ScrollView.scrollTo(0, -this.scrollParticularsHeight)
      }
    },
    Classic (e) {
      if (this.currentUser.userId !== '0') {
        classic(this.currentUser.userId, {
          id: this.currentBook.id,
          name: this.currentBook.title,
          picUrl: this.currentBook.coverPicture,
          author: this.currentBook.author,
          progress: this.bookProgress.progress
        })
          .then(data => {
            console.log(data)
            if (data.msg === '收藏成功') {
              const oldData = this.bookList
              oldData.push({
                id: this.currentBook.id,
                name: this.currentBook.title,
                picUrl: this.currentBook.coverPicture,
                author: this.currentBook.author,
                progress: this.bookProgress
              })
              this.setBookList(oldData)
              this.setTips('收藏成功')
            } else {
              this.setTips(data.msg)
            }
          })
      } else {
        this.setTips('请先登录')
        this.$router.push({ path: '/sign' })
      }
    }
  },
  computed: {
    ...mapGetters([
      'currentBook',
      'currentUser',
      'bookProgress',
      'bookList'
    ])
  },
  created () {
  },
  mounted () {
    const bookDetailHeader = this.$refs.bookDetailHeader.offsetHeight
    const titleHeader = this.$refs.title.offsetHeight
    const marginBottom = parseInt(this.$refs.header.style.marginBottom)
    this.scrollParticularsHeight = this.$refs.header.offsetHeight - titleHeader + marginBottom

    // 已进入Detail页面就获取到‘声明盒子原有的高度’
    this.statementHeight = this.$refs.statement.offsetHeight
    // console.log(this.statementHeight)

    this.$refs.ScrollView.scrolling((y) => {
      this.ratio = -y / bookDetailHeader
      // console.log(y)
      if (parseInt(-y) >= this.scrollParticularsHeight) {
        this.isShow = true
      } else {
        this.isShow = false
      }
    })

    // 获取 i 宽度
    this.iWidths = this.$refs.detailLi[0].clientWidth

    // console.log(window.innerHeight)
    // console.log(this.$refs.bookDetail.offsetHeight)
  },
  updated () {
    const titleHeader = this.$refs.title.offsetHeight
    const briefIntroductionHeight = this.$refs.briefIntroduction.offsetHeight
    // console.log(briefIntroductionHeight)
    if (this.flag === true) {
      this.$refs.statement.style.height = this.statementHeight + 'px'
    } else {
      this.$refs.ScrollView.refresh()
      this.$refs.statement.style.height = briefIntroductionHeight + 'px'
    }

    // 当‘声明的div标签的高度’变化完成后，在计算整个bookDetail盒子的高度
    const DetailHeight = this.$refs.bookDetail.offsetHeight
    // console.log(DetailHeight)
    this.scrollToTabHeight = DetailHeight - window.innerHeight + titleHeader
    // console.log(this.scrollToTabHeight)

    this.$refs.ScrollView.scrolling((y) => {
      if (parseInt(-y) >= this.scrollToTabHeight) {
        this.itemsIndex = 1
      } else {
        this.itemsIndex = 0
      }
    })
  },
  watch: {
  }
}
</script>

<style scoped lang="scss">
@import "../assets/css/mixin";
.Detail{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    z-index: 1000;
    background: #f3f3f3;
    .title{
        width: 100%;
        height: 100px;
        line-height: 100px;
        display: flex;
        justify-content: space-between;
        position: fixed;
        top: 0 ;
        background: #fdfdfe;
        p{
            font-size: 40px;
            font-weight: bold;
            color: #333333;
        }
        span{
            img{
                width: 60px;
                height: 60px;
                margin: 20px 5px;
            }
        }
    }
    .TabBar{
        width: 100%;
        height: 100px;
        line-height: 100px;
        background:#fbfbfb ;
        position: fixed;
        bottom: 0;
        display: flex;
        justify-content: space-between;
        border-top: 1px solid #c2c2c2;
        p{
            width: 200px;
            height: 100%;
            /*background: #facc41;*/
            text-align: center;
            font-size: 34px;
            img{
                width:40px;
                height: 40px;
                margin-bottom: 30px;
                margin-left: 20px;
            }
            &:nth-of-type(2){
                width: 280px;
                height: 80px;
                line-height: 80px;
                margin-top:10px;
                border-radius: 40px;
                background-image: linear-gradient(to right, #adbada, #9198e5);
            }
        }
    }
    .fix-Tab{
        width: 100%;
        height: 100px;
        line-height: 100px;
        background: #ffffff;
        border-bottom: 1px solid #cfcfcf;
        display: flex;
        top: 100px;
        position: relative;
        z-index: 999;
        li{
            width: 100px;
            text-align: center;
            /*background: #dddddd;*/
            font-size: 32px;
            font-weight: bold;
        }
        .bar{
            position: absolute;
            bottom: 0;
            width: 50px;
            height:10px;
            background: #ee9b9b;
            border-radius: 10px;
        }
    }
    .content{
        position: fixed;
        top: 0;
        bottom: 100px;
        overflow: hidden;
        .bookDetail{
            width: 100%;
            /*height:4400px;*/
            background: #f2f2f2;
            .header{
                width: 100%;
                margin: 0 auto;
                height: 600px;
                background: #adbada;
                position: relative;
                /*margin-bottom: 20px;*/
                .titleTop{
                    position: absolute;
                    top: 0;
                    width: 100%;
                    height: 100px;
                    /*background: #bfbfbf;*/
                    line-height: 100px;
                    display: flex;
                    justify-content: space-between;
                    img{
                        width: 60px;
                        height: 60px;
                        margin: 20px 5px;
                    }
                }
                .header-top{
                    width: 100%;
                    height: 300px;
                    /*background: #ee9b9b;*/
                    display: flex;
                    justify-content: space-between;
                    position: absolute;
                    top: 100px;
                    .top-left{
                        width: 65%;
                        /*background: #dddddd;*/
                        position: relative;
                        p{
                            font-size: 40px;
                            font-weight: bold;
                            color: #ffffff;
                            position: absolute;
                            top: 20px;
                            left: 20px;
                        }
                        span{
                            font-size: 26px;
                            color: #9b9b9b;
                            &:nth-of-type(1){
                                position: absolute;
                                top:90px;
                                left: 20px;
                            }
                            &:nth-of-type(2){
                                position: absolute;
                                bottom: 35px;
                                left: 20px;
                            }
                        }
                    }
                    .top-right{
                        width: 35%;
                        /*background: #c3e1f1;*/
                        position: relative;
                        img{
                            display: inline-block;
                            height:85%;
                            position: absolute;
                            top: 20px;
                            right:25px;
                            border-radius: 10px;
                        }
                    }
                }
                .header-bottom{
                    width: 100%;
                    height: 150px;
                    background: #fbfbfb;
                    display: flex;
                    justify-content: space-between;
                    position: absolute;
                    bottom: 0;
                    .bottom-left{
                        width: 35%;
                        /*background: #facc41;*/
                        position: relative;
                        p{
                            position: absolute;
                            top: 25px;
                            left: 20px;
                            i{
                                font-size: 52px;
                                font-weight: bold;
                                color: #333333;
                                margin-right: 10px;
                            }
                        }
                        span{
                            font-size: 26px;
                            color: #9b9b9b;
                            position: absolute;
                            top: 90px;
                            left: 20px;
                        }
                    }
                    .bottom-right{
                        width: 65%;
                        height: 100px;
                        /*background: #5f68c5;*/
                        margin-top: 25px;
                        border-left: 1px solid #dddddd;
                        box-sizing: border-box;
                        position: relative;
                        p{
                            font-size:28px;
                            color: #9b9b9b;
                            /*background: #facc41;*/
                            &:nth-of-type(1){
                                position: absolute;
                                top: 0;
                                left: 20px;
                            }
                            &:nth-of-type(2){
                                position: absolute;
                                left: 20px;
                                bottom: 0;
                            }
                        }
                    }
                }
            }
            .particulars{
                width: 100%;
                background: #ededed;
                .detailTab{
                    width: 100%;
                    height: 100px;
                    line-height: 100px;
                    background: #fbfbfb;
                    border-bottom: 1px solid #cfcfcf;
                    display: flex;
                    position: relative;
                    transform: translate3d(0,0,0);
                    li{
                        width: 100px;
                        text-align: center;
                        /*background: #dddddd;*/
                        font-size: 32px;
                        font-weight: bold;
                    }
                    .bar{
                        position: absolute;
                        bottom: 0;
                        width: 50px;
                        height:10px;
                        background: #ee9b9b;
                        border-radius: 10px;
                    }
                }
                .context{
                    background: #fbfbfb;
                    /*margin: 0 20px;*/
                    font-size: 30px;
                    padding-top: 20px;
                    box-sizing: border-box;
                    position: relative;
                    color: #858585;
                    transform: translate3d(0,0,0);
                    p:nth-child(1){
                        /*background: #ee9b9b;*/
                        padding:20px 20px;
                        font-size: 30px;
                        line-height: 40px;
                        overflow: hidden;
                    }
                    .briefIntroduction{
                        /*background: #ee9b9b;*/
                        padding:20px 20px;
                        font-size: 30px;
                        line-height: 45px;
                        box-sizing: border-box;
                        height: 200px;
                        @include clamp(4);
                    }
                    .briefIntroduction-active{
                        /*background: #ee9b9b;*/
                        padding:20px 20px;
                        box-sizing: border-box;
                        font-size: 30px;
                        line-height: 45px;
                    }
                    span{
                        display: inline-block;
                        width: 0;
                        height:0;
                        border-top: 15px solid #aebbdb;
                        border-right:15px solid transparent;
                        border-left: 15px solid transparent;
                        position: absolute;
                        bottom: 10px;
                        right: 10px;
                        transition: all 0.5s;
                        transform: rotate(0);
                        &.active{
                            transform: rotate(180deg);
                        }
                    }
                }
                .catalog{
                    width: 100%;
                    height: 80px;
                    background: #fbfbfb;
                    .box{
                        width: 95%;
                        height: 100%;
                        line-height: 80px;
                        margin: 0 auto;
                        display: flex;
                        justify-content: space-between;
                        font-size: 26px;
                        color: #858585;
                        border-top: 1px solid #cfcfcf;
                        .catalog-left{
                            width: 65%;
                            /*background: #70bfd3;*/
                            padding-left: 20px;
                            box-sizing: border-box;
                            span{
                                &:nth-of-type(1){
                                    font-size: 32px;
                                    padding-right: 20px;
                                    color: #333333;
                                }
                            }
                        }
                        .catalog-right{
                            width: 35%;
                            /*background:yellowgreen ;*/
                            padding-left:40px;
                            box-sizing: border-box;
                        }
                    }
                }
            }
            .comment{
                width: 100%;
                /*height: 800px;*/
                background: #fafafa;
                .comment-top{
                    width: 100%;
                    height: 80px;
                    line-height: 80px;
                    /*background: #aebbdb;*/
                    display: flex;
                    justify-content: space-between;
                    .book-review{
                        font-size: 38px;
                        font-weight: bold;
                        margin-left: 20px;
                        color: #4d4d4d;
                    }
                    .write-review{
                        font-size: 28px;
                        margin-right: 20px;
                        color: #4d4d4d;
                        img{
                            width:45px;
                            height: 45px;
                            margin-bottom: 20px;
                        }
                    }
                }
                .comment-bottom{
                     ul{
                        width: 100%;
                        height: 80px;
                        /*background: #42b983;*/
                        display: flex;
                        margin-bottom: 20px;
                        li{
                            width: 100px;
                            height: 40px;
                            background: #deddaf;
                            margin-left: 20px;
                            margin-top: 20px;
                            text-align: center;
                            border: 2px solid #cb6600;
                            border-radius: 20px;
                            font-size: 28px;
                            color: #7a4517;
                        }
                    }
                    .personal{
                        width: 100%;
                        /*height: 200px;*/
                        /*background: #70bfd3;*/
                        display: flex;
                        margin-bottom: 30px;
                        .left{
                            width: 15%;
                            height: 100%;
                            /*background: #dddddd;*/
                            img{
                                width: 80px;
                                height: 80px;
                                background: #f5f5f5;
                                border-radius: 50%;
                                margin-left: 20px;
                            }
                        }
                        .right{
                            width: 85%;
                            height: 100%;
                            /*background: #facc41;*/
                            .nickname{
                                width: 100%;
                                height: 50px;
                                line-height: 50px;
                                /*background: #a800dd;*/
                                display: flex;
                                justify-content: space-between;
                                p{
                                    padding-left: 10px;
                                    box-sizing: border-box;
                                    font-size: 28px;
                                    color: #b9b9b9;
                                    img{
                                        width: 50px;
                                        height: 50px;
                                        padding-right: 10px;
                                        box-sizing: border-box;
                                    }
                                }
                            }
                            .review{
                                width: 100%;
                                /*background: #ee9b9b;*/
                                font-size: 30px;
                                color: #333333;
                                padding: 10px 10px;
                            }
                            .personal-bottom{
                                width: 100%;
                                height: 50px;
                                line-height: 50px;
                                /*background: #ffffff;*/
                                display: flex;
                                justify-content: space-between;
                                .time{
                                    padding-left: 10px;
                                    box-sizing: border-box;
                                    font-size: 28px;
                                    color: #b9b9b9;
                                }
                                .control{
                                    span{
                                        width: 50px;
                                        height: 50px;
                                        /*background: #42b983;*/
                                        margin-right: 20px;
                                        font-size: 28px;
                                        color: #b9b9b9;
                                        img{
                                            width: 35px;
                                            height:35px;
                                            margin-bottom: 10px;
                                        }
                                    }
                                }
                            }
                        }
                    }
                    .allComment{
                        width: 100%;
                        height: 80px;
                        line-height: 80px;
                        text-align: center;
                        border-top: 1px solid #dddddd;
                        font-size: 26px;
                        color: #cccccc;
                    }
                }
                .empty-box{
                    width: 100%;
                    height: 500px;
                    background: #fafafa;
                    position: relative;
                    p{
                        position: absolute;
                        font-size: 28px;
                        color: #333333;
                        &:nth-of-type(1){
                            top: 220px;
                            left: 50%;
                            transform: translateX(-50%);
                        }
                        &:nth-of-type(2){
                            top: 250px;
                            left: 50%;
                            transform: translateX(-50%);
                            i{
                                color: #facc41;
                                font-style:normal
                            }
                        }
                    }
                }

            }
            .statement{
                width: 100%;
                background: #fafafa;
                p{
                    font-size: 26px;
                    flex-wrap: wrap;
                    line-height: 35px;
                    color: #bfbfbf;
                    padding: 20px 20px;
                    box-sizing: border-box;
                }
            }
        }
    }

}
</style>
<style lang="scss">
    .detail-enter{
        transform:translateX(100%);
        /*opacity: 1;*/
    }
    .detail-enter-to{
        transform:translateX(0%);
        /*opacity: 1;*/
    }
    .detail-enter-active{
        /*用3s的时间过渡从显示开始到显示结束*/
        transition: transform 1s;
    }
    .detail-leave{
        transform:translateX(0%);
        /*opacity: 0;*/
    }
    .detail-leave-to{
        transform:translateX(100%);
        /*opacity: 0;*/
    }
    .detail-leave-active{
        /*用3s的时间过渡从隐藏开始到隐藏结束*/
        transition: transform 0.5s;
    }
</style>
