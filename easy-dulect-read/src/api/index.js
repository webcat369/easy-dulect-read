import Network from './network'
/* 轮播图 */
export const getSwipe = () => Network.get('/public/banner.json')
/* 列表 */
export const getBookList = () => Network.get('/public/list.json')
/* 经典小说 */
export const getBookClassic = () => Network.get('/public/classic.json')
/* 排行榜 */
export const getBookHotList = () => Network.get('/public/hotList.json')
/* 必看 */
export const getMustSeeList = () => Network.get('/public/mustSeeList.json')
/* 高分神作 */
export const getHighMarksNovel = (data) => Network.get('/public/highMarksNovel.json', data)
/* 独家原创 */
export const getExclusiveOriginal = () => Network.get('/public/exclusiveOriginal.json')

/* 豪门总裁 */
export const getPresidentWealthy = () => Network.get('/public/presidentWealthy.json')
/* 重生异能 */
export const getRebirthSpecialAbility = () => Network.get('/public/rebirthSpecialAbility.json')
/* 穿越时空 */
export const getTravelThroughTime = () => Network.get('/public/travelThroughTime.json')
/* 宫闱宅斗 */
export const getCourtStruggle = () => Network.get('/public/courtStruggle.json')
/* 种田经商 */
export const getFarmingBusiness = () => Network.get('/public/farmingBusiness.json')
/* 婚恋爱情 */
export const getMarriageAndLove = () => Network.get('/public/marriageAndLove.json')
/* 幻想言情 */
export const getFantasyRomance = () => Network.get('/public/fantasyRomance.json')

/* 异术超能 */
export const getSuperPower = () => Network.get('/public/superPower.json')
/* 玄幻奇幻 */
export const getMysterious = () => Network.get('/public/mysterious.json')
/* 都市高手 */
export const getUrbanMaster = () => Network.get('/public/urbanMaster.json')
/* 奇闻异事 */
export const getIncredibleStory = () => Network.get('/public/incredibleStory.json')
/* 穿越历史 */
export const getThroughHistory = () => Network.get('/public/throughHistory.json')
/* 游戏竞技 */
export const getGameCompetition = () => Network.get('/public/gameCompetition.json')
/* 武侠仙侠 */
export const getMartialArts = () => Network.get('/public/martialArts.json')
/* 科幻世界 */
export const getScienceFictionWorld = () => Network.get('/public/scienceFictionWorld.json')
