<template>
    <transition
            appear
            enter-active-class="animated animate__fadeInRight"
            leave-active-class="animated animate__fadeOutRight"
    >
        <div class="MessageLogging">
            <div class="header">
                <img src="../../assets/icon/back.svg" alt="" @click.stop="back">
                <p>消息通知</p>
            </div>
            <div class="bottom">
                <van-empty description="暂无消息记录" />
            </div>
        </div>
    </transition>
</template>

<script>
import Vue from 'vue'
import { Empty } from 'vant'
import { mapActions } from 'vuex'
Vue.use(Empty)
export default {
  name: 'MessageLogging',
  methods: {
    ...mapActions([
      'setMessageLogging'
    ]),
    back () {
      this.setMessageLogging(false)
    }
  }
}
</script>

<style lang="scss">
.MessageLogging{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #ffffff;
    z-index: 999;
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
            font-size: 36px;
            color: #333333;
            font-weight: bold;
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
        }
    }
    .bottom{
        width: 100%;
        height: 100%;
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
    }
}
</style>
