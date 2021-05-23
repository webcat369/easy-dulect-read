<template>
    <!--    分类界面 -->
    <div class="Classification">
        <!--  分类界面顶部导航条组件  -->
        <ClassificationHeader></ClassificationHeader>
        <!--路由出口:切换女生,男生,图书；transition标签加入页面跳转动画-->
        <transition :name="this.names">
            <!--   keep-alive缓存页面状态   -->
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </transition>
        <Search v-if="this.showPage"></Search> <!--  点击“放大镜”按钮展示搜索页   -->
        <Detail v-if="this.showDetail"></Detail><!--  点击分类列表中书单显示书单详情界面   -->
        <Channel v-if="this.showChannel"></Channel> <!--  列表分类组件   -->
        <ScrollDetailPage v-if="this.showScrollDetailPage"></ScrollDetailPage>  <!--  分类列表滚动展示列表  -->
    </div>
</template>

<script>
import ClassificationHeader from '../components/Classification/Classification-Header'
import Search from '../components/Search'
import ScrollDetailPage from '../components/Module/ScrollDetailPage'
import Detail from '../components/Detail'
import Channel from '../components/Channel'
import { mapGetters } from 'vuex'
export default {
  name: 'Classification',
  components: {
    ClassificationHeader,
    Search,
    ScrollDetailPage,
    Detail,
    Channel
  },
  data () {
    return {
      names: 'left'
    }
  },
  computed: {
    ...mapGetters([
      'showPage',
      'showDetail',
      'showChannel',
      'showScrollDetailPage'
    ])
  },
  mounted () {
    // console.log(this.$route, '$route')
    // console.log(this.$router, '$router')
  },
  watch: {
    $route (newValue, oldValue) {
      // 目标导航下标, 离开导航下标
      // console.log(newValue.meta.index, oldValue.meta.index)
      if (newValue.meta.index < oldValue.meta.index) {
        this.names = 'right'
      } else {
        this.names = 'left'
      }
    }
  }
}
</script>

<style scoped lang="scss">
.Classification{
    width: 100%;
    height: 100%;
    /*overflow: hidden;*/
    .left-enter{
        transform:translateX(100%);
        /*opacity: 1;*/
    }
    .left-enter-to{
        transform:translateX(0%);
        /*opacity: 1;*/
    }
    .left-enter-active{
        /*用3s的时间过渡从显示开始到显示结束*/
        transition: transform 0.5s;
    }
    .left-leave{
        transform:translateX(0%);
        /*opacity: 0;*/
    }
    .left-leave-to{
        transform:translateX(-100%);
        /*opacity: 0;*/
    }
    .left-leave-active{
        /*用3s的时间过渡从隐藏开始到隐藏结束*/
        transition: transform 0.5s;
    }

    .right-enter{
        transform:translateX(-100%);
        /*opacity: 1;*/
    }
    .right-enter-to{
        transform:translateX(0%);
        /*opacity: 1;*/
    }
    .right-enter-active{
        /*用3s的时间过渡从显示开始到显示结束*/
        transition: transform 0.5s;
    }
    .right-leave{
        transform:translateX(0%);
        /*opacity: 0;*/
    }
    .right-leave-to{
        transform:translateX(100%);
        /*opacity: 0;*/
    }
    .right-leave-active{
        /*用3s的时间过渡从隐藏开始到隐藏结束*/
        transition: transform 0.5s;
    }
}
</style>
