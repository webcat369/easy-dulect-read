const express = require('express')

const app = express()

// 允许express处理发送过来的json数据
app.use(express.json())

//解决跨域问题
app.use(require('cors')())
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/express-test', {
    useNewUrlParser: true,
    useUnifiedTopology: true})
const Bookshelf = mongoose.model("Bookshelf",new mongoose.Schema({
    text:String
}))

//向数据库中录入多条数据
// Bookshelf.insertMany([
//     {text:'recommend'},
//     {text:'girl'},
//     {text:'boy'},
//     {text:'books'}
// ])

//静态文件托管
app.use('/',express.static('data'))
// app.use(express.static('public'))
// app.listen(90)

// const app2 =express()
//1.解决跨域问题,修改响应头
// app2.get('/',function (req,res) {
//     res.header('Access-Control-Allow-Origin','*')
//     res.send("你好")
// })

// 2.jsonp
// app2.get('/',function (req,res) {
//     let funName = req.query.callback
//     res.send(funName + "('你好')")
// })
// app2.listen(91)


app.get('/bookshelf', async function (req, res) {
    /*
    * find():查抄所有的记录
    * find().limit(2)只显示前两条
    * find().skip(2) 跳过前两条,只显示后面的
    * find().where({key:"XXX"}) 条件查询
    * find().sort({_id:1或-1}) 顺序或倒叙排列*/
    // const findData = await Bookshelf.find().where({text:'recommend'})
    const findData = await Bookshelf.find().sort({_id:-1})
    res.send(findData)
})
// app2.listen(92)

app.get('/bookstore', function (req, res) {
    res.send({page:'bookstore page'})
})

//查看
app.get('/bookshelf/:id',async function (req,res) {
    const data = await Bookshelf.findById(req.params.id)
    res.send(data)
})

//(增加)提交数据
app.post("/bookshelf",async function (req,res) {
    const data = req.body
    //插入数据
    const bookshelf = await Bookshelf.create(data)
    res.send(bookshelf)
})

//修改
app.put('/bookshelf/:id',async function (req,res) {
   const data = await Bookshelf.findById(req.params.id)
    data.text = req.body.text
    await  data.save()
    res.send(data)
})


//删除
app.delete("/bookshelf/:id",async function (req,res) {
    const data = await Bookshelf.findById(req.params.id)
    await data.remove()
    res.send({
        success:true
    })
})
// app.put('/write/data',async function (req,res) {
//         let data = req.query.obj
//         Bookshelf.create(data)
//         Bookshelf.save()
//          res.send({
//              msg:'数据保存成功'
//          })
// })


app.listen(3000,()=>{
    console.log('App listening on port 3000')
})
