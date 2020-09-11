import Vue from 'vue'
import VueRouter from 'vue-router'
// import SignUp from '../views/SignUp'

// 如何实现Vue组件的'按需加载'(异步加载)
/* 书架界面 */
const Bookshelf = () => { // resolve是一个回调函数
  return new Promise((resolve, reject) => {
    // 通过import异步加载组件，加载成功就调用.then()的方法
    import('../views/Bookshelf').then((module) => { // method是加载成功后的组件
      // 通过resolve把加载成功的组件返回回去
      resolve(module)
    })
  })
}
/* 书城界面 */
const Bookstore = (resolve) => {
  import('../views/Bookstore').then((module) => {
    resolve(module)
  })
}
/* 分类界面 */
const Classification = (resolve) => {
  import('../views/Classification').then((module) => {
    resolve(module)
  })
}
/* 个人中心界面 */
const PersonalCenter = (resolve) => {
  import('../views/PersonalCenter').then((module) => {
    resolve(module)
  })
}
/* 书页界面 */
const DetailPage = (resolve) => {
  import('../views/DetailPage').then((module) => {
    resolve(module)
  })
}
const Recommend = () => { // resolve是一个回调函数
  return new Promise((resolve, reject) => {
    // 通过import异步加载组件，加载成功就调用.then()的方法
    import('../components/Bookstore/Recommend').then((module) => { // method是加载成功后的组件
      // 通过resolve把加载成功的组件返回回去
      resolve(module)
    })
  })
}
const Girl = () => { // resolve是一个回调函数
  return new Promise((resolve, reject) => {
    // 通过import异步加载组件，加载成功就调用.then()的方法
    import('../components/Bookstore/Girl').then((module) => { // method是加载成功后的组件
      // 通过resolve把加载成功的组件返回回去
      resolve(module)
    })
  })
}
const Boy = () => { // resolve是一个回调函数
  return new Promise((resolve, reject) => {
    // 通过import异步加载组件，加载成功就调用.then()的方法
    import('../components/Bookstore/Boy').then((module) => { // method是加载成功后的组件
      // 通过resolve把加载成功的组件返回回去
      resolve(module)
    })
  })
}
const Books = () => { // resolve是一个回调函数
  return new Promise((resolve, reject) => {
    // 通过import异步加载组件，加载成功就调用.then()的方法
    import('../components/Bookstore/Books').then((module) => { // method是加载成功后的组件
      // 通过resolve把加载成功的组件返回回去
      resolve(module)
    })
  })
}
const Woman = () => { // resolve是一个回调函数
  return new Promise((resolve, reject) => {
    // 通过import异步加载组件，加载成功就调用.then()的方法
    import('../components/Classification/Woman').then((module) => { // method是加载成功后的组件
      // 通过resolve把加载成功的组件返回回去
      resolve(module)
    })
  })
}
const Man = () => { // resolve是一个回调函数
  return new Promise((resolve, reject) => {
    // 通过import异步加载组件，加载成功就调用.then()的方法
    import('../components/Classification/Man').then((module) => { // method是加载成功后的组件
      // 通过resolve把加载成功的组件返回回去
      resolve(module)
    })
  })
}
const Publication = () => { // resolve是一个回调函数
  return new Promise((resolve, reject) => {
    // 通过import异步加载组件，加载成功就调用.then()的方法
    import('../views/SignUp').then((module) => { // method是加载成功后的组件
      // 通过resolve把加载成功的组件返回回去
      resolve(module)
    })
  })
}
const SignUp = () => { // resolve是一个回调函数
  return new Promise((resolve, reject) => {
    // 通过import异步加载组件，加载成功就调用.then()的方法
    import('../views/SignUp').then((module) => { // method是加载成功后的组件
      // 通过resolve把加载成功的组件返回回去
      resolve(module)
    })
  })
}
Vue.use(VueRouter)
/* 指定路由切换的规则 */
const routes = [
  // { path: '/', redirect: '/bookshelf' },
  { path: '/', redirect: '/bookshelf' },
  { path: '/bookshelf', component: Bookshelf },
  {
    path: '/bookstore',
    component: Bookstore,
    children: [
      { path: '/bookstore', redirect: 'recommend' },
      { path: 'recommend', component: Recommend, meta: { index: 0 } },
      { path: 'girl', component: Girl, meta: { index: 1 } },
      { path: 'boy', component: Boy, meta: { index: 2 } },
      { path: 'books', component: Books, meta: { index: 3 } }
    ]
  },
  {
    path: '/classification',
    component: Classification,
    children: [
      { path: '/classification', redirect: 'woman' },
      { path: 'woman', component: Woman, meta: { index: 0 } },
      { path: 'man', component: Man, meta: { index: 1 } },
      { path: 'publication', component: Publication, meta: { index: 2 } }
    ]
  },
  { path: '/personalcenter', component: PersonalCenter },
  { path: '/detailPage', component: DetailPage },
  { path: '/sign', component: SignUp }
  // { path: '/:module/:page/search', component: Search }
]

/* 根据自定义的切换的规则创建路由对象 */
const router = new VueRouter({
  // mode: 'history',
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
