const {BookShelf} = require('../easy-dulect-read-db/userBookShelf')

//收藏
let classic = async (req,res)=>{
    const data = await BookShelf.findOne({
        userId:req.params.id
    })
    if (!data){
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
            msg:'恭喜你收藏了第一本书'
        })
    }else {
        let flag = false
        // 查询是否收藏过这本书
        for (let value of data.bookList){
            if (value.id === req.body.id){
                flag = true
                res.send({
                    msg:'您已经收藏过这本书啦~'
                })
            }
        }
        if (flag===false){
            const newList = data.bookList
            newList.push({
                id:req.body.id,
                name:req.body.name,
                author:req.body.author,
                picUrl:req.body.picUrl,
                progress:0
            })
            const upData = await BookShelf.findOneAndUpdate({
                userId:req.params.id
            },{
                userId:req.params.id,
                bookList:newList
            })
            res.send({
                msg:'收藏成功'
            })
        }
    }

}
//更新进度
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
// 获取用户收藏列表
let searchList = async (req,res)=>{
    const data = await BookShelf.findOne({
        userId:req.params.id
    })
    res.send({
        result:data.bookList
    })
}
module.exports = {classic,changeProgress, searchList}
