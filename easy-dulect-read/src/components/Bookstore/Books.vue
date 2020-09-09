<template>
    <div class="books">
        <ScrollView>
            <div class="list">
                <Swipe></Swipe>
                <ul class="classify">
                   <li>
                       <img src="../../assets/images/stack.svg" alt="">
                       <p>图书书库</p>
                   </li>
                    <li>
                        <img src="../../assets/images/story.svg" alt="">
                        <p>出版小说</p>
                    </li>
                    <li>
                        <img src="../../assets/images/pen.svg" alt="">
                        <p>文学艺术</p>
                    </li>
                    <li>
                        <img src="../../assets/images/radar.svg" alt="">
                        <p>人文社科</p>
                    </li>
                    <li>
                        <img src="../../assets/images/wallet.svg" alt="">
                        <p>经管励志</p>
                    </li>
                </ul>
                <ExclusiveOriginal :title="'精选畅销图书'"></ExclusiveOriginal>
                <Publish :title="'出版小说'"></Publish>
                <Publish :title="'经管励志'"></Publish>
                <Publish :title="'经典文学'"></Publish>
            </div>
        </ScrollView>
    </div>
</template>

<script>
import ScrollView from '../ScrollView'
import Swipe from '../Swipe'
import ExclusiveOriginal from '../Module/ExclusiveOriginal'
import Publish from '../Module/Publish'
export default {
  name: 'Books',
  components: {
    ScrollView,
    Swipe,
    ExclusiveOriginal,
    Publish
  }
}
</script>

<style scoped lang="scss">
    .books{
        position: fixed;
        top: 100px;
        left: 0;
        right: 0;
        bottom: 100px;
        overflow: hidden;
        /*background: #42b983;*/
        .classify{
            width: 90%;
            height: 200px;
            /*background: #e7555b;*/
            margin: 0 auto;
            display: flex;
            justify-content: space-around;
            align-items: center;
            text-align: center;
            li{
                width: 120px;
                /*background: #dddddd;*/
                img{
                    display: inline-block;
                    width: 80px;
                }
                p{
                    transform: translate3d(0,0,0);
                    margin-top: 10px;
                    font-size: 26px;
                    color: #333333;
                }
                &:nth-of-type(2){
                    img{
                        display: inline-block;
                        width: 110px;
                    }
                }
            }
        }
    }
</style>
