<template>
<!--    登录注册页-->
    <div class="signUp">
        <div class="singUp-box">
            <!--   标题导航    -->
            <div class="signUP-header">
                <img src="../assets/icon/back.svg" alt="" @click.stop="back">
                <p>{{text[0]}}</p>
            </div>
            <div class="image" style="width:500px; position: absolute; top: 150px;left:50px;">
                <img style="display: inline-block;width: 100%;" src="../assets/images/yun.png" alt="">
            </div>
            <!--    logo&标语  -->
            <div class="logo">
                <img src="../assets/images/2.png" alt="">
                <p>海量阅读，想读就读</p>
            </div>
            <!--    注册登录表单     -->
            <form @submit.prevent="submit">
                <div class="user"><i></i><input type="text" placeholder="昵称" v-model="userName"></div>
                <div class="password"><i></i><input type="password" placeholder="密码" v-model="userPassword"></div>
                <button class="submit" @click.stop="cut" ref="submit">{{text[0]}}</button>
                <!--    注册&登录按钮切换和清除按钮    -->
                <div class="signIn">
                    <p @click.stop="switchover" ref="signIn">{{text[1]}}</p>
                    <button type="reset" class="clear">清除</button>
                </div>
            </form>
        </div>
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
      // this.$router.push({ path: '/bookstore' })
    },
    cut () {
      if (this.userName === '') {
        this.setTips('用户名不能为空')
      } else if (this.userPassword === '') {
        this.setTips('密码不能为空')
      }
      return this.userName.length === 0 || this.userPassword.length === 0
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
      const obj = {
        userName: e.target[0].value,
        userPassword: e.target[1].value,
        userGender: '男生',
        userAvatar: 'http://localhost:3000/avatars/avatar_01.jpeg'
      }
      this.setTips('注册成功')
      if (!this.textFlag) {
        console.log(this.cut())
        if (this.cut()) return
        signIn({
          userName: e.target[0].value,
          userPassword: e.target[1].value
        }).then(data => {
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
            // console.log('我运行了吗')
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
        /*position: relative;*/
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        /*bottom: 0;*/
        height: 100%;
        /*background: linear-gradient(60deg, rgba(247,214,212,1) 0%, rgba(255,255,255,1) 100%);*/
        background: #fdfdfe;
        z-index: 999;
        .singUp-box{
            width: 100%;
            height: 100%;
            background-image: url("../assets/images/readbook.png");
            /*background-position: 120px 920px;*/
            background-position: 120px 100%;
            background-size: 100%;
            background-repeat: no-repeat;
            /*background: url("../assets/images/4.png") 100px 500px  no-repeat;*/
            /*background: url("../assets/images/6.png")  300px 960px  no-repeat;*/
            /*background-size: 60%;*/
        }
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
                border: 2px solid #fbb756;
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
                border-radius: 30px;
                /*background-image:linear-gradient(to right, #f0d3d3, #f2bbbb);*/
                background-image:radial-gradient(#ffbe71,#ffbe71);
                font-size: 34px;
                font-weight: bold;
                color: #fff;
                border:none;
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
