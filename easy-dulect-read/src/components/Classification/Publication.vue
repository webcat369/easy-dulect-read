<template>
    <div class="Publication">
        <van-tree-select height="100%" :items="items" :main-active-index.sync="active">
            <template #content>
                <div class="allClassic" v-if="active === 0">
                    <AllCategories :Tag="publicationTag"></AllCategories>
                </div>
            </template>
        </van-tree-select>
    </div>
</template>

<script>
import Vue from 'vue'
import { TreeSelect } from 'vant'
import AllCategories from './AllCategories'
import { getSelectionTag } from '../../api'

Vue.use(TreeSelect)
export default {
  name: 'Publication',
  data () {
    return {
      active: 0,
      items: [
        { text: '全部分类' }
      ],
      publicationTag: []

    }
  },
  components: {
    AllCategories
  },
  created () {
    getSelectionTag()
      .then(data => {
        this.publicationTag = data.Publication
      })
      .catch(err => {
        console.log(err)
      })
  }
}
</script>

<style scoped lang="scss">
.Publication{
    position: fixed;
    top: 100px;
    left: 0;
    right: 0;
    bottom:100px;
    background: #10eeeb;
    width: 100%;
    .van-tree-select{
        .van-sidebar{
            flex: 0.5;
            .van-sidebar-item{
                width: 200px;
                height: 100px;
                line-height: 80px;
                font-size: 30px;
                .van-sidebar-item__text{
                    width: 100%;
                    height: 100%;
                }
            }
            .van-sidebar-item--select::before{
                position: absolute;
                top: 50%;
                left: 0;
                width: 0.06rem;
                height: 0.4rem;
                border-radius: 6px;
                background-color: #fa8000;
            }
        }
        .van-tree-select__content{

        }
    }
}
</style>
