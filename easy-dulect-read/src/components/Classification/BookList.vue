<template>
  <div class="BookList">
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
        <p>全部分类</p>
        <i></i>
      </div>
      <ul>
        <li>
          <img src="https://cdn.wtzw.com/bookimg/public/images/cover/5ed74acf59a39_360x480.jpg" alt="">
          影视著作
        </li>
        <li>
          <img src="https://cdn.wtzw.com/bookimg/public/images/cover/a3c6/9e2ed72d2af8bfc94814701367c31fa9_360x480.jpg" alt="">
          现代言情
        </li>
        <li>
          <img src="https://cdn.wtzw.com/bookimg/public/images/cover/a3c6/3520f7a0f9d45a655e893197ea6a9234_360x480.jpg" alt="">
          古代言情
        </li>
        <li>
          <img src="https://cdn.wtzw.com/bookimg/public/images/cover/5f3351440f60c_360x480.jpeg" alt="">
          青春文学
        </li>
        <li>
          <img src="https://cdn.wtzw.com/bookimg/public/images/cover/38b3/d03532e18165f2969ebd1ad75b1375a7_360x480.jpg" alt="">
          悬疑推理
        </li>
        <li>
          <img src="https://cdn.wtzw.com/bookimg/public/images/cover/5e1d4dc852c72_360x480.jpg" alt="">
          武侠仙侠
        </li>
        <li>
          <img src="https://cdn.wtzw.com/bookimg/public/images/cover/5e96796e76cf7_360x480.jpg" alt="">
          科幻未来
        </li>
        <li>
          <img src="https://cdn.wtzw.com/bookimg/public/images/cover/5e96796e76cf7_360x480.jpg" alt="">
          历史小说
        </li>
        <li>
          <img src="https://cdn.wtzw.com/bookimg/public/images/cover/5f1e35e45f99e_360x480.jpg" alt="">
          现代小说
        </li>
        <li>
          <img src="https://cdn.wtzw.com/bookimg/public/images/cover/5d5502cf35dd0_360x480.jpg" alt="">
          人物传记
        </li>
        <li>
          <img src="https://cdn.wtzw.com/bookimg/public/images/cover/5d5502cf35dd0_360x480.jpg" alt="">
          经典文学
        </li>
        <li>
          <img src="https://cdn.wtzw.com/bookimg/public/images/cover/5d5502cf35dd0_360x480.jpg" alt="">
          文学艺术
        </li>
        <li>
          <img src="https://cdn.wtzw.com/bookimg/public/images/cover/5d5502cf35dd0_360x480.jpg" alt="">
          人文社科
        </li>
        <li>
          <img src="https://cdn.wtzw.com/bookimg/public/images/cover/5d5502cf35dd0_360x480.jpg" alt="">
          经管励志
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Swipe, SwipeItem, Lazyload } from 'vant'

Vue.use(Lazyload)
Vue.use(Swipe)
Vue.use(SwipeItem)
export default {
  name: 'BookList',
  data () {
    return {
      currentIndex: 0,
      images: [
        'https://cdn.qimao.com/bookimg/zww/backendstatic/images/other/15982621225284436.jpg',
        'https://cdn.qimao.com/bookimg/zww/backendstatic/images/other/15982364469798187.jpg',
        'https://cdn.qimao.com/bookimg/zww/backendstatic/images/other/15982619859032892.jpg'
      ],
      item: [0, 1, 3]
    }
  },
  methods: {
    onChange (index) {
      this.currentIndex = index
    }
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
    }
  }
}
</script>

<style scoped lang="scss">
 .BookList{
   position: fixed;
   width: 100%;
   height: 100%;
   background: #c2baee;
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
       height: 10px;
       /*background: #d43c33;*/
       display: flex;
       justify-content: space-around;
       .custom-indicator{
         width: 40px;
         background: #cccccc;
         border-radius: 5px;
         &.custom-indicator-active{
           background: #eeb9bb;
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
       width:60%;
       height:50px;
       line-height:50px;
       display: flex;
       justify-content: space-around;
       /*background: #fae34b;*/
       margin-left: 110px;
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
         line-height: 100px;
         font-size: 30px;
         color: #333333;
         background: #ececed;
         margin-bottom: 20px;
         border-radius: 10px;
         img{
           width:60px;
           border-radius: 10px;
           margin: 10px 20px;
         }
       }
     }
   }
 }
</style>
