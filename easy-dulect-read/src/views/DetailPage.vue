<template>
   <div class="DetailPage" ref="DetailPage"   @click.stop="getNavBar">
      <div class="Page">
<!--          <Coverage ref="Coverage"></Coverage>-->
          <Slide ref="Slide"></Slide>
          <div class="Popup-navigation" ref="PopupNavigation" @click.stop="">
              <div class="Popup-navigation-left" @click.stop="back">
                  <img src="../assets/icon/textback.svg" alt="">
                  <p>返回</p>
              </div>
              <div class="Popup-navigation-right">
                  <p @click.stop="bookreview">
                      <img src="../assets/icon/bookreview.svg" alt="">
                      <i>书评</i>
                  </p>
                  <p @click.stop="particulars">
                      <img src="../assets/icon/particulars.svg" alt="">
                      <i>书籍详情</i>
                  </p>
              </div>
          </div>
          <div class="Popup-menu"
               ref="PopupMenu"
               @click.stop=""
          >
             <div class="Popup-menu-top">
                 <p>上一章</p>
                 <div class="bar" @click.stop="progressClick" ref="progressBar">
                     <div class="line" ref="progressLine">
                         <div class="dot"></div>
                     </div>
                 </div>
                 <p>下一章</p>
             </div>
              <ul class="Popup-menu-bottom">
                  <li @click.stop="catalog">
                      <img src="../assets/icon/catalog.svg" alt="">
                      <i>目录</i>
                  </li>
                  <li @click.stop="switchNight">
                      <img v-if="night === false" src="../assets/icon/night.svg" alt="">
                      <img v-else src="../assets/icon/daytime.svg" alt="">
                      <i>{{this.night ? '白天':'夜间'}}</i>
                  </li>
<!--                  <li>-->
<!--                      <img src="../assets/icon/night.svg" alt="">-->
<!--                      <i>白天</i>-->
<!--                  </li>-->
                  <li @click="brightness">
                      <img src="../assets/icon/brightness.svg" alt="">
                      <i>亮度</i>
                  </li>
                  <li @click="readSet">
                      <img src="../assets/icon/set.svg" alt="">
                      <i>阅读设置</i>
                  </li>
              </ul>
          </div>
          <div class="Popup-catalog" ref="PopupCatalog">
              <van-popup v-model="showCatalog" position="left" :style="{ height: '100%' }">
                  <div class="catalog-header">
                      <p class="title">{{this.basicInformation.title}}</p>
                      <div class="header-bottom">
                          <div class="state">
                              <p>{{this.basicInformation.state}}</p>
                              <p>共{{this.basicInformation.totalLength}}章</p>
                          </div>
                          <div class="order">
                              <img src="../assets/icon/invertedorder.svg" alt="">
                              <p>倒序</p>
                          </div>
                      </div>
                  </div>
                  <div class="catalog-list">
                      <happy-scroll hide-horizontal
                                    hide-vertical
                                    resize
                                    class="happy-slow">
                          <ul>
                              <!--:class="{'active':index===0}"-->
                              <li   ref="Catalog"
                                    v-for="(value,index) in Chapter"
                                    :key="index"
                                    :class="{'active':index=== bookProgress}"
                                    @click.stop="selectChapter(index)"
                              >
                                  <p>{{value}}</p>
                                  <p>免费</p>
                              </li>
                          </ul>
                      </happy-scroll>
                  </div>
              </van-popup>
          </div>
          <div class="Popup-brightness">
              <van-popup v-model="showBrightness" position="bottom" :style="{ height: '20%' }">
                  <div class="content">
                      <p><img src="../assets/icon/minibrightness.svg" alt=""></p>
                      <div class="bar">
                          <div class="line">
                              <div class="dot"></div>
                          </div>
                      </div>
                      <p><img src="../assets/icon/maxbrightness.svg" alt=""></p>
                  </div>
              </van-popup >
          </div>
          <div class="Popup-readSet">
              <van-popup v-model="showReadSet" position="bottom" :style="{ height: '30%' }">
                  <div class="content">
                      <div class="wordSize">
                          <p>字号</p>
                          <p>
                              <span @click.stop="reduce">A-</span>
                              <i>{{fontSizeNum}}</i>
                              <span @click.stop="addition">A+</span>
                          </p>
                      </div>
                      <div class="background">
                          <p>背景</p>
                          <p>
                              <i v-for="(value,index) in BackgroundColor"
                                 :key="index"
                                 @click.stop="selectBackground(index)"
                                 ref="background"
                                 :style="{background: value}"
                              ></i>
                          </p>
                      </div>
                      <div class="interval">
                          <p>间距</p>
                          <p>
                              <i ref="lineHeight"
                                 v-for="(value,index) in modes"
                                 :key="index"
                                 :class="{'active':index===0}"
                                 @click.stop="selectLineHeight(index,value)"
                              >
                                  <img v-if="index ===0" src="../assets/icon/interval4.svg" alt="">
                                  <img v-else-if="index ===1" src="../assets/icon/interval3.svg" alt="">
                                  <img v-else src="../assets/icon/interval2.svg" alt="">
                              </i>
                          </p>
                      </div>
                      <div class="pageTurning">
                          <p>翻页</p>
                          <p>
                              <i class="active">上下</i>
                              <i>滑动</i>
                              <i>覆盖</i>
                          </p>
                      </div>
                  </div>
              </van-popup>
          </div>
<!--          <div class="changeLight"></div>-->
      </div>
   </div>
</template>
<script>
// 一款基于vue2.0的滚动条插件
import { HappyScroll } from 'vue-happy-scroll'
// 引入css，推荐将css放入main入口中引入一次即可。
import 'vue-happy-scroll/docs/happy-scroll.css'
// import Coverage from '../components/PageTurning/Coverage'
import Slide from '../components/PageTurning/Slide'
import Vue from 'vue'
import { Popup } from 'vant'
import { Text } from '../api/index'
import { mapActions, mapGetters } from 'vuex'
Vue.use(Popup)
export default {
  name: 'DetailPage',
  components: {
    HappyScroll,
    // Coverage
    Slide
  },
  created () {
    this.$nextTick(() => {
      Text()
        .then(data => {
          data.text.forEach((value, index) => {
            // console.log(value.id)
            this.Chapter.push(value.chapter)
            // this.CurrentMessage.push(value)
          })
          this.totalLength = data.text.length - 1
          // console.log(data.state)
          // console.log(data.title)
          this.basicInformation = {
            state: data.state,
            title: data.title,
            totalLength: data.text.length
          }
        })
        .catch(err => {
          console.log(err)
        })
    })
  },
  data: function () {
    return {
      navShow: false,
      showCatalog: false,
      // Text: [],
      showBrightness: false,
      showReadSet: false,
      Chapter: [],
      totalLength: 0,
      fontIndex: 0,
      fontSizeNum: 56,
      BackgroundColor: ['#FDCCBE', '#bed0e6', '#c4d7ee', '#caddf4', '#aebbdb', '#f0d2d4'],
      modes: ['mode', 'mode1', 'mode2'],
      modeType: '',
      modeIndex: 0,
      basicInformation: {},
      night: false

    }
  },
  computed: {
    ...mapGetters([
      'BookState',
      'bookProgress',
      'currentUser'
    ])
  },
  methods: {
    ...mapActions([
      'setCurrentBookState',
      'setTips',
      'setBookProgress'
    ]),
    // 返回
    back () {
      window.history.back()
    },
    // Page显示导航菜单,'上一页','下一页'
    getNavBar (e) {
      // 切换点击状态
      this.navShow = !this.navShow
      // 通过类名增减来改变菜单位置
      if (this.navShow) {
        this.$refs.PopupNavigation.classList.add('active')
        this.$refs.PopupMenu.classList.add('active')
      } else {
        this.$refs.PopupNavigation.classList.remove('active')
        this.$refs.PopupMenu.classList.remove('active')
      }
    },
    // 目录
    catalog () {
      console.log(this.showCatalog)
      this.showCatalog = !this.showCatalog
      this.navShow = false
      if (this.showCatalog) {
        this.$refs.PopupNavigation.classList.remove('active')
        this.$refs.PopupMenu.classList.remove('active')
      }
    },
    // 切换夜间/白天
    switchNight () {
      this.night = !this.night
      if (this.night) {
        this.$refs.Slide.$refs.modeType.style.backgroundColor = this.BookState.backgroundColor
        this.$refs.Slide.$refs.modeType.style.color = this.BookState.fontColor
      } else {
        this.$refs.Slide.$refs.modeType.style.backgroundColor = '#3c3c3c'
        this.$refs.Slide.$refs.modeType.style.color = '#d1d1d1'
      }
    },
    // 亮度条
    brightness () {
      this.showBrightness = !this.showBrightness
      this.navShow = false
      if (this.showBrightness) {
        this.$refs.PopupNavigation.classList.remove('active')
        this.$refs.PopupMenu.classList.remove('active')
      }
    },
    // 阅读设置
    readSet () {
      this.showReadSet = !this.showReadSet
      this.navShow = false
      if (this.showReadSet) {
        this.$refs.PopupNavigation.classList.remove('active')
        this.$refs.PopupMenu.classList.remove('active')
      }
    },
    // 书评
    bookreview () {
    },
    // 书籍详情
    particulars () {
      console.log('书籍详情')
    },
    // 字体大小减少
    reduce () {
      console.log('字体大小减少')
      // console.log(this.currentBookState.fontSize)
      if (this.fontSizeNum <= 52) {
        this.setTips('已经是最小字号了')
      } else {
        this.fontIndex = this.fontIndex - 2
        this.fontSizeNum = 56 - (-this.fontIndex)
        this.$refs.Slide.$refs.modeType.style.fontSize = this.fontSizeNum + 'px'
      }
    },
    // 字体大小增加
    addition () {
      console.log('字体大小增加')
      if (this.fontSizeNum >= 64) {
        this.setTips('已经是最大字号了')
      } else {
        this.fontIndex = this.fontIndex + 2
        this.fontSizeNum = 56 + this.fontIndex
        this.$refs.Slide.$refs.modeType.style.fontSize = this.fontSizeNum + 'px'
      }
    },
    // 更换背景
    selectBackground (index) {
      this.night = true
      this.$refs.Slide.$refs.modeType.style.backgroundColor = this.$refs.background[index].style.backgroundColor
      this.$refs.Slide.$refs.modeType.style.color = '#333333'
      this.setCurrentBookState({
        backgroundColor: this.$refs.background[index].style.backgroundColor,
        fontColor: '#333333'
      })
    },
    // 改变行间距
    selectLineHeight (index, value) {
      if (index >= this.modes.length) {
        index = 1
      }
      this.modeType = value
      // 把拿到的mode,mode1,mode2三个参数保存成一个自定义属性，绑定在html标签上
      // 通过document.documentElement可以拿到html标签
      // 通过setAttribute('data-line-height', this.modes[index])设置一个自定义属性'data-line-height'，取值就是拿到的参数
      document.documentElement.setAttribute('data-line-height', this.modes[index])
      index++
    },
    // 拖拽进度条的方法
    progressClick (e) {
      // 1.拿到进度条‘背景’的宽度
      /*
          在没有观看进度的时候这句代码可行:const progressLeft = e.target.offsetWidth
          但是在已经有一定的播放进度时,在拖拽进度条到有播放进度的地方,此时点击到的就是'前景',
          所以不能用e.target来获取进度条宽度
         */
      const progressLeft = this.$refs.progressBar.offsetWidth
      // 2.拿到点击的位置在进度条中的位置
      // 2.1拿到进度条距离左边的宽度
      /* const normalLeft = e.target.offsetLeft */
      const normalLeft = this.$refs.progressBar.offsetLeft
      // 2.2拿到点击位置距离左边的宽度
      const eventLeft = e.pageX
      // 2.3用 ‘点击位置距离左边的宽度’ - ‘进度条距离左边的宽度’ = ‘点击的位置在进度条中的位置’
      const clickLeft = eventLeft - normalLeft
      // 3.用‘点击的位置’在进度条中的位置 / 进度条‘进度条’的宽度 = 进度比例
      const value = clickLeft / progressLeft
      // 4.将进度比例赋值给进度条‘前景’
      this.$refs.progressLine.style.width = value * 100 + '%'
      // console.log(this.$refs.progressLine.style.width)

      // 5.进度条被拖拽到什么地方，小说就停在什么地方
      // 5.1小说的浏览进度 = 小说的总长度 * 进度比例
      const currentLength = parseInt(this.totalLength * value)
      // console.log(currentLength)
      // 将小说的浏览进度 传递到 state中作为共享数据保存
      this.setBookProgress(currentLength)
      this.$refs.Slide.$refs.MeScroll.mescroll.resetUpScroll(false) // 重置列表为第一页
    },
    // 目录章节切换
    selectChapter (index) {
      this.setBookProgress(index)
      // console.log(index)
      this.$refs.Slide.$refs.MeScroll.mescroll.resetUpScroll(false) // 重置列表为第一页
      if (this.bookProgress !== index) {
        this.$refs.Catalog[this.bookProgress].classList.add('active')
      } else {
        this.$refs.Catalog[this.bookProgress].classList.remove('active')
      }
    }
  },
  watch: {
    modeType (newValue, oldValue) {
      // console.log(newValue)
      if (newValue === 'mode') {
        this.$refs.lineHeight[2].classList.remove('active')
        this.$refs.lineHeight[1].classList.remove('active')
        this.$refs.lineHeight[0].classList.add('active')
      } else if (newValue === 'mode1') {
        this.$refs.lineHeight[0].classList.remove('active')
        this.$refs.lineHeight[2].classList.remove('active')
        this.$refs.lineHeight[1].classList.add('active')
      } else if (newValue === 'mode2') {
        this.$refs.lineHeight[1].classList.remove('active')
        this.$refs.lineHeight[0].classList.remove('active')
        this.$refs.lineHeight[2].classList.add('active')
      }
    },
    bookProgress (newValue, oldValue) {
      console.log(newValue, oldValue, '当前章节的变化')
      // 根据当前阅读章节计算比例，并且将比例赋值给进度条的前景
      const value = newValue / this.totalLength * 100
      this.$refs.progressLine.style.width = value + '%'
    }
  }
}
</script>
<style scoped lang="scss">
.DetailPage{
   position: fixed;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
   background: #cfe2f8;
    z-index: 999;
   .Page{
      width: 100%;
      height: 100%;
       /*background: #c2baee;*/
       position: relative;
       .Popup-navigation{
          position: absolute;
           top: -100%;
           width: 100%;
           height: 130px;
           background: #3c3c3c;
           display: flex;
           justify-content: space-between;
           color: #dbdbdb;
           transition: top .3s ease-in-out;
           &.active{
               top:0;
           }
           .Popup-navigation-left{
               line-height: 130px;
               display: flex;
               font-size: 32px;
              img{
                  width: 50px;
                  height: 50px;
                  margin: 40px 20px;
              }
           }
           .Popup-navigation-right{
               display: flex;
               p{
                   display: flex;
                   flex-direction: column;
                   font-size: 24px;
                   /*background: #c2baee;*/
                   margin:20px 20px;
                   img{
                       width: 50px;
                       height: 50px;
                       margin: 0 auto;
                   }
                   i{
                       font-style: normal;
                       text-align: center;
                   }
               }
           }
       }
       .Popup-menu{
           position: absolute;
           bottom: -100%;
           width: 100%;
           height: 220px;
           background: #3c3c3c;
           display:flex;
           flex-direction: column;
           justify-content: space-between;
           color: #dbdbdb;
           transition: bottom .3s ease-in-out;
           &.active{
               bottom:0;
           }
           .Popup-menu-top{
               height: 100px;
               line-height: 100px;
               /*background: #ee9b9b;*/
               display: flex;
               justify-content: space-between;
               p{
                   &:nth-of-type(1){
                       margin-left: 25px;
                   }
                   &:nth-of-type(2){
                       margin-right: 25px;
                   }
               }
               .bar{
                   /*position: relative;
                   top: 50%;
                   left: 0;
                   transform: translateY(-50%);*/
                   width: 60%;
                   height: 10px;
                   background: #bfbfbf;
                   border-radius: 20px;
                   .line{
                       position: relative;
                       left: 0;
                       top: 0;
                       width: 0%;
                       height: 100%;
                       background: #fff;
                       border-radius: 20px;
                       .dot{
                           position: absolute;
                           top: 50%;
                           right: -15px;
                           transform:translateY(-50%);
                           width: 30px;
                           height: 30px;
                           background:#ee9b9b;
                           /*background:radial-gradient(closest-side at 20px 10px,#fff,#ee9b9b);*/
                           border-radius: 50%;
                       }
                   }
               }
           }
           .Popup-menu-bottom{
               height: 120px;
               /*background: #8c8c8c;*/
               display: flex;
               justify-content: space-around;
               li{
                   display: flex;
                   flex-direction: column;
                   img{
                       width: 55px;
                       height: 55px;
                       margin: 10px auto;
                   }
                   i{
                       font-style: normal;
                   }
               }
           }
       }
       .changeLight{
           position: absolute;
           left: 0;
           top: 0;
           width: 100%;
           height: 100%;
           background: rgba(0,0,0,.1);
       }
      /*p{*/
      /*   width: 100%;*/
      /*   background: #ee9b9b;*/
      /*   line-height: 100px;*/
      /*    text-indent:30px;*/
      /*    !*设置字母之间的距离*!*/
      /*    letter-spacing:10px;*/
      /*    font-size: 40px;*/
      /*    !*word-spacing:15px;*!*/
      /*}*/
   }
}
</style>
<style lang="scss">
    .Popup-catalog{
        .van-overlay{
            background: rgba(0,0,0,0.1);
        }
        .van-popup{
            width: 70%;
            background: #363636;
            .catalog-header{
                width: 100%;
                height: 150px;
                /*background: #bfbfbf;*/
                .title{
                    width: 100%;
                    height: 100px;
                    line-height: 100px;
                    padding-left: 20px;
                    box-sizing: border-box;
                    /*background: #ee9b9b;*/
                    font-size: 42px;
                    color: #dbdbdb;
                    font-weight: bold;
                }
                .header-bottom{
                    width: 100%;
                    height: 50px;
                    line-height: 50px;
                    /*background: #8c8c8c;*/
                    display: flex;
                    justify-content: space-between;
                    box-sizing: border-box;
                    font-size: 26px;
                    color: #dbdbdb;
                    .state{
                        display: flex;
                        padding-left: 20px;
                        p{
                            margin-right: 15px;
                        }
                    }
                    .order{
                        display: flex;
                        padding-right: 20px;
                        img{
                            width: 40px;
                            height: 40px;
                            margin-top: 3px;
                        }
                    }
                }
            }
            .catalog-list{
                position: fixed;
                top: 150px;
                bottom: 0;
                left: 0;
                /*background: #818181;*/
                overflow: hidden;
                .happy-scroll{
                    ul{
                        /*background: #ffffff;*/
                        li{
                            width: 100%;
                            height: 90px;
                            line-height: 90px;
                            /*background: #dddddd;*/
                            display: flex;
                            p{
                                color: #c6c6c6;
                                &:nth-of-type(1){
                                    width: 430px;
                                    overflow: hidden;
                                    text-overflow: ellipsis;
                                    white-space: nowrap;
                                    padding-left: 20px;
                                    box-sizing: border-box;
                                    /*background: #fbfbfb;*/
                                    font-size: 30px;
                                }
                                &:nth-of-type(2){
                                    /*width: 360px;*/
                                    width: 75px;
                                    /*background: #aebbdb;*/
                                    font-size: 26px;
                                    text-align: right;
                                    box-sizing: border-box;
                                }
                            }
                            &.active{
                                p{
                                    font-weight: bold;
                                    color: #fa8100;
                                }
                            }
                        }
                    }
                }

            }

        }
    }
    .Popup-brightness{
        .van-overlay{
               background: rgba(0,0,0,0.1);
        }
        .van-popup{
            width: 100%;
            height:220px;
            background: #363636;
            .content {
                padding: 16px 16px 160px;
                box-sizing: border-box;
                height: 220px;
                line-height: 100px;
                /*background: #8c8c8c;*/
                display: flex; //
                justify-content: space-between;
                p{
                    img{
                        width: 50px;
                        height: 50px;
                    }
                    &:nth-of-type(1){
                        margin-left: 25px;
                    }
                    &:nth-of-type(2){
                        margin-right: 25px;
                    }
                }
                .bar{    /*背景*/
                    margin-top: 70px;
                    width: 70%;
                    height: 10px;
                    background: #bfbfbf;
                    border-radius: 20px;
                    .line{  /*前景*/
                        position: relative;
                        left: 0;
                        top: 0;
                        width: 50%;
                        height: 100%;
                        background: #fff;
                        border-radius: 20px;
                        .dot{  /*小圆点*/
                            /*让进度条的小圆点相对于前景定位，这样做的好处：只要修改前景的宽度，小圆点就会随着宽度的改变而改变*/
                            position: absolute;
                            top: 50%;
                            right: -15px;
                            transform:translateY(-50%);
                            width: 30px;
                            height: 30px;
                            background:#ee9b9b;
                            /*background:radial-gradient(closest-side at 20px 10px,#fff,#ee9b9b);*/
                            border-radius: 50%;
                        }
                    }
                }
            }
        }
    }
    .Popup-readSet{
        .van-overlay{
            background: rgba(0,0,0,0.1);
        }
        .van-popup{
            width: 100%;
            height:400px;
            background: #363636;
            .content {
                width: 100%;
                height:400px;
                /*background: #facc41;*/
                div{
                    width: 100%;
                    height: 100px;
                    /*background: #42b983;*/
                    display: flex;
                    p{
                        &:nth-of-type(1){
                            width: 15%;
                            height: 100%;
                            /*background: #8c8c8c;*/
                            line-height: 100px;
                            padding-left: 25px;
                            box-sizing: border-box;
                            font-size: 28px;
                            color: #dbdbdb;
                        }
                        &:nth-of-type(2){
                            width: 85%;
                            height: 100%;
                            /*background: #8c8c8c;*/
                        }

                    }
                    i{
                        font-style: normal;
                        color: #dbdbdb;
                    }
                }
                .wordSize{
                    p{
                        &:nth-of-type(2){
                            span{
                                display: inline-block;
                                width: 150px;
                                height: 60px;
                                background: #363636;
                                border: 2px solid #dbdbdb;
                                font-size: 34px;
                                text-align: center;
                                line-height: 60px;
                                color: #dbdbdb;
                                border-radius: 30px;
                                margin-top: 20px;
                            }
                            i{
                                font-size: 24px;
                                margin: 0 20px;
                            }
                        }
                    }
                }
                .background{
                    p{
                        &:nth-of-type(2){
                            width: 80%;
                            display: flex;
                            justify-content:space-between;
                            i{
                                display: inline-block;
                                width: 60px;
                                height: 60px;
                                border-radius: 50%;
                                border: 2px solid #dbdbdb;
                                margin-top: 20px;
                                /*&:nth-of-type(1){*/
                                /*    background: #cfe2f8;*/
                                /*}*/
                                /*&:nth-of-type(2){*/
                                /*    background: #bed0e6;*/
                                /*}*/
                                /*&:nth-of-type(3){*/
                                /*    background: #c4d7ee;*/
                                /*}*/
                                /*&:nth-of-type(4){*/
                                /*    background: #caddf4;*/
                                /*}*/
                                /*&:nth-of-type(5){*/
                                /*    background: #aebbdb;*/
                                /*}*/
                                /*&:nth-of-type(6){*/
                                /*    background: #fddfdf;*/
                                /*}*/
                            }
                        }
                    }

                }
                .interval{
                    p{
                        &:nth-of-type(2){
                            i{
                                display: inline-block;
                                width: 150px;
                                height: 60px;
                                border: 2px solid #dbdbdb;
                                border-radius: 30px;
                                margin:20px 20px;
                                margin-left: 0;
                                position: relative;
                                img{
                                    width: 50px;
                                    height: 40px;
                                    position: absolute;
                                    top: 10px;
                                    left: 50%;
                                    transform: translateX(-50%);
                                }
                                &.active{
                                    border: 2px solid #db7043;
                                }
                            }
                        }
                    }
                }
                .pageTurning{
                    p{
                        &:nth-of-type(2){
                            i{
                                display: inline-block;
                                width: 100px;
                                height: 60px;
                                border: 2px solid #dbdbdb;
                                text-align: center;
                                line-height: 60px;
                                border-radius: 30px;
                                margin: 15px 20px;
                                margin-left: 0;
                                &.active{
                                    border: 2px solid #db7043;
                                    color: #db7043;
                                }
                            }
                        }
                    }
                }
            }
        }
    }

</style>
