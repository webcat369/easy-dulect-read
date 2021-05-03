<template>
   <div class="TabBar" ref="tabbar">
       <ul>
               <router-link tag="li" class="item" to="/bookshelf">
                   <div ref="Bookshelf" class="Bookshelf icon"></div>
                   <p>书架</p>
               </router-link>
               <router-link tag="li" class="item" to="/bookstore">
                   <div ref="Bookstore"  class="Bookstore icon"></div>
                   <p>书城</p>
               </router-link>
               <router-link tag="li" class="item" to="/classification">
                   <div ref="Classification"  class="Classification icon"></div>
                   <p>分类</p>
               </router-link>
               <router-link tag="li" class="item" to="/personalcenter">
                   <div ref="PersonalCenter" class="PersonalCenter icon"></div>
                   <p>我的</p>
               </router-link>
       </ul>
   </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  name: 'TabBar',
  data: function () {
    return {
      value: [
        { title: 'recommend', id: 0 },
        { title: 'girl', id: 1 },
        { title: 'boy', id: 2 },
        { title: 'books', id: 3 }
      ],
      isRoute: ''
    }
  },
  methods: {
    ...mapActions([
      'setTabBarHeight'
    ])
  },
  computed: {
  },
  watch: {
  },
  created () {

  },
  mounted () {
  }
}
</script>

<style scoped lang="scss">
    @import "./../assets/css/variable";
    @import "./../assets/css/mixin";
.TabBar{
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index:99;
    /*background: #dddddd;*/
    background: #ffffff;
    ul{
        display:flex;
        justify-content: space-around;
        width: 100%;
        border-top: 1px solid #ccc;
        .item{
            display:flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 100px;
            height: 100px;
            background: #fff;
            padding-top: 5px;
            box-sizing: border-box;
            div{
                display: inline-block;
                width:50px;
                height:50px;
            }
            &:nth-of-type(1){
                .Bookshelf{
                    content: url("./../assets/images/Bookshelf_icon.png");

                }
            }
            &:nth-of-type(2){
                .Bookstore{
                    content: url("./../assets/images/Bookstore_icon.png");
                }
            }
            &:nth-of-type(3){
                .Classification{
                    content: url("./../assets/images/Classification_icon.png");
                }
            }
            &:nth-of-type(4){
                .PersonalCenter{
                    content: url("./../assets/images/PersonalCenter_icon.png");
                }
            }
            p{
                 //@include font_size($font_medium);
                font-size: 25px;
                 /*color: #ee9b9b;*/
                color: #3e3e3e;

            }
            &.router-link-active{
               &:nth-of-type(1){
                   .Bookshelf{
                       content: url("./../assets/images/Bookshelf_active.png");
                   }
               }
                &:nth-of-type(2){
                    .Bookstore{
                        content: url("./../assets/images/Bookstore_active.png");
                    }
                }
                &:nth-of-type(3){
                    .Classification{
                        content: url("./../assets/images/Classification_active.png");
                    }
                }
                &:nth-of-type(4){
                    .PersonalCenter{
                        content: url("./../assets/images/PersonalCenter_active.png");
                    }
                }
                p{
                    @include font_active_color();
                }
            }
        }
    }
}
</style>
