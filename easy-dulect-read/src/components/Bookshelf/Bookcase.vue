<template>
    <div class="Bookcase">
        <div class="header">
            <div class="header-left">让阅读成为习惯</div>
            <div class="header-right">
                    <img src="../../assets/images/search_large.png" alt="">
                    <img src="../../assets/icon/readhistory.svg" alt="">
            </div>
        </div>
        <div class="box">
            <ScrollView ref="ScrollView">
                <div class="van-list">
                    <div class="van-cell"
                         v-for="(value,index) in bookList"
                         :key="value.id"
                         @click.stop="readBook(index)"
                    >
                        <div class="cell-left">
                            <img v-lazy="value.picUrl" alt="">
                        </div>
                        <div class="cell-right">
                            <div class="right-top">
                                <p>{{value.name}}</p>
                            </div>
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
            </ScrollView>
        </div>
    </div>
</template>

<script>
import ScrollView from '../ScrollView'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Bookcase',
  created () {
  },
  data () {
    return {
      BookId: [],
      isShow: false
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
      'setCurrentBookId'
    ]),
    readBook (index) {
      this.$router.push('/detailPage')
      this.setCurrentBookId(this.BookId[index])
    }
  },
  watch: {
    bookList (newValue) {
      // console.log(newValue)
      newValue.forEach((value, index) => {
        // console.log(value.progress)
        this.BookId.push(value.id)
      })
      this.$refs.ScrollView.refresh()
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
    background: #98b9da;
    .header{
        width: 100%;
        height: 100px;
        background: #f0d2d4;
        display: flex;
        justify-content: space-between;
        .header-left{
            font-size: 35px;
            color: #343333;
            font-weight: bold;
            margin-left: 20px;
            line-height: 100px;
        }
        .header-right{
            width: 25%;
            height: 100%;
            display: flex;
            justify-content: space-around;
            align-items: center;
            /*background: skyblue;*/
              img{
                  width: 45px;
                  height: 45px;
              }
        }
    }
    .box{
        position: fixed;
        top: 100px;
        left: 0;
        right: 0;
        bottom: 100px;
        background: #fff;
        overflow: hidden;
        .van-list{
            /*background: #70bfd3;*/
            margin-top: 20px;
            .van-cell{
                position: relative;
                width: 95%;
                height: 180px;
                padding: 0;
                /*background: #ee9b9b;*/
                margin: 0 auto;
                margin-bottom: 35px;
                display: flex;
                justify-content: space-between;
                .cell-left{
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
}
</style>
