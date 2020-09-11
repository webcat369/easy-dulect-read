const mongoose = require('mongoose')

//连接数据库
mongoose.connect('mongodb://localhost:27017/user-data',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

//建立数据库数据表
const Schema = new mongoose.Schema({
    userName:{type:String},
    userPassword:{type:String},
    userGender:{type:Number},
    userId:{type:Number}
})

const User = mongoose.model('user',Schema)

//导出列表书单
module.exports = {User}
