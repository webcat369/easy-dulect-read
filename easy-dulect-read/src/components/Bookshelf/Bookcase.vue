<template>
    <div class="Bookcase">
        <div class="header">
            <div class="header-left">让阅读成为习惯</div>
            <div class="header-right">
                <p>
                    <img src="../../assets/icon/search.svg" alt="">
                    搜索
                </p>
                <p>
                    <img src="../../assets/icon/readhistory.svg" alt="">
                    阅读历史
                </p>
                <p>
                    <img src="../../assets/images/more.png" alt="">
                    更多
                </p>
            </div>
        </div>
        <div class="box">
            <ScrollView ref="ScrollView">
                <div class="van-list">
                    <div class="van-cell" @click.stop="readBook">
                        <div class="cell-left">
                            <img src="https://cdn.wtzw.com/bookimg/public/images/cover/14bf/c8c7da30026cd8ea0cb36a88e4aec49a_360x480.jpg" alt="">
                        </div>
                        <div class="cell-right">
                            <div class="right-top">
                                <p>星辰入怀明</p>
                            </div>
                            <div class="right-bottom">
                                <p>
                                    <span>冬日微暖</span>
                                </p>
                                <p>
                                    <span>读到:第一章</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="van-cell">
                        <div class="cell-left">
                            <img src="https://cdn.wtzw.com/bookimg/public/images/cover/14bf/c8c7da30026cd8ea0cb36a88e4aec49a_360x480.jpg" alt="">
                        </div>
                        <div class="cell-right">
                            <div class="right-top">
                                <p>星辰入怀明</p>
                            </div>
                            <div class="right-bottom">
                                <p>
                                    <span>冬日微暖</span>
                                </p>
                                <p>
                                    <span>读到:第一章</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="van-cell">
                        <div class="cell-left">
                            <img src="https://cdn.wtzw.com/bookimg/public/images/cover/14bf/c8c7da30026cd8ea0cb36a88e4aec49a_360x480.jpg" alt="">
                        </div>
                        <div class="cell-right">
                            <div class="right-top">
                                <p>星辰入怀明</p>
                            </div>
                            <div class="right-bottom">
                                <p>
                                    <span>冬日微暖</span>
                                </p>
                                <p>
                                    <span>读到:第一章</span>
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
export default {
  name: 'Bookcase',
  components: {
    ScrollView
  },
  methods: {
    readBook () {
      this.$router.push('/detailPage')
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
    background: #ee9b9b;
    .header{
        width: 100%;
        height: 150px;
        background: #aebbdb;
        display: flex;
        justify-content: space-between;
        .header-left{
            font-size: 45px;
            color: #333333;
            font-weight: bold;
            margin-left: 20px;
            line-height: 150px;
        }
        .header-right{
            display: flex;
          p{
              display: flex;
              flex-direction: column;
              /*background: #facc41;*/
              margin:30px 10px;
              margin-bottom: 0;
              font-size: 24px;
              color: #333333;
              text-align: center;
              img{
                  width: 60px;
                  height: 60px;
                  margin: 0 auto;
                  padding-bottom: 10px;
                  box-sizing: border-box;
              }
          }
        }
    }
    .box{
        position: fixed;
        top: 150px;
        left: 0;
        right: 0;
        bottom: 100px;
        background: #ffffff;
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
