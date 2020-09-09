<template>
    <div class="recommend">
        <ScrollView ref="ScrollView">
            <div class="list" ref="list">
                <classic ref="classic"
                         :type="'recommend'"
                         :name="'classic'"
                ></classic>
                <HotList
                        :title="'全网大热榜'"
                        :hotList="recommendHotList"
                        :type="'recommend'"
                        :name="'recommendHotList'"
                ></HotList>
                <MustSeeList
                        :title="'必看言情'"
                        :mustSeeList="romantic"
                        :type="'recommend'"
                        :name="'romantic'"
                ></MustSeeList>
                <MustSeeList
                        :title="'必看爽文'"
                        :mustSeeList="feelWell"
                        :type="'recommend'"
                        :name="'feelWell'"
                ></MustSeeList>
                <List ref="show"
                      :type="'recommend'"
                      :name="'bookList'"
                ></List>
            </div>
        </ScrollView>
    </div>
</template>

<script>
import ScrollView from '../ScrollView'
import Classic from '../Module/Classic'
import MustSeeList from '../Module/MustSeeList'
import HotList from '../Module/HotList'
import List from '../Module/List'
import { mapGetters } from 'vuex'
import { getBookHotList, getMustSeeList } from '../../api'
export default {
  name: 'Recommend',
  data () {
    return {
      recommendHotList: [],
      romantic: [],
      feelWell: [],
      list: []
    }
  },
  components: {
    ScrollView,
    List,
    Classic,
    MustSeeList,
    HotList
  },
  created () {
    getMustSeeList()
      .then(data => {
        this.romantic = data.mustSeeList.romantic
        this.feelWell = data.mustSeeList.feelWell
      })
      .catch(err => {
        console.log(err)
      })
    getBookHotList()
      .then(data => {
        // console.log(data.hotList.recommendHotList.slice(0, 6))
        this.recommendHotList = data.hotList.recommendHotList.slice(0, 6)
        // console.log(this.hotList)
      })
      .catch(err => {
        console.log(err)
      })
  },
  mounted () {
    // 列表盒子高度
    const bottomHeight = window.innerHeight - this.TabBarHeight * 2
    this.$refs.ScrollView.scrolling((y) => {
      const listHeight = this.$refs.list.offsetHeight
      const scrollY = listHeight + y
      // console.log(listHeight, 'mounted')
      // console.log(y)
      if (Math.abs(bottomHeight - scrollY) < 10) {
        this.$refs.show.scrollMore()
      }
    })
  },
  computed: {
    ...mapGetters([
      'TabBarHeight'
    ])
  },
  methods: {
  }
}
</script>

<style scoped lang="scss">
.recommend{
    position: fixed;
    top: 100px;
    left: 0;
    right: 0;
    bottom:100px;
    background: #bed0e6;
    width: 100%;
    overflow: hidden;
    .list{
        /*height: 10000px;*/
    }
}
</style>
