<template>
    <transition
            appear
            enter-active-class="animated animate__fadeInRight"
            leave-active-class="animated animate__fadeOutRight"
    >
        <div class="SetUpPage">
            <div class="header">
                <img src="../../assets/icon/back.svg" alt="" @click.stop="back">
                <p>设置</p>
            </div>
        </div>
    </transition>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'SetUpPage',
  methods: {
    ...mapActions([
      'setSetUpPage'
    ]),
    back () {
      this.setSetUpPage(false)
    }
  }
}
</script>

<style scoped lang="scss">
.SetUpPage{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #ffffff;
    z-index: 1004;
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
}
</style>
