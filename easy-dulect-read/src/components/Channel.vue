<template>
    <transition appear name="search">
        <div class="Channel">
            <div class="title" ref="title">
                <img @click="back" src="../assets/icon/back.svg"/>
                <p>现代言情频道</p>
            </div>
            <div class="Tab">
                <van-tabs animated ref="tabs">
                    <van-tab title="精选">
                        <Selection ref="Selection"
                                   :Channel="highMarksNovel"
                        ></Selection>
                    </van-tab>
                    <van-tab title="新书">
                        <NewBook ref="NewBook"
                                 :Height="Height"
                        ></NewBook>
                    </van-tab>
                    <van-tab title="完结">
                        <End ref="End"
                             :Height="Height"
                        ></End>
                    </van-tab>
                    <van-tab title="排行">
                        <Rank ref="Rank"
                              :Height="Height"
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
import { getHighMarksNovel } from '../api/index'
import { mapActions } from 'vuex'
import Selection from './Channel/Selection'
import NewBook from './Channel/NewBook'
import End from './Channel/End'
import Rank from './Channel/Rank'
import All from './Channel/All'
Vue.use(Tab)
Vue.use(Tabs)

export default {
  name: 'Channel',
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
      highMarksNovel: []
    }
  },
  methods: {
    ...mapActions([
      'setShowChannel'
    ]),
    back () {
      // window.history.back()
      this.setShowChannel(false)
    }
  },
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
    })
    // console.log(this.$refs.title.offsetHeight)
    // console.log(this.$refs.tabs.$el.offsetHeight)
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
    background: #fdfdfe;
    .title{
        width: 100%;
        height: 100px;
        line-height: 100px;
        /*background: #42b983;*/
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
              height: 80px;
              .van-tabs__nav{
                  .van-tab{
                      .van-tab__text{
                          width: 100%;
                          height: 80px;
                          line-height: 80px;
                          text-align: center;
                          /*background: #facc41;*/
                          font-size: 30px;
                      }
                  }
                  .van-tabs__line{
                      background-color: #c2baee;
                  }
              }
          }
            .van-tabs__content{
                position: fixed;
                top: 180px;
                left: 0;
                right: 0;
                bottom: 0;
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
