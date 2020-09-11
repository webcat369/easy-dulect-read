<template>
    <div class="Classification-Header">
        <div class="Header"
             ref="header"
        >
            <div class="Header-left">
                <ul>
                    <router-link
                            tag="li"
                            ref="item"
                            :to="{path:'/classification/'+value.id}"
                            v-for="(value,index) in items"
                            :key="index"
                            @click.native="checkLi(index)"
                            :class="{'on': checkIndex === index}"
                    >
                        {{value.content}}
                    </router-link>
                    <i :style="{transform:`translateX(${iWidths/2+checkIndex*iWidths}px) translateX(-50%)`}"></i>
                </ul>
            </div>
            <div class="Header-right">
                <p>
<!--                    <router-link tag="i"-->
<!--                                 :to="{path: '/classification/' + this.items[this.checkIndex].id+'/search'}"-->
<!--                    ></router-link>-->
                    <i @click.stop="ShowPage"></i>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'ClassificationHeader',
  data: function () {
    return {
      iWidths: 0,
      items: [
        { content: '女生', id: 'woman' },
        { content: '男生', id: 'man' },
        { content: '图书', id: 'publication' }
      ],
      checkIndex: 0

    }
  },
  methods: {
    ...mapActions([
      'setShowPage'
    ]),
    checkLi (index) {
      this.checkIndex = index
    },
    ShowPage () {
      // console.log(this.showPage)
      this.setShowPage(true)
    }
  },
  mounted () {
    // Vue.nextTick()作用：在下次dom更新循环结束之后，执行延迟回调。在修改数据之后立即使用这个方法，获得更新后的dom
    this.$nextTick(() => {
      this.iWidths = this.$refs.item[0].$el.offsetWidth
      // this.iWidths = this.$refs.item[0].offsetWidth
    })
    this.checkIndex = this.$route.meta.index
  }
}
</script>

<style scoped lang="scss">
.Classification-Header{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99;
    background: #fdfdfe;
    .Header{
        width: 100%;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #ccc;
        box-sizing: border-box;
        .Header-left{
            ul{
                width:500px;
                height: 100px;
                /*background: #e7555b;*/
                line-height: 100px;
                display: flex;
                position: relative;
                overflow: hidden;
                margin-left: 100px;
                li{
                     flex: 1;
                     text-align: center;
                     color: rgba(70, 70, 70, 0.8);
                     font-size: 0.32rem;
                     font-weight: bold;
                     &.on {
                         color: #333333;
                         font-size: 0.38rem;
                     }
                }
                i {
                    width: 0.6rem;
                    height: 0.05rem;
                    border-radius: 0.03rem;
                    background: #ee9b9b;
                    bottom: 10px;
                    position: absolute;
                    transition: all 0.5s;
                }
            }
        }
        .Header-right{
            p{
                width: 80px;
                height: 100px;
                display: inline-block;
                /*background: yellow;*/
                i{
                    position: relative;
                    display: inline-block;
                    background-image: url("../../assets/images/search_large.png");
                    background-size: cover;
                    background-position: center;
                    /*background-color: #42b983;*/
                    width: 50px;
                    height: 50px;
                    top: 50%;
                    transform: translateY(-50%);
                    /*padding: 20px 20px;*/
                }
            }
        }
    }
}
</style>
