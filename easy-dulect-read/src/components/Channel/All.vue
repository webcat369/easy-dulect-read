<template>
    <ScrollView ref="ScrollView">
        <div class="All" ref="All">
            <div class="select">
                <ul class="tag">
                    <li class="active" @click.stop="SelectionTag">全部</li>
                    <li v-for="(value,index) in channelStoryTag"
                        :key="index"
                        @click.stop="SelectionTag">{{value}}</li>
                </ul>
                <ul class="end">
                    <li class="active">全部</li>
                    <li>完结</li>
                    <li>连载</li>
                </ul>
                <ul class="words">
                    <li class="active">全部</li>
                    <li>50万字以下</li>
                    <li>50-100万字</li>
                    <li>100200万字</li>
                    <li>200万字以上</li>
                </ul>
                <ul>
                    <li class="active">按热度</li>
                    <li>按更新</li>
                    <li>按评分</li>
                    <li>新书</li>
                </ul>
            </div>
            <ScrollList ref="show"></ScrollList>
        </div>
    </ScrollView>
</template>

<script>
import ScrollView from '../ScrollView'
import ScrollList from '../Module/ScrollList'
import { mapGetters } from 'vuex'
export default {
  name: 'All',
  components: {
    ScrollView,
    ScrollList
  },
  data () {
    return {
      StoryTag: []
    }
  },
  props: {
    Height: {
      type: Number,
      default: 0,
      require: true
    }
  },
  computed: {
    ...mapGetters([
      'channelType',
      'channelTitle',
      'channelStoryTag'
    ])
  },
  methods: {
    SelectionTag () {
      this.$emit('switchTag')
    }
  },
  mounted () {
    // 列表盒子高度
    const topHeight = window.innerHeight - this.Height
    // console.log(bottomHeight)
    this.$refs.ScrollView.scrolling((y) => {
      const AllHeight = this.$refs.All.offsetHeight
      // console.log(AllHeight)
      const scrollY = AllHeight + y
      // console.log(scrollY, 'mounted')
      // console.log(y)
      if (Math.abs(topHeight - scrollY) < 10) {
        this.$refs.show.scrollMore()
      }
    })
    // 进入All页面就触发Channel的switchTag方法
    this.SelectionTag()
  }

}
</script>

<style scoped lang="scss">
.All{
    width: 100%;
    background: #fdfdfe;
    overflow: hidden;
    .select{
        width: 100%;
        /*height: 500px;*/
        margin: 0 auto;
        /*background: #e7555b;*/
        margin-bottom: 20px;
        border-bottom: 1px solid #cccccc;
        ul{
            width: 100%;
            /*background: #c2baee;*/
            display: flex;
            flex-wrap: wrap;
            padding: 10px 20px;
            box-sizing: border-box;
            li{
                height: 50px;
                line-height:20px;
                border-radius: 20px;
                margin: 10px 10px;
                padding: 15px 15px;
                box-sizing: border-box;
                text-align: center;
                font-size: 28px;
                color: #333333;
                &.active{
                    border: 2px solid #fa8100;
                    color: #d86c00;
                }
            }
        }
    }
    .list{
        width: 100%;
        background: #fdfdfe;
        .van-list{
            /*background: #70bfd3;*/
            .van-cell{
                position: relative;
                width: 90%;
                height: 210px;
                padding: 0;
                /*background: #ee9b9b;*/
                margin: 0 auto;
                margin-bottom: 35px;
                display: flex;
                justify-content: space-between;
                .cell-left{
                    width:25%;
                    /*background: #cccccc;*/
                    img{
                        display: inline-block;
                        height: 100%;
                        border-radius: 10px;
                    }
                    img[lazy="loading"] {
                        display: inline-block;
                        width: 100px;
                    }
                }
                .cell-right{
                    width: 70%;
                    /*background: #ffa74f;*/
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    .right-top{
                        width: 100%;
                        height: 50px;
                        /*background: #eeb7e4;*/
                        display: flex;
                        justify-content: space-between;
                        color: #333;
                        font-weight: revert;
                        p{
                            line-height: 50px;
                            &:nth-of-type(1){
                                font-size: 32px;
                            }
                            &:nth-of-type(2){
                                line-height: 40px;
                                font-size: 22px;
                                color: #ee9b9b;
                                i{
                                    font-size: 32px;
                                }
                            }
                        }
                    }
                    .right-middle{
                        width: 100%;
                        /*height: 80px;*/
                        text-overflow: ellipsis;
                        /*background: #93d9b1;*/
                        p{
                            line-height:40px;
                            box-sizing: border-box;
                            font-size: 30px;
                            color: #575757;
                            overflow:hidden;
                            text-overflow:ellipsis;
                            display:-webkit-box;  //将对象作为弹性伸缩盒子模型显示。
                            -webkit-box-orient:vertical; //从上到下垂直排列子元素（设置伸缩盒子的子元素排列方式
                            -webkit-line-clamp:2; //这个属性不是css的规范属性，需要组合上面两个属性，表示显示的行数。
                        }
                    }
                    .right-bottom{
                        width: 100%;
                        height: 50px;
                        line-height: 60px;
                        /*background: #3face2;*/
                        display: flex;
                        justify-content: space-between;
                        p{
                            font-size: 28px;
                            color: #575757;
                            &:nth-of-type(1){
                                box-sizing: border-box;
                                span{
                                    margin-right: 20px;
                                }
                            }
                            &:nth-of-type(2){
                                box-sizing: border-box;
                                span{
                                    display: inline-block;
                                    width: 110px;
                                    height: 30px;
                                    line-height:30px;
                                    font-size: 22px;
                                    text-align: center;
                                    border: 1px solid #575757;
                                    box-sizing: border-box;
                                    border-radius: 5px;
                                }
                            }
                        }
                    }
                }

            }
        }
        .more{
            width: 90%;
            height: 50px;
            margin: 0 auto;
            line-height: 50px;
            text-align: center;
            background: #ddd;
            color:#666;
            font-size: 23px;
        }
    }
}
</style>
