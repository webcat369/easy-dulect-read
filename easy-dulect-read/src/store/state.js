export default {
  TabBarHeight: 0, // TabBar的高:TabBar的高= BookStoreHeader的高
  showPage: false, // 控制search页面的显示/隐藏
  searchHistoryList: [], // 将最新的搜索记录加在最上面
  showDetail: false, // 显示当前展示书的详细信息
  currentBook: [], // 储存当前展示书的详细信息
  showChannel: false,
  channelType: '',
  channelTitle: '',
  channelStoryTag: [],
  Tips: [],
  currentUser: {
    userName: '未登录',
    userId: '0',
    isShow: true
  },
  showScrollDetailPage: false,
  selectTag: '',
  selectTitle: '',
  currentWomanDetailPage: {},
  currentManDetailPage: {},
  currentPublicationDetailPage: {},
  PageNum: 0,
  // 个人页面上半部分
  showMessageLogging: false,
  showCollect: false,
  showBookReview: false,
  showReadRecord: false,
  // 个人页面下半部分
  showReadPreferences: false,
  showHelpPage: false,
  showCoupleBackPage: false,
  showSetPage: false
}
