<template>
    <div class="Coverage" ref="Coverage">
        <div class="pages" ref="pages"
             v-for="(value,index) in contents"
             :key="index"
             @touchstart.stop.prevent="Touchstart"
             @touchmove.stop.prevent="Touchmove"
             @touchend.stop.prevent="Touchend"
        >
            <h1>{{value.title}}</h1>
            {{value.text}}
        </div>
<!--        <div class="mask" v-show="animationEnd"></div>-->
    </div>
</template>

<script>
export default {
  name: 'Coverage',
  mounted () {
    this.Page = this.$refs.Coverage.childNodes
    this.pageWidth = this.$refs.Coverage.clientWidth
    // console.log(this.Page[0], this.Page[1])
  },
  data () {
    return {
      contents: [
        {
          title: '小王子000',
          text: '小王子，小说就是以他命名的，是一个神秘可爱的孩子。他住在被称作B-612小星球，是那个小星球唯一居民。小王子离别自己的星球和所爱的玫瑰花开始了宇宙旅行，最后来到了地球。在撒哈拉沙漠，小王子遇到小说的叙述者飞行员，并和他成了好朋友。在小说中小王子象征着希望、爱、天真无邪和埋没在我们每个人心底的孩子般的灵慧。虽然小王子在旅途中认识了不少人，但他从没停止对玫瑰的思念。'
        },
        {
          title: '狐狸111',
          text: '小王子在沙漠见到狐狸。聪明的狐狸要求小王子驯养他，虽然狐狸在两者中显得更有知识，他使小王子明白什么是生活的本质。狐狸告诉小王子的秘密是：用心去看才看得清楚；是分离让小王子更思念他的玫瑰；爱就是责任。'
        }
      ],
      Page: [],
      pageWidth: 0,
      TouchStartX: 0,
      TouchEndX: 0,
      OffsetValue: 0,
      preIndex: 0,
      CurrentIndex: 1,
      animationEnd: false,
      flag: false,
      OffsetXList: []

    }
  },
  watch: {
    CurrentIndex (n, o) {
      console.log(n, '新的值')
      console.log(o, '旧的值')
      this.preIndex = o
      // console.log(this.preIndex)
    },
    preIndex (n, o) {
    //   console.log(n)
    },
    animationEnd (n, o) {
      // console.log(n, o)
    }
  },
  methods: {
    Touchstart (e) {
      // 1.获取手指按下的X轴上坐标
      this.TouchStartX = e.targetTouches[0].pageX
    },
    Touchmove (e) {
      // 2.手指移动过程中X轴上的偏移位
      this.TouchEndX = e.targetTouches[0].pageX
      // 3.移动偏移位差值
      this.OffsetValue = this.TouchEndX - this.TouchStartX
      // 4.判断手指滑动的是下一页还是上一页
      if (this.OffsetValue < 0) {
        // console.log(this.OffsetValue)
        // 下一页
        // 5.给当前操作页赋值新的定位置，使当前操作页跟随手指移动
        e.target.parentNode.childNodes[this.CurrentIndex].style.left = this.OffsetValue + 'px'
        this.OffsetXList.push(-parseInt(this.OffsetValue))
        this.flag = true
      } else {
        if (this.flag) return
        // 上一页
        e.target.parentNode.childNodes[this.preIndex].style.left = -this.pageWidth + this.OffsetValue + 'px'
        e.target.parentNode.childNodes[this.preIndex].style.zIndex = 1
        e.target.parentNode.childNodes[this.CurrentIndex].style.zIndex = -1
        // 6.如果当前操作页是第一页，需要滑动到上一页时，将当前页变为最后一页
        /*
                    *手指点击当前页向右滑动，前一页从左向右跟随手指移动
                    * */
      }
    },
    Touchend (e) {
      const endX = parseInt(-this.OffsetValue)
      const MaxOffsetX = Math.max(...this.OffsetXList)
      // console.log(Math.max(...this.OffsetXList), '最大值')
      // console.log(endX, '最后的位置')
      this.OffsetXList = []

      if (MaxOffsetX > endX) {
        e.target.parentNode.childNodes[this.CurrentIndex].style.left = 0
        e.target.parentNode.childNodes[this.CurrentIndex].style.transition = 'left .3s ease-in-out'
        setTimeout(() => {
          this.animationEnd = false
          e.target.parentNode.childNodes[this.CurrentIndex].style.transition = ''
        }, 200)
        return
      }
      if (this.OffsetValue < 0) {
        this.animationEnd = true
        this.flag = false
        // 下一页
        // 5.给当前操作页赋值新的定位置，使当前操作页跟随手指移动
        e.target.parentNode.childNodes[this.CurrentIndex].style.left = -this.pageWidth + 'px'
        e.target.parentNode.childNodes[this.CurrentIndex].style.transition = 'left .3s ease-in-out'
        setTimeout(() => {
          this.animationEnd = false
          e.target.parentNode.childNodes[this.preIndex].style.transition = ''
          e.target.parentNode.childNodes[this.preIndex].style.left = 0
          e.target.parentNode.childNodes[this.preIndex].style.zIndex = -1
          e.target.parentNode.childNodes[this.CurrentIndex].style.zIndex = 1
        }, 300)
        this.CurrentIndex--
        if (this.CurrentIndex < 0) {
          this.CurrentIndex = 1
        }
      } else {
        this.animationEnd = true
        e.target.parentNode.childNodes[this.preIndex].style.left = 0
        e.target.parentNode.childNodes[this.preIndex].style.transition = 'left .3s ease-in-out'
        setTimeout(() => {
          this.animationEnd = false
          e.target.parentNode.childNodes[this.CurrentIndex].style.transition = ''
          e.target.parentNode.childNodes[this.preIndex].style.zIndex = -1
        }, 200)
        this.CurrentIndex++
        if (this.CurrentIndex > 1) {
          this.CurrentIndex = 0
        }
        // 上一页
        // 6.如果当前操作页是第一页，需要滑动到上一页时，将当前页变为最后一页
      }
    }
  }
}
</script>

<style scoped lang="scss">
.Coverage{
   position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #828282;
    overflow:hidden;
    /*font-family:宋体;*/
    .pages{
        position:absolute;
        width: 100%;
        height: 80%;
        border: 2px solid #333333;
        background-color: #e8caca;
        cursor:default;
        box-sizing: border-box;
    }
    .mask{
        display: block;
        width: 100%;
        height: 100%;
        background:(0,0,0,0.3);
    }
}
</style>
