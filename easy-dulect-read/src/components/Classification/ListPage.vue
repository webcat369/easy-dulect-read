<template>
  <MeScroll ref="MeScroll" @getData='getData()'>
    <div class="item"
         v-for="(value,index) in dataList"
         :key="index"
         @click.stop="ShowDetail(value)"
    >
      <div class="left">
        <img v-lazy="value.coverPicture">
      </div>
      <div class="right">
        <div class="top">
          <p>{{value.title}}</p>
          <i v-if="index === 0"><img src="../../assets/icon/goldmedal.svg" alt=""></i>
          <i v-if="index === 1"><img src="../../assets/icon/silvermedal.svg" alt=""></i>
          <i v-if="index === 2"><img src="../../assets/icon/coppermedal.svg" alt=""></i>
          <i v-if="index > 2">{{index+1}}</i>
        </div>
        <div class="bottom">
          <p>{{value.tag}}</p>
          <p>{{value.popularity}}万热度</p>
        </div>
      </div>
    </div>
  </MeScroll>
</template>

<script>
import MeScroll from '../MeScroll'
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'ListPage',
  components: {
    MeScroll
  },
  props: {
    CurrentRank: {
      type: Array,
      default: () => [],
      require: true
    }
  },
  data () {
    return {
      page: {
        page: 1, // 当前页 默认0,回调之前会加1; 即callback(page)会从1开始
        pageSize: 10 // 每页数据条数,默认10
      },
      dataList: []
    }
  },
  computed: {
    ...mapGetters([
      'PageNum'
    ])
  },
  methods: {
    ...mapActions([
      'setShowDetail',
      'setCurrentBook'
    ]),
    ShowDetail (value) {
      this.setShowDetail(true)
      this.setCurrentBook(value)
    },
    getData () {
      if (this.page.page === 1) {
        this.dataList = []
      }
      this.dataList = [...this.CurrentRank]
      this.page.page += 1
      // 传递参数，本页的数据、是否有下一页
      this.$nextTick(() => {
        // 后台返回hasNextPage告知是否有下一页，或者前端这边自己判断
        this.$refs.MeScroll.mescroll.endSuccess(this.dataList.length)
      })
    }
  }
}
</script>

<style scoped lang="scss">
  MeScroll{
    height: auto;
    /*background: peachpuff;*/
    .item{
      width: 75%;
      height: 150px;
      /*background: #e7555b;*/
      display: flex;
      margin: 20px 18px;
      .left{
        width: 20%;
        height: 100%;
        /*background: #facc41;*/
        img{
          height: 100%;
          border-radius: 10px;
          box-shadow: 0 2px 5px 2px #c9c9ca;
        }
      }
      .right{
        width: 80%;
        height: 100%;
        /*background: #42b983;*/
        .top{
          width: 100%;
          height: 90px;
          /*background: #10eeeb;*/
          display: flex;
          justify-content: space-between;
          p{
            font-size: 32px;
            font-weight: bold;
            color: #333333;
            padding-top:10px;
            padding-left: 15px;
            box-sizing: border-box;
          }
          i{
            width: 50px;
            height: 50px;
            text-align: center;
            /*background: #cccccc;*/
            font-size: 28px;
            color: #efefef;
            font-weight: bold;
            img{
              display: inline-block;
              width: 50px;
              height: 50px;
            }
          }
        }
        .bottom{
          width: 100%;
          height: 60px;
          /*background: #cccccc;*/
          display: flex;
          justify-content: space-between;
          p{
            font-size: 24px;
            color: #d0d0d0;
            padding: 10px 15px;
            box-sizing: border-box;
          }
        }
      }
    }
  }
</style>
