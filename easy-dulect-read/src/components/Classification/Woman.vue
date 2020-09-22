<template>
    <div class="Woman">
        <van-tree-select height="100%" :items="items"
                         :main-active-index.sync="active"
                         ref="vanTree"
        >
            <template #content>
                <AllCategories v-if="active === 0"
                               :Tag="womanTag"
                ></AllCategories>
                <MeScroll v-if="active === 1"
                          :Tag="'rank'"
                          :key="'rank'"
                          :CurrentRank="rankList.hotList"></MeScroll>
                <MeScroll v-if="active === 2"
                          :Tag="'end'"
                          :key="'end'"
                          :CurrentRank="rankList.endList"
                ></MeScroll>
                <MeScroll v-if="active === 3"
                          :Tag="'popularBook'"
                          :key="'popularBook'"
                          :CurrentRank="rankList.popularBook"
                ></MeScroll>
                <MeScroll v-if="active === 4"
                          :Tag="'nowHot'"
                          :key="'nowHot'"
                          :CurrentRank="rankList.hotSurge"
                ></MeScroll>
                <MeScroll v-if="active === 5"
                          :Tag="'newBook'"
                          :key="'newBook'"
                          :CurrentRank="rankList.newBookList"
                ></MeScroll>
                <ClassificationList v-if="active === 6"
                                    :ChannelType="'girl'"
                ></ClassificationList>
            </template>
        </van-tree-select>
    </div>
</template>

<script>
import Vue from 'vue'
import { TreeSelect } from 'vant'
import AllCategories from './AllCategories'
import MeScroll from '../MeScroll'
import ClassificationList from './ClassificationList'
import { getSelectionTag, AllGirl } from '../../api'
Vue.use(TreeSelect)
export default {
  name: 'Woman',
  created () {
    getSelectionTag()
      .then(data => {
        this.womanTag = data.Woman
      })
      .catch(err => {
        console.log(err)
      })

    AllGirl()
      .then(data => {
        console.log(data)
        const hotList = data[0].rank.concat(data[1].rank)
        const endList = data[0].end.concat(data[1].end)
        const newBookList = data[0].newBook.concat(data[1].newBook)
        const hotSurge = data[0].selectionBook.hotSurge.concat(data[1].selectionBook.hotSurge)
        const popularBook = data[0].selectionBook.popularBook.concat(data[1].selectionBook.popularBook)
        this.rankList.hotList = hotList
        this.rankList.endList = endList
        this.rankList.newBookList = newBookList
        this.rankList.hotSurge = hotSurge
        this.rankList.popularBook = popularBook
        console.log(this.rankList)
      })
      .catch(err => {
        console.log(err)
      })
  },
  mounted () {
    console.log('父组件创建完成')
  },
  updated () {
    // console.log(this.active)
  },
  watch: {
    active (n, o) {
      // console.log(n, o)
    }
  },
  data () {
    return {
      active: 0,
      items: [
        { text: '全部分类' },
        { text: '大热榜' },
        { text: '完结榜' },
        { text: '黑马榜' },
        { text: '热搜榜' },
        { text: '新书榜' },
        { text: '分类榜' }
      ],
      womanTag: [],
      rankList: {}
    }
  },
  components: {
    AllCategories,
    ClassificationList,
    MeScroll
  },
  methods: {
    VanTree (e) {
      console.log(e)
    }
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
        }
    }
}
</style>
