<template>
    <ScrollView ref="ScrollView">
        <div class="Selection">
            <div class="recommend">
                <div class="top">本期频道推荐</div>
                <ul class="bottom">
                   <li>
                       <img src="https://cdn.wtzw.com/bookimg/public/images/cover/a3c6/f74b8ce07e3e37db5ad063ea96977308_360x480.jpg" alt="">
                       <p>登雀枝</p>
                   </li>
                   <li>
                       <img src="https://cdn.wtzw.com/bookimg/public/images/cover/a3c6/72b3859ad460a1d5f2a8979c78c78c22_360x480.jpg" alt="">
                       <p>神探仵作娇王妃</p>
                   </li>
                   <li>
                       <img src="https://cdn.wtzw.com/bookimg/public/images/cover/a3c6/7be9859fe2072e14a7e56aa26aafcf5a_360x480.jpg" alt="">
                       <p>冲喜娘子病娇夫冲喜娘子病娇夫</p>
                   </li>
                </ul>
            </div>
            <ExclusiveOriginal :title="'新晋热门'" :Channel="Channel"></ExclusiveOriginal>
            <ExclusiveOriginal :title="'热度飙升中'" :Channel="Channel"></ExclusiveOriginal>
            <ExclusiveOriginal :title="'人气新书'" :Channel="Channel"></ExclusiveOriginal>
            <p class="end">轻悦读</p>
        </div>
    </ScrollView>
</template>

<script>
import ScrollView from '../ScrollView'
import ExclusiveOriginal from '../Module/ExclusiveOriginal'
export default {
  name: 'Selection',
  components: {
    ScrollView,
    ExclusiveOriginal
  },
  props: {
    Channel: {
      type: Array,
      default: () => [],
      require: true
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
