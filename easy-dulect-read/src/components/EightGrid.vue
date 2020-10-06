<template>
   <div class="eightGrid">
       <van-grid :column-num="4" :border="false">
<!--           :to="type+'/detail/'+value.id+'/'+name"-->
           <van-grid-item
                   v-for="(value , index) in Channel"
                   :key="index"
                   @click.stop="ShowDetail(value)"
           >
               <img class="van-image" v-lazy="value.coverPicture" />
               <div class="bookName">{{value.title}}</div>
           </van-grid-item>
       </van-grid>
   </div>
</template>

<script>
import Vue from 'vue'
import { Grid, GridItem, Lazyload } from 'vant'
import { mapActions } from 'vuex'
Vue.use(Grid)
Vue.use(GridItem)
Vue.use(Lazyload)
export default {
  name: 'EightGrid',
  props: {
    title: {
      type: String,
      default: '',
      require: true
    },
    // type: {
    //   type: String,
    //   default: '',
    //   require: true
    // },
    Channel: {
      type: Array,
      default: () => [],
      require: true
    }
    // name: {
    //   type: String,
    //   default: '',
    //   require: true
    // }
  },
  mounted () {
    // console.log(this.girlChannel)
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
  },
  created () {
  }
}
</script>

<style lang="scss">
.eightGrid{
    width: 100%;
    background: #ffffff;
    .van-grid{
        .van-grid-item{
            width: 100%;
            height: 100%;
            /*background: #fadd60;*/
            .van-grid-item__content{
                width:100%;
                height: 320px;
                position: relative;
                border: none;
                /*background: yellowgreen;*/
                padding: 0;
                .van-image{
                    width: 92%;
                    height: 210px;
                    border-radius: 10px;
                    overflow: hidden;
                    position: absolute;
                    top:10px;
                    /*background: #70bfd3;*/
                }
                img[lazy="loading"] {
                    width:95%;
                }
                .bookName{
                    width: 90%;
                    height: 80px;
                    font-size: 28px;
                    /*background: #ccc;*/
                    color: #333333;
                    position: absolute;
                    bottom: 0;
                }
            }
        }
    }
 }
</style>
