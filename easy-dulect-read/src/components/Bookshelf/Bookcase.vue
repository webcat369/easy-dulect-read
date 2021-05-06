<template>
    <div class="Bookcase">
        <div class="header">
            <div class="float-top">
                <div class="float-left">
                    <div class="float-left-img">
                        <img src="https://cdn.wtzw.com/bookimg/public/images/cover/85d8/086e82caab246524274bd83a0eb9ffeb_360x480.jpg" alt="">
                    </div>
                    <div class="float-left-p">
                        <p>
                            <span>王子病</span>
                            <i></i>
                        </p>
                        <p>
                            <span>
                                全城人都知道苏家三小姐脑子不好，身体体弱，反应迟钝...
                            </span>
                        </p>
                    </div>
                </div>
                <div class="float-right">
                    <p>今日签到</p>
                    <p>+20金币</p>
                    <button>签到</button>
                </div>
            </div>
            <div class="header-left">让阅读成为习惯</div>
            <div class="header-right">
                <div class="header-right-icon" @click.stop="openSearch">
                    <img src="../../assets/images/search_large.png" alt="">
                    <p>搜索</p>
                </div>
                <div class="header-right-icon" @click="openReadRecording">
                    <img src="../../assets/icon/readhistory.svg" alt="">
                    <p>阅读历史</p>
                </div>
                <div class="header-right-icon" @click="openMoreBtn">
                    <img src="../../assets/icon/more.svg" alt="">
                   <p>更多</p>
                </div>
            </div>
        </div>
        <div class="box">
            <ScrollView ref="ScrollView">
                <div class="van-list" style="margin-top: 240px;">
                    <div class="van-cell" v-if="!isShow" style="width: 92%;">
                        <div class="cell-left-top" style="height: 100%; background: #fafafa;margin-left: 25px;border-radius: 15px; padding: 20px 40px; box-sizing: border-box">
                            <img src="../../assets/images/adddf.png" alt="" style="margin-top: 45px; height: 150px">
                        </div>
                    </div>
                    <div v-else>
                        <div class="van-cell"
                             v-for="(value,index) in bookList"
                             :key="value.id"
                             @click="readBook(index)"
                             ref="vancell"
                        >
                            <div class="cell-left">
                                <img v-lazy="value.picUrl" alt="">
                            </div>
                            <div class="cell-right">
                                <div class="right-top">
                                    <p>{{value.name}}</p>
                                </div>
                                <i  @click.stop="openAlone(index,value.id)" v-show="hide" ref="selectedI" class="tick"></i>
                                <div class="right-bottom">
                                    <p>
                                        <span>{{value.author}}</span>
                                    </p>
                                    <p>
                                        <span>读到：第{{bookProgress +1}}章</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ScrollView>
        </div>
        <div class="delete" ref="delete" >
            <span @click.stop="selecAtll"><i ref="allSelect" :class="{'selectedAllI':selectAllBtn}"></i>全选</span>
            <span>
                <p @click.stop="addCollected">移入收藏夹</p>
                <p @click.stop="Delect">删除</p>
            </span>
        </div>
    </div>
</template>

<script>
import ScrollView from '../ScrollView'
import { mapGetters, mapActions } from 'vuex'
import { deleteBooks, searchList, addCollect } from './../../api'
export default {
  name: 'Bookcase',
  created () {
    console.log('???')
    const currentUser = localStorage.getItem('user')
    console.log(currentUser, 'sss', this.BookId)
    if (currentUser !== null && this.BookId.length !== 0) {
      this.isShow = false
    } else {
      this.isShow = true
    }
  },
  data () {
    return {
      BookId: [],
      isShow: false,
      switchImg: true,
      hide: false,
      idsList: [],
      selectAllBtn: false,
      collectList: []
    }
  },
  computed: {
    ...mapGetters([
      'currentUser',
      'bookList',
      'bookProgress'
    ])
  },
  components: {
    ScrollView
  },
  methods: {
    ...mapActions([
      'setCurrentBookId',
      'setBookList',
      'setShowPage',
      'setReadRecord',
      'setTips'
    ]),
    readBook (index) {
      console.log('点击这本书')
      this.$router.push('/detailPage')
      this.setCurrentBookId(this.BookId[index])
    },
    // 搜索
    openSearch () {
      console.log('搜索')
      this.setShowPage(true)
    },
    // 阅读历史
    openReadRecording () {
      console.log('阅读历史')
      this.setReadRecord(true)
    },
    // 更多按钮
    openMoreBtn () {
      console.log('更多')
      this.hide = !this.hide
      if (this.hide) {
        this.$refs.delete.style.bottom = 150 + 'px'
      } else {
        this.$refs.delete.style.bottom = -25 + 'px'
      }
      this.removeSelect()
    },
    // 去除选中状态
    removeSelect () {
      this.bookList.forEach((value, index) => {
        this.$refs.selectedI[index].classList.remove('selected')
      })
      if (this.$refs.selectedI[0].classList.toString().indexOf('selectedAllI')) {
        this.selectAllBtn = false
        this.idsList = []
      }
    },
    // 选中某本书
    openAlone (i, id) {
      const classListArr = this.$refs.selectedI[i].classList.toString()
      if (classListArr.indexOf('selected') === -1) {
        this.$refs.selectedI[i].classList.add('selected')
        this.idsList.push({
          id: id,
          time: new Date().toLocaleDateString()
        })
        console.log(this.idsList)
      } else {
        this.$refs.selectedI[i].classList.remove('selected')
        this.idsList.map((value, index) => {
          if (value.id === id) {
            this.idsList.splice(index, 1)
            console.log(this.idsList, '删除')
          }
        })
        this.$refs.allSelect.classList.remove('selectedAllI')
        this.selectAllBtn = false
      }
      if (this.idsList.length === this.bookList.length) {
        this.selectAllBtn = true
      }
      // this.switchImg = !this.switchImg
    },
    // 全选
    selecAtll () {
      this.selectAllBtn = this.$refs.allSelect.classList.toString().indexOf('selectedAllI') === -1
      // this.selectAllBtn = !this.selectAllBtn
      console.log(this.$refs.allSelect.classList.toString().indexOf('selectedAllI') === -1)
      if (this.selectAllBtn) {
        this.bookList.forEach((value, index) => {
          const classListArr = this.$refs.selectedI[index].classList.toString()
          if (classListArr.indexOf('selected') === -1) {
            this.$refs.selectedI[index].classList.add('selected')
            console.log(this.$refs.selectedI[index], 'this.$refs.selectedI[index]')
            this.idsList.push({
              id: value.id,
              time: new Date().toLocaleDateString()
            })
            // console.log(this.collectTime)
          }
        })
      } else {
        this.bookList.forEach((value, index) => {
          const classListArr = this.$refs.selectedI[index].classList.toString()
          if (classListArr.indexOf('selected') !== -1) {
            console.log(classListArr)
            this.$refs.selectedI[index].classList.remove('selected')
          }
        })
        this.idsList = []
      }
    },
    // 加入收藏夹
    addCollected () {
      this.collectList = []
      this.idsList.forEach((value, index) => {
        this.bookList.forEach((item, i) => {
          if (value.id === item.id) {
            this.collectList.push({
              id: item.id,
              name: item.name,
              author: item.author,
              picUrl: item.picUrl,
              progress: item.progress,
              collectTime: new Date().toLocaleDateString()
            })
          }
        })
      })
      // console.log(this.collectList, '移入收藏夹')
      addCollect(this.currentUser.userId, {
        collectList: this.collectList
      }).then(data => {
        // console.log(data.msg)
        this.setTips(data.msg)
      })
      this.removeSelect()
    },
    // 删除
    Delect () {
      console.log('删除', this.idsList)
      deleteBooks(this.currentUser.userId, {
        idList: this.idsList
      }).then(data => {
        // console.log(data.success)
        if (data.success) {
          searchList(this.currentUser.userId)
            .then(data => {
              this.setBookList(data.result)
              // this.bookList = data.result
              // console.log(data.result)
            })
        }
      })
      this.$refs.delete.style.bottom = -25 + 'px'
      this.hide = false
    }
  },
  watch: {
    bookList (newValue) {
      console.log(newValue, 'new')
      newValue.forEach((value, index) => {
        // console.log(value.progress)
        this.BookId.push(value.id)
      })
      this.$refs.ScrollView.refresh()
    },
    selectAllBtn (newValue, oldValue) {

    }
  }
}
</script>

<style scoped lang="scss">
.Bookcase{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 100px;
    /*background: #c5d8ee;*/
    /*background: #98b9da;*/
    .header{
        width: 100%;
        height: 200px;
        background: #ffce66;
        display: flex;
        justify-content: space-between;
        position: relative;
        .header-left{
            font-size: 35px;
            color: #343333;
            font-weight: 500;
            margin-left: 20px;
            line-height: 100px;
        }
        .header-right{
            /*width: 40%;*/
            height: 100px;
            display: flex;
            justify-content: space-around;
            align-items: center;
            margin-top: 5px;
            .header-right-icon{
                width: 100px;
                img{
                    display: inline-block;
                    /*width: 45px;*/
                    height: 42px;
                    margin-left: 25px;
                }
                p{
                    width: auto;
                    font-size: 22px;
                    text-align: center;
                    margin-top: 5px;
                    box-sizing: border-box;
                }
            }
            .header-right-icon:first-child{
                img{
                    height: 45px !important;
                }
                p{
                    margin-top: 4px;
                }
            }
        }
        .float-top{
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            top: 100px;
            width: 92%;
            height: 210px;
            border-radius: 15px;
            background: #fff;
            z-index: 9;
            display: flex;
            box-shadow: 0 3px 6px rgba(0,0,0,0.2);
            padding: 20px 20px;
            box-sizing: border-box;
            .float-left{
                width: 80%;
                height: 100%;
                border-right: 1px solid #ccc;
                display: flex;
                /*background: #ee9b9b;*/
                .float-left-img{
                    margin-right: 25px;
                    box-sizing: border-box;
                    img{
                        height: 100%;
                        border-radius: 10px;
                    }
                }
                .float-left-p{
                    p:nth-child(1){
                        margin-top: 5px;
                        font-size:32px;
                        font-weight: 800;
                    }
                    p:nth-child(2){
                        font-size: 26px;
                        padding:15px 0 0 0;
                        box-sizing: border-box;
                    }
                }
            }
            .float-right{
                flex: 1;
                /*background: #fa8000;*/
                margin:20px 20px ;
                p{
                    font-size: 28px;
                    font-weight: 500;
                    text-align: center;
                }
                button{
                    width: 120px;
                    height: 40px;
                    font-size: 26px;
                    font-weight: 800;
                    border-radius: 25px;
                    border:none;
                    background: #ffce66;
                    margin-top: 25px;
                    margin-left: 12px;
                }
            }
        }
    }
    .box{
        position: fixed;
        top: 200px;
        left: 0;
        right: 0;
        bottom: 100px;
        /*background: #fff;*/
        overflow: hidden;
        .van-list{
            /*background: #70bfd3;*/
            margin-top: 20px;
            .van-cell{
                position: relative;
                width: 92%;
                height: 180px;
                padding: 0;
                /*background: #ee9b9b;*/
                margin: 0 auto;
                margin-bottom: 35px;
                display: flex;
                justify-content: space-between;
                .cell-left{
                    margin-left: 20px;
                    width:25%;
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
                .cell-right{
                    width: 80%;
                    /*background: #ffa74f;*/
                    display: flex;
                    flex-direction: column;
                    justify-content: space-around;
                    position: relative;
                    .tick{
                        display: inline-block;
                        width: 40px;
                        height: 40px;
                        /*background: #ee9b9b;*/
                        position: absolute;
                        /*top: 50%;*/
                        transform: translateY(-30%);
                        right: 25px;
                        background-image: url('../../assets/icon/unselected.svg');
                        background-size: cover;
                        background-repeat: no-repeat;
                        &.selected{
                            background-image: url('../../assets/icon/pitchOn.svg')
                        }
                    }
                    .right-top{
                        width: 100%;
                        height: 50px;
                        /*background: #eeb7e4;*/
                        display: flex;
                        justify-content: space-between;
                        color: #333;
                        font-weight: revert;
                        p{
                            line-height: 50px;
                            font-size: 32px;
                        }
                    }
                    .right-bottom{
                        width: 100%;
                        height: 50px;
                        line-height: 60px;
                        /*background: #3face2;*/
                        display: flex;
                        justify-content: space-between;
                        p{
                            font-size: 26px;
                            color: #575757;
                            box-sizing: border-box;
                            span{
                                margin-right: 20px;
                            }
                        }
                    }
                }

            }
        }
    }
    .delete{
        position: fixed;
        bottom:-25px;
        width: 100%;
        height: 120px;
        background: #ffffff;
        z-index: 999;
        display: flex;
        justify-content: space-between;
        border-top: 1px solid #ccc;
        box-sizing: border-box;
        transition: bottom 0.3s ease-in-out;
        span{
            height: 100%;
            line-height: 120px;
            &:nth-child(1){
                width: 30%;
                /*background: white;*/
                i{
                    display: inline-block;
                    width: 40px;
                    height: 40px;
                    vertical-align: middle;
                    margin-left: -50px;
                    margin-right: 20px;
                    background-image: url('../../assets/icon/unselected.svg');
                    background-size: cover;
                    background-repeat: no-repeat;
                    &.selectedAllI{
                        background-image: url('../../assets/icon/pitchOn.svg')
                    }
                }
                text-align: center;
            }
            &:nth-child(2){
                width: 45%;
                /*background: #ffd3b6;*/
                display: flex;
                justify-content: space-between;
                p{
                    display: inline-block;
                    width: 160px;
                    height: 45px;
                    padding: 10px 10px;
                    box-sizing: initial;
                    line-height: 45px;
                    background: white;
                    border: 2px solid #fa8000;
                    border-radius: 32px;
                    text-align: center;
                    color: #fa8000;
                    margin-top: 25px;
                    font-size: 28px;
                }
                p:nth-child(2){
                    width: 80px;
                    color: #e7555b;
                    border: 2px solid #e7555b;
                    margin-right: 25px;
                }
            }
        }
    }
}
</style>
