const {BookCollect} = require('../easy-dulect-read-db/userBookCollect')
//加入收藏夹
let addCollect = async (req,res)=>{
    let collectList = req.body.collectList
    const data = await BookCollect.findOne({
        userId:req.params.id
    })
    // console.log(!data)
    if (!data){
        const newList = BookCollect.create({
            userId:req.params.id,
            bookCollectList:collectList
        })
        res.send({
            msg:'收藏成功'
        })
        // console.log(newList.bookCollectList)
    }
    else {
        let flag = false
        // 查询是否收藏过这本书
        for (let value of collectList){
            data.bookCollectList.forEach((v,i)=>{
                if (value.id === v.id){
                    flag = true
                    res.send({
                        msg:`您已经加入过《${value.name}》`
                    })
                }
            })
        }
        if (flag===false){
            const newList =data.bookCollectList
            // console.log(req.body.collectList)
            req.body.collectList.forEach((v,i)=>{
                newList.push(req.body.collectList[i])
            })

            const upData = await BookCollect.findOneAndUpdate({
                userId:req.params.id
            },{
                userId:req.params.id,
                bookCollectList:newList
            })
            res.send({
                msg:'收藏成功',
                success:true
            })
        }
    }

}
 //获取收藏夹数据
let getCollect = async (req,res)=>{
    const data = await BookCollect.findOne({
        userId:req.params.id
    })
    res.send({
        result:data.bookCollectList
    })
}
module.exports = {addCollect,getCollect}
