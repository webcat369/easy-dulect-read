<template>
    <!--  书城界面  -->
    <div class="Bookstore">
        <!--    书城界面顶部导航条组件    -->
        <BookstoreHeader></BookstoreHeader>
        <!--路由出口:切换推荐,女生,男生,图书-->
        <transition :name="this.names">
                <router-view></router-view>
        </transition>
        <!--   点击“放大镜”按钮弹出搜索界面 -->
        <Search v-if="this.showPage"></Search>
        <!--  书单详情界面展示 -->
        <Detail v-if="this.showDetail"></Detail>
        <!--  点击“更多”按钮跳转分类详情页  -->
        <Channel v-if="this.showChannel"></Channel>
        <!--   书城界面底部“上拉”加载更多组件  -->
        <ScrollDetailPage v-if="this.showScrollDetailPage"></ScrollDetailPage>
    </div>
</template>

<script>
import BookstoreHeader from './../components/Bookstore/Bookstore-Header'
import Search from '../components/Search'
import Detail from '../components/Detail'
import Channel from '../components/Channel'
import ScrollDetailPage from '../components/Module/ScrollDetailPage'
import { mapGetters } from 'vuex'
export default {
  name: 'Bookstore',
  components: {
    BookstoreHeader,
    Search,
    Detail,
    Channel,
    ScrollDetailPage
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
.Bookstore{
    width: 100%;
    height: 100%;
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
