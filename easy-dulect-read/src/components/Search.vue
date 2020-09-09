<template>
    <transition appear name="search">
        <div class="Search">
            <div class="top">
                <span @click.stop="ShowPage">
                    <img src="../assets/icon/back.svg" alt="">
                </span>
                <van-search
                        v-model="value"
                        show-action
                        placeholder="请输入书名、作者或主要人物"
                        @search="onSearch"
                >
                    <template #action>
                        <div @click="onSearch">搜索</div>
                    </template>
                </van-search>
            </div>
            <div class="box">
                <div class="hotSearch">
                    <p class="hopTop">热门搜索</p>
                    <ul class="hotBottom">
                        <li v-for="(value,index) in items" :key="index">
                            <p>{{index+1}}</p>
                            {{value}}
                        </li>
                    </ul>
                </div>
                <div class="history">
                    <div class="historyTop">
                        <p>搜索历史</p>
                        <img src="../assets/icon/delete.svg" alt="">
                    </div>
                    <div class="file">
                        <img src="../assets/icon/history.svg" alt="">
                        <p>爱你依旧</p>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
import Vue from 'vue'
import { Search } from 'vant'
import { mapActions, mapGetters } from 'vuex'

Vue.use(Search)
export default {
  name: 'Search',
  data () {
    return {
      value: '',
      items: ['一剑独尊', '神医毒妃不好惹', '六指诡医', '重生农家小娘子', '元龙', '凰妃倾天下', '神魂丹帝', '爱你是我难言的痛']
    }
  },
  computed: {
    ...mapGetters([
      'searchHistoryList'
    ])
  },
  methods: {
    ...mapActions([
      'setShowPage',
      'setSearchHistoryList'
    ]),
    ShowPage () {
      this.setShowPage(false)
    },
    onSearch () {
    }
  },
  beforeCreate () {
    console.log('创建前')
  },
  created () {
    console.log('创建完成')
  },
  beforeMount () {
    console.log('模板编译渲染之前')
  },
  mounted () {
    console.log('模板编译渲染完成')
  }
}
</script>

<style lang="scss">
.Search{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    z-index: 999;
    background: #fa816d;
    .top{
        width: 100%;
        height: 100px;
        background: #ffffff;
        display: flex;
        span{
            display: inline-block;
            width: 10%;
            height: 100%;
            /*background: #facc41;*/
            img{
                width: 60px;
                height: 60px;
                margin-top: 20px;
                margin-left: 15px;
            }
        }
        .van-search{
            width: 90%;
            height: 100%;
            /*background: #ee9b9b;*/
            .van-search__content{
                width: 100%;
                height: 70px;
                border-radius: 15px;
                overflow: hidden;
                .van-cell{
                    /*background: #facc41;*/
                    font-size: 28px;
                    .van-field__left-icon{
                        .van-icon-search::before{
                            width: 50px;
                            height: 60px;
                            line-height:60px;
                            font-size: 0.5rem;
                            /*background: #42b983;*/
                        }
                    }
                    .van-cell__value{
                        .van-field__body{
                            width: 100%;
                            height: 100%;
                            .van-field__control{
                                width: 100%;
                                height: 100%;
                                /*background: #e7555b;*/
                            }
                            i{
                                width: 30px;
                                height:50px;
                                line-height: 50px;
                                text-align: center;
                                font-size: 30px;
                                /*background: #c2baee;*/
                            }
                        }
                    }
                }
            }
            .van-search__action{
                width: 80px;
                height: 100%;
                /*background: #42b983;*/
                font-size: 30px;
                line-height: 80px;
                text-align: center;
            }
        }
    }
    .box{
        position: fixed;
        top: 100px;
        left: 0;
        right: 0;
        bottom: 0;
        background: #e6e6e6;
        .hotSearch{
            width: 100%;
            height: 400px;
            background: #ffffff;
            .hopTop{
                width: 95%;
                height: 80px;
                margin: 0 auto;
                /*background: #42b983;*/
                font-size: 28px;
                line-height: 80px;
                color: #dddddd;
            }
            .hotBottom{
                width: 95%;
                height: 320px;
                /*background: #ee9b9b;*/
                margin: 0 auto;
                display: flex;
                justify-content: space-between;
                flex-wrap: wrap;
                li{
                    width:300px;
                    height: 60px;
                    line-height: 60px;
                    /*background: #facc41;*/
                    display: flex;
                    font-size: 28px;
                    color: #333333;
                    p{
                        width: 40px;
                        height: 40px;
                        line-height: 40px;
                        text-align: center;
                        margin-top:10px;
                        background: #fa4531;
                        margin-right: 20px;
                        color:#ffffff;
                    }
                }
            }
        }
        .history{
            width: 100%;
            height:820px;
            background: #ffffff;
            margin-top: 20px;
            .historyTop{
                width: 95%;
                height: 60px;
                line-height: 60px;
                margin: 0 auto;
                /*background: #c2baee;*/
                display: flex;
                justify-content: space-between;
                p{
                    font-size: 26px;
                    color: #bfbfbf;
                }
                img{
                    width:40px;
                    height: 40px;
                    margin-top: 5px;
                }
            }
            .file{
                width: 100%;
                height: 80px;
                /*background: #ee9b9b;*/
                display: flex;
                margin: 10px 0;
                border-bottom: 1px solid #e4e4e4;
                img{
                    width: 40px;
                    height: 40px;
                    margin: 13px 15px;
                }
                p{
                    font-size: 28px;
                    color: #bfbfbf;
                    line-height:70px;
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
