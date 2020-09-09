<template>
    <div class="ClassificationList">
        <ScrollView>
            <div class="box">
                <div class="grid">
                    <div class="four">
                        <div class="top">
                            <img src="https://cdn.wtzw.com/bookimg/public/images/cover/5f0bf39c0be27_360x480.jpg" alt="">
                            <img src="https://cdn.wtzw.com/bookimg/public/images/cover/5efbfe0376793_360x480.jpg" alt="">
                            <img src="https://cdn.wtzw.com/bookimg/public/images/cover/5f1e40a5757e2_360x480.jpg" alt="">
                        </div>
                        <p>现代言情榜</p>
                    </div>
                    <div class="four">
                        <div class="top">
                            <img src="https://cdn.wtzw.com/bookimg/public/images/cover/5f0bf39c0be27_360x480.jpg" alt="">
                            <img src="https://cdn.wtzw.com/bookimg/public/images/cover/5efbfe0376793_360x480.jpg" alt="">
                            <img src="https://cdn.wtzw.com/bookimg/public/images/cover/5f1e40a5757e2_360x480.jpg" alt="">
                        </div>
                        <p>现代言情榜</p>
                    </div>
                    <div class="four">
                        <div class="top">
                            <img src="https://cdn.wtzw.com/bookimg/public/images/cover/5f0bf39c0be27_360x480.jpg" alt="">
                            <img src="https://cdn.wtzw.com/bookimg/public/images/cover/5efbfe0376793_360x480.jpg" alt="">
                            <img src="https://cdn.wtzw.com/bookimg/public/images/cover/5f1e40a5757e2_360x480.jpg" alt="">
                        </div>
                        <p>现代言情榜</p>
                    </div>
                    <div class="four">
                        <div class="top">
                            <img src="https://cdn.wtzw.com/bookimg/public/images/cover/5f0bf39c0be27_360x480.jpg" alt="">
                            <img src="https://cdn.wtzw.com/bookimg/public/images/cover/5efbfe0376793_360x480.jpg" alt="">
                            <img src="https://cdn.wtzw.com/bookimg/public/images/cover/5f1e40a5757e2_360x480.jpg" alt="">
                        </div>
                        <p>现代言情榜</p>
                    </div>
                </div>
            </div>
        </ScrollView>
    </div>
</template>

<script>
import ScrollView from '../ScrollView'
export default {
  name: 'ClassificationList',
  components: {
    ScrollView
  }
}
</script>

<style scoped lang="scss">
.ClassificationList{
    position: fixed;
    width: 100%;
    background: #c2baee;
    overflow: hidden;
    .box{
        .grid{
            width: 75%;
            height:640px;
            /*background: #e7555b;*/
            margin: 20px 18px;
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            .four{
                width: 260px;
                height: 260px;
                /*background: #facc41;*/
                margin-bottom: 20px;
                .top{
                    width: 100%;
                    height: 100%;
                    position: relative;
                    img{
                        border-radius: 10px;
                        &:nth-of-type(1){
                            height: 80%;
                            position: absolute;
                            top: 30px;
                            left: 30px;
                            z-index: 99;
                        }
                        &:nth-of-type(2){
                            height: 70%;
                            position: absolute;
                            top: 45px;
                            left: 75px;
                            z-index: 88;
                        }
                        &:nth-of-type(3){
                            height: 60%;
                            position: absolute;
                            top: 50px;
                            left: 115px;
                        }
                    }
                }
                p{
                    width: 260px;
                    text-align: center;
                    font-size: 30px;
                    color: #333333;
                }
            }
        }
    }
}
</style>
