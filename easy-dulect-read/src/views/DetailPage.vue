<template>
   <div class="DetailPage" ref="DetailPage">
      <div class="Page" @click.self="getNavBar">
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
                 <div class="bar">
                     <div class="core">
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
                  <li>
                      <img src="../assets/icon/daytime.svg" alt="">
                      <i>夜间</i>
                  </li>
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
                      <p class="title">小王子</p>
                      <div class="header-bottom">
                          <div class="state">
                              <p>已完结</p>
                              <p>共50章</p>
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
                              <li class="active">
                                  <p>第一章</p>
                                  <p>飞行员奇遇飞行员奇遇飞行员奇遇</p>
                              </li>
                              <li>
                                  <p>第一章</p>
                                  <p>飞行员奇遇</p>
                              </li>
                              <li>
                                  <p>第一章</p>
                                  <p>飞行员奇遇</p>
                              </li>
                              <li>
                                  <p>第一章</p>
                                  <p>飞行员奇遇飞行员奇遇飞行员奇遇</p>
                              </li>
                              <li>
                                  <p>第一章</p>
                                  <p>飞行员奇遇飞行员奇遇</p>
                              </li>
                              <li>
                                  <p>第一章</p>
                                  <p>飞行员奇遇</p>
                              </li>
                              <li>
                                  <p>第一章</p>
                                  <p>飞行员奇遇飞行员奇遇飞行员奇遇</p>
                              </li>
                              <li>
                                  <p>第一章</p>
                                  <p>飞行员奇遇飞行员奇遇</p>
                              </li>
                              <li>
                                  <p>第16章</p>
                                  <p>飞行员奇遇飞行员奇遇</p>
                              </li>
                              <li>
                                  <p>第17章</p>
                                  <p>飞行员奇遇飞行员奇遇</p>
                              </li>
                              <li>
                                  <p>第18章</p>
                                  <p>飞行员奇遇</p>
                              </li>
                              <li>
                                  <p>第78章</p>
                                  <p>飞行员奇遇</p>
                              </li>
                              <li>
                                  <p>第99章</p>
                                  <p>飞行员奇遇飞行员奇遇飞行员奇遇</p>
                              </li>
                              <li>
                                  <p>第1023章</p>
                                  <p>飞行员奇遇飞行员奇遇飞行员奇遇</p>
                              </li>
                              <li>
                                  <p>第1024章</p>
                                  <p>飞行员奇遇飞行员奇遇飞行员奇遇</p>
                              </li>
                              <li>
                                  <p>第2034章</p>
                                  <p>飞行员奇遇</p>
                              </li>
                              <li>
                                  <p>第一章</p>
                                  <p>飞行员奇遇飞行员奇遇飞行员奇遇</p>
                              </li>
                              <li>
                                  <p>第一章</p>
                                  <p>飞行员奇遇飞行员奇遇</p>
                              </li>
                              <li>
                                  <p>第一章</p>
                                  <p>飞行员奇遇</p>
                              </li>
                              <li>
                                  <p>第一章</p>
                                  <p>飞行员奇遇飞行员奇遇飞行员奇遇</p>
                              </li>
                              <li>
                                  <p>第一章</p>
                                  <p>飞行员奇遇飞行员奇遇</p>
                              </li>
                              <li>
                                  <p>第16章</p>
                                  <p>飞行员奇遇飞行员奇遇</p>
                              </li>
                              <li>
                                  <p>第17章</p>
                                  <p>飞行员奇遇飞行员奇遇</p>
                              </li>
                              <li>
                                  <p>第18章</p>
                                  <p>飞行员奇遇</p>
                              </li>
                              <li>
                                  <p>第78章</p>
                                  <p>飞行员奇遇</p>
                              </li>
                              <li>
                                  <p>第99章</p>
                                  <p>飞行员奇遇飞行员奇遇飞行员奇遇</p>
                              </li>
                              <li>
                                  <p>第1023章</p>
                                  <p>飞行员奇遇飞行员奇遇飞行员奇遇</p>
                              </li>
                              <li>
                                  <p>第1024章</p>
                                  <p>飞行员奇遇飞行员奇遇飞行员奇遇</p>
                              </li>
                              <li>
                                  <p>第2034章</p>
                                  <p>飞行员奇遇</p>
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
                          <div class="core">
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
                              <button>A-</button>
                              <i>66</i>
                              <button>A+</button>
                          </p>
                      </div>
                      <div class="background">
                          <p>背景</p>
                          <p>
                              <i></i>
                              <i></i>
                              <i></i>
                              <i></i>
                              <i></i>
                              <i></i>
                          </p>
                      </div>
                      <div class="interval">
                          <p>间距</p>
                          <p>
                              <i class="active"><img src="../assets/icon/interval4.svg" alt=""></i>
                              <i><img src="../assets/icon/interval3.svg" alt=""></i>
                              <i><img src="../assets/icon/interval2.svg" alt=""></i>
                          </p>
                      </div>
                      <div class="pageTurning">
                          <p>翻页</p>
                          <p>
                              <i class="active">覆盖</i>
                              <i>滑动</i>
                              <i>上下</i>
                          </p>
                      </div>
                  </div>
              </van-popup>
          </div>
<!--          <Coverage></Coverage>-->
<!--          <div class="changeLight"></div>-->
      </div>
   </div>
</template>
<script>
// 一款基于vue2.0的滚动条插件
import { HappyScroll } from 'vue-happy-scroll'
// 引入css，推荐将css放入main入口中引入一次即可。
import 'vue-happy-scroll/docs/happy-scroll.css'
import Vue from 'vue'
import { Popup } from 'vant'
// import Coverage from '../components/PageTurning/Coverage'
Vue.use(Popup)
export default {
  name: 'DetailPage',
  components: {
    HappyScroll
    // Coverage
  },
  data: function () {
    return {
      navShow: false,
      showCatalog: false,
      currentText: [
        {
          title: '楔子',
          text: '“狼巢，狼巢，独狼已跳伞！重复，独狼已跳伞！”\n\n    “狼巢收到！”\n\n    “狼巢，狼巢，装备仓放出！重复，装备仓放出！”\n\n    “狼巢收到！”\n\n    ……\n\n    “杀了我！”\n\n    脑海中突然传来了那个熟悉的飘渺的声音，独狼的眼前仿佛又看到了那双美丽的眼睛。\n\n    ……\n\n    “狼巢，独狼终端信号突然消失！独狼终端信号在半空中突然消失！”\n\n    “狼巢，装备仓信号突然消失！装备仓信号突然消失！”\n\n    ……\n'
        }
      ],
      showBrightness: false,
      showReadSet: false
    }
  },
  methods: {
    // 返回
    back () {
      window.history.back()
    },
    // Page显示导航菜单,'上一页','下一页'
    getNavBar (e) {
      // 获取网页宽高
      const pageHeight = e.target.clientHeight
      const pageWidth = e.target.clientWidth
      // 划分点击边界
      const menuAppearsLeft = pageWidth * 0.15
      const menuAppearsRight = pageWidth * 0.85
      const menuAppearsBottom = pageHeight * 0.6
      // 点击边界判断
      const mouseX = (e.clientX > menuAppearsLeft && e.clientX < menuAppearsRight)
      const mouseY = (e.clientY > 0 && e.clientY < menuAppearsBottom)
      if (mouseX && mouseY) {
        console.log('弹出设置菜单')
        // 切换点击状态
        this.navShow = !this.navShow
        console.log(this.navShow)
        // 通过类名增减来改变菜单位置
        if (this.navShow) {
          this.$refs.PopupNavigation.classList.add('active')
          this.$refs.PopupMenu.classList.add('active')
        } else {
          this.$refs.PopupNavigation.classList.remove('active')
          this.$refs.PopupMenu.classList.remove('active')
        }
      //  判断是否点击的是屏幕左侧的15%的位置
      } else if (e.clientX < menuAppearsLeft) {
        console.log('上一页')
      // 除去以上点击位置 剩下的位置点击时触发下一页
      } else {
        console.log('下一页')
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
       background: #c2baee;
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
                   position: relative;
                   top: 50%;
                   left: 0;
                   transform: translateY(-50%);
                   width: 60%;
                   height: 10px;
                   background: #bfbfbf;
                   border-radius: 20px;
                   .core{
                       position: absolute;
                       left: 0;
                       top: 0;
                       width: 50%;
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
                                width:160px;
                                padding-left: 20px;
                                box-sizing: border-box;
                                /*background: #fbfbfb;*/
                                font-size: 30px;
                                color: #dbdbdb;
                                &:nth-of-type(2){
                                    width: 360px;
                                    overflow: hidden;
                                    text-overflow: ellipsis;
                                    white-space: nowrap;
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
                .bar{
                    position: relative;
                    margin-top: 70px;
                    width: 70%;
                    height: 10px;
                    background: #bfbfbf;
                    border-radius: 20px;
                    .core{
                        position: absolute;
                        left: 0;
                        top: 0;
                        width: 50%;
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
                            button{
                                width: 150px;
                                height: 60px;
                                background: #363636;
                                border: 2px solid #dbdbdb;
                                font-size: 34px;
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
                                &:nth-of-type(1){
                                    background: #cfe2f8;
                                }
                                &:nth-of-type(2){
                                    background: #bed0e6;
                                }
                                &:nth-of-type(3){
                                    background: #c4d7ee;
                                }
                                &:nth-of-type(4){
                                    background: #caddf4;
                                }
                                &:nth-of-type(5){
                                    background: #aebbdb;
                                }
                                &:nth-of-type(6){
                                    background: #fddfdf;
                                }
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
