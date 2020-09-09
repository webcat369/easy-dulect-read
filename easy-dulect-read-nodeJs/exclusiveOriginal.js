const mongoose = require("mongoose")

//连接数据库
mongoose.connect('mongodb://localhost:27017/recommend-list',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

//建立数据库数据表
const Schema = new mongoose.Schema({
    title:{type:String},
    coverPicture:{type:String},

})

const ExclusiveOriginal = mongoose.model('ExclusiveOriginal',Schema)

//导出列表书单
module.exports = {ExclusiveOriginal}
