<template>
    <ScrollView ref="ScrollView">
        <div class="All" ref="All">
            <div class="select">
                <ul class="tag">
<!--                    <li class="active" @click.stop="SelectionTag">全部</li>-->
                    <li ref="tag"
                        v-for="(value,index) in channelStoryTag"
                        :key="index"
                        @click.stop="selectionTag(index,value)">{{value}}</li>
                </ul>
                <ul class="end">
                    <li ref="end"
                        v-for="(value,index) in end"
                        :key="index"
                        @click.stop="selectionEnd(index)">{{value}}</li>
                </ul>
                <ul class="words">
                    <li ref="words"
                        v-for="(value,index) in words"
                        :key="index"
                        @click.stop="selectionWords(index)">{{value}}</li>
                </ul>
                <ul class="type">
                    <li ref="type"
                        v-for="(value,index) in type"
                        :key="index"
                        @click.stop="selectionType(index)">{{value}}</li>
                </ul>
            </div>
            <ScrollList ref="show" :Channel="selectData" ></ScrollList>
        </div>
    </ScrollView>
</template>

<script>
import ScrollView from '../ScrollView'
import ScrollList from '../Module/ScrollList'
import { mapGetters, mapActions } from 'vuex'
import { filterBooks } from '../../api/index'
import selectBookApi from '../../api/selectBookApi'

export default {
  name: 'All',
  mounted () {
    this.selectionTag(0, '全部')
    // 方法是什么？函数
    // 在什么条件下调用？点击-调用，按下-调用，移动-调用，抬起-调用，滚动-调用，生命周期执行-调用
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
    this.$nextTick(() => {
      // console.log(this.$refs.tag[0])
      this.$refs.tag[0].classList.add('active')
      this.$refs.end[0].classList.add('active')
      this.$refs.words[0].classList.add('active')
      this.$refs.type[0].classList.add('active')
    })
  },
  components: {
    ScrollView,
    ScrollList
  },
  data () {
    return {
      StoryTag: [],
      currentTag: 0,
      currentEnd: 0,
      currentWords: 0,
      currentType: 0,
      end: ['全部', '连载', '完结'],
      words: ['全部', '50万字以下', '50-100万字', '100-200万字', '200万字以上'],
      type: ['按热度', '按更新', '按评分'],
      TagFlag: '',
      selectData: []
    }
  },
  watch: {
    currentTag (n, o) {
      this.$refs.tag[o].classList.remove('active')
      this.$refs.tag[n].classList.add('active')
    },
    currentEnd (n, o) {
      this.$refs.end[o].classList.remove('active')
      this.$refs.end[n].classList.add('active')
    },
    currentWords (n, o) {
      this.$refs.words[o].classList.remove('active')
      this.$refs.words[n].classList.add('active')
    },
    currentType  (n, o) {
      this.$refs.type[o].classList.remove('active')
      this.$refs.type[n].classList.add('active')
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
    ...mapActions([
      'setPageNum'
    ]),
    selectionTag (index = 0, value) {
      console.log('我执行了')
      // this.$emit('switchTag')
      const List = []
      console.log(List)
      this.currentTag = index
      this.setPageNum(1)
      switch (value) {
        case '全部':
          List.push(
            selectBookApi.getMarriageAndLove,
            selectBookApi.getPresidentWealthy,
            selectBookApi.getRebirthSpecialAbility
          )
          console.log(selectBookApi.getMarriageAndLove)
          break
        case '总裁豪门':
          List.push(selectBookApi.getPresidentWealthy)
          console.log(List)
          break
        case '重生异能':
          List.push(selectBookApi.getRebirthSpecialAbility)
          console.log(List)
          break
        case '婚恋爱情':
          List.push(selectBookApi.getMarriageAndLove)
          console.log(List)
          break
      }
      filterBooks(List).then(data => {
        this.selectData = []
        // console.log(data) // {presidentWealthy:[],marriageAndLove:[],rebirthSpecialAbility:[]}
        for (const key in data) {
          // console.log(key) presidentWealthy marriageAndLove rebirthSpecialAbility
          for (const item of data[key]) {
            this.selectData.push(item)
          }
        }
        // console.log(this.selectData)
      })
    },
    selectionEnd (id = 0) {
      // this.$emit('switchTag')
      this.currentEnd = id
    },
    selectionWords (id = 0) {
      // this.$emit('switchTag')
      this.currentWords = id
    },
    selectionType (id = 0) {
      // this.$emit('switchTag')
      this.currentType = id
    }
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
                border:2px solid transparent;
                line-height:30px;
                border-radius: 20px;
                margin: 10px 10px;
                padding: 5px 15px;
                text-align: center;
                font-size: 28px;
                color: #333333;
                box-sizing: border-box;
                /*background: #ee9b9b;*/
                &.active{
                    border: 2px solid #fa8100;
                    font-weight: bold;
                    box-sizing: border-box;
                    color: #e07500;
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
