const {BookShelf} = require('../easy-dulect-read-db/userBookShelf')

let classic = async (req,res)=>{  //加入书架接口
    // 寻找用户id
    const data = await BookShelf.findOne({
        userId:req.params.id
    })
    if (!data){
        // 未找到用户id,在数据书架集合中新增该用户加入的第一本书单信息，并返回提示信息
       const newList = BookShelf.create({
           userId:req.params.id,
           bookList:[{
               id:req.body.id,
               name:req.body.name,
               author:req.body.author,
               picUrl:req.body.picUrl,
               progress:0
           }]
       })
        res.send({
            msg:'恭喜你加入了第一本书'
        })
    }else {
        let flag = false
        // 查询是否收藏过这本书
        for (let value of data.bookList){
            // 若收藏过这本书需要也需要返回提示信息
            if (value.id === req.body.id){
                flag = true
                res.send({
                    msg:'您已经加入过这本书啦~'
                })
            }
        }
        if (flag===false){
            // 判断该用户下已经收藏过书单，再次信息书单需要给bookList信息书单信息
            const newList = data.bookList
            newList.push({
                id:req.body.id,
                name:req.body.name,
                author:req.body.author,
                picUrl:req.body.picUrl,
                progress:0
            })
            // 将bookList书单列表更新到数据库
            const upData = await BookShelf.findOneAndUpdate({
                userId:req.params.id
            },{
                userId:req.params.id,
                bookList:newList
            })
            res.send({
                msg:'加入书架成功'
            })
        }
    }
}

//更新阅读器进度
let changeProgress = async (req,res)=>{
    // 找到当前用户的数据
    const data = await BookShelf.findOne({
        userId:req.params.id
    })
    // 找到用户要修改进度的书
    for (let value of data.bookList){
        if (value.id === req.body.id){
            // 将data.bookList这个数组更新
                //value.id=req.body.id,
                value.progress = req.body.progress
        }
        const upData = await BookShelf.findOneAndUpdate({
            userId:req.params.id
        },{
            bookList:data.bookList
        })
        res.send({
            msg:'进度更新成功'
        })
    }
}
// 获取用户书架列表
let searchList = async (req,res)=>{
    const data = await BookShelf.findOne({
        userId:req.params.id
    })
    res.send({
        result:data.bookList
    })
}
//删除书架中的书单
let deleteBooks = async (req,res) => {
    const data = await BookShelf.findOne({
        userId:req.params.id
    })

    // console.log(req.body.idList)
    req.body.idList.forEach((value,index)=>{
        // console.log(value)
        data.bookList.forEach((v,i) =>{
            // console.log(v);
            if(value.id === v.id){
                v.remove()
            }
        })
    })
    const updateBooks = await BookShelf.findOneAndUpdate({
        userId:req.params.id
    },{
        bookList:data.bookList
    })
    res.send({
        msg:'删除书单成功',
        success:true
    })
}
module.exports = {classic,changeProgress, searchList,deleteBooks}
