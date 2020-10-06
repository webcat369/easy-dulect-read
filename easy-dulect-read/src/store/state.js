import mode from './mode'
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
    userAvatar: '',
    userGender: '',
    isShow: true
  },
  bookList: [], // 书架小说列表
  showScrollDetailPage: false,
  selectTag: '',
  selectTitle: '',
  currentWomanDetailPage: {},
  currentManDetailPage: {},
  currentPublicationDetailPage: {},
  nowPage: 1,
  // 个人页面上半部分
  showMessageLogging: false,
  showCollect: false,
  showBookReview: false,
  showReadRecord: false,
  // 个人页面下半部分
  showReadPreferences: false,
  showHelpPage: false,
  showCoupleBackPage: false,
  showSetPage: false,
  currentUserAvatar: {
    currentIndex: 0,
    oldIndex: 0
  },
  BookState: {
    backgroundColor: '#3c3c3c',
    fontColor: '#d1d1d1',
    fontSize: 56,
    lineHeight: 0, // 暂时无法保存
    paddingTop: 0, // 暂时无法保存
    mode: mode.upAndDown, // 暂时无法实现
    brightness: 0,
    atNight: true,
    currentCatalog: ''
  },
  bookProgress: 0, // 一本书的观看进度
  currentBookId: 0 // 当前观看这本书的id
}
