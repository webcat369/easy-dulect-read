import Network from './network'

export default {
  /* 豪门总裁 */
  getPresidentWealthy: Network.get('/presidentWealthy.json'),
  /* 重生异能 */
  getRebirthSpecialAbility: Network.get('/rebirthSpecialAbility.json'),
  /* 婚恋爱情 */
  getMarriageAndLove: Network.get('/marriageAndLove.json')
}
