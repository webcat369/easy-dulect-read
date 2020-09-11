const express = require('express')
const bodyParser = require('body-parser')
const fs = require('fs')
const path = require('path')
const cors = require('cors')
const {signUp, signIn} = require('./api/signUp')

// const mongoose = require('mongoose')
// const {List} = require('./easy-dulect-read-db/list')
// const {Classic} = require('./easy-dulect-read-db/classic')
// const {HotList} = require('./easy-dulect-read-db/hotlist')
// const {ExclusiveOriginal} =require('./easy-dulect-read-db/exclusiveOriginal')

//创建express实例
const app = express()

//解决跨域问题的插件
app.use(cors())

// 允许express处理发送过来的json数据
app.use(express.json())
app.use(bodyParser.json())

//静态文件托管
app.use('/',express.static('public'))
app.use('/data',express.static('data'))

// 注册                                             ,
app.post('/user/signUp',signUp)
app.post('/user/signIn',signIn)

// 指定服务器监听端口
app.listen(3000,()=>{
    console.log('服务器http://localhost:3000已启动!');
});
