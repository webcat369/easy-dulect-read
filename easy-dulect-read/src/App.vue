<template>
  <div id="app">
      <TabBar></TabBar>
      <keep-alive>
          <router-view></router-view>
      </keep-alive>
      <Tips></Tips>
  </div>
</template>
<script>
import TabBar from './components/TabBar'
import Tips from './components/tool/tips'
export default {
  components: {
    TabBar,
    Tips
  }
}
</script>
<style lang="scss">

</style>
