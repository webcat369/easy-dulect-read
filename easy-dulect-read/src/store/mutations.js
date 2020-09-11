import {
  SET_TABBAR_HEIGHT,
  SET_SHOW_PAGE,
  SET_SEARCH_HISTORY_LIST,
  SET_SHOW_DETAIL,
  SET_CURRENT_BOOK,
  SET_SHOW_CHANNEL,
  SET_CHANNEL_TITLE,
  SET_TIPS,
  SET_CURRENT_USER
} from './mutations-Type'
export default {
  [SET_TABBAR_HEIGHT] (state, PayLoad) {
    state.TabBarHeight = PayLoad
  },
  [SET_SHOW_PAGE] (state, PayLoad) {
    state.showPage = PayLoad
  },
  [SET_SEARCH_HISTORY_LIST] (state, PayLoad) {
    state.searchHistoryList.unshift(PayLoad)
  },
  [SET_SHOW_DETAIL] (state, PayLoad) {
    state.showDetail = PayLoad
  },
  [SET_CURRENT_BOOK] (state, PayLoad) {
    state.currentBook = PayLoad
  },
  [SET_SHOW_CHANNEL] (state, PayLoad) {
    state.showChannel = PayLoad
  },
  [SET_CHANNEL_TITLE] (state, title) {
    state.channelTitle = title
  },
  [SET_TIPS] (state, payload) {
    state.Tips = [payload, true]
    setTimeout(() => {
      state.Tips = ['', false]
    }, 1000)
  },
  [SET_CURRENT_USER] (state, PayLoad) {
    state.currentUser = PayLoad
  }
}
