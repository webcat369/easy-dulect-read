<template>
    <transition
            appear
            enter-active-class="animated animate__fadeInRight"
            leave-active-class="animated animate__fadeOutRight"
    >
        <div class="ReadRecord">
            <div class="header">
                <img src="../../assets/icon/back.svg" alt="" @click.stop="back">
                <p>阅读历史</p>
                <p @click.stop="management">{{this.hide===true ? '完成' : '管理'}}</p>
            </div>
            <div class="bottom">
<!--                <van-empty description="暂无阅读记录" />-->
                <happy-scroll hide-horizontal
                              color="rgba(51,51,51,0.2)"
                              size="8"
                              :min-length-v="20"
                              resize
                              class="happy-slow"
                >
                    <div class="list">
                        <div class="van-cell">
                            <div class="cell-left">
                                <img src="https://cdn.wtzw.com/bookimg/public/images/cover/14bf/c8c7da30026cd8ea0cb36a88e4aec49a_360x480.jpg" alt="">
                            </div>
                            <div class="cell-middle">
                                <p>星辰入怀明</p>
                                <p>第446章：风波接连不断</p>
                                <p>浏览时间：2020-09-25</p>
                            </div>
                            <div class="cell-right">
                                <p v-show="hide===false" @click.stop="open">打开</p>
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
                            </div>
                        </div>
                    </div>
                    <div class="delete" ref="delete" @click.stop="Delect">
                        删除
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
  name: 'ReadRecord',
  components: {
    HappyScroll
  },
  data () {
    return {
      hide: false,
      switchImg: true
    }
  },
  methods: {
    ...mapActions([
      'setReadRecord'
    ]),
    back () {
      this.setReadRecord(false)
    },
    management () {
      this.hide = !this.hide
      if (this.hide) {
        this.$refs.delete.style.bottom = 0
      } else {
        this.$refs.delete.style.bottom = -200 + 'px'
      }
    },
    Selected () {
      this.switchImg = !this.switchImg
      if (!this.switchImg) {
        this.$refs.delete.classList.add('active')
      } else {
        this.$refs.delete.classList.remove('active')
      }
    },
    open () {
      console.log('打开')
    }
  }
}
</script>

<style lang="scss">
.ReadRecord{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #ffffff;
    z-index: 995;
    .header{
        width: 100%;
        height: 100px;
        line-height: 100px;
        /*background: #ffffff;*/
        display: flex;
        position: relative;
        border-bottom: 1px solid #f3f3f3;
        img{
            width: 60px;
            height: 60px;
            margin: 20px 20px;
        }
        p{
            position: absolute;
            &:nth-of-type(1){
                left: 50%;
                transform: translateX(-50%);
                font-size: 36px;
                color: #333333;
                font-weight: bold;
            }
            &:nth-of-type(2){
                right: 25px;
                font-size: 30px;
                color: #333333;
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
                .cell-middle{
                    width: 60%;
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
                            color: #858585;
                        }
                        &:nth-of-type(3){
                            font-size: 26px;
                            color: #8c8c8c;
                        }
                    }
                }
                .cell-right{
                    width: 20%;
                    /*background: #fa816d;*/
                    position: relative;
                    p{
                        width: 120px;
                        height: 50px;
                        line-height: 50px;
                        border-radius: 30px;
                        border: 1px solid #3c3c3c;
                        text-align: center;
                        margin-top: 50px;
                        font-size: 26px;
                        color: #3c3c3c;
                    }
                    i{
                        display: block;
                        /*background: #aebbdb;*/
                        width: 50px;
                        height: 50px;
                        position: absolute;
                        top: 50px;
                        right: 20px;
                        img{
                            display: block;
                            width: 100%;
                            height: 100%;
                        }
                    }
                }
            }
        }
        .delete{
            position:absolute;
            bottom: -100px;
            width: 100%;
            height: 100px;
            font-size: 30px;
            color: #8c8c8c;
            text-align: center;
            line-height: 100px;
            border-top: 1px solid #c2c2c2;
            transition: bottom 0.3s ease-in-out;
            &.active{
                color: #aebbdb;
            }
        }
    }

}
</style>
