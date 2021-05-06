<template>
    <!--    分类界面 -->
    <div class="Classification">
        <ClassificationHeader></ClassificationHeader>
        <!--路由出口:切换女生,男生,图书-->
        <transition :name="this.names">
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </transition>
        <Search v-if="this.showPage"></Search>
        <Detail v-if="this.showDetail"></Detail>
        <Channel v-if="this.showChannel"></Channel>
        <ScrollDetailPage v-if="this.showScrollDetailPage"></ScrollDetailPage>
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
