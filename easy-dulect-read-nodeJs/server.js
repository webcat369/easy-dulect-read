const express = require('express')
const bodyParser = require('body-parser')
const fs = require('fs')
const path = require('path')
const cors = require('cors')
const {signUp, signIn,changeUserName,changeGender,changeAvatar} = require('./api/signUp')
const {classic,changeProgress, searchList} = require('./api/bookShelf')

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
//修改昵称
app.patch('/user/changeUserName/:id',changeUserName)
//修改性别
app.patch('/user/changeGender/:id',changeGender)
//修改头像
app.patch('/user/changeAvatar/:id',changeAvatar)

//加入书架
app.patch('/user/classic/:id',classic)
//更新观看进度
app.patch('/user/changeProgress/:id',changeProgress)
//获取用户加入书架的书
app.get('/user/searchList/:id',searchList)

// 指定服务器监听端口
app.listen(3000,()=>{
    console.log('服务器http://localhost:3000已启动!');
});
