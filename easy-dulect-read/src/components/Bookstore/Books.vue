<template>
    <div class="books">
        <ScrollView ref="ScrollView">
            <div class="list" ref="list">
                <Swipe></Swipe>
                <ul class="classify">
                   <li>
                       <img src="../../assets/images/stack.svg" alt="">
                       <p>图书书库</p>
                   </li>
                    <li>
                        <img src="../../assets/images/story.svg" alt="">
                        <p>经典文学</p>
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
                <ExclusiveOriginal :title="'热门图书'"></ExclusiveOriginal>
                <Publish :title="'影视著作'"></Publish>
                <Publish :title="'现代言情'"></Publish>
                <Publish :title="'古代言情'"></Publish>
                <div class="title">精选好书</div>
                <ScrollList ref="show"></ScrollList>
            </div>
        </ScrollView>
    </div>
</template>

<script>
import ScrollView from '../ScrollView'
import Swipe from '../Swipe'
import ExclusiveOriginal from '../Module/ExclusiveOriginal'
import Publish from '../Module/Publish'
import ScrollList from '../Module/ScrollList'
import { mapGetters } from 'vuex'
export default {
  name: 'Books',
  components: {
    ScrollView,
    Swipe,
    ExclusiveOriginal,
    Publish,
    ScrollList
  },
  mounted () {
    // 列表盒子高度
    const bottomHeight = window.innerHeight - this.TabBarHeight * 2
    this.$refs.ScrollView.scrolling((y) => {
      const listHeight = this.$refs.list.offsetHeight
      const scrollY = listHeight + y
      // console.log(listHeight, 'mounted')
      // console.log(y)
      if (Math.abs(bottomHeight - scrollY) < 10) {
        this.$refs.show.scrollMore()
      }
    })
  },
  computed: {
    ...mapGetters([
      'TabBarHeight'
    ])
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
        .title{
            width: 90%;
            height: 80px;
            margin: 0 auto;
            line-height: 80px;
            font-size: 40px;
            color: #333333;
            font-weight: bold;
        }
    }
</style>
