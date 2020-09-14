<template>
    <div class="Publish">
        <div class="header">
            <p>{{title}}</p>
            <p>
                <span @click.stop="ShowChannel">更多</span>
                <van-icon name="arrow"/>
            </p>
        </div>
        <EightGrid
                :Channel="Channel"
                :type="type"
                :name="name"
        ></EightGrid>
    </div>
</template>

<script>
import { Icon } from 'vant'
import EightGrid from '../EightGrid'
import Vue from 'vue'
import { mapActions } from 'vuex'
Vue.use(Icon)
export default {
  name: 'Publish',
  components: {
    EightGrid
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
      'setScrollDetailPage'
    ]),
    ShowChannel () {
      this.setScrollDetailPage(true)
    }
  },
  created () {

  },
  mounted () {
  }
}
</script>

<style scoped lang="scss">
    .Publish{
        width: 90%;
        margin: 0 auto;
        border-radius: 20px;
        /*background: #93d9b1;*/
        margin-top: 30px;
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
    }
</style>
