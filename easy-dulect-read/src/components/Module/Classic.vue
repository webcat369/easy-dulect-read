<template>
    <div class="classic" ref="classic">
        <div class="classic-external"></div>
        <div class="classic-inner">
            <div class="inner-top">
                <img src="../../assets/images/robot1.svg" alt="">
                <div class="title">
                    <i></i>
                    <p>经典小说 <span>免费看</span></p>
                    <i></i>
                </div>
            </div>
            <div class="inner-bottom">
                <div
                             class="book"
                             v-for="(value,index) in classic"
                             :key="index"
                             @click.stop="ShowDetail(value)"
                >
                    <img v-lazy="value.coverPicture" alt="">
                    <p>{{value.title}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { getBookClassic } from '../../api'
import { mapActions } from 'vuex'
export default {
  name: 'Classic',
  created () {
    getBookClassic().then(data => {
      // console.log(data.classic.slice(3))
      this.classic = data.classic.splice(0, 3)
    }).catch(err => console.log(err))
  },
  data () {
    return {
      classic: []
    }
  },
  props: {
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
  mounted () {

  },
  methods: {
    ...mapActions([
      'setShowDetail',
      'setCurrentBook'
    ]),
    ShowDetail (value) {
      // console.log(value)
      this.setShowDetail(true)
      this.setCurrentBook(value)
    }
  }
}
</script>

<style scoped lang="scss">
 .classic{
     width: 100%;
     height: 550px;
     /*background: #eee78b;*/
     position: relative;
     .classic-external{
         width: 100%;
         height: 200px;
         background: #f0d2d4;
     }
     .classic-inner{
         width: 100%;
         height: 550px;
         background: #f0d2d4;
         border-radius: 500px/90px;
         position: absolute;
         top: 0;
         .inner-top{
             width: 90%;
             height: 100px;
             /*background: #ee9b9b;*/
             position: absolute;
             top: 20px;
             left: 38px;
             img{
                 display: inline-block;
                 width:25%;
                 /*background: #fadd60;*/
                 position: absolute;
                 top: -15px;
                 left: -35px;
             }
             img[lazy="loading"] {
                 width: 25%;
             }
             .title{
                 width: 70%;
                 height: 100%;
                 line-height: 100px;
                 /*background: #70bfd3;*/
                 margin: 0 auto;
                 display: flex;
                 justify-content: space-between;
                 i{
                     width: 100px;
                     height: 2px;
                     background: #dddddd;
                      margin-top: 50px;
                 }
                 p{
                     /*background: #42b983;*/
                     font-size:34px;
                     color: #333333;
                     font-weight: bold;
                     span{
                         color: #e28f8f;
                     }
                 }
             }
         }
         .inner-bottom{
             width: 90%;
             height: 360px;
             /*background: #ee9b9b;*/
             position: absolute;
             top: 150px;
             left: 38px;
             display: flex;
             justify-content: space-between;
             .book{
                 width: 200px;
                 height: 100%;
                 /*background: #fadd60;*/
                 img{
                     width: 100%;
                     border-radius: 10px;
                 }
                 p{
                     width: 90%;
                     margin: 0 auto;
                     /*background: #42b983;*/
                     margin-top: 15px;
                     font-size: 28px;
                     color: #333333;

                 }
             }
         }
     }

 }
</style>
