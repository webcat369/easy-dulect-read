const mongoose = require('mongoose')

//连接数据库
mongoose.connect('mongodb://localhost:27017/user-data',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

//建立数据库数据表
const Schema = new mongoose.Schema({
    userId:{type:Number},
    bookCollectList:[{
        id:{type:Number},
        name:{type:String},
        author:{type:String},
        picUrl:{type:String},
        progress:{type:Number},
        collectTime:{type:String}
    }]
})
const BookCollect = mongoose.model('BookCollect',Schema)

//导出列表书单
module.exports = {BookCollect}
