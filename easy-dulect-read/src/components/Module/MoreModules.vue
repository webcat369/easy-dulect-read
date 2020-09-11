<template>
    <div class="more">
        <div class="header">
            <p>{{title}}</p>
            <p>
                <span  @click.stop="ShowChannel(type,title)">更多</span>
                <van-icon name="arrow"/>
            </p>
        </div>
        <div class="middle" @click.stop="ShowDetail(Only)">
            <div class="middle-left">
                <img v-lazy="Only.coverPicture" alt="">
            </div>
            <div class="middle-right">
                <p>
                    <span>{{Only.title}}</span>
                    <span> <i>{{Only.grade}}</i> 分</span>
                </p>
                <p>{{Only.description}}</p>
            </div>
        </div>
        <div class="bottom" >
            <EightGrid
                    :Channel="Channel"
                    :type="type"
                    :name="name"
            ></EightGrid>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
/* 宫格 */
import { Grid, GridItem, Image as VanImage, Icon } from 'vant'
import EightGrid from '../EightGrid'
import { mapActions } from 'vuex'
// import { getHighMarksNovel } from '../../api/index'
Vue.use(VanImage)
Vue.use(Grid)
Vue.use(Icon)
Vue.use(GridItem)
export default {
  name: 'MoreModules',
  components: {
    EightGrid
  },
  data () {
    return {
      items: ['现代言情', '古代言情']
    }
  },
  props: {
    title: {
      type: String,
      default: '',
      require: true
    },
    type: {
      type: String,
      default: '',
      require: true
    },
    Channel: {
      type: Array,
      default: () => [],
      require: true
    },
    Only: {
      type: Object,
      default: () => {
        return {
          coverPicture: '',
          title: '',
          grade: 0,
          description: ''
        }
      },
      require: true
    },
    name: {
      type: String,
      default: '',
      require: true
    }
  },
  methods: {
    ...mapActions([
      'setShowDetail',
      'setCurrentBook',
      'setShowChannel',
      'setChannelTitle'
    ]),
    ShowDetail (value) {
      // console.log(value)
      this.setShowDetail(true)
      this.setCurrentBook(value)
    },
    ShowChannel (type, title) {
      this.setShowChannel(true)
      console.log(type)
      if (type === 'girl') {
        if (title === '总裁豪门' || title === '重生异能' || title === '婚恋爱情') {
          this.setChannelTitle(this.items[0])
        }
        if (title === '穿越时空' || title === '宫闱宅斗' || title === '种田经商' || title === '幻想言情') {
          this.setChannelTitle(this.items[1])
        }
      }
      if (type === 'boy') {
        if (title === '异术超能' || title === '都市高手' || title === '游戏竞技' || title === '科幻世界') {
          this.setChannelTitle(this.items[0])
        }
        if (title === '玄幻奇幻' || title === '穿越历史' || title === '武侠仙侠' || title === '奇闻异事') {
          this.setChannelTitle(this.items[1])
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
    .more{
        width: 90%;
        margin: 0 auto;
        border-radius: 20px;
        background: #fff;
        .header{
            width: 100%;
            height: 100px;
            /*background: #42b983;*/
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 45px;
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
        .middle{
            width: 100%;
            height: 150px;
            background: #bed0e6;
            border-radius: 10px;
            position: relative;
            margin-bottom: 20px;
            .middle-left{
                width: 150px;
                height: 200px;
                position: absolute;
                bottom: 0;
                /*background: #fff;*/
                img{
                    display: inline-block;
                    width: 100%;
                    height: 100%;
                    border-radius: 10px;
                }
            }
            .middle-right{
                width: 500px;
                height: 150px;
                position: absolute;
                /*background:lightgreen;*/
                right: 0;
                p{
                    /*清晰度*/
                    transform: translate3d(0,0,0);
                    &:nth-of-type(1){
                        display: flex;
                        justify-content: space-between;
                        margin-top: 10px;
                        span{
                            &:nth-of-type(1){
                                font-size: 30px;
                                color: #333;
                            }
                            &:nth-of-type(2){
                                font-size: 0.22rem;
                                color: pink;
                                position: relative;
                                top: -5px;
                                i{
                                    font-size: 0.34rem;
                                }
                            }
                        }
                    }
                    &:nth-of-type(2){
                        transform: translate3d(0,0,0);
                        width: 100%;
                        /*height: 100px;*/
                        /*background: #c2baee;*/
                        margin-top: 8px;
                        font-size: 26px;
                        color: #757575;
                        overflow: hidden;
                        text-overflow:ellipsis;
                        display:-webkit-box;  //将对象作为弹性伸缩盒子模型显示。
                        -webkit-box-orient:vertical; //从上到下垂直排列子元素（设置伸缩盒子的子元素排列方式
                        -webkit-line-clamp:2; //这个属性不是css的规范属性，需要组合上面两个属性，表示显示的行数。
                    }
                }
            }
        }
        .bottom{
            width: 100%;
            background: #cccccc;
            margin-top: 20px;
            .van-grid{
                .van-grid-item{
                    width: 300px;
                    height: 300px;
                    /*background: yellowgreen;*/
                    .van-grid-item__content{
                        transform: translate3d(0,0,0);
                        position: relative;
                        .van-image{
                            border-radius: 10px;
                            overflow: hidden;
                            position: absolute;
                            top:10px;
                        }
                        .bookName{
                            width: 150px;
                            height: 80px;
                            font-size: 28px;
                            /*background: #ccc;*/
                            color: #333333;
                            position: absolute;
                            bottom: 15px;
                        }
                    }
                }
            }
        }

    }

</style>
