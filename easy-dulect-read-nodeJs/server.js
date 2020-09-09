const express = require('express')
const bodyParser = require('body-parser')
const fs = require('fs')
// const mongoose = require('mongoose')
const {List} = require('./list')
const {Classic} = require('./Classic')
const {HotList} = require('./hotlist')
const {ExclusiveOriginal} =require('./exclusiveOriginal')

//创建express实例
const app = express()

//解决跨域问题的插件
app.use(require('cors')())

// 允许express处理发送过来的json数据
app.use(express.json())
app.use(bodyParser.json())

//静态文件托管
app.use('/public',express.static('public'))

//上传列表书单
app.post('/bookstore/recommend/list',async (req,res)=>{
    const data = req.body
    //插入数据
    await List.create({
        title:data.title,
        coverPicture:data.coverPicture,
        description:data.description,
        author:data.author,
        wordCount:data.wordCount,
        tag:data.tag,
        grade:data.grade
    });
    res.send({
        msg:'list数据存储成功'
    })
});

//上传经典小说列表
app.post('/bookstore/recommend/classic',async (req,res)=>{
    const data = req.body
    //插入数据
    await Classic.create({
        title:data.title,
        coverPicture:data.coverPicture
    })
    res.send({
        msg:'classic数据存储成功'
    })
})

//上传大热榜单
app.post('/bookstore/recommend/hotlist',async (req,res) =>{
    const data = req.body
    //插入数据
    await HotList.create({
        ranking:data.ranking,
        title:data.title,
        coverPicture:data.coverPicture,
        heat:data.heat
    })
    res.send({
        msg:'HotList数据存储成功'
    })
})

//上传独家原创
app.post('/bookstore/recommend/exclusiveoriginal',async (req,res) =>{
    const data = req.body
    //插入数据
    await ExclusiveOriginal.create({
        title:data.title,
        coverPicture:data.coverPicture,
    })
    res.send({
        msg:'ExclusiveOriginal数据存储成功'
    })
})
// 查询所有列表书单接口
app.get('/bookstore/recommend/list/all',async (req,res)=>{
    let data = await List.find()
    res.send(data)
})


app.delete('/bookstore/delete/all',async (req,res) =>{
    let data = await List.remove()
    res.send({
        msg:"删除成功"
    })
})

// 指定服务器监听端口
app.listen(3000,()=>{
    console.log('服务器http://localhost:3000已启动!');
});
