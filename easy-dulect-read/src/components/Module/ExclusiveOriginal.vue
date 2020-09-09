<template>
    <div class="ExclusiveOriginal">
        <div class="header">
            <p>{{title}}</p>
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
Vue.use(Icon)
export default {
  name: 'ExclusiveOriginal',
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

  },
  created () {
  },
  mounted () {
  }
}
</script>

<style scoped lang="scss">
    .ExclusiveOriginal{
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
                /*line-height: 100px;*/
                font-size: 38px;
                font-weight: bold;
            }
        }
    }
</style>
