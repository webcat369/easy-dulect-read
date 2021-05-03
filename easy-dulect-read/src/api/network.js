import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000'
// axios.defaults.baseURL = 'http://192.168.137.1:3000'
axios.defaults.timeout = 3000

// 添加请求拦截器
axios.interceptors.request.use((config) => {
  // 在发送请求之前做些什么
  return config
}, (error) => {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
axios.interceptors.response.use((response) => {
  // 对响应数据做点什么
  return response
}, (error) => {
  // 对响应错误做点什么
  return Promise.reject(error)
})

export default {
  get: function (path = '', data = {}) {
    return new Promise(function (resolve, reject) {
      axios.get(path, {
        params: data
      })
        .then(function (response) {
          resolve(response.data)
        })
        .catch(function (err) {
          console.log(err)
        })
    })
  },
  post: function (path = '', data = {}) {
    return new Promise(function (resolve, reject) {
      axios.post(path, data)
        .then(function (response) {
          resolve(response.data)
        })
        .catch(function (err) {
          console.log(err)
        })
    })
  },
  patch: function (path = '', data = {}) {
    return new Promise(function (resolve, reject) {
      axios.patch(path, data)
        .then(function (response) {
          resolve(response.data)
        })
        .catch(function (err) {
          console.log(err)
        })
    })
  },
  delete: function (path = '', data = {}) {
    return new Promise(function (resolve, reject) {
      axios.delete(path, data)
        .then(function (response) {
          resolve(response.data)
        })
        .catch(function (err) {
          console.log(err)
        })
    })
  },
  all: function (list) { // list:要发送哪些请求
    return new Promise(function (resolve, reject) {
      axios.all(list)
        .then(axios.spread(function (...result) { // ...result:将所有的结果都解构出来放在一个数组中
          resolve(result)
        }))
        .catch(function (err) {
          reject(err)
        })
    })
  }
}
