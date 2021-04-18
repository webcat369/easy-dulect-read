import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 安装 vue-lazyload 插件
import VueLazyload from 'vue-lazyload'
// 借助 fastclick 插件解决移动端100~300ms的点击事件延迟问题
import fastclick from 'fastclick'
import animated from 'animate.css'
// 导入初始化默认的全局样式
import './assets/css/base.scss'
// BUG监控工具Fundebug:https://www.fundebug.com/?utm_source=liao
// import * as fundebug from 'fundebug-javascript'
// import fundebugVue from 'fundebug-vue'
// fundebug.apikey = 'f6be99e650a39404548fcc622826da975a293e08d346c1a0880afac7fdc0e3c3'
// fundebugVue(fundebug, Vue)
Vue.use(animated)
fastclick.attach(document.body)
Vue.config.productionTip = false

Vue.use(VueLazyload, {
  preLoad: 1.3,
  attempt: 2,
  /* 可以通过loading来设置图片还未加载好之前的占位图片 */
  loading: require('./assets/icon/loading.png')
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
