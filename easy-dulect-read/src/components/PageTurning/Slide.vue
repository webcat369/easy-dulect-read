<template>
   <div class="Slide" ref="modeType">
       <MeScroll ref="MeScroll" @getData='getData'>
           <p class="item"
              ref="item"
              v-for="(value,index) in dataList"
              :key="index"
           >{{value}}</p>
           <div class="bottom" v-show="isShowBottom">
               <p class="PrePage" @click.stop="PrePage">上一章</p>
               <p class="NextPage" @click.stop="NextPage">下一章</p>
           </div>
       </MeScroll>
   </div>
</template>

<script>
import MeScroll from '../MeScroll'
import { changeProgress, Text } from '../../api/index'
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'Slide',
  components: {
    MeScroll
  },
  created () {
    this.ItemIndex = this.bookProgress
  },
  updated () {
    changeProgress(this.currentUser.userId, {
      id: this.currentBookId,
      progress: this.bookProgress
    })
      .then(data => {
        console.log(data.msg)
      })

    // console.log(this.currentUser.userId)
    // console.log(this.currentBookId)
    // console.log(this.bookProgress)
  },
  data () {
    return {
      page: {
        page: 1, // 当前页 默认0,回调之前会加1; 即callback(page)会从1开始
        pageSize: 10 // 每页数据条数,默认10
      },
      dataList: [],
      ItemIndex: 0,
      isShowLoading: false,
      totalLength: 0,
      isShowBottom: true
    }
  },
  computed: {
    ...mapGetters([
      'currentUser',
      'BookState',
      'bookProgress',
      'currentBookId'
    ])
  },
  watch: {
    currentBookState (newValue, oldValue) {
      console.log(newValue, oldValue)
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.$refs.MeScroll.getTop() // 返回页面保留原位置，路由需加keep-alive
    })
  },
  beforeRouteLeave (to, from, next) {
    this.$refs.MeScroll.setTop() // 离开页面记住位置，路由需加keep-alive
    next()
  },
  methods: {
    ...mapActions([
      'setTips',
      'setBookProgress'
    ]),
    getData () {
      if (this.page.page === 1) {
        this.dataList = []
      }
      Text()
        .then(data => {
          // console.log(data.text.length - 1)
          this.totalLength = data.text.length - 1
          const newList = data.text[this.bookProgress].contents.split('\n')
          // console.log(newList.length)
          this.dataList = newList
          // console.log(this.dataList)
          // 传递参数，本页的数据、是否有下一页
          this.$nextTick(() => {
            // 后台返回hasNextPage告知是否有下一页，或者前端这边自己判断
            this.$refs.MeScroll.mescroll.endSuccess(this.dataList.length, false)
          })
        })
        .catch(err => {
          if (this.ItemIndex >= this.totalLength) {
            console.log('最后一页')
          }
          console.log(err)
        })
    },
    // 上一页
    PrePage () {
      console.log('上一页')
      // 在没有数据的情况下，消除按钮的闪退问题
      this.isShowBottom = false
      setTimeout(() => {
        this.isShowBottom = true
      }, 300)
      // 当前是第一页时，没有前一页
      console.log(this.bookProgress)
      if (this.ItemIndex <= 1) {
        this.setBookProgress(1)
        this.setTips('当前是第一章')
      }

      this.ItemIndex = this.bookProgress - 1
      // console.log(this.ItemIndex) 0-26
      this.setBookProgress(this.ItemIndex)
      console.log(this.ItemIndex)
      this.$refs.MeScroll.mescroll.resetUpScroll(this.isShowLoading) // 重置列表为第一页
    },
    // 下一页
    NextPage () {
      console.log('下一页')
      // console.log(this.ItemIndex)
      // 在没有数据的情况下，消除按钮的闪退问题
      this.isShowBottom = false
      setTimeout(() => {
        this.isShowBottom = true
      }, 300)
      // 当前是最后一页时，没有下一页
      this.ItemIndex = this.bookProgress + 1
      // console.log(this.ItemIndex)  0-26
      this.setBookProgress(this.ItemIndex)
      if (this.ItemIndex >= this.totalLength) {
        this.setBookProgress(this.totalLength)
        this.setTips('当前是最后一章')
      }
      /*
      重置列表为第一页 (常用于列表筛选条件变化或切换菜单时重新刷新列表数据)内部实现:
      把page.num=1,再主动触发up.callback
          isShowLoading 是否显示进度布局;
          1.默认null,不传参,则显示上拉加载的进度布局
          2.传参true, 则显示下拉刷新的进度布局
          3.传参false,则不显示上拉和下拉的进度 (常用于静默更新列表数据)
       */
      this.$refs.MeScroll.mescroll.resetUpScroll(this.isShowLoading)
      // this.$refs.MeScroll.mescroll.scrollTo(0, 0)
      // this.$refs.MeScroll.mescroll.triggerDownScroll()
    }
  }
}
</script>

<style scoped lang="scss">
    @import "../../assets/css/variable";
    @import "../../assets/css/mixin";
.Slide{
    width: 100%;
    height: 100%;
    background: #3c3c3c;
    font-size:32px;
    color: #d1d1d1;
    .item{
        width: 95%;
        /*background: #aebbdb;*/
        height: auto;
        text-indent: 60px;
        letter-spacing:5px;
        margin: 0 auto;
        /*line-height: 50px;*/
        /*padding-top: 30px;*/
        @include line_height();
        &:nth-of-type(1){
            font-size: 40px;
            font-weight: bold;
        }
    }
    .bottom{
        width: 95%;
        margin: 0 auto;
        height: 100px;
        margin-top: 10px;
        /*background: #aebbdb;*/
        display: flex;
        justify-content: space-around;
        p{
            width: 150px;
            height: 80px;
            line-height: 80px;
            text-align: center;
            font-size: 32px;
            color: #d1d1d1;
            background: #424242;
        }
    }

}
</style>
