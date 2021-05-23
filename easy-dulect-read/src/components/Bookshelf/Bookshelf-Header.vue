<template>
    <!--  书架头部选项卡  -->
      <div class="BookShelf-Header">
          <!--   书架界面头部导航模块    -->
          <div class="header">
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
      </div>
</template>

<script>
export default {
  name: 'BookShelfHeader',
  data: function () {
    return {

    }
  },
  methods: {

  },
  mounted () {

  }
}
</script>

<style scoped lang="scss">
.BookShelf-Header{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: #ffce66;
    .header{
        width: 100%;
        /*height: 200px;*/
        height: 100px;
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
    }
}
</style>
