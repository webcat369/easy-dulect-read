<template>
    <transition
            appear
            enter-active-class="animated animate__fadeInRight"
            leave-active-class="animated animate__fadeOutRight"
    >
        <div class="ReadPreferences">
            <div class="header">
                <img src="../../assets/icon/back.svg" alt="" @click.stop="back">
                <p>阅读喜好</p>
            </div>
            <div class="bottom">
                <div class="girl" ref="girl" @click.stop="SelectedGirl">
                    女生小说
                    <i>
                        <img class="tick"
                             src="../../assets/icon/unselected.svg"
                             v-if="girl"
                             alt=""/>
                        <img class="tick"
                             src="../../assets/icon/girlpitchOn.svg"
                             v-else
                             alt=""/>
                    </i>
                </div>
                <div class="boy" ref="boy" @click.stop="SelectedBoy">
                    男生小说
                    <i>
                        <img class="tick"
                             src="../../assets/icon/unselected.svg"
                             v-if="boy"
                             alt=""/>
                        <img class="tick"
                             src="../../assets/icon/BoypitchOn.svg"
                             v-else
                             alt=""/>
                    </i>
                </div>
                <p @click.stop="Define">确认选择</p>
            </div>
        </div>
    </transition>
</template>

<script>
import { mapActions } from 'vuex'
import Vue from 'vue'
import { Toast } from 'vant'

Vue.use(Toast)
export default {
  name: 'ReadPreferences',
  mounted () {
    this.$refs.girl.classList.add('active')
    this.girl = false
  },
  data () {
    return {
      girl: true,
      boy: true
    }
  },
  methods: {
    ...mapActions([
      'setReadPreferences'
    ]),
    back () {
      this.setReadPreferences(false)
    },
    SelectedGirl () {
      console.log('选择女生')
      this.$refs.boy.classList.remove('active')
      this.$refs.girl.classList.add('active')
      this.girl = false
      this.boy = true
    },
    SelectedBoy () {
      console.log('选择男生')
      this.$refs.girl.classList.remove('active')
      this.$refs.boy.classList.add('active')
      this.girl = true
      this.boy = false
    },
    Define () {
      console.log('确认选择')
      Toast('选择成功')
      setTimeout(() => {
        this.setReadPreferences(false)
      }, 1500)
    }
  }
}
</script>

<style scoped lang="scss">
.ReadPreferences{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #ffffff;
    z-index: 1001;
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
        /*background: peachpuff;*/
        position: relative;
        div{
            width: 500px;
            height: 200px;
            background: #efefef;
            position: absolute;
            font-size: 40px;
            font-weight: bold;
            color: #8c8c8c;
            text-align: center;
            line-height: 200px;
            border-radius: 20px;
            &.girl{
                top: 300px;
                left: 120px;
                i{
                    img{
                        position: absolute;
                        display: inline-block;
                        width:60px;
                        height: 60px;
                        /*background: #fa816d;*/
                        top: 70px;
                        right: -25px;
                    }
                }
                &.active{
                    background: #ffdbe7;
                    color: #ca8fa7;
                }
            }
            &.boy{
                top: 550px;
                left: 120px;
                i{
                    img{
                        position: absolute;
                        display: inline-block;
                        width: 60px;
                        height: 60px;
                        /*background: #fa816d;*/
                        top: 70px;
                        right: -25px;
                    }
                }
                &.active{
                    background: #b8e3ff;
                    color: #76a2cb;
                }
            }
        }
        p{
            width: 500px;
            height: 100px;
            border-radius: 50px;
            /*background-image:linear-gradient(to right, #c7d4f4, #b6c3e3) ;*/
            background: #fbb756;
            position: absolute;
            bottom: 400px;
            left: 120px;
            text-align: center;
            line-height: 100px;
            font-size: 30px;
            color: #333333;

        }
    }
}
</style>
<style lang="scss">
    .van-toast{
        width: 200px;
        height: 100px;
        background: #8c8c8c;
        .van-toast__text{
            width: 100%;
            height: 100%;
            text-align: center;
            line-height: 100px;
            font-size: 32px;
            color: #ffffff;
        }
    }
</style>
