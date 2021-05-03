<template>
    <transition
            appear
            enter-active-class="animated animate__fadeInRight"
            leave-active-class="animated animate__fadeOutRight"
    >
        <div class="Collect">
            <div class="header">
                <img src="../../assets/icon/back.svg" alt="" @click.stop="back">
                <p>收藏</p>
                <p @click.stop="edit">{{this.hide===true ? '取消' : '编辑'}}</p>
            </div>
            <div class="bottom">
<!--                <van-empty description="暂无收藏记录" />-->
                <happy-scroll hide-horizontal
                              color="rgba(51,51,51,0.2)"
                              size="8"
                              :min-length-v="20"
                              resize
                              class="happy-slow"
                              v-show="true">
                    <div class="list">
                        <div class="van-cell" ref="VanCell" v-for="(value,index) in collectList" :key="index">
                            <i  @click.stop="Selected" v-show="hide">
                                <img class="tick"
                                     src="../../assets/icon/unselected.svg"
                                     v-if="switchImg"
                                     alt=""/>
                                <img class="tick"
                                     src="../../assets/icon/pitchOn.svg"
                                     v-else
                                     alt=""/>
                            </i>
                            <div class="cell-left">
                                <img v-lazy="value.picUrl" alt="">
                            </div>
                            <div class="cell-right">
                                <p>{{value.name}}</p>
                                <p>{{value.author}}</p>
                                <p>{{value.collectTime}}</p>
                            </div>
                        </div>
                    </div>
                </happy-scroll>
                <div class="cancel" ref="cancel" @click.stop="Delect" v-show="true">
                    取消收藏
                </div>
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
import { mapActions, mapGetters } from 'vuex'
import { getCollect } from './../../api'
Vue.use(Empty)
export default {
  name: 'Collect',
  data () {
    return {
      hide: false,
      switchImg: true,
      collectList: []
    }
  },
  created () {
    getCollect(this.currentUser.userId).then(data => {
      this.collectList = data.result
      console.log(data.result)
    })
  },
  components: {
    HappyScroll
  },
  computed: {
    ...mapGetters([
      'currentUser'
    ])
  },
  methods: {
    ...mapActions([
      'setCollect'
    ]),
    back () {
      this.setCollect(false)
    },
    edit () {
      this.hide = !this.hide
      console.log(this.hide)
      if (this.hide) {
        this.$refs.cancel.style.bottom = 0
      } else {
        this.$refs.cancel.style.bottom = (-200) + 'px'
      }
    },
    Selected () {
      this.switchImg = !this.switchImg
      if (!this.switchImg) {
        this.$refs.cancel.classList.add('active')
      } else {
        this.$refs.cancel.classList.remove('active')
      }
    },
    Delect () {
      this.$refs.VanCell.style.display = 'none'
    }
  }
}
</script>

<style lang="scss">
.Collect{
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: #ffffff;
    z-index: 996;
    .header{
        width: 100%;
        height: 100px;
        line-height: 100px;
        /*background: #ffffff;*/
        display: flex;
        position: relative;
        border-bottom: 1px solid #c2c2c2;
        img{
            width: 60px;
            height: 60px;
            margin: 20px 20px;
        }
        p{
            color: #333333;
            position: absolute;
            &:nth-of-type(1){
                left: 50%;
                transform: translateX(-50%);
                font-size: 36px;
                font-weight: bold;
            }
            &:nth-of-type(2){
                font-size: 32px;
                right: 20px;
            }
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
            .van-cell{
                width: 750px;
                height: 180px;
                padding-top: 20px;
                box-sizing: border-box;
                /*background: #ee9b9b;*/
                margin-bottom: 35px;
                display: flex;
                justify-content: space-between;
                i{
                    display: block;
                    /*background: #aebbdb;*/
                    width: 50px;
                    height: 50px;
                    margin: 50px 20px;
                    img{
                        display: block;
                        width: 100%;
                        height: 100%;
                    }
                }
                .cell-left{
                    width:20%;
                    margin-left: 25px;
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
                    width: 75%;
                    /*background: #ffa74f;*/
                    display: flex;
                    flex-direction: column;
                    justify-content: space-around;
                    p{
                        &:nth-of-type(1){
                            font-size: 34px;
                            font-weight: bold;
                            color: #333333;
                        }
                        &:nth-of-type(2){
                           font-size: 28px;
                            color: #333333;
                        }
                        &:nth-of-type(3){
                           font-size: 26px;
                            color: #8c8c8c;
                        }
                    }
                }

            }
        }
        .cancel{
            position:absolute;
            bottom: -100px;
            width: 100%;
            height: 100px;
            font-size: 30px;
            color: #8c8c8c;
            text-align: center;
            line-height: 100px;
            /*background: #ffcb5d;*/
            border-top: 1px solid #c2c2c2;
            transition: bottom 0.3s ease-in-out;
            &.active{
                color: #ffcb5d;
            }
        }
    }
}
</style>
