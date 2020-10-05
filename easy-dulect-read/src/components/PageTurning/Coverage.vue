<template>
    <div class="Coverage" ref="Coverage">
        <div class="pages" ref="pages"
             v-for="(value,Index) in Text"
             :key="Index"
             @touchstart="Touchstart"
             @touchmove="Touchmove"
             @touchend="Touchend"
        >
            <p
                v-for="(values,index) in Text[Index].List"
                :key="index"
            >{{values}}</p>
        </div>
<!--        <div class="mask" v-show="animationEnd"></div>-->
    </div>
</template>

<script>
import { Text } from '../../api/index'
export default {
  name: 'Coverage',
  created () {
    Text()
      .then(data => {
        const newList = data.text[0].contents.split('\n')
        const maxRowNum = 18
        let currentRowNum = 0
        console.log(newList) // [14条]
        newList.map((value, index) => {
          // 每段所占行数
          const rowNum = Math.ceil((value.length + 2) / 15)
          currentRowNum = currentRowNum + rowNum
          // console.log(value.length, '每段总字数')
          // console.log((value.length + 2) / 15, '每段所占行数')
          console.log(value)
          if (currentRowNum < maxRowNum && value.length > 1) {
            this.Text[1].List.push(value)
            // this.Text[1].List.push(value)
            // console.log('截取到了', index)
            this.oldRowNum = index
          } else {
            if (currentRowNum < 36 && value.length > 1) {
              this.Text[0].List.push(value)
            }
          }
        })
        // this.Text.unshift({
        //   contents: this.List
        // },
        // {
        //   contents: this.List
        // })
        // console.log(data.text[1])
      })
      .catch(err => {
        console.log(err)
      })
  },
  mounted () {
    this.Page = this.$refs.Coverage.childNodes
    this.pageWidth = this.$refs.Coverage.clientWidth
    // console.log(this.Page[0], this.Page[1])
  },
  data () {
    return {
      Text: [
        { List: [] },
        { List: [] }
      ],
      oldRowNum: 0,
      Page: [],
      pageWidth: 0,
      TouchStartX: 0,
      TouchEndX: 0,
      OffsetValue: 0,
      preIndex: 0,
      CurrentIndex: 1,
      e: 1,
      animationEnd: false,
      flag: false,
      OffsetXList: []

    }
  },
  watch: {
    CurrentIndex (n, o) {
      this.preIndex = o
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
      // console.log(e)
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
        // 下一页
        // 5.给当前操作页赋值新的定位置，使当前操作页跟随手指移动
        e.path[2].childNodes[this.CurrentIndex].style.left = this.OffsetValue + 'px'
        this.OffsetXList.push(-parseInt(this.OffsetValue))
        this.flag = true
      } else {
        if (this.flag) return
        // 上一页
        e.path[2].childNodes[this.preIndex].style.left = -this.pageWidth + this.OffsetValue + 'px'
        e.path[2].childNodes[this.preIndex].style.zIndex = 1
        e.path[2].childNodes[this.CurrentIndex].style.zIndex = -1
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
        e.path[2].childNodes[this.CurrentIndex].style.left = 0
        e.path[2].childNodes[this.CurrentIndex].style.transition = 'left .3s ease-in-out'
        setTimeout(() => {
          this.animationEnd = false
          e.path[2].childNodes[this.CurrentIndex].style.transition = ''
        }, 200)
        return
      }
      if (this.OffsetValue < 0) {
        this.animationEnd = true
        this.flag = false
        // 下一页
        // 5.给当前操作页赋值新的定位置，使当前操作页跟随手指移动
        e.path[2].childNodes[this.CurrentIndex].style.left = -this.pageWidth + 'px'
        e.path[2].childNodes[this.CurrentIndex].style.transition = 'left .3s ease-in-out'
        setTimeout(() => {
          this.animationEnd = false
          e.path[2].childNodes[this.preIndex].style.transition = ''
          e.path[2].childNodes[this.preIndex].style.left = 0
          e.path[2].childNodes[this.preIndex].style.zIndex = -1
          e.path[2].childNodes[this.CurrentIndex].style.zIndex = 1
        }, 300)
        this.CurrentIndex--
        if (this.CurrentIndex < 0) {
          this.CurrentIndex = 1
        }
      } else {
        this.animationEnd = true
        e.path[2].childNodes[this.preIndex].style.left = 0
        e.path[2].childNodes[this.preIndex].style.transition = 'left .3s ease-in-out'
        setTimeout(() => {
          this.animationEnd = false
          e.path[2].childNodes[this.CurrentIndex].style.transition = ''
          e.path[2].childNodes[this.preIndex].style.zIndex = -1
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
    /*background: #828282;*/
    overflow:hidden;
    /*z-index: 999;*/
    /*font-family:宋体;*/
    .pages{
        position:absolute;
        width: 100%;
        height: 100%;
        /*border: 2px solid #333333;*/
        background-color: #2a2a2a;
        color: #c6c6c6;
        cursor:default;
        box-sizing: border-box;
        box-shadow: 0 0 15px #fff;
        padding: 15px;
        display: flex;
        flex-direction: column;
        p{
            display: inline-block;
            width: 100%;
            flex: 1;
            padding-left: 15px;
            font-size: 40px;
            letter-spacing:6px;
            text-indent : 100px;
            line-height: 70px;
        }
    }
    .mask{
        display: block;
        width: 100%;
        height: 100%;
        background:(0,0,0,0.3);
    }
}
</style>
