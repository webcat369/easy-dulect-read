<template>
    <transition appear name="search">
        <div class="ScrollDetailPage">
            <div class="header" ref="header">
                <img @click.stop="back" src="../../assets/icon/back.svg"/>
                <p>{{selectTitle}}</p>
            </div>
            <div class="list" ref="list">
                <ScrollView ref="ScrollView">
                    <div class="box" ref="box">
                        <ScrollList ref="ScrollList"
                                    :Channel="DetailPage"></ScrollList>
                    </div>
                </ScrollView>
            </div>
            </div>
    </transition>
</template>

<script>
import ScrollList from './ScrollList'
import ScrollView from '../ScrollView'
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'ScrollDetailPage',
  components: {
    ScrollList,
    ScrollView
  },
  data () {
    return {
      DetailPage: []
    }
  },
  methods: {
    ...mapActions([
      'setScrollDetailPage',
      'setPageNum'
    ]),
    back () {
      this.setScrollDetailPage(false)
      // 进入返回按钮时，清除以前Vuex中保存ScrollList组件的'加载到第几页'
      this.setPageNum(0)
    }
  },
  computed: {
    ...mapGetters([
      'selectTag',
      'selectTitle',
      'currentWomanDetailPage',
      'currentManDetailPage',
      'currentPublicationDetailPage'
    ])
  },
  mounted () {
    console.log(this.currentWomanDetailPage)
    console.log(this.DetailPage)
    console.log(this.currentPublicationDetailPage)
    switch (this.selectTag) {
      // 女生
      case 'PresidentWealthy':
        this.DetailPage = this.currentWomanDetailPage.presidentWealthy
        console.log(this.DetailPage)
        break
      case 'RebirthSpecialAbility':
        this.DetailPage = this.currentWomanDetailPage.rebirthSpecialAbility
        break
      case 'MarriageAndLove':
        this.DetailPage = this.currentWomanDetailPage.marriageAndLove
        break
      case 'TravelThroughTime':
        this.DetailPage = this.currentWomanDetailPage.travelThroughTime
        break
      case 'FarmingBusiness':
        this.DetailPage = this.currentWomanDetailPage.farmingBusiness
        break
      case 'CourtStruggle':
        this.DetailPage = this.currentWomanDetailPage.courtStruggle
        break
      case 'FantasyRomance':
        this.DetailPage = this.currentWomanDetailPage.fantasyRomance
        break
    }
    switch (this.selectTag) {
      // 男生
      case 'urbanMaster':
        this.DetailPage = this.currentManDetailPage.urbanMaster
        break
      case 'gameCompetition':
        this.DetailPage = this.currentManDetailPage.gameCompetition
        break
      case 'scienceFictionWorld':
        this.DetailPage = this.currentManDetailPage.scienceFictionWorld
        break
      case 'superPower':
        this.DetailPage = this.currentManDetailPage.superPower
        break
      case 'mysterious':
        this.DetailPage = this.currentManDetailPage.mysterious
        break
      case 'throughHistory':
        this.DetailPage = this.currentManDetailPage.throughHistory
        break
      case 'martialArts':
        this.DetailPage = this.currentManDetailPage.martialArts
        break
      case 'incredibleStory':
        this.DetailPage = this.currentManDetailPage.incredibleStory
        break
    }
    switch (this.selectTag) {
      // 图书
      case 'filmWorks':
        this.DetailPage = this.currentPublicationDetailPage.filmWorks
        break
      case 'modernRomance':
        this.DetailPage = this.currentPublicationDetailPage.modernRomance
        break
      case 'ancientRomance':
        this.DetailPage = this.currentPublicationDetailPage.ancientRomance
        break
      case 'youthLiterature':
        this.DetailPage = this.currentPublicationDetailPage.youthLiterature
        break
      case 'suspenseReasoning':
        this.DetailPage = this.currentPublicationDetailPage.suspenseReasoning
        break
      case 'gongFuStory':
        this.DetailPage = this.currentPublicationDetailPage.gongFuStory
        break
      case 'scienceFuture':
        this.DetailPage = this.currentPublicationDetailPage.scienceFuture
        break
      case 'historyStory':
        this.DetailPage = this.currentPublicationDetailPage.historyStory
        break
      case 'modernLiterature':
        this.DetailPage = this.currentPublicationDetailPage.modernLiterature
        break
      case 'biography':
        this.DetailPage = this.currentPublicationDetailPage.biography
        break
      case 'classicLiterature':
        this.DetailPage = this.currentPublicationDetailPage.classicLiterature
        break
      case 'literatureArt':
        this.DetailPage = this.currentPublicationDetailPage.literatureArt
        break
      case 'humanitiesSocialScience':
        this.DetailPage = this.currentPublicationDetailPage.humanitiesSocialScience
        break
      case 'economicManagement':
        this.DetailPage = this.currentPublicationDetailPage.economicManagement
        break
    }
    // 列表盒子高度
    const ScrollListHeight = window.innerHeight - this.$refs.header.offsetHeight
    this.$refs.ScrollView.scrolling((y) => {
      const boxHeight = this.$refs.box.offsetHeight
      const scrollY = boxHeight + y
      if (Math.abs(ScrollListHeight - scrollY) <= 300) {
        this.$refs.ScrollList.scrollMore()
      }
      // console.log(y)
      // console.log(Math.abs(bottomHeight - scrollY))
    })
    // console.log(this.$refs.ScrollList.init())
  }
}
</script>

<style scoped  lang="scss">
.ScrollDetailPage{
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: 999;
    background: #f3f3f3;
    .header{
        width: 100%;
        height: 100px;
        line-height: 100px;
        background: #ffcb5d;
        display: flex;
        img{
            width: 60px;
            height: 60px;
            margin-top: 20px;
            margin-left: 25px;
        }
        p{
            font-size: 42px;
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
        }
    }
    .list{
        position: fixed;
        top: 100px;
        bottom: 0;
        left: 0;
        right: 0;
        /*background: #c2baee;*/
        overflow: hidden;
    }
}
</style>
<style lang="scss">
    .search-enter{
        transform:translateX(100%);
        /*opacity: 1;*/
    }
    .search-enter-to{
        transform:translateX(0%);
        /*opacity: 1;*/
    }
    .search-enter-active{
        /*用3s的时间过渡从显示开始到显示结束*/
        transition: transform 1s;
    }
    .search-leave{
        transform:translateX(0%);
        /*opacity: 0;*/
    }
    .search-leave-to{
        transform:translateX(100%);
        /*opacity: 0;*/
    }
    .search-leave-active{
        /*用3s的时间过渡从隐藏开始到隐藏结束*/
        transition: transform 0.5s;
    }
</style>
