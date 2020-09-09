<template>
    <div class="swipe">
        <van-swipe class="my-swipe"
                   :autoplay="3000"
                   indicator-color="#ee9b9b"
                   @change="onChange">
            <van-swipe-item
                    v-for="(image, index) in images"
                    :key="index">
                <img style="display: inline-block"
                     width="100%" height="100%"
                     border-radius="10%" v-lazy="image" />
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
    </div>
</template>

<script>
/* 轮播图 */
import Vue from 'vue'
import { Lazyload, Swipe, SwipeItem } from 'vant'
import { getSwipe } from './../api/index'
Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(Lazyload)
export default {
  name: 'Swipe',
  data () {
    return {
      current: 0,
      images: [],
      item: [0, 1, 2, 3, 4, 5, 6]
    }
  },
  watch: {
    current (newValue, oldVaule) {
      // console.log(n, o)
      // this.oldCurrent = o
      this.$refs.customIndicator[oldVaule].classList.remove('custom-indicator-active')
      this.$refs.customIndicator[this.current].classList.add('custom-indicator-active')
    }
  },
  methods: {
    onChange (index) {
      this.current = index
      // console.log(this.oldCurrent)
      // console.log(this.$refs.customIndicator)
    }
  },
  mounted () {
    // 让第一个指示器在页面加载完成的时候变为选中状态
    this.$refs.customIndicator[0].classList.add('custom-indicator-active')
  },
  created () {
    getSwipe().then(data => {
      this.images = data.banner
      // console.log(this.images)
    }).catch(err => {
      console.log(err)
    })
  }
}
</script>

<style scoped lang="scss">
.swipe{
    .my-swipe {
        width: 90%;
        height:240px;
        margin: 0 auto;
        margin-top: 20px;
        border-radius: 20px;
        transform: translate3d(0,0,0);
        van-swipe-item {
            width: 100%;
            height: 100%;
            /*background-color: #39a9ed;*/
            img{
                display: inline-block;
                width: 100%;
                height: 90%;
            }
            img[lazy="loading"] {
                width:100%;
            }
        }
        .custom-indicators{
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            bottom: 5px;
            width: 200px;
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
}
</style>
