<template>
    <div class="MustSee">
        <div class="header">
            <p>{{title}}</p>
        </div>
        <div class="van-list"
             ref="list"
        >
            <div
                         class="van-cell"
                         v-for="(value,index) in mustSeeList"
                         :key="index"
                         @click.stop="ShowDetail(value)"
            >
                <div class="cell-left">
                    <img v-lazy="value.coverPicture" alt="">
                </div>
                <div class="cell-right">
                    <div class="right-top">
                        <p>{{value.title}}</p>
                        <p><i>{{value.grade}}</i> 分</p>
                    </div>
                    <div class="right-middle">
                        <p>{{value.description}}</p>
                    </div>
                    <div class="right-bottom">
                        <p>
                            <span>{{value.author}}</span>
                        </p>
                        <p>
                            <span>{{value.popularity}}万人气</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'MustSeeList',
  props: {
    title: {
      type: String,
      default: '',
      require: true
    },
    mustSeeList: {
      type: Array,
      default: () => [],
      require: true
    },
    type: {
      type: String,
      default: '',
      require: true
    },
    name: {
      type: String,
      default: '',
      require: true
    }
  },
  methods: {
    ...mapActions([
      'setShowDetail',
      'setCurrentBook'
    ]),
    ShowDetail (value) {
      console.log(value)
      this.setShowDetail(true)
      this.setCurrentBook(value)
    }
  }
}
</script>

<style scoped lang="scss">
.MustSee{
    width: 90%;
    margin: 0 auto;
    border-radius: 20px;
    /*background: #93d9b1;*/
    margin-top: 30px;
    .header{
        width: 100%;
        height: 100px;
        /*background: #42b983;*/
        line-height: 100px;
        p{
            font-size: 38px;
            font-weight: bold;
            color: #333333;
        }
    }
    .van-list{
        /*background: #70bfd3;*/
        .van-cell{
            position: relative;
            width: 100%;
            height: 210px;
            padding: 0;
            /*background: #ee9b9b;*/
            margin-bottom: 35px;
            display: flex;
            justify-content: space-between;
            .cell-left{
                width:25%;
                /*background: #cccccc;*/
                img{
                    display: inline-block;
                    height: 100%;
                    border-radius: 10px;
                }
                img[lazy="loading"] {
                    display: inline-block;
                    width: 100px;
                }
            }
            .cell-right{
                width: 70%;
                /*background: #ffa74f;*/
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                .right-top{
                    width: 100%;
                    height: 50px;
                    /*background: #eeb7e4;*/
                    display: flex;
                    justify-content: space-between;
                    color: #333;
                    font-weight: revert;
                    p{
                        line-height: 50px;
                        &:nth-of-type(1){
                            font-size: 32px;
                        }
                        &:nth-of-type(2){
                            line-height: 40px;
                            font-size: 22px;
                            color: #ee9b9b;
                            i{
                                font-size: 32px;
                            }
                        }
                    }
                }
                .right-middle{
                    width: 100%;
                    /*height: 80px;*/
                    text-overflow: ellipsis;
                    /*background: #93d9b1;*/
                    p{
                        line-height:40px;
                        box-sizing: border-box;
                        font-size: 30px;
                        color: #575757;
                        overflow:hidden;
                        text-overflow:ellipsis;
                        display:-webkit-box;  //将对象作为弹性伸缩盒子模型显示。
                        -webkit-box-orient:vertical; //从上到下垂直排列子元素（设置伸缩盒子的子元素排列方式
                        -webkit-line-clamp:2; //这个属性不是css的规范属性，需要组合上面两个属性，表示显示的行数。
                    }
                }
                .right-bottom{
                    width: 100%;
                    height: 50px;
                    line-height: 50px;
                    /*background: #3face2;*/
                    display: flex;
                    justify-content: space-between;
                    p{
                        font-size: 28px;
                        color: #575757;
                        &:nth-of-type(1){
                            box-sizing: border-box;
                            span{
                                margin-right: 20px;
                            }
                        }
                        &:nth-of-type(2){
                            box-sizing: border-box;
                            span{
                                display: inline-block;
                                width:100%;
                                height: 35px;
                                line-height:35px;
                                font-size: 24px;
                                text-align: center;
                                box-sizing: border-box;
                                border-radius: 5px;
                                color: #fa8000;
                                background: #facc41;
                            }
                        }
                    }
                }
            }

        }
    }
}
</style>
