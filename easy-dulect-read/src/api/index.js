import Network from './network'
export const signUp = (data) => Network.post('/user/signUp', data)
export const signIn = (data) => Network.post('/user/signIn', data)
/* 轮播图 */
export const getSwipe = () => Network.get('/banner.json')
/* 列表 */
export const getBookList = () => Network.get('/list.json')
/* 经典小说 */
export const getBookClassic = () => Network.get('/classic.json')
/* 排行榜 */
export const getBookHotList = () => Network.get('/hotList.json')
/* 必看 */
export const getMustSeeList = () => Network.get('/mustSeeList.json')
/* 高分神作 */
export const getHighMarksNovel = (data) => Network.get('/highMarksNovel.json', data)
/* 独家原创 */
export const getExclusiveOriginal = () => Network.get('/exclusiveOriginal.json')

/* 豪门总裁 */
export const getPresidentWealthy = () => Network.get('/presidentWealthy.json')
/* 重生异能 */
export const getRebirthSpecialAbility = () => Network.get('/rebirthSpecialAbility.json')
/* 穿越时空 */
export const getTravelThroughTime = () => Network.get('/travelThroughTime.json')
/* 宫闱宅斗 */
export const getCourtStruggle = () => Network.get('/courtStruggle.json')
/* 种田经商 */
export const getFarmingBusiness = () => Network.get('/farmingBusiness.json')
/* 婚恋爱情 */
export const getMarriageAndLove = () => Network.get('/marriageAndLove.json')
/* 幻想言情 */
export const getFantasyRomance = () => Network.get('/fantasyRomance.json')

/* 异术超能 */
export const getSuperPower = () => Network.get('/superPower.json')
/* 玄幻奇幻 */
export const getMysterious = () => Network.get('/mysterious.json')
/* 都市高手 */
export const getUrbanMaster = () => Network.get('/urbanMaster.json')
/* 奇闻异事 */
export const getIncredibleStory = () => Network.get('/incredibleStory.json')
/* 穿越历史 */
export const getThroughHistory = () => Network.get('/throughHistory.json')
/* 游戏竞技 */
export const getGameCompetition = () => Network.get('/gameCompetition.json')
/* 武侠仙侠 */
export const getMartialArts = () => Network.get('/martialArts.json')
/* 科幻世界 */
export const getScienceFictionWorld = () => Network.get('/scienceFictionWorld.json')

/* 图书精选书籍 */
export const getSelectionBooks = () => Network.get('/PublicationBook.json')
/* 分类标签 */
export const getSelectionTag = () => Network.get('/tag.json')

export const getWomanList = (data) => {
  return new Promise(function (resolve, reject) {
    Network.all([
      Network.get('/presidentWealthy.json'),
      Network.get('/rebirthSpecialAbility.json'),
      Network.get('/travelThroughTime.json'),
      Network.get('/courtStruggle.json'),
      Network.get('/farmingBusiness.json'),
      Network.get('/marriageAndLove.json'),
      Network.get('/fantasyRomance.json')
    ])
      .then(function (result) {
        // console.log(...result)
        const womanList = Object.assign(...result)
        // console.log(womanList)
        resolve(womanList)
      })
      .catch(function (err) {
        reject(err)
      })
  })
}

export const getManList = (data) => {
  return new Promise(function (resolve, reject) {
    Network.all([
      Network.get('/superPower.json'),
      Network.get('/mysterious.json'),
      Network.get('/urbanMaster.json'),
      Network.get('/incredibleStory.json'),
      Network.get('/throughHistory.json'),
      Network.get('/gameCompetition.json'),
      Network.get('/martialArts.json'),
      Network.get('/scienceFictionWorld.json')
    ])
      .then(function (result) {
        // console.log(...result)
        const ManList = Object.assign(...result)
        // console.log(womanList)
        resolve(ManList)
      })
      .catch(function (err) {
        reject(err)
      })
  })
}
