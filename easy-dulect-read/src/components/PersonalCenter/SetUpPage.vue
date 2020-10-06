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
            <div class="bottom">
                <p>基本信息</p>
                <van-cell-group>
                    <van-cell title="账号" :value="currentUser.userId" />
                    <van-collapse v-model="activeNames">
                        <van-collapse-item name="1">
                            <template #title>
                                <div>头像 <img ref="Photo" :src="currentUser.userAvatar" :class="{'active': currentIndex===0}"></div>
                            </template>
                            <happy-scroll hide-horizontal
                                          hide-vertical
                                          color="rgba(51,51,51,0.2)"
                                          size="8"
                                          :min-length-v="20"
                                          resize
                                          class="happy-slow"
                            >
                                <img v-for="(value,index) in headerImg"
                                     :key="index"
                                     v-lazy="value"
                                     ref="headerPhoto"
                                     @click.stop="selectPhoto(index,value)"
                                     :class="{'active': index===currentUserAvatar.currentIndex}"
                                >
                            </happy-scroll>
                        </van-collapse-item>
                    </van-collapse>
                    <van-cell title="昵称" is-link :value="this.oldNickName" @click.stop="ShowNickname"/>
                    <van-cell title="性别" is-link :value="this.currentGender" @click.stop="SelectGender"/>
                </van-cell-group>
                <van-dialog v-model="showNickname"
                            title="修改昵称"
                            @confirm="confirm"
                            @cancel="cancel"
                            show-cancel-button>
                    <p>您现在的昵称是 <b>{{this.oldNickName}}</b>，请设置一个好听的昵称，让大家更容易记住你~</p>
                    <input type="text"
                           placeholder="请输入昵称"
                           v-model="NickName"
                           maxlength="6"
                    >
                </van-dialog>
                <van-action-sheet
                        v-model="showGender"
                        :actions="actions"
                        :round="false"
                        cancel-text="取消"
                        close-on-click-action
                        @select="onSelect"
                />
                <span class="signOut" @click.stop="signOut">退出登录</span>
                <van-dialog v-model="showSignOut"
                            class="OnSignOut"
                            title="确认要退出当前账号吗"
                            @confirm="OnConfirm"
                            show-cancel-button>
                </van-dialog>
            </div>
        </div>
    </transition>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Vue from 'vue'
import { Cell, CellGroup, Collapse, CollapseItem, Dialog, Toast, ActionSheet } from 'vant'
// 一款基于vue2.0的滚动条插件
import { HappyScroll } from 'vue-happy-scroll'
// 引入css，推荐将css放入main入口中引入一次即可。
import 'vue-happy-scroll/docs/happy-scroll.css'
import { changeUserName, changeGender, changeAvatar } from '../../api/index'
Vue.use(ActionSheet)
Vue.use(Dialog)
Vue.use(Collapse)
Vue.use(CollapseItem)
Vue.use(Cell)
Vue.use(CellGroup)
export default {
  name: 'SetUpPage',
  mounted () {
    this.currentPhoto = this.headerImg[0]
    this.currentGender = this.actions[0].name
    this.oldNickName = this.currentUser.userName
    this.currentGender = this.currentUser.userGender
  },
  components: {
    HappyScroll
  },
  data () {
    return {
      activeNames: ['0'],
      headerImg: [
        'http://localhost:3000/avatars/avatar_01.jpeg',
        'http://localhost:3000/avatars/avatar_02.jpeg',
        'http://localhost:3000/avatars/avatar_03.jpg',
        'http://localhost:3000/avatars/avatar_04.jpeg',
        'http://localhost:3000/avatars/avatar_05.jpg',
        'http://localhost:3000/avatars/avatar_06.jpeg',
        'http://localhost:3000/avatars/avatar_07.jpg',
        'http://localhost:3000/avatars/avatar_08.jpeg',
        'http://localhost:3000/avatars/avatar_09.jpeg',
        'http://localhost:3000/avatars/avatar_10.jpg',
        'http://localhost:3000/avatars/avatar_11.jpg',
        'http://localhost:3000/avatars/avatar_12.jpeg',
        'http://localhost:3000/avatars/avatar_13.jpg',
        'http://localhost:3000/avatars/avatar_14.jpg',
        'http://localhost:3000/avatars/avatar_15.jpeg',
        'http://localhost:3000/avatars/avatar_16.jpeg',
        'http://localhost:3000/avatars/avatar_17.jpg',
        'http://localhost:3000/avatars/avatar_18.jpg',
        'http://localhost:3000/avatars/avatar_19.jpg',
        'http://localhost:3000/avatars/avatar_20.jpg'

      ],
      currentIndex: 0,
      oldIndex: 0,
      currentPhoto: '',
      showNickname: false,
      NickName: '',
      oldNickName: '',
      showGender: false,
      actions: [{ name: '男生' }, { name: '女生' }],
      currentGender: '',
      showSignOut: false
    }
  },
  watch: {
    currentIndex (newValue, oldValue) {
      // console.log(newValue, oldValue)
      this.oldIndex = oldValue
    },
    Message (newValue, oldValue) {
      console.log(newValue)
      if (newValue.length >= 6) {
        Toast('最多只能写6个字符')
      }
    }
  },
  computed: {
    ...mapGetters([
      'currentUser',
      'currentUserAvatar'
    ])
  },
  methods: {
    ...mapActions([
      'setSetUpPage',
      'setCurrentUser',
      'setTips',
      'setCurrentUserAvatar'
    ]),
    // 返回个人中心界面
    back () {
      this.setSetUpPage(false)
    },
    // 选择不同头像
    selectPhoto (index, value) {
      // console.log(this.$refs.headerPhoto[index])
      this.currentIndex = index
      this.currentPhoto = value
      this.setCurrentUserAvatar({
        currentIndex: this.currentIndex,
        oldIndex: this.oldIndex
      })
      // console.log(this.oldIndex)
      if (this.currentIndex !== this.oldIndex) {
        this.$refs.headerPhoto[this.currentUserAvatar.currentIndex].classList.add('active')
      }
      // else {
      //   this.$refs.headerPhoto[this.currentUserAvatar.currentIndex].classList.remove('active')
      // }
      this.setCurrentUser({
        userAvatar: value
      })
      changeAvatar(this.currentUser.userId, { userAvatar: value })
        .then(data => {
          Toast(data.msg)
        })
    },
    // 显示昵称弹窗
    ShowNickname () {
      this.showNickname = true
    },
    // 确定当前修改的昵称
    confirm () {
      console.log(this.NickName)
      this.oldNickName = this.NickName
      this.setCurrentUser({
        userName: this.NickName
      })
      changeUserName(this.currentUser.userId, { userName: this.NickName })
        .then(data => {
          Toast(data.msg)
        })
      this.NickName = ''
    },
    // 取消当前修改的昵称
    cancel () {
      this.NickName = ''
    },
    // 选择修改用户性别
    SelectGender () {
      this.showGender = true
    },
    // 成功修改用户性别
    onSelect (item) {
      console.log(item.name)
      this.currentGender = item.name
      this.setCurrentUser({
        userGender: item.name
      })
      changeGender(this.currentUser.userId, { userGender: item.name })
        .then(data => {
          Toast(data.msg)
        })
    },
    // 退出当前账号
    signOut () {
      this.showSignOut = true
    },
    // 确认退出当前账号
    OnConfirm () {
      this.setCurrentUser({
        userName: '未登录',
        userId: '0',
        isShow: true
      })
      this.setSetUpPage(false)
      localStorage.removeItem('user')
    }
  }
}
</script>

<style lang="scss">
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
    .bottom{
        position: fixed;
        top: 100px;
        bottom: 0;
        left: 0;
        right: 0;
        background:#ffffff;
        p{
            width: 100%;
            height: 80px;
            padding: 20px 15px;
            box-sizing: border-box;
            /*background: #f8d1d1;*/
            font-size: 30px;
            color: #333333;
            font-weight: inherit;
        }
        .van-cell-group{
            width: 100%;
            .van-cell{
                width: 100%;
                height: 100px;
                line-height: 100px;
                font-size: 28px;
            }
            .van-icon-arrow::before{
                font-size: 26px;
                /*background: #fa816d;*/
                line-height: 100px;
            }
            .van-collapse{
                .van-collapse-item{
                    .van-cell__title{
                        position: relative;
                        img{
                            width: 70px;
                            height: 70px;
                            position: absolute;
                            right: 10px;
                            top: 15px;
                            border-radius: 50%;
                        }
                    }
                    .van-collapse-item__wrapper{
                        .van-collapse-item__content{
                            width: 100%;
                            height: 500px;
                            /*background: #fa816d;*/
                            display: flex;
                            justify-content: space-between;
                            img{
                                width: 150px;
                                border-radius: 50%;
                                margin: 10px 15px;
                                padding: 5px 5px;
                                border: 5px solid transparent;
                                box-sizing: border-box;
                                &.active{
                                    border: 5px solid #aebbdb;
                                }
                            }
                        }
                    }
                }

            }
        }
        .van-dialog{
            width: 500px;
            height: 450px;
            .van-dialog__header{
                width: 100%;
                height: 80px;
                line-height: 80px;
            }
            .van-dialog__content{
                width: 100%;
                height: 250px;
                /*background: #aebbdb;*/
                position: relative;
                p{
                    width: 100%;
                    height: 120px;
                    font-size: 28px;
                    /*background: #facc41;*/
                    padding: 10px 20px;
                    box-sizing: border-box;
                    b{
                        display: inline-block;
                        height: 35px;
                        white-space:nowrap;
                        text-overflow:ellipsis;
                        /*background: #fa816d;*/
                    }
                }
                input{
                    position: absolute;
                    top: 130px;
                    left: 20px;
                    width: 450px;
                    height: 80px;
                    border-radius: 20px;
                    border: 1px solid #a8a8a8;
                    font-size: 28px;
                }
            }
            .van-hairline--top{
                width: 100%;
                height: 100px;
            }
        }
        .van-popup{
            width: 100%;
            height: 240px;
            button{
                width: 100%;
                height:80px;
                font-size: 26px;
            }
        }
        .signOut{
            position: absolute;
            bottom:100px;
            left: 50%;
            transform: translateX(-50%);
            font-size: 28px;
            color: #8c8c8c;
        }
        .OnSignOut{
            width: 500px;
            height: 200px;
            .van-dialog__header{
                width: 100%;
                height: 80px;
                line-height: 80px;
            }
            .van-hairline--top{
                width: 100%;
                height: 80px;
                line-height: 70px;
            }
        }
    }
}
</style>
