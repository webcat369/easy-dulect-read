import Network from './network'
// 注册
export const signUp = (data) => Network.post('/user/signUp', data)
// 登录
export const signIn = (data) => Network.post('/user/signIn', data)
// 修改昵称
export const changeUserName = (id, data) => Network.patch(`/user/changeUserName/${id}`, data)
// 修改性别
export const changeGender = (id, data) => Network.patch(`/user/changeGender/${id}`, data)
// 修改头像
export const changeAvatar = (id, data) => Network.patch(`/user/changeAvatar/${id}`, data)

// 加入书架
export const classic = (id, data) => Network.patch(`/user/classic/${id}`, data)
// 更新看小说进度
export const changeProgress = (id, data) => Network.patch(`/user/changeProgress/${id}`, data)
// 获取用户加入书架的书
export const searchList = (id) => Network.get(`/user/searchList/${id}`)

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
/* 筛选图书 */
export const bookClassification = (list) => Network.all(list)

/* 书籍筛选 */
export const filterBooks = async (list) => {
  return new Promise(function (resolve, reject) {
    Network.all(list).then(function (result) {
      console.log(result)
      const womanList = Object.assign(...result)
      // console.log(womanList)
      resolve(womanList)
    })
      .catch(function (err) {
        reject(err)
      })
  })
}

export const AllWomanList = (data) => {
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

export const AllManList = (data) => {
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

/* 女生现代 */
export const getGirlModern = () => Network.get('/girlModern.json')
/* 女生古代 */
export const getGirlAncient = () => Network.get('/girlAncient.json')
/* 男生现代 */
export const getBoyModern = () => Network.get('/boyModern.json')
/* 男生古代 */
export const getBoyAncient = () => Network.get('/boyAncient.json')

export const AllGirl = (data) => {
  return new Promise(function (resolve, reject) {
    Network.all([
      Network.get('/girlModern.json'),
      Network.get('/girlAncient.json')
    ])
      .then(function (result) {
        // GirlList.push(...result[0].newBook)
        // GirlList.push(...result[1].newBook)
        // console.log(result)
        resolve(result)
      })
      .catch(function (err) {
        reject(err)
      })
  })
}

export const AllBoy = (data) => {
  return new Promise(function (resolve, reject) {
    Network.all([
      Network.get('/boyModern.json'),
      Network.get('/boyAncient.json')
    ])
      .then(function (result) {
        // console.log(result)
        resolve(result)
      })
      .catch(function (err) {
        reject(err)
      })
  })
}

// 小说内容
export const Text = () => Network.get('/text.json')
