<template>
    <div class="signUp">
        <div class="signUP-header">
           <img src="../assets/icon/back.svg" alt="" @click.stop="back">
            <p>账号登录</p>
        </div>
        <div class="logo">
            <img src="../assets/images/reading.png" alt="">
            <p>海量阅读，想读就读</p>
        </div>
        <form @submit="submit">
           <div class="user">
               用户名：<input type="text" placeholder="请输入昵称" v-model="userName">
               密码：<input type="password" v-model="userPassword">
           </div>
            <button type="submit" @click.stop="cut" ref="submit">{{text[0]}}</button>
            <div class="signIn">
                <p @click.stop="switchover" ref="signIn">{{text[1]}}</p>
                <p>清除</p>
            </div>
        </form>
    </div>
</template>

<script>
import { signUp, signIn } from '../api'
import { mapActions } from 'vuex'

export default {
  name: 'SignUp',
  data () {
    return {
      userName: '',
      userPassword: '',
      textFlag: false,
      text: ['登录', '新用户注册']
    }
  },
  methods: {
    ...mapActions([
      'setTips',
      'setCurrentUser'
    ]),
    back () {
      this.$router.go(-1)
    },
    cut () {
      if (this.userName === '') {
        this.setTips('用户名不能为空')
      } else if (this.userPassword === '') {
        this.setTips('密码不能为空')
      }
    },
    switchover () {
      this.textFlag = !this.textFlag
      if (this.textFlag) {
        this.text = this.text.reverse()
      } else {
        this.text = this.text.reverse()
      }
    },
    submit (e) {
      console.log(e)
      const obj = {
        userName: e.target[0].value,
        userPassword: e.target[1].value
      }
      if (!this.textFlag) {
        signIn(obj).then(data => {
          console.log(data)
          this.$router.push({ path: '/personalcenter' })
          this.setCurrentUser({
            userName: data.userName,
            userId: data.userId,
            isShow: false
          })
          this.setTips('登录成功')
        })
      } else {
        signUp(obj).then(data => {
          console.log(data)
        })
      }
    }
  },
  watch: {
    textFlag () {

    }
  }
}
</script>

<style scoped lang="scss">
    .signUp{
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background: #fdfdfe;
        z-index: 999;
        .signUP-header{
            width: 100%;
            height: 100px;
            line-height: 100px;
            /*background: #ffffff;*/
            display: flex;
            position: relative;
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
        .logo{
            width: 100%;
            height: 400px;
            /*background: #adbada;*/
            position: relative;
            img{
                position: absolute;
                top: 100px;
                left: 50%;
                transform: translateX(-50%);
            }
            p{
                font-size: 28px;
                color: #8c8c8c;
                position: absolute;
                top: 250px;
                left: 50%;
                transform: translateX(-50%);
            }
        }
        form{
            width: 100%;
            height: 600px;
            /*background: #fdfdfe;*/
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            div{
                width: 80%;
                font-size: 34px;
                color: #333333;
                /*background: #facc41;*/
                input{
                    border: 1px solid #bfbfbf;
                    outline: none; // 去除选中状态边框
                    width: 70%;
                    height: 80px;
                    font-size: 28px;
                    border-radius: 15px;
                    &:nth-of-type(2){
                        margin-top: 30px;
                        margin-left: 30px;
                    }
                }
            }
            button{
                width: 70%;
                height: 90px;
                border: none;
                border-radius: 50px;
                background-image:linear-gradient(to right, #f0d3d3, #f2bbbb);
                font-size: 34px;
                font-weight: bold;
                color: #333333;
            }
            .signIn{
                width: 90%;
                height: 50px;
                line-height: 50px;
                display: flex;
                justify-content: space-between;
                font-size: 26px;
                color: #bfbfbf;
            }
        }
    }

</style>
