import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 借助 fastclick 插件解决移动端100~300ms的点击事件延迟问题
import fastclick from 'fastclick'
// 导入初始化默认的全局样式
import './assets/css/base.scss'

fastclick.attach(document.body)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
