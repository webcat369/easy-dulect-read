<template>
    <div class="books">
        <ScrollView ref="ScrollView">
            <div class="list" ref="list">
                <Swipe></Swipe>
                <ul class="classify">
                   <router-link tag="li" to="/classification/publication">
                       <img src="../../assets/images/stack.svg" alt="">
                       <p>图书书库</p>
                   </router-link>
                    <li @click.stop="ScrollDetailPage('经典文学')">
                        <img src="../../assets/images/story.svg" alt="">
                        <p>经典文学</p>
                    </li>
                    <li @click.stop="ScrollDetailPage('文学艺术')">
                        <img src="../../assets/images/pen.svg" alt="">
                        <p>文学艺术</p>
                    </li>
                    <li @click.stop="ScrollDetailPage('人文社科')">
                        <img src="../../assets/images/radar.svg" alt="">
                        <p>人文社科</p>
                    </li>
                    <li @click.stop="ScrollDetailPage('经管励志')">
                        <img src="../../assets/images/wallet.svg" alt="">
                        <p>经管励志</p>
                    </li>
                </ul>
                <ExclusiveOriginal :title="'热门图书'" :Channel="hotBook"></ExclusiveOriginal>
                <Publish :title="'影视著作'" :Channel="filmWorks"></Publish>
                <Publish :title="'现代言情'" :Channel="modernRomance"></Publish>
                <Publish :title="'古代言情'" :Channel="ancientRomance"></Publish>
                <div class="title">精选好书</div>
                <ScrollList ref="ScrollList"
                            :Channel="selectionBooks"></ScrollList>
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
import { mapGetters, mapActions } from 'vuex'
import { getSelectionBooks } from '../../api/index'
export default {
  name: 'Books',
  components: {
    ScrollView,
    Swipe,
    ExclusiveOriginal,
    Publish,
    ScrollList
  },
  data () {
    return {
      hotBook: [],
      filmWorks: [],
      modernRomance: [],
      ancientRomance: [],
      selectionBooks: []
    }
  },
  computed: {
    ...mapGetters([
      'TabBarHeight',
      'channelTitle'
    ])
  },
  methods: {
    ...mapActions([
      'setScrollDetailPage',
      'setSelectTitle'
    ]),
    ScrollDetailPage (e) {
      console.log(e)
      this.setScrollDetailPage(true)
      this.setSelectTitle(e)
      // this.setScrollDetailPage(true)
      // if (this.channelTitle === '经典文学' || this.channelTitle === '人文艺术' || this.channelTitle === '人文社科' || this.channelTitle === '经管励志') {
      // }
    }
  },
  created () {
    getSelectionBooks()
      .then(data => {
        this.selectionBooks = data.selectionBooks
        this.hotBook = data.hotBook.splice(0, 8)
        this.filmWorks = data.filmWorks.splice(0, 8)
        this.modernRomance = data.modernRomance.splice(0, 8)
        this.ancientRomance = data.ancientRomance.splice(0, 8)
      })
      .catch(err => {
        console.log(err)
      })
  },
  mounted () {
    // 列表盒子高度
    const bottomHeight = window.innerHeight - this.TabBarHeight * 2
    this.$refs.ScrollView.scrolling((y) => {
      const listHeight = this.$refs.list.offsetHeight
      const scrollY = listHeight + y
      if (Math.abs(bottomHeight - scrollY) < 10) {
        this.$refs.ScrollList.scrollMore()
      }
    })
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
        background: #42b983;
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
            margin-top: 30px;
        }
    }
</style>
