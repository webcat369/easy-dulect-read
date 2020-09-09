<template>
    <div id="wrapper" ref="wrapper">
        <!--由于里面的滚动内容不确定，所以放置插槽可以让谁使用谁滚动-->
        <slot></slot>
    </div>
</template>

<script>
/* 导入iscroll-probe的专业版本，对以后进行扩展有好处 */
import IScroll from 'iscroll/build/iscroll-probe'
export default {
  name: 'ScrollView',
  // 调用创建期间的生命周期方法mounted时,已经将生成好的模板，挂载到页面指定上容器中显示
  mounted: function () {
    this.iscroll = new IScroll(this.$refs.wrapper, {
      mouseWheel: true, // 禁用鼠标滚轮
      scrollbars: false, // 禁用滚动条
      probeType: 3, // 像素级的监听
      // 解决拖拽卡顿的问题
      scrollX: false,
      scrollY: true,
      disablePointer: true,
      disableTouch: false,
      disableMouse: true
    })
    /* 利用setTimeout计算滚动范围
    setTimeout(() => {
      console.log(this.iscroll.maxScrollY)
      //iscroll中的refresh()方法：
      //一般是当 DOM 改变(Ajax 之类的)的时候通过改变的方法重新计算 scrollHeight 的高度

      this.iscroll.refresh()
      console.log(this.iscroll.maxScrollY)
    }, 5000)
    */

    /*
        在什么地方重新计算滚动区域的滚动范围会比较好？在滚动区域内所有内容都渲染完
       怎么知道滚动区域内所有内容有没有渲染完？ 在Node.js中有一个方法MutionObserver,
       它可以监听元素属性的变化，内容的变化，元素子节点的变化
     */

    // 1.创建观察者对象
    /*
       MutationObserver构造函数只要监听到了指定内容发生改变，就会执行回调函数
       mutationList:返回发生变化的子节点数组(里面装着所有发生变化的子节点)
       observer:观察者对象
     */
    // 现用MutionObserver构造函数监听内容区域容器的子节点的变化，只要子节点一发生变化就重新计算scrollHeight的高度
    const observer = new MutationObserver((mutationList, observer) => {
      // console.log(mutationList)
      // console.log(observer)
      // console.log(this.iscroll.maxScrollY, '以前')
      // refresh()方法: 当 DOM 改变的时候通过改方法重新计算 scrollHeight 的高度
      this.iscroll.refresh() // 重新计算滚动范围
      // console.log(this.iscroll.maxScrollY, '以后')
    })
    // 2.告诉观察者对象我们需要观察的内容
    const config = {
      attributes: true, // 检测属性变动
      childList: true, // 观察目标子节点的变化，是否有添加或者删除
      subtree: true, // 是否将观察器应用于该节点的所有后代节点，默认为 false
      characterData: true, // 节内容或者节点文本的变动
      attributeFilter: [' height', ' offsetHeight'], // 观察特定属性
      attributeOldValue: true, // 观察attributes变动时,是否需要记录变动前的属性值
      characterDataOldValue: true // 观察characterData变动,是否需要记录变动前的值

    }
    // 3.告诉观察者对象，我们需要观察谁，需要观察什么内容
    /*
      第一个参数:告诉观察者对象我们需要观察谁
      第二个参数:告诉观察者对象我们需要观察什么内容
    */
    observer.observe(this.$refs.wrapper, config)
  },
  methods: {
    // 提供一个监听滚动的偏移位的方法给外界使用
    scrolling (fn) { // fn外界的回调函数
      this.iscroll.on('scroll', function () { // .on("scroll",function(){})注册scroll监听事件
        fn(this.y) // 调用外界的回调函数，把当前的偏移位传递给外界
      })
    },
    // 100ms后创建列表播放的歌单显示，用iscroll刷新列表播放的歌单
    refresh () {
      setTimeout(() => {
        // 延迟100ms后刷新
        this.iscroll.refresh()
      }, 100)
    },
    // scrollTo方法的用途:滚动页面元素到指定位置
    scrollTo (x, y, time) { // x方向上滚动范围,y方向上滚动范围,滚动所需时间
      this.iscroll.scrollTo(x, y, time)
    }
  }
}
</script>

<style scoped lang="scss">
    /*只有IScroll的容器界面 < 内容界面(banner+推荐歌单+最新歌单+最新音乐)，才能滚动*/
    /*在Recommend.vue中：
    让 推荐界面装内容部分的盒子 固定定位，宽高为可视窗口的宽高 ，
    然后让IScroll的容器的宽高 = 推荐界面装内容部分的盒子宽高*/
    #wrapper{
        width: 100%;
        height: 100%;
    }
</style>
