const mongoose = require('mongoose')

//连接数据库
mongoose.connect('mongodb://localhost:27017/collect-book',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

//建立数据库数据表
const Schema = new mongoose.Schema({
    userId:{type:String},
    bookName:{type:String},
    bookId:{type:String},
    bookPic:{type:String},
    rateOfProgress:{type:String}
})

const collect = mongoose.model('collect',Schema)

//导出列表书单
module.exports = {collect}
