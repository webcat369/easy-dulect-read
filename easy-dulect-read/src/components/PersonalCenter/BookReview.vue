<template>
    <transition
            appear
            enter-active-class="animated animate__fadeInRight"
            leave-active-class="animated animate__fadeOutRight"
    >
        <div class="BookReview">
            <div class="header">
                <img src="../../assets/icon/back.svg" alt="" @click.stop="back">
                <p>书评</p>
            </div>
            <div class="bottom">
<!--                <van-empty description="暂无评论记录" />-->
                <happy-scroll hide-horizontal
                              color="rgba(51,51,51,0.2)"
                              size="8"
                              :min-length-v="20"
                              resize
                              class="happy-slow"
                >
                    <div class="list">
                        <div class="personal">
                            <div class="left">
                                <img class="photo" src="../../assets/icon/photo.svg"/>
                            </div>
                            <div class="right">
                                <div class="nickname">
                                    <p>Leo</p>
                                </div>
                                <div class="review">更新的太慢了,更新的太慢了,更新的太慢了,更新的太慢了,更新的太慢了</div>
                                <div class="personal-bottom">
                                    <p>
                                        来源：《教授，不可以》书评区
                                    </p>
                                    <p class="control">
                                        <span class="time">2020-09-02</span>
                                        <span>
                                            <img src="../../assets/icon/like.svg" alt="">
                                             76
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </happy-scroll>
            </div>
        </div>
    </transition>
</template>

<script>
import Vue from 'vue'
import { Empty } from 'vant'
// 一款基于vue2.0的滚动条插件
import { HappyScroll } from 'vue-happy-scroll'
// 引入css，推荐将css放入main入口中引入一次即可。
import 'vue-happy-scroll/docs/happy-scroll.css'
import { mapActions } from 'vuex'
Vue.use(Empty)
export default {
  name: 'BookReview',
  components: {
    HappyScroll
  },
  methods: {
    ...mapActions([
      'setBookReview'
    ]),
    back () {
      this.setBookReview(false)
    }
  }
}
</script>

<style lang="scss">
    .BookReview{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: #ffffff;
        z-index: 997;
        .header{
            width: 100%;
            height: 100px;
            line-height: 100px;
            background: #ffffff;
            display: flex;
            position: relative;
            border-bottom: 1px solid #c6c6c6;
            img{
                width: 60px;
                height: 60px;
                margin: 20px 20px;
            }
            p{
                font-size: 36px;
                color: #333333;
                font-weight: bold;
                position: absolute;
                left: 50%;
                transform: translateX(-50%);
            }
        }
        .bottom{
            position: fixed;
            top: 100px;
            bottom: 0;
            left: 0;
            right: 0;
            overflow: hidden;
            .van-empty{
                width: 100%;
                height:80%;
                .van-empty__image{
                    width: 300px;
                    height: 300px;
                }
                .van-empty__description{
                    font-size: 28px;
                    color: #3c3c3c;
                }
            }
            .list{
                .personal{
                    width: 100%;
                    /*height: 200px;*/
                    /*background: #70bfd3;*/
                    display: flex;
                    margin:30px 0;
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
                        width: 95%;
                        height: 100%;
                        /*background: #facc41;*/
                        padding-right: 25px;
                        box-sizing: border-box;
                        .nickname{
                            width: 80%;
                            height: 50px;
                            line-height: 50px;
                            /*background: #a800dd;*/
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
                            width:95%;
                            /*background: #ee9b9b;*/
                            font-size: 30px;
                            color: #333333;
                            padding: 10px 10px;
                        }
                        .personal-bottom{
                            width: 95%;
                            height: 100px;
                            line-height: 50px;
                            /*background: #aebbdb;*/
                            display: flex;
                            flex-direction: column;
                            justify-content: space-between;
                            p{
                                width: 100%;
                                height: 50px;
                                font-size: 28px;
                                color: #b9b9b9;
                            }
                            .control{
                                width: 100%;
                                display: flex;
                                justify-content: space-between;
                                span{
                                    /*background: #42b983;*/
                                    font-size: 28px;
                                    color: #b9b9b9;
                                    img{
                                        width: 35px;
                                        height:35px;
                                        margin-bottom: 10px;
                                    }
                                }
                                .time{
                                    padding-left: 10px;
                                    box-sizing: border-box;
                                    font-size: 28px;
                                    color: #b9b9b9;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
</style>
