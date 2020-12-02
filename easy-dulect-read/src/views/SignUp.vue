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
           <div class="user"><i></i><input type="text" placeholder="昵称" v-model="userName"></div>
            <div class="password"><i></i><input type="password" placeholder="密码" v-model="userPassword"></div>
            <button class="submit" @click.stop="cut" ref="submit">{{text[0]}}</button>
            <div class="signIn">
                <p @click.stop="switchover" ref="signIn">{{text[1]}}</p>
                <button type="reset" class="clear">清除</button>
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
        userPassword: e.target[1].value,
        userGender: '男生',
        userAvatar: 'http://localhost:3000/avatars/avatar_01.jpeg'
      }
      if (!this.textFlag) {
        signIn(obj).then(data => {
          console.log(data)
          if (data.msg === '登陆成功') {
            this.$router.push({ path: '/personalcenter' })
            this.setCurrentUser({
              userName: data.userName,
              userId: data.userId,
              userGender: data.userGender,
              userAvatar: data.userAvatar,
              isShow: false
            })
            console.log('我运行了吗')
            localStorage.setItem('user', `[{"userName":" ${data.userName}","userId": "${data.userId}","userGender": "${data.userGender}","userAvatar": "${data.userAvatar}","isShow": "false"}]`)
          }
          this.setTips(data.msg)
        })
      } else {
        signUp(obj).then(data => {
          console.log(data)
        })
      }
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
        /*background: #fdfdfe;*/
        background-image: url("../assets/images/sign_bg2.jpg");
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
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
            width: 600px;
            height: 400px;
            position: relative;
            left: 50%;
            transform: translateX(-50%);
            img{

                display: inline-block;
                height: 150px;
                position: absolute;
                top: 100px;
                left: 50%;
                transform: translateX(-50%);
            }
            p{
                font-size: 28px;
                color: #8c8c8c;
                position: absolute;
                top: 280px;
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
            .user,.password{
                width: 70%;
                font-size: 34px;
                color: #333333;
                /*background: #000;*/
                display: flex;
                justify-content: space-between;
                align-items: center;
                /*border: 2px solid rgba(238,156,156);*/
                border: 2px solid #fff;
                border-radius: 20px;
                background: #fff;
                i{
                    display: inline-block;
                    width: 60px;
                    height: 60px;
                    background-repeat: no-repeat;
                    background-size: cover;
                    background-position: center;
                    margin-left: 15px;
                }
                &:nth-child(1){
                    i{
                        background-image: url('../assets/icon/user_icon.svg');
                    }

                }
                &:nth-child(2){
                    i{
                        background-image: url('../assets/icon/password_icon.svg');
                    }
                }
                /*background: #facc41;*/
                input{
                    /*border: 1px solid #bfbfbf;*/
                    border: none;
                    outline: none; // 去除选中状态边框
                    width: 80%;
                    height: 80px;
                    font-size: 28px;
                    border-top-right-radius: 15px;
                    border-bottom-right-radius: 15px;
                    padding-left: 15px;
                    color: #666;
                    &:nth-of-type(2){
                        margin-top: 30px;
                        margin-left: 30px;
                    }
                }
            }
            .submit{
                width: 70%;
                height: 90px;
                border-radius: 50px;
                background-image:linear-gradient(to right, #f0d3d3, #f2bbbb);
                font-size: 34px;
                font-weight: bold;
                color: #fff;
                border: 5px solid #fff;
            }
            .signIn{
                width: 90%;
                height: 50px;
                line-height: 50px;
                display: flex;
                justify-content: space-between;
                font-size: 26px;
                color: #666;
                .clear{
                    border: none;
                    background: transparent;
                    font-size: 26px;
                    color: #666;
                }
            }
        }
    }

</style>
