<template>
    <ScrollView ref="ScrollView">
        <div class="Selection">
            <div class="recommend">
                <div class="top">本期频道推荐</div>
                <ul class="bottom">
                   <li v-for="(value,index) in SelectionBook.recommendChannel"
                       :key="index"
                       @click.stop="ShowDetail(value)"
                   >
                       <img v-lazy="value.coverPicture" alt="">
                       <p>{{value.title}}</p>
                   </li>
                </ul>
            </div>
            <ExclusiveOriginal
                    :title="'新晋热门'"
                    :Channel="SelectionBook.nowHot"></ExclusiveOriginal>
            <ExclusiveOriginal
                    :title="'热度飙升中'"
                    :Channel="SelectionBook.hotSurge"></ExclusiveOriginal>
            <ExclusiveOriginal
                    :title="'人气新书'"
                    :Channel="SelectionBook.popularBook"></ExclusiveOriginal>
            <p class="end">轻悦读</p>
        </div>
    </ScrollView>
</template>

<script>
import ScrollView from '../ScrollView'
import ExclusiveOriginal from '../Module/ExclusiveOriginal'
import { mapActions } from 'vuex'
export default {
  name: 'Selection',
  components: {
    ScrollView,
    ExclusiveOriginal
  },
  props: {
    SelectionBook: {
      type: Object,
      default: () => {},
      require: true
    }
  },
  methods: {
    ...mapActions([
      'setShowDetail',
      'setCurrentBook'
    ]),
    ShowDetail (vaule) {
      // console.log(vaule)
      this.setShowDetail(true)
      this.setCurrentBook(vaule)
    }
  }
}
</script>

<style scoped lang="scss">
.Selection{
    width: 100%;
    overflow: hidden;
    background: #ffffff;
    .recommend{
        width: 100%;
        height: 450px;
        /*background: #fae34b;*/
        margin-top: 20px;
        .top{
            width: 90%;
            height: 100px;
            line-height: 100px;
            margin: 0 auto;
            /*background: #e7555b;*/
            font-size: 38px;
            font-weight: bold;
            color: #333333;
        }
        .bottom{
            width: 90%;
            height: 350px;
            /*background: #70bfd3;*/
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            li{
                width: 200px;
                height: 100%;
                /*background: #42b983;*/
                img{
                    width: 100%;
                    border-radius: 10px;
                }
                p{
                    width: 100%;
                    font-size: 28px;
                    color: #333333;
                    /*background: #dddddd;*/
                    margin-top: 10px;
                }
            }
        }
    }
    .end{
        width: 100%;
        height: 100px;
        font-size: 50px;
        text-align: center;
        line-height: 100px;
        color: #dddddd;
        margin-top: 20px;
    }
}
</style>
