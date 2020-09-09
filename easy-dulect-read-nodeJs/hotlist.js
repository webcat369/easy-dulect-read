const mongoose = require("mongoose")

//连接数据库
mongoose.connect('mongodb://localhost:27017/recommend-list',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

//建立数据库数据表
const Schema = new mongoose.Schema({
    ranking:{type:Number},
    title:{type:String},
    coverPicture:{type:String},
    heat:{type:Number}

})

const HotList = mongoose.model('HotList',Schema)

//导出列表书单
module.exports = {HotList}
