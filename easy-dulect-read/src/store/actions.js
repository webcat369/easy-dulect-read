import {
  SET_TABBAR_HEIGHT,
  SET_SHOW_PAGE,
  SET_SEARCH_HISTORY_LIST,
  SET_SHOW_DETAIL,
  SET_CURRENT_BOOK,
  SET_SHOW_CHANNEL
} from './mutations-Type'
export default {
  setTabBarHeight ({ commit }, PayLoad) {
    commit(SET_TABBAR_HEIGHT, PayLoad)
  },
  setShowPage ({ commit }, PayLoad) {
    commit(SET_SHOW_PAGE, PayLoad)
  },
  setSearchHistoryList ({ commit }, PayLoad) {
    commit(SET_SEARCH_HISTORY_LIST, PayLoad)
  },
  setShowDetail ({ commit }, PayLoad) {
    commit(SET_SHOW_DETAIL, PayLoad)
  },
  // 请求 当前书的详细信息 的方法
  setCurrentBook ({ commit }, value) {
    commit(SET_CURRENT_BOOK, value)
  },
  setShowChannel ({ commit }, value) {
    commit(SET_SHOW_CHANNEL, value)
  }
}
