<template>
  <div id="app">
      <TabBar></TabBar>
      <keep-alive>
          <router-view></router-view>
      </keep-alive>
      <Tips></Tips>
      <ul v-for="(f,index) of fList" :key="index">
        <li v-for="(s,i) of f.list" :key="i" :class="[`row${index}`,`clo${i}`]"></li>
      </ul>
  </div>
</template>
<script>
import TabBar from './components/TabBar'
import Tips from './components/tool/tips'
export default {
  components: {
    TabBar,
    Tips
  },
  methods: {
    add() {
      let res = 0;
      for(const i =0 ; i < userList.length;i++){
        res += +$(`clo0`).eq(i).text()
      }
    }
  }
}
</script>
<style lang="scss">

</style>
