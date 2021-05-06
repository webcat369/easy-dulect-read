<template>
    <transition appear name="search">
        <div class="Channel">
            <div class="title" ref="title">
                <img @click="back" src="../assets/icon/back.svg"/>
                <p>{{channelTitle}}频道</p>
            </div>
            <div class="Tab">
                <van-tabs animated ref="tabs">
                    <van-tab title="精选">
                        <Selection ref="Selection"
                                   :SelectionBook="selectionBook"
                        ></Selection>
                    </van-tab>
                    <van-tab title="新书">
                        <NewBook ref="NewBook"
                                 :Height="Height"
                                 :Channel="newBook"
                        ></NewBook>
                    </van-tab>
                    <van-tab title="完结">
                        <End ref="End"
                             :Height="Height"
                             :Channel="end"
                        ></End>
                    </van-tab>
                    <van-tab title="排行">
                        <Rank ref="Rank"
                              :Height="Height"
                              :Channel="rank"
                        ></Rank>
                    </van-tab>
                    <van-tab title="全部">
                        <All ref="All"
                             :Height="Height"
                        > </All>
                    </van-tab>
                </van-tabs>
            </div>
        </div>
    </transition>
</template>

<script>
import Vue from 'vue'
import { Tab, Tabs } from 'vant'
import {
  getHighMarksNovel,
  getGirlModern,
  getGirlAncient,
  getBoyModern,
  getBoyAncient
} from '../api/index'
import { mapActions, mapGetters } from 'vuex'
import Selection from './Channel/Selection'
import NewBook from './Channel/NewBook'
import End from './Channel/End'
import Rank from './Channel/Rank'
import All from './Channel/All'
Vue.use(Tab)
Vue.use(Tabs)

export default {
  name: 'Channel',
  created () {
    getHighMarksNovel()
      .then(data => {
        this.highMarksNovel = data.highMarksNovel.girl
      })
      .catch(err => {
        console.log(err)
      })
  },
  mounted () {
    this.$nextTick(function () {
      // this.titleHeight = this.$refs.title.offsetHeight
      // this.tabsHeight = this.$refs.tabs.$el.offsetHeight
      this.Height = this.$refs.title.offsetHeight + this.$refs.tabs.$el.offsetHeight
      if (this.channelType === 'girl' && this.channelTitle === '现代言情') {
        this.setChannelStoryTag(this.girlModernStory)
        getGirlModern()
          .then(data => {
            this.selectionBook = data.selectionBook
            this.newBook = data.newBook
            this.end = data.end
            this.rank = data.rank
            console.log(data)
          })
          .catch(err => {
            console.log(err)
          })
      } else if (this.channelType === 'girl' && this.channelTitle === '古代言情') {
        this.setChannelStoryTag(this.girlAncientStory)
        getGirlAncient()
          .then(data => {
            this.selectionBook = data.selectionBook
            this.newBook = data.newBook
            this.end = data.end
            this.rank = data.rank
            console.log(data)
          })
          .catch(err => {
            console.log(err)
          })
      } else if (this.channelType === 'boy' && this.channelTitle === '现代言情') {
        this.setChannelStoryTag(this.boyModernStory)
        getBoyModern()
          .then(data => {
            this.selectionBook = data.selectionBook
            this.newBook = data.newBook
            this.end = data.end
            this.rank = data.rank
            console.log(data)
          })
          .catch(err => {
            console.log(err)
          })
      } else {
        this.setChannelStoryTag(this.boyAncientStory)
        getBoyAncient()
          .then(data => {
            this.selectionBook = data.selectionBook
            this.newBook = data.newBook
            this.end = data.end
            this.rank = data.rank
            console.log(data)
          })
          .catch(err => {
            console.log(err)
          })
      }
    })
  },
  components: {
    Selection,
    NewBook,
    End,
    Rank,
    All
  },
  data () {
    return {
      Height: 0,
      highMarksNovel: [],
      girlModernStory: ['全部', '总裁豪门', '重生异能', '婚恋爱情'],
      girlAncientStory: ['全部', '穿越时空', '种田经商', '宫闱宅斗', '幻想言情'],
      boyModernStory: ['全部', '都市高手', '游戏竞技', '科幻世界'],
      boyAncientStory: ['全部', '玄幻奇幻', '穿越时空', '武侠仙侠', '奇闻异事'],
      selectionBook: {},
      newBook: [],
      end: [],
      rank: []
    }
  },
  computed: {
    ...mapGetters([
      'channelType',
      'channelTitle'
    ])
  },
  methods: {
    ...mapActions([
      'setShowChannel',
      'setChannelStoryTag'
    ]),
    back () {
      // window.history.back()
      this.setShowChannel(false)
    }
  }
}
</script>

<style lang="scss">
.Channel{
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: 999;
    background: #fdfdfe;
    .title{
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
    .Tab{
        /*background: #ee9b9b;*/
        position: fixed;
        top: 100px;
        left: 0;
        right: 0;
        bottom: 0;
        .van-tabs{
            .van-tabs__wrap{
              height: 90px;
              .van-tabs__nav{
                  line-height:90px;
                  box-sizing: border-box;
                  .van-tab{
                      .van-tab__text{
                          width: 100%;
                          height: 90px;
                          line-height: 90px;
                          text-align: center;
                          /*background: #facc41;*/
                          font-size: 30px;
                      }
                  }
                  .van-tabs__line{
                      background-color: #fa8000;
                  }
              }
          }
            .van-tabs__content{
                position: fixed;
                top: 180px;
                left: 0;
                right: 0;
                bottom:0;
                background: #dddddd;
                .van-tab__pane-wrapper {
                    width: 100%;
                    height: 100%;
                    background: #333333;
                    .van-tab__pane{
                        width: 100%;
                        height: 100%;
                        background: #ffffff;
                    }
                }
            }
        }
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
