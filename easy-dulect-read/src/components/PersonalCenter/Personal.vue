<template>
    <!--  个人中心界面 -->
    <div class="Personal">
        <div class="header">
            <div class="header-top">
                    <!--Ap切换夜间模式-->
<!--                <img src="../../assets/icon/moon.svg" alt="">-->
            </div>
            <!--   “马上登录按钮”按钮   -->
            <div class="log-in"  v-show="this.currentUser.isShow">
                <p>欢迎使用轻悦读</p>
                <p @click.stop="logIn">马上登录</p>
            </div>
            <!-- 头像昵称展示  -->
            <div class="header-middle" v-show="!this.currentUser.isShow">
                <img :src="this.currentUser.userAvatar" alt="">
                <p>{{this.currentUser.userName}}</p>
            </div>
            <!--  个人中心界面模块功能  -->
            <ul class="header-bottom">
                <li @click.stop="ShowMessageLogging">
                    <img src="../../assets/icon/news.svg" alt="">
                    <p>消息</p>
                </li>
                <li @click.stop="ShowCollect">
                    <img src="../../assets/icon/collect.svg" alt="">
                    <p>收藏</p>
                </li>
                <li @click.stop="ShowBookReview">
                    <img src="../../assets/icon/review.svg" alt="">
                    <p>书评</p>
                </li>
                <li @click.stop="ShowReadRecord">
                    <img src="../../assets/icon/record.svg" alt="">
                    <p>阅历</p>
                </li>
            </ul>
        </div>
        <!--  个人中心界面列表功能  -->
        <ul class="list">
            <li @click.stop="ShowReadPreferences">
                <p>我的阅读喜好</p>
                <img src="../../assets/icon/enter.svg" alt="">
            </li>
            <li @click.stop="ShowHelpPage">
                <p>帮助与建议</p>
                <img src="../../assets/icon/enter.svg" alt="">
            </li>
            <li @click.stop="ShowCoupleBackPage">
                <p>问题与反馈</p>
                <img src="../../assets/icon/enter.svg" alt="">
            </li>
            <!--  点击设置进入修改个人信息界面  -->
            <li @click.stop="ShowSetUpPage">
                <p>设置</p>
                <img src="../../assets/icon/enter.svg" alt="">
            </li>
        </ul>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Personal',
  mounted () {
    console.log('我创建了')
  },
  methods: {
    ...mapActions([
      'setMessageLogging',
      'setCollect',
      'setBookReview',
      'setReadRecord',
      'setReadPreferences',
      'setHelpPAge',
      'setCoupleBackPage',
      'setSetUpPage',
      'setBookList',
      'setTips'
    ]),
    logIn () {
      this.$router.push({ path: '/sign' })
    },
    ShowMessageLogging () {
      console.log('消息')
      this.setMessageLogging(true)
    },
    ShowCollect () {
      this.setCollect(true)
      console.log(this.showCollect, '收藏')
    },
    ShowBookReview () {
      this.setBookReview(true)
    },
    ShowReadRecord () {
      this.setReadRecord(true)
    },
    ShowReadPreferences () {
      this.setReadPreferences(true)
    },
    ShowHelpPage () {
      this.setHelpPAge(true)
    },
    ShowCoupleBackPage () {
      this.setCoupleBackPage(true)
    },
    ShowSetUpPage () {
      const value = localStorage.getItem('user')
      if (value == null) {
        this.setTips('请先登录')
        return
      }
      this.setSetUpPage(true)
    }
  },
  computed: {
    ...mapGetters([
      'currentUser',
      'showCollect'
    ])
  }
}
</script>

<style scoped lang="scss">
.Personal{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 100px;
    /*background:linear-gradient(to right, #f5d7d9, #eacbce);*/
    background: #ffce66;
    overflow: hidden;
    .header{
        width: 100%;
        height: 550px;
        /*background: #be75ee;*/
        position: relative;
        .header-top{
            width: 100%;
            height: 80px;
            /*background: #bfbfbf;*/
            img{
                width: 50px;
                height: 50px;
                position: absolute;
                top: 15px;
                right: 20px;
            }
        }
        .log-in{
            width: 100%;
            height: 300px;
            /*background: #bfbfbf;*/
            p{
                &:nth-of-type(1){
                    font-size:38px ;
                    color: #333333;
                    font-weight: bold;
                    position: absolute;
                    top: 180px;
                    left: 50%;
                    transform: translateX(-50%);
                }
                &:nth-of-type(2){
                    width: 200px;
                    height: 80px;
                    font-size: 28px;
                    font-weight: 400;
                    line-height: 80px;
                    text-align: center;
                    background: #fbb756;
                    border-radius: 20px;
                    position: absolute;
                    top: 255px;
                    left: 50%;
                    transform: translateX(-50%);
                }
            }
        }
        .header-middle{
            width: 100%;
            height: 300px;
            /*background: #bfbfbf;*/
            img{
                width: 120px;
                height: 120px;
                background: #ffffff;
                border-radius: 50%;
                position: absolute;
                top: 120px;
                left: 50%;
                transform: translateX(-50%);
            }
            p{
                font-size:38px ;
                color: #333333;
                font-weight: bold;
                position: absolute;
                top: 255px;
                left: 50%;
                transform: translateX(-50%);
            }
        }
        .header-bottom{
            width: 95%;
            height: 120px;
            margin:0 auto;
            /*background: #adbada;*/
            display: flex;
            justify-content: space-between;
            li{
                /*background: #c2baee;*/
                padding: 0 30px;
                img{
                    width: 70px;
                    height: 70px;
                    /*background: #facc41;*/
                }
                p{
                    text-align: center;
                    margin-top: 10px;
                    font-size: 30px;
                    color: #333333;
                }
            }

        }
    }
    .list{
        position: fixed;
        top: 550px;
        left: 0;
        right: 0;
        bottom: 0;
        overflow: hidden;
        background: #ffffff;
        border-top-right-radius:30px;
        border-top-left-radius:30px;
        padding-top: 20px;
        li{
            width: 95%;
            height: 100px;
            background: #ffffff;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            line-height:100px;
            p{
                font-size: 30px;
                color: #333333;
            }
            img{
                display: inline-block;
                height: 50px;
                margin-top: 20px;
                vertical-align: center;
            }
        }
    }

}
</style>
