const {User} = require('../easy-dulect-read-db/userData')
let signUp = async (req,res) => {
    const user = await User.findOne({
        userName:req.body.userName
    })
    if (user) return res.send({msg:'用户名已存在'})
    // const udb = User.find()
    // const id = 1000 + udb.length
    const result = await User.create({
        userName:req.body.userName,
        userPassword:req.body.userPassword,
        userGender:req.body.userGender
    })
    res.send({
        msg:'注册成功'
    })
}
let signIn = async (req,res) =>{
    // 用户==请求==》服务器 ==请求==》数据库

    // 用户==请求==》饭店 ==请求==》饭 == 发送 ==》饭店 ==发送==》用户

    const dbUserName = await User.findOne({
        userName:req.body.userName
    })
    if (!dbUserName) res.send({msg:'用户名不正确'})
        //判断当前用户输入的密码是否是用户名所对应的密码
    if(req.body.userPassword !== dbUserName.userPassword){
        res.send({msg:'密码输入错误'})
    }
    res.send({
        msg:'登陆成功',
        userName:dbUserName.userName,
        userId:dbUserName._id
    })
}
module.exports = {signUp,signIn}

