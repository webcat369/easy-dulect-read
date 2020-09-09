<template>
    <div class="HotList">
        <div class="header">
            <p>{{title}}</p>
            <p>
                <span>更多</span>
                <van-icon name="arrow"/>
            </p>
        </div>
        <div class="bottom">
            <van-grid :column-num="2" direction="horizontal">
                <van-grid-item v-for="(value,index) in hotList"
                               :key="index"
                               @click.stop="ShowDetail(value)"
                               >
                    <img class="van-image" v-lazy="value.coverPicture" />
                    <i class="tagNumber">{{index+1}}</i>
                    <div class="bookName">
                        <p>{{value.title}}</p>
                        <p>{{value.popularity}}万热度</p>
                    </div>
                </van-grid-item>
            </van-grid>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
import { Grid, GridItem, Icon, Lazyload } from 'vant'
import { mapActions } from 'vuex'

Vue.use(Icon)
Vue.use(Grid)
Vue.use(GridItem)
Vue.use(Lazyload)
export default {
  name: 'HotList',
  props: {
    title: {
      type: String,
      default: '',
      require: true
    },
    hotList: {
      type: Array,
      default: () => [],
      require: true
    },
    type: {
      type: String,
      default: '',
      require: true
    },
    name: {
      type: String,
      default: '',
      require: true
    }
  },
  data () {
    return {
    }
  },
  methods: {
    ...mapActions([
      'setShowDetail',
      'setCurrentBook'
    ]),
    ShowDetail (value) {
      console.log(value)
      this.setShowDetail(true)
      this.setCurrentBook(value)
    }
  }
}
</script>

<style lang="scss">
.HotList{
    width: 90%;
    margin: 0 auto;
    border-radius: 20px;
    /*background:pink;*/
    margin-top: 10px;
    .header{
        width: 100%;
        height: 100px;
        /*background: #42b983;*/
        display: flex;
        justify-content: space-between;
        align-items: center;
        p{
            color: #333333;
            &:nth-of-type(1){
                /*line-height: 100px;*/
                font-size: 38px;
                font-weight: bold;
            }
            &:nth-of-type(2){
                display: flex;
                justify-content: space-between;
                align-items: center;
                /*background: #d43c33;*/
                font-size: 0.28rem;
                i{
                    border: 1px solid #333;
                    text-align: center;
                    box-sizing: border-box;
                    border-radius: 50%;
                    margin-left: 10px;
                    font-size: 25px;
                }
            }
        }
    }
    .bottom{
        width: 100%;
        position: relative;
        /*background: #fadd60;*/
        .van-grid{
            .van-grid-item{
                .van-grid-item__content{
                    width:100%;
                    height: 250px;
                    padding: 0;
                    /*background: #e7555b;*/
                    .van-image{
                        width: 100%;
                        border-radius: 10px;
                        overflow: hidden;
                    }
                    img[lazy="loading"] {
                        width: 100%;
                    }
                    .tagNumber{
                       position: absolute;
                        top: 12px;
                        left: 0;
                        width: 50px;
                        height: 30px;
                        text-align: center;
                        border-bottom-right-radius: 15px;
                        background: #fadd60;
                        font-size: 28px;
                        color: #333333;
                    }
                    .bookName{
                        width: 100%;
                        /*background: #fadd60;*/
                        display: flex;
                        flex-direction: column;
                        justify-content: space-around;
                        p{
                            margin-left: 10px;
                            width: 90%;
                            font-size: 28px;
                            color: #333333;
                            /*background: #70bfd3;*/
                            &:nth-of-type(2){
                                font-size: 26px;
                                color: #e7555b;
                            }
                        }
                    }
                }

            }
        }

    }
}
</style>
