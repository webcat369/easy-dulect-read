<template>
    <div class="girl">
        <ScrollView ref="ScrollView">
            <div class="list" >
                <div class="swipe">
                    <Swipe></Swipe>
                </div>
               <div class="classic">
                    <ul class="grid-two">
                        <router-link tag="li" to="/classification/woman">
                            <div class="grid-left">
                                <p>分类</p>
                                <p>古代/现言</p>
                            </div>
                            <div class="grid-right">
                                <img src="">
                            </div>
                        </router-link>
                        <router-link tag="li" to="/classification/woman">
                            <div class="grid-left">
                                <p>排行榜</p>
                                <p>每日更新</p>
                            </div>
                            <div class="grid-right">
                                <img src="">
                            </div>
                        </router-link>
                    </ul>
                    <ul class="grid-three">
                        <router-link tag="li" to="/classification/woman">
                            <div>
                                <p>完结</p>
                                <p>一次看到爽</p>
                            </div>
                        </router-link>
                        <router-link tag="li" to="/classification/woman">
                            <div>
                                <p>新书</p>
                                <p>27本新书上架</p>
                            </div>
                        </router-link>
                        <router-link tag="li" to="/classification/woman">
                            <div>
                                <p>独家</p>
                                <p>原创潜力大作</p>
                            </div>
                        </router-link>
                    </ul>
                </div>
                <HotList
                        :title="'今日大热榜'"
                        :hotList="girlHotList"
                        :type="'woman'"
                        :name="'girlHotList'"
                ></HotList>
                <ExclusiveOriginal
                        :title="'高分神作'"
                        :Channel="highMarksNovel"
                        :type="'girl'"
                        :name="'highMarksNovel'"
                >
                </ExclusiveOriginal>
                <ExclusiveOriginal
                        :title="'独家原创'"
                        :Channel="exclusiveOriginal"
                        :type="'girl'"
                        :name="'exclusiveOriginal'"
                >
                </ExclusiveOriginal>
                <div class="modules">
                    <MoreModules
                            :title="'总裁豪门'"
                            :type="'girl'"
                            :name="'presidentWealthy'"
                            :Channel="presidentWealthy.slice(0,8)"
                            :Only="presidentWealthy[8]"
                    ></MoreModules>
                </div>
                <div class="modules">
                    <MoreModules
                            :title="'重生异能'"
                            :type="'girl'"
                            :name="'rebirthSpecialAbility'"
                            :Channel="rebirthSpecialAbility.slice(0,8)"
                            :Only="rebirthSpecialAbility[8]"
                    ></MoreModules>
                </div>
                <div class="modules">
                    <MoreModules
                            :title="'穿越时空'"
                            :type="'girl'"
                            :name="'travelThroughTime'"
                            :Channel="travelThroughTime.slice(0,8)"
                            :Only="travelThroughTime[8]"
                    ></MoreModules>
                </div>
                <div class="modules">
                    <MoreModules
                            :title="'宫闱宅斗'"
                            :type="'girl'"
                            :name="'courtStruggle'"
                            :Channel="courtStruggle.slice(0,8)"
                            :Only="courtStruggle[8]"
                    ></MoreModules>
                </div>
                <div class="modules">
                    <MoreModules
                            :title="'种田经商'"
                            :type="'girl'"
                            :name="'farmingBusiness'"
                            :Channel="farmingBusiness.slice(0,8)"
                            :Only="farmingBusiness[8]"
                    ></MoreModules>
                </div>
                <div class="modules">
                    <MoreModules
                            :title="'婚恋爱情'"
                            :type="'girl'"
                            :name="'marriageAndLove'"
                            :Channel="marriageAndLove.slice(0,8)"
                            :Only="marriageAndLove[8]"
                    ></MoreModules>
                </div>
                <div class="modules">
                    <MoreModules
                            :title="'幻想言情'"
                            :type="'girl'"
                            :name="'fantasyRomance'"
                            :Channel="fantasyRomance.slice(0,8)"
                            :Only="fantasyRomance[8]"
                    ></MoreModules>
                </div>
                <div class="Placeholder">
                    免费小说 想看就看
                </div>
            </div>
        </ScrollView>
    </div>
</template>

<script>

/* 自定义滚动组件 */
import ScrollView from '../ScrollView'
/* swipe组件 */
import Swipe from '../Swipe'
/* 更多模块组件 */
import MoreModules from '../Module/MoreModules'
import HotList from '../Module/HotList'
import ExclusiveOriginal from '../Module/ExclusiveOriginal'
import {
  getHighMarksNovel,
  getExclusiveOriginal,
  getBookHotList,
  getPresidentWealthy,
  getRebirthSpecialAbility,
  getTravelThroughTime,
  getCourtStruggle,
  getFarmingBusiness,
  getMarriageAndLove,
  getFantasyRomance
} from '../../api/index'
export default {
  name: 'Girl',
  created () {
    getBookHotList()
      .then(data => {
        // console.log(data.hotList.girl.HotList.slice(0, 6))
        this.girlHotList = data.hotList.girl.HotList.slice(0, 6)
        // console.log(this.girlHotList)
      })
      .catch(err => {
        console.log(err)
      })
    getHighMarksNovel()
      .then(data => {
        this.highMarksNovel = data.highMarksNovel.girl
        // console.log(data.highMarksNovel.girl)
      })
      .catch(err => {
        console.log(err)
      })

    getExclusiveOriginal()
      .then(data => {
        this.exclusiveOriginal = data.exclusiveOriginal.girl
        // console.log(data.exclusiveOriginal.girl)
      })
      .catch(err => {
        console.log(err)
      })

    getPresidentWealthy()
      .then(data => {
        this.presidentWealthy = data.presidentWealthy
      })
      .catch(err => {
        console.log(err)
      })

    getRebirthSpecialAbility()
      .then(data => {
        this.rebirthSpecialAbility = data.rebirthSpecialAbility
      })
      .catch(err => {
        console.log(err)
      })

    getTravelThroughTime()
      .then(data => {
        this.travelThroughTime = data.travelThroughTime
      })
      .catch(err => {
        console.log(err)
      })

    getCourtStruggle()
      .then(data => {
        this.courtStruggle = data.courtStruggle
      })
      .catch(err => {
        console.log(err)
      })

    getFarmingBusiness()
      .then(data => {
        this.farmingBusiness = data.farmingBusiness
      })
      .catch(err => {
        console.log(err)
      })

    getMarriageAndLove()
      .then(data => {
        this.marriageAndLove = data.marriageAndLove
      })
      .catch(err => {
        console.log(err)
      })

    getFantasyRomance()
      .then(data => {
        this.fantasyRomance = data.fantasyRomance
      })
      .catch(err => {
        console.log(err)
      })
  },
  components: {
    ScrollView,
    MoreModules,
    Swipe,
    HotList,
    ExclusiveOriginal
  },
  data () {
    return {
      highMarksNovel: [],
      exclusiveOriginal: [],
      girlHotList: [],
      presidentWealthy: [],
      rebirthSpecialAbility: [],
      travelThroughTime: [],
      courtStruggle: [],
      farmingBusiness: [],
      marriageAndLove: [],
      fantasyRomance: []
    }
  }
}
</script>

<style scoped lang="scss">
.girl{
    position: fixed;
    top: 100px;
    left: 0;
    right: 0;
    bottom:100px;
    /*background: palegoldenrod;*/
    width: 100%;
    overflow: hidden;
    .list{
        .swipe{
            width: 100%;
            height: 280px;
            padding-top: 15px;
            box-sizing: border-box;
            /*background: #aebbdb;*/
        }
        .classic{
                width: 90%;
                /*background: #ee9b9b;*/
                margin: 30px auto;
                box-sizing: border-box;
                .grid-two{
                    display: flex;
                    justify-content: space-between;
                    li{
                        width: 330px;
                        height: 150px;
                        background: #c5d0f6;
                        margin-bottom: 10px;
                        border-radius: 20px;
                        display: flex;
                        justify-content: space-between;
                        &:nth-of-type(2){
                            background: #f6c1c3;
                            .grid-right{
                                img{
                                    background-image: url("https://cdn.wtzw.com/bookimg/public/images/cover/a3c6/0a4287c9a118c08a0c8dda0cb447ee33_360x480.jpg");
                                }
                            }
                        }
                        div{
                            width: 150px;
                            height: 150px;
                            /*background: #cccccc;*/
                        }
                        .grid-left{
                            p{
                                height: 50px;
                                /*background: #dddddd;*/
                                padding-left: 20px;
                                box-sizing: border-box;
                                &:nth-of-type(1){
                                    margin-top: 30px;
                                    font-size: 0.32rem;
                                    font-weight: bold;
                                    color: #333333;
                                }
                            }
                        }
                        .grid-right{
                            padding: 15px 20px;
                            box-sizing: border-box;
                            img{
                                width: 100px;
                                height: 120px;
                                border-radius: 10px;
                                background-size: cover;
                                background-image: url("https://cdn.wtzw.com/bookimg/public/images/cover/a3c6/f74b8ce07e3e37db5ad063ea96977308_360x480.jpg");
                            }
                        }
                    }
                }
                .grid-three{
                    display: flex;
                    justify-content: space-between;
                    li{
                        width: 250px;
                        height: 150px;
                        background: #f3d18f;
                        border-radius: 20px;
                        &:nth-of-type(1){
                            margin-right: 10px;
                        }
                        &:nth-of-type(2){
                            margin-right: 10px;
                        }
                        div{

                            p{
                                height: 50px;
                                padding-left: 20px;
                                /*background: #cccccc;*/
                                box-sizing: border-box;
                                &:nth-of-type(1){
                                    margin-top: 40px;
                                    font-size: 0.32rem;
                                    font-weight: bold;
                                    color: #333333;
                                }
                            }
                        }
                    }
                }
            }
        .modules{
           /*background: #d43c33;*/
            margin-top:30px;
        }
        .Placeholder{
            width: 100%;
            height: 100px;
            /*background: #e3e3e3;*/
            text-align: center;
            line-height: 80px;
            font-size: 32px;
            color: #c7c7c7;
        }
    }
}
</style>
