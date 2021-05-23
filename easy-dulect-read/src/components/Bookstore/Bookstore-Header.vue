<template>
    <!--  书城头部选项卡  -->
      <div class="Bookstore-Header">
          <div class="Header" ref="header" :class="{'active': checkIndex === 0}">
              <div class="Header-left">
                <!--    点击顶部tab选项卡跳转：推荐、女生、男生、图书不同书城展示页   -->
                  <ul>
                    <!--   使用router-link标签的to属性进行跳转    -->
                      <router-link
                              tag="li"
                              ref="item"
                              :to="{path:'/bookstore/'+value.id}"
                              v-for="(value,index) in items"
                              :key="index"
                              @click.native="checkLi(index)"
                      >
                          {{value.content}}
                      </router-link>
                      <i :style="{transform:`translateX(${iWidths/2+checkIndex*iWidths}px) translateX(-50%)`}"></i>
                  </ul>
              </div>
              <div class="Header-right">
                  <p>
                      <i @click.stop="ShowPage"></i>
                  </p>
              </div>
          </div>
      </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'BookstoreHeader',
  data: function () {
    return {
      iWidths: 0,
      items: [
        { content: '推荐', id: 'recommend' },
        { content: '女生', id: 'girl' },
        { content: '男生', id: 'boy' },
        { content: '图书', id: 'books' }
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
      this.setShowPage(true)
    }
  },
  mounted () {
    // Vue.nextTick()作用：在下次dom更新循环结束之后，执行延迟回调。在修改数据之后立即使用这个方法，获得更新后的dom
    this.$nextTick(() => {
      this.iWidths = this.$refs.item[0].$el.offsetWidth
      // this.iWidths = this.$refs.item[0].offsetWidth
    })
    // console.log(this.$refs.header.style.background)
    this.checkIndex = this.$route.meta.index
  }
}
</script>

<style scoped lang="scss">
.Bookstore-Header{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: #ffce66;
    .Header{
        width: 100%;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #ccc;
        box-sizing: border-box;
        &.active{
            background: #ffce66;
        }
        .Header-left{
            ul{
                width:500px;
                height: 100px;
                line-height: 100px;
                display: flex;
                position: relative;
                overflow: hidden;
                margin-left: 15px;
                li{
                    flex: 1;
                    text-align: center;
                    color: rgba(70, 70, 70, 0.8);
                    font-size: 0.32rem;
                    font-weight: bold;
                    &.router-link-active {
                        /*color: #f0912e;*/
                        color: #fa8000;
                        font-size: 0.38rem;
                    }
                }
                i {
                    width: 0.6rem;
                    height: 0.05rem;
                    border-radius: 0.03rem;
                    background: #fa8000;
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
