<template>
  <div class="boy">
    <ScrollView>
      <div class="list" >
        <Swipe></Swipe>
        <div class="classic">
          <ul class="grid-two">
            <router-link tag="li" to="/classification/man">
              <div class="grid-left">
                <p>分类</p>
                <p>古代/现言</p>
              </div>
              <div class="grid-right">
                <img src="">
              </div>
            </router-link>
            <router-link tag="li" to="/classification/man">
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
            <router-link tag="li" to="/classification/man">
              <div>
                <p>完结</p>
                <p>一次看到爽</p>
              </div>
            </router-link>
            <router-link tag="li" to="/classification/man">
              <div>
                <p>新书</p>
                <p>27本新书上架</p>
              </div>
            </router-link>
            <router-link tag="li" to="/classification/man">
              <div>
                <p>独家</p>
                <p>原创潜力大作</p>
              </div>
            </router-link>
          </ul>
        </div>
        <HotList
                :title="'今日大热榜'"
                :hotList="boyHotList"
                :type="'man'"
                :name="'boyHotList'"
        ></HotList>
        <ExclusiveOriginal
                :title="'高分神作'"
                :Channel="highMarksNovel"
                :type="'boy'"
                :name="'highMarksNovel'"
        ></ExclusiveOriginal>
        <ExclusiveOriginal
                :title="'独家原创'"
                :Channel="exclusiveOriginal"
                :type="'boy'"
                :name="'exclusiveOriginal'"
        ></ExclusiveOriginal>
        <div class="modules">
          <MoreModules
                  :title="'异术超能'"
                  :type="'boy'"
                  :name="'superPower'"
                  :Channel="superPower.slice(0,8)"
                  :Only="superPower[8]"
          ></MoreModules>
        </div>
        <div class="modules">
          <MoreModules
                  :title="'玄幻奇幻'"
                  :type="'boy'"
                  :name="'mysterious'"
                  :Channel="mysterious.slice(0,8)"
                  :Only="mysterious[8]"
          ></MoreModules>
        </div>
        <div class="modules">
          <MoreModules
                  :title="'都市高手'"
                  :type="'boy'"
                  :name="'urbanMaster'"
                  :Channel="urbanMaster.slice(0,8)"
                  :Only="urbanMaster[8]"
          ></MoreModules>
        </div>
        <div class="modules">
          <MoreModules
                  :title="'奇闻异事'"
                  :type="'boy'"
                  :name="'incredibleStory'"
                  :Channel="incredibleStory.slice(0,8)"
                  :Only="incredibleStory[8]"
          ></MoreModules>
        </div>
        <div class="modules">
          <MoreModules
                  :title="'穿越历史'"
                  :type="'boy'"
                  :name="'throughHistory'"
                  :Channel="throughHistory.slice(0,8)"
                  :Only="throughHistory[8]"
          ></MoreModules>
        </div>
        <div class="modules">
          <MoreModules
                  :title="'游戏竞技'"
                  :type="'boy'"
                  :name="'gameCompetition'"
                  :Channel="gameCompetition.slice(0,8)"
                  :Only="gameCompetition[8]"
          ></MoreModules>
        </div>
        <div class="modules">
          <MoreModules
                  :title="'武侠仙侠'"
                  :type="'boy'"
                  :name="'martialArts'"
                  :Channel="martialArts.slice(0,8)"
                  :Only="martialArts[8]"
          ></MoreModules>
        </div>
        <div class="modules">
          <MoreModules
                  :title="'科幻世界'"
                  :type="'boy'"
                  :name="'scienceFictionWorld'"
                  :Channel="scienceFictionWorld.slice(0,8)"
                  :Only="scienceFictionWorld[8]"
          ></MoreModules>
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
  getBookHotList,
  getExclusiveOriginal,
  getHighMarksNovel,
  getSuperPower,
  getMysterious,
  getUrbanMaster,
  getIncredibleStory,
  getThroughHistory,
  getGameCompetition,
  getMartialArts,
  getScienceFictionWorld
} from '../../api/index'
export default {
  name: 'Boy',
  components: {
    ScrollView,
    Swipe,
    MoreModules,
    HotList,
    ExclusiveOriginal
  },
  data () {
    return {
      highMarksNovel: [],
      exclusiveOriginal: [],
      boyHotList: [],
      superPower: [],
      mysterious: [],
      urbanMaster: [],
      incredibleStory: [],
      throughHistory: [],
      gameCompetition: [],
      martialArts: [],
      scienceFictionWorld: []
    }
  },
  methods: {
  },
  created () {
    getBookHotList()
      .then(data => {
        // console.log(data.hotList.boy.HotList.slice(0, 6))
        this.boyHotList = data.hotList.boy.HotList.slice(0, 6)
        // console.log(this.boyHotList)
      })
      .catch(err => {
        console.log(err)
      })
    getHighMarksNovel()
      .then(data => {
        this.highMarksNovel = data.highMarksNovel.boy
        // console.log(data.highMarksNovel.boy)
      })
      .catch(err => {
        console.log(err)
      })

    getExclusiveOriginal()
      .then(data => {
        this.exclusiveOriginal = data.exclusiveOriginal.boy
        // console.log(data.exclusiveOriginal.boy)
      })
      .catch(err => {
        console.log(err)
      })
    getSuperPower()
      .then(data => {
        this.superPower = data.superPower
        // console.log(data.exclusiveOriginal.boy)
      })
      .catch(err => {
        console.log(err)
      })

    getMysterious()
      .then(data => {
        this.mysterious = data.mysterious
        // console.log(data.mysterious)
      })
      .catch(err => {
        console.log(err)
      })

    getUrbanMaster()
      .then(data => {
        this.urbanMaster = data.urbanMaster
        // console.log(data.urbanMaster)
      })
      .catch(err => {
        console.log(err)
      })

    getIncredibleStory()
      .then(data => {
        this.incredibleStory = data.incredibleStory
        // console.log(data.incredibleStory)
      })
      .catch(err => {
        console.log(err)
      })

    getThroughHistory()
      .then(data => {
        this.throughHistory = data.throughHistory
        // console.log(data.throughHistory)
      })
      .catch(err => {
        console.log(err)
      })

    getGameCompetition()
      .then(data => {
        this.gameCompetition = data.gameCompetition
        // console.log(data.gameCompetition)
      })
      .catch(err => {
        console.log(err)
      })

    getMartialArts()
      .then(data => {
        this.martialArts = data.martialArts
        // console.log(data.martialArts)
      })
      .catch(err => {
        console.log(err)
      })

    getScienceFictionWorld()
      .then(data => {
        this.scienceFictionWorld = data.scienceFictionWorld
        // console.log(data.scienceFictionWorld)
      })
      .catch(err => {
        console.log(err)
      })
  }
}
</script>

<style scoped lang="scss">
  .boy{
    position: fixed;
    top: 100px;
    left: 0;
    right: 0;
    bottom:100px;
    /*background: palegoldenrod;*/
    width: 100%;
    overflow: hidden;
    .list{
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
            background: #c2baee;
            margin-bottom: 10px;
            border-radius: 20px;
            display: flex;
            justify-content: space-between;
            &:nth-of-type(2){
              background: #eeb9bb;
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
              padding: 30px 20px;
              box-sizing: border-box;
              img{
                width: 100px;
                height: 100px;
                background-size: cover;
                background-image: url("https://cdn.wtzw.com/bookimg/public/images/cover/5ed74acf59a39_360x480.jpg");
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
            background: #eecc8a;
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
        background: #d43c33;
        margin-top:30px;
      }
    }
  }
</style>
