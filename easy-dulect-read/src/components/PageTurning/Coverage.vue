<template>
    <div class="Coverage" ref="Coverage">
        <div id="page1"
             @touchstart.stop.prevent="Touchstart"
             @touchmove.stop.prevent="Touchmove"
             @touchend.stop.prevent="Touchend"
             style= "left: 425px;  margin-left: -425px;"
        >
            <h1>叙述者</h1>
            小说的叙述者是个飞行员，他讲述了小王子、以及他们之间友谊的故事。飞行员坦率地告诉读者自己是个爱幻想的人，不习惯那些太讲究实际的大人，反而喜欢和孩子们相处，孩子自然、令人愉悦。飞行员因飞机故障迫降在撒哈拉大沙漠，在那里遇见了小王子。飞行员写下这段故事是为了平静自己与小王子离别的悲伤。那次与小王子的相遇，让飞行员既悲伤，也使自己重振精神。
        </div>
        <div id="page2"
             @touchstart.stop.prevent="Touchstart"
             @touchmove.stop.prevent="Touchmove"
             @touchend.stop.prevent="Touchend"
             style= "left: 425px;  margin-left: -425px;">
           <h1> 小王子</h1>
            小王子，小说就是以他命名的，是一个神秘可爱的孩子。他住在被称作B-612小星球，是那个小星球唯一居民。小王子离别自己的星球和所爱的玫瑰花开始了宇宙旅行，最后来到了地球。在撒哈拉沙漠，小王子遇到小说的叙述者飞行员，并和他成了好朋友。在小说中小王子象征着希望、爱、天真无邪和埋没在我们每个人心底的孩子般的灵慧。虽然小王子在旅途中认识了不少人，但他从没停止对玫瑰的思念。
        </div>
        <div id="page3"
             @touchstart.stop.prevent="Touchstart"
             @touchmove.stop.prevent="Touchmove"
             @touchend.stop.prevent="Touchend"
             style= "left: 425px;  margin-left: -425px;">
           <h1> 狐狸</h1>
            小王子在沙漠见到狐狸。聪明的狐狸要求小王子驯养他，虽然狐狸在两者中显得更有知识，他使小王子明白什么是生活的本质。狐狸告诉小王子的秘密是：用心去看才看得清楚；是分离让小王子更思念他的玫瑰；爱就是责任。
        </div>
    </div>
</template>

<script>
export default {
  name: 'Coverage',
  mounted () {
    this.Page = this.$refs.Coverage.childNodes
    // console.log(Page.length)
    this.$nextTick(() => {
      for (let i = 0; i < this.Page.length; i++) {
      }
    })
  },
  data () {
    return {
      Page: [],
      StartOffSetLeft: 0,
      CurrentPageX: 0,
      CurrentIndex: 0,
      less: 0,
      greater: 0,
      md: false,
      en: false
    }
  },
  methods: {
    Touchstart (e) {
      // e.path[0].style.left = 20 + 'px'
      // console.log(e.path[0].style.left)
      // console.log(e.path[0].getBoundingClientRect().left)
      // console.log(e.path[0].offsetLeft)
      // console.log(e.targetTouches[0].pageX)
      this.StartOffSetLeft = e.path[0].offsetLeft
      this.CurrentPageX = e.targetTouches[0].pageX
      // console.log(this.StartOffSetLeft)
      // console.log(this.CurrentPageX)
    },
    Touchmove (e) {
      // console.log(e.targetTouches[0].pageX)
      e.path[0].style.left = e.targetTouches[0].pageX - (this.CurrentPageX - this.StartOffSetLeft) + 450 + 'px'
      console.log(e.path[0].style.left)
      console.log(e.path[0].offsetLeft)
      if (e.path[0].offsetLeft < (-75)) {
        e.path[0].style.zIndex = 0
        e.path[2].style.zIndex = 1
        e.path[1].style.zIndex = 2
      }
      if (e.path[0].offsetLeft > 75) {
        e.path[0].style.zIndex = 0
        e.path[2].style.zIndex = 1
        e.path[1].style.zIndex = 2
      }
    },
    Touchend (e) {
      // console.log(e)
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
    div{
        position:absolute;
        width: 100%;
        height: 80%;
        border: 2px solid #333333;
        background-color: #e8caca;
        cursor:default;
        z-index:0;
    }
    #page1{
        z-index: 2;
    }
    #page2{
        z-index: 1;
    }
    #page3{
        z-index: 0;
    }
}
</style>
