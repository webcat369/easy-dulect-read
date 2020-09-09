<template>
    <div class="Woman">
        <van-tree-select height="100%" :items="items" :main-active-index.sync="active">
            <template #content>
                <AllCategories v-if="active === 0"></AllCategories>
                <ListPage v-if="active === 1"></ListPage>
                <ListPage v-if="active === 2"></ListPage>
                <ListPage v-if="active === 3"></ListPage>
                <ListPage v-if="active === 4"></ListPage>
                <ClassificationList v-if="active === 5"></ClassificationList>
            </template>
        </van-tree-select>
    </div>
</template>

<script>
import Vue from 'vue'
import { TreeSelect } from 'vant'
import AllCategories from './AllCategories'
import ListPage from './ListPage'
import ClassificationList from './ClassificationList'
Vue.use(TreeSelect)
export default {
  name: 'Woman',
  data () {
    return {
      active: 0,
      items: [
        { text: '全部分类' },
        { text: '大热榜' },
        { text: '完结榜' },
        { text: '黑马榜' },
        { text: '热搜榜' },
        { text: '分类榜' }
      ]
    }
  },
  components: {
    AllCategories,
    ListPage,
    ClassificationList
  }
}
</script>

<style lang="scss">
.Woman{
    position: fixed;
    top: 100px;
    left: 0;
    right: 0;
    bottom:100px;
    background: #8dee75;
    width: 100%;
    .van-tree-select{
        .van-sidebar{
            flex: 0.5;
            .van-sidebar-item{
                width: 200px;
                height: 100px;
                font-size: 30px;
              .van-sidebar-item__text{
                  width: 100%;
                  height: 100%;
                  line-height: 80px;
                  /*background: #c2baee;*/
              }
            }
            .van-sidebar-item--select::before{
                position: absolute;
                top: 50%;
                left: 0;
                width: 0.06rem;
                height: 0.4rem;
                border-radius: 6px;
                background-color: #ee9b9b;
            }
        }
        .van-tree-select__content{
            width: 100%;
            height: 100%;
            /*background: #e7555b;*/
            /*background:orange;*/
            .allClassic{

            }
        }
    }
}
</style>
