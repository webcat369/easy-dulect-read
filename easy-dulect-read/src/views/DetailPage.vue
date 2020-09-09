<template>
   <div class="DetailPage" ref="DetailPage">
      <div class="Page">
          <button  @click="mouth">增加</button>
        <p v-for="(value,index) in currentText" :key="index" ref="word">
            {{value.text}}
        </p>
      </div>
   </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'DetailPage',
  methods: {
    ...mapActions([
      'setCurrentText'
    ]),
    mouth (e) {
      console.log(e.target)
      this.setCurrentText = this.currentText[0].text
      console.log(this.setCurrentText)
    }
  },
  data: function () {
    return {
      currentText: [
        {
          title: '楔子',
          text: '“狼巢，狼巢，独狼已跳伞！重复，独狼已跳伞！”\n\n    “狼巢收到！”\n\n    “狼巢，狼巢，装备仓放出！重复，装备仓放出！”\n\n    “狼巢收到！”\n\n    ……\n\n    “杀了我！”\n\n    脑海中突然传来了那个熟悉的飘渺的声音，独狼的眼前仿佛又看到了那双美丽的眼睛。\n\n    ……\n\n    “狼巢，独狼终端信号突然消失！独狼终端信号在半空中突然消失！”\n\n    “狼巢，装备仓信号突然消失！装备仓信号突然消失！”\n\n    ……\n'
        }
      ]
    }
  },
  mounted () {
    console.log(this.$refs.DetailPage.offsetHeight) // 2208
    // console.log(this.$refs.word.style)
  },
  computed: {
    ...mapGetters([
      'isCurrentText'
    ])
  }
}
</script>
<style scoped lang="scss">
   @import "./../assets/css/mixin";
   @import "./../assets/css/variable";
.DetailPage{
   position: fixed;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
   background: #42b983;

   //@include bg_sub_color();
   .Page{
      width: 100%;
      height: 100%;
       button{
           width: 100px;
           height: 100px;
       }
      p{
         width: 100%;
         background: #ee9b9b;
         line-height: 100px;
          text-indent:30px;
          /*设置字母之间的距离*/
          letter-spacing:10px;
          font-size: 40px;
          /*word-spacing:15px;*/
      }
   }
}
</style>
