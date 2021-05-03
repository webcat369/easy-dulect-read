<template>
   <div class="AllCategories">
      <van-swipe
              class="my-swipe"
              :autoplay="3000"
              @change="onChange">
         <van-swipe-item class="swipe-item"
                         v-for="(image, index) in images" :key="index">
            <img v-lazy="image" />
         </van-swipe-item>
         <template #indicator>
            <div class="custom-indicators">
               <div
                       v-for="(value,index) in item"
                       :key="index" ref="customIndicator"
                       class="custom-indicator">
               </div>
            </div>
         </template>
      </van-swipe>
      <div class="theme">
         <div class="title">
            <i></i>
            <p>题材</p>
            <i></i>
         </div>
         <ul>
            <li v-for="(value,index) in Tag"
                :key="index"
                @click.stop="ToScrollDetailPage(value.title,value.tag)"
            >
               <img v-lazy="value.photo" alt="">
               <p>{{value.title}}</p>
            </li>
         </ul>
      </div>
   </div>
</template>

<script>
import Vue from 'vue'
import { Swipe, SwipeItem, Lazyload } from 'vant'
import { mapActions } from 'vuex'
import {
  getSelectionBooks,
  AllWomanList,
  AllManList
} from '../../api'
Vue.use(Lazyload)
Vue.use(Swipe)
Vue.use(SwipeItem)
export default {
  name: 'AllCategories',
  data () {
    return {
      currentIndex: 0,
      images: [
        'https://cdn.qimao.com/bookimg/zww/backendstatic/images/other/15982621225284436.jpg',
        'https://cdn.qimao.com/bookimg/zww/backendstatic/images/other/15982364469798187.jpg',
        'https://cdn.qimao.com/bookimg/zww/backendstatic/images/other/15982619859032892.jpg'
      ],
      item: [0, 1, 3],
      WomanBook: {},
      ManBook: {},
      publicationBook: {},
      womanList: {}
    }
  },
  props: {
    Tag: {
      type: Array,
      default: () => [],
      require: true
    }
  },
  methods: {
    ...mapActions([
      'setScrollDetailPage',
      'setSelectTag',
      'setSelectTitle',
      'setCurrentWomanDetailPage',
      'setCurrentManDetailPage',
      'setCurrentPublicationDetailPage',
      'setPageNum'
    ]),
    onChange (index) {
      this.currentIndex = index
    },
    ToScrollDetailPage (title, tag) {
      console.log(title)
      this.setSelectTitle(title)
      this.setSelectTag(tag)
      this.setScrollDetailPage(true)
      this.setCurrentWomanDetailPage(this.WomanBook)
      this.setCurrentManDetailPage(this.ManBook)
      this.setCurrentPublicationDetailPage(this.publicationBook)
      // 进入ScrollDetailPage页面时，清除以前Vuex中保存ScrollList组件的'加载到第几页'
      this.setPageNum(0)
      // getPresidentWealthy()
      // getRebirthSpecialAbility()
      // getTravelThroughTime()
      // getCourtStruggle()
      // getFarmingBusiness()
      // getMarriageAndLove()
      // getFantasyRomance()
    }
  },
  created () {
    getSelectionBooks()
      .then(data => {
        this.publicationBook = data
        // console.log(data)
      })
      .catch(err => {
        console.log(err)
      })

    AllWomanList()
      .then(data => {
        // console.log(data)
        this.WomanBook = data
      })
      .catch(err => {
        console.log(err)
      })

    AllManList()
      .then(data => {
        // console.log(data)
        this.ManBook = data
      })
      .catch(err => {
        console.log(err)
      })
  },
  mounted () {
    // 让第一个指示器在页面加载完成的时候变为选中状态
    this.$refs.customIndicator[0].classList.add('custom-indicator-active')
  },
  watch: {
    currentIndex (newValue, oldValue) {
      // console.log(newValue, oldValue)
      this.$refs.customIndicator[oldValue].classList.remove('custom-indicator-active')
      this.$refs.customIndicator[newValue].classList.add('custom-indicator-active')
      // console.log(this.$refs.customIndicator[newValue].classList.add('custom-indicator-active'))
    },
    tagIndex (newValue, oldValue) {
      console.log(newValue, oldValue)
    }
  }
}
</script>

<style scoped lang="scss">
.AllCategories{
   position: fixed;
   /*top: 100px;*/
   /*bottom:100px;*/
   width: 100%;
   height: 100%;
   background: #ffffff;
   .my-swipe{
      width:75%;
      height:180px;
      margin: 20px 18px;
      border-radius: 20px;
      /*background: #e7555b;*/
      .swipe-item{
         width: 100%;
         height: 100%;
         img{
            width: 100%;
            height: 100%;
            border-radius: 20px;
         }
      }
      .custom-indicators{
         position: absolute;
         left: 50%;
         transform: translateX(-50%);
         bottom: 5px;
         width: 160px;
         height: 8px;
         /*background: #d43c33;*/
         display: flex;
         justify-content: space-around;
         .custom-indicator{
            width: 40px;
            background: #f4f4f4;
            border-radius: 5px;
            &.custom-indicator-active{
               background: #ffcb5d;
            }
         }

      }
   }
   .theme{
      width: 75%;
      /*height: 800px;*/
      margin: 30px 18px;
      /*background: #e7555b;*/
      .title{
         width:50%;
         height:50px;
         line-height:50px;
         display: flex;
         justify-content: space-around;
         /*background: #fae34b;*/
         margin-left: 140px;
         margin-bottom: 20px;
         i{
            width:90px;
            height: 1px;
            background: #c2c2c2;
            margin-top: 26px;
         }
         p{
            font-size: 28px;
            font-weight: bold;
            color: #7b7b7b;
         }
      }
      ul{
         width: 100%;
         /*height: 750px;*/
         /*background: #c2baee;*/
         display: flex;
         justify-content: space-between;
         flex-wrap: wrap;
         li{
            width:270px;
            height: 100px;
            background: #ececed;
            margin-bottom: 20px;
            border-radius: 10px;
            position: relative;
            p{
               display: inline-block;
               font-size: 30px;
               color: #333333;
               text-align: center;
               position: absolute;
               bottom: 25px;
            }
            img{
               width:70px;
               height: 100%;
               border-radius: 10px;
               margin: 0 20px;
            }
         }
      }
   }
}
</style>
