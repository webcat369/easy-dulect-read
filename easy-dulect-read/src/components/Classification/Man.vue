<template>
    <div class="Man">
        <van-tree-select height="100%" :items="items" :main-active-index.sync="active">
            <template #content>
                <div class="allClassic" v-if="active === 0">
                    <AllCategories></AllCategories>
                </div>
                <div class="hotList" v-if="active === 1">
                    <ListPage></ListPage>
                </div>
                <div class="endList" v-if="active === 2">
                    <ListPage></ListPage>
                </div>
                <div class="breakHorseList" v-if="active === 3">
                    <ListPage></ListPage>
                </div>
                <div class="topSearchList" v-if="active === 4">
                    <ListPage></ListPage>
                </div>
                <div class="classicList" v-if="active === 5">
                    <ClassificationList></ClassificationList>
                </div>
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
  name: 'Man',
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

<style scoped lang="scss">
 .Man{
     position: fixed;
     top: 100px;
     left: 0;
     right: 0;
     bottom:100px;
     background: palegoldenrod;
     width: 100%;
     .van-tree-select{
         .van-sidebar{
             flex: 0.5;
             .van-sidebar-item{
                 width: 200px;
                 height: 100px;
                 font-size: 30px;
                 line-height: 80px;
                 .van-sidebar-item__text{
                     width: 100%;
                     height: 100%;
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
             .allClassic{
                 /*position: fixed;*/
                 /*top: 100px;*/
                 /*bottom:100px;*/
                 background: #e7555b;
             }
         }
     }
 }
</style>
