<template>
    <transition
            appear
            enter-active-class="animated animate__fadeInRight"
            leave-active-class="animated animate__fadeOutRight"
    >
        <div class="Feedback">
            <div class="header">
                <img src="../../assets/icon/back.svg" alt="" @click.stop="back">
                <p>问题与反馈</p>
            </div>
            <van-dialog v-model="showDialog "
                        title="请问是否放弃提交反馈"
                        width="800px"
                        confirmButtonColor="#B6C3E3"
                        show-cancel-button
                        @confirm="confirm"
            >
            </van-dialog>
            <div class="bottom">
                <van-field
                        class="VanField"
                        v-model="message"
                        rows="2"
                        autosize
                        label="反馈"
                        type="textarea"
                        maxlength="200"
                        placeholder="为更好的解决您遇到的问题，请尽量将问题描述详细，如提供问题书籍名称或截图(必填)"
                        show-word-limit
                />
                <div class="photo">
                    上传问题文件(选填)：
                    <van-uploader :after-read="afterRead" />
                </div>
                <div class="group">
                    <van-field label="文本" value="联系方式" readonly />
                    <!-- 输入手机号，调起手机号键盘 -->
                    <van-field v-model="digit" type="digit" placeholder="请输入手机号" />
                </div>
                <div class="submit" @click.stop="Submit">
                    提交反馈
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
import { mapActions } from 'vuex'
import Vue from 'vue'
import { Field, Uploader, Toast, Dialog } from 'vant'
Vue.use(Dialog)
Vue.use(Toast)
Vue.use(Uploader)
Vue.use(Field)
export default {
  name: 'Feedback',
  data () {
    return {
      message: '',
      digit: '',
      showDialog: false
    }
  },
  methods: {
    ...mapActions([
      'setCoupleBackPage'
    ]),
    back () {
      if (this.message !== '' || this.digit !== '') {
        this.showDialog = true
      } else {
        this.setCoupleBackPage(false)
      }
    },
    afterRead (file) {
      // 此时可以自行将文件上传至服务器
      console.log(file)
    },
    Submit () {
      console.log('提交反馈')
      console.log(this.message.length)
      if (this.message === '') {
        Toast('请填写反馈内容')
      } else if (this.message.length < 5) {
        Toast('请填写最少五个字')
      } else if (this.digit === '') {
        Toast('填写联系方式')
      } else if (this.digit.length < 11) {
        Toast('请填写正确的联系方式')
      } else if (this.message !== '' && this.digit !== '') {
        Toast('提交成功')
        setTimeout(() => {
          this.setCoupleBackPage(false)
        }, 1500)
      }
    },
    confirm () {
      this.setCoupleBackPage(false)
    }
  }
}
</script>

<style lang="scss">
    .Feedback{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: #ffffff;
        z-index: 1003;
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
            background: #ededed;
            .VanField{
                width: 100%;
                height: 300px;
                border-bottom: 1px solid #c8c8c8;
                .van-cell__title{
                    display: none;
                }
                .van-cell__value{
                    position: relative;
                    .van-field__body{
                        .van-field__control{
                            height: 120px;
                            font-size: 28px;
                            line-height: 35px;
                            padding: 20px 20px;
                            box-sizing: border-box;
                        }
                    }
                    .van-field__word-limit{
                        position: absolute;
                        top: 250px;
                        right: 10px;
                        font-size: 26px;
                    }
                }
            }
            .photo{
                width: 100%;
                height: 300px;
                background: #ffffff;
                font-size: 28px;
                color: #8c8c8c;
                padding: 20px 20px;
                box-sizing: border-box;
                .van-uploader{
                    display: block;
                    width: 200px;
                    height: 200px;
                    .van-uploader__wrapper{
                        width: 100%;
                        height: 100%;
                        .van-uploader__upload{
                            width: 100%;
                            height: 100%;
                            margin-top: 20px;
                            .van-uploader__upload-icon {
                                color: #dcdee0;
                                font-size:36px;
                            }
                        }
                    }
                }
            }
            .group{
                width: 100%;
                height: 200px;
                /*background: #fabfd8;*/
                position: absolute;
                top: 720px;
                .van-cell{
                    width: 100%;
                    height: 80px;
                    line-height: 60px;
                    color: #efefef;
                    font-size: 28px;
                    .van-cell__title{
                        display:none;
                    }
                    &:nth-of-type(1){
                        .van-cell__value{
                            color: #333333;
                        }
                    }
                }
            }
            .submit{
                position: absolute;
                bottom: 0;
                width: 100%;
                height: 80px;
                line-height: 80px;
                text-align: center;
                background: #facc41;
                font-size: 28px;
                color: #333333;
                /*box-shadow: 0 5px 10px 5px #a8a8a8;*/
                box-shadow: 0 5px 10px 5px rgba(0,0,0,0.2);
            }
        }
    }
</style>
<style lang="scss">
    .van-toast{
        width: 320px;
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
    .van-dialog{
        height: 200px;
        .van-dialog__header{
            width: 100%;
            height: 80px;
            line-height: 80px;
            font-size: 30px;
            font-weight: bold;
            /*background: #aebbdb;*/
        }
        .van-hairline--top{
            height: 70px;
            background: #facc41;
            button{
                height: 100%;
                font-size: 28px;
            }
        }
    }
</style>
