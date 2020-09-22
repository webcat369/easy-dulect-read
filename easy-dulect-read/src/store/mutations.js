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
  SET_PAGE_NUM
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
  [SET_CHANNEL_TYPE] (state, type) {
    state.channelType = type
  },
  [SET_CHANNEL_TITLE] (state, title) {
    state.channelTitle = title
  },
  [SET_CHANNEL_STORY_TAG] (state, storyTag) {
    state.channelStoryTag = storyTag
  },
  [SET_TIPS] (state, payload) {
    state.Tips = [payload, true]
    setTimeout(() => {
      state.Tips = ['', false]
    }, 1000)
  },
  [SET_CURRENT_USER] (state, PayLoad) {
    state.currentUser = PayLoad
  },
  [SET_SHOW_SCROLL_DETAIL_PAGE] (state, PayLoad) {
    state.showScrollDetailPage = PayLoad
  },
  [SET_SELECT_TAG] (state, PayLoad) {
    state.selectTag = PayLoad
  },
  [SET_SELECT_TITLE] (state, PayLoad) {
    state.selectTitle = PayLoad
  },
  [SET_CURRENT_WOMAN_DETAIL_PAGE] (state, PayLoad) {
    state.currentWomanDetailPage = PayLoad
  },
  [SET_CURRENT_MAN_DETAIL_PAGE] (state, PayLoad) {
    state.currentManDetailPage = PayLoad
  },
  [SET_CURRENT_PUBLICATION_DETAIL_PAGE] (state, PayLoad) {
    state.currentPublicationDetailPage = PayLoad
  },
  [SET_PAGE_NUM] (state, PayLoad) {
    state.PageNum = PayLoad
  }
}
