import {
  SET_TABBAR_HEIGHT,
  SET_SHOW_PAGE,
  SET_SEARCH_HISTORY_LIST,
  SET_SHOW_DETAIL,
  SET_CURRENT_BOOK,
  SET_SHOW_CHANNEL,
  SET_CHANNEL_TYPE,
  SET_CHANNEL_TITLE,
  SET_CHANNEL_STORY_TAG,
  SET_TIPS,
  SET_CURRENT_USER,
  SET_SHOW_SCROLL_DETAIL_PAGE,
  SET_SELECT_TAG,
  SET_SELECT_TITLE,
  SET_CURRENT_WOMAN_DETAIL_PAGE,
  SET_CURRENT_MAN_DETAIL_PAGE,
  SET_CURRENT_PUBLICATION_DETAIL_PAGE,
  SET_PAGE_NUM,
  SET_SHOW_MESSAGE_LOGGING,
  SET_SHOW_COLLECT,
  SET_SHOW_BOOK_REVIEW,
  SET_SHOW_READ_RECORD,
  SET_READ_PREFERENCES,
  SET_HELP_PAGE,
  SET_COUPLE_BACK_PAGE,
  SET_SET_PAGE
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
  setShowChannel ({ commit }, payload) {
    commit(SET_SHOW_CHANNEL, payload)
  },
  setChannelType ({ commit }, type) {
    commit(SET_CHANNEL_TYPE, type)
  },
  setChannelTitle ({ commit }, title) {
    commit(SET_CHANNEL_TITLE, title)
  },
  setChannelStoryTag ({ commit }, storyTag) {
    commit(SET_CHANNEL_STORY_TAG, storyTag)
  },
  setTips ({ commit }, payload) {
    commit(SET_TIPS, payload)
  },
  setCurrentUser ({ commit }, payload) {
    commit(SET_CURRENT_USER, payload)
  },
  setScrollDetailPage ({ commit }, payload) {
    commit(SET_SHOW_SCROLL_DETAIL_PAGE, payload)
  },
  setSelectTag ({ commit }, payload) {
    commit(SET_SELECT_TAG, payload)
  },
  setSelectTitle ({ commit }, payload) {
    commit(SET_SELECT_TITLE, payload)
  },
  setCurrentWomanDetailPage ({ commit }, payload) {
    commit(SET_CURRENT_WOMAN_DETAIL_PAGE, payload)
  },
  setCurrentManDetailPage ({ commit }, payload) {
    commit(SET_CURRENT_MAN_DETAIL_PAGE, payload)
  },
  setCurrentPublicationDetailPage ({ commit }, payload) {
    commit(SET_CURRENT_PUBLICATION_DETAIL_PAGE, payload)
  },
  setPageNum ({ commit }, payload) {
    commit(SET_PAGE_NUM, payload)
  },
  setMessageLogging ({ commit }, payload) {
    commit(SET_SHOW_MESSAGE_LOGGING, payload)
  },
  setCollect ({ commit }, payload) {
    commit(SET_SHOW_COLLECT, payload)
  },
  setBookReview ({ commit }, payload) {
    commit(SET_SHOW_BOOK_REVIEW, payload)
  },
  setReadRecord ({ commit }, payload) {
    commit(SET_SHOW_READ_RECORD, payload)
  },
  setReadPreferences ({ commit }, payload) {
    commit(SET_READ_PREFERENCES, payload)
  },
  setHelpPAge ({ commit }, payload) {
    commit(SET_HELP_PAGE, payload)
  },
  setCoupleBackPage ({ commit }, payload) {
    commit(SET_COUPLE_BACK_PAGE, payload)
  },
  setSetUpPage ({ commit }, payload) {
    commit(SET_SET_PAGE, payload)
  }
}
