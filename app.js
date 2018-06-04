//app.js
App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  getUserInfo: function (cb) {
    var that = this;
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo;
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      });
    }
  },
  globalData: {
    searchLists: [],//搜索列表
    isResults: false,//有无搜索数据
    headerHeight: 0,//头部高度
    // categoryLists:[],//分类列表
    categorys: [],//分类
    userInfo: {},//用户信息
    isLogin: false,//是否登录
    provinces: [],//省PROVINCES
    citys: [],//市CITYS
    districts: [],//区DISTRICTS
    cartLists: [],//购物车列表
    orderLists: [],//订单列表
    cuponeLists: [],//优惠券列表
    addressLists: [],//地址列表 
    detailInfos: [],//商品详情 
    detailTabs: [],//商品详情/评论/讨论 DETAIL_TABS
    isFixedHeader: false,
    isShowSearchBar: false,
    isShowMask: false,
    sliders: [],
    hotProducts: [],//热门商品
    hotShops: [],//热门店铺
    products: [],
    pageNum: 1,//加载页码
    busy: false,//是否加载
    isShowLoadingTips: false,//正在加载
    isShowLoadedTips: false,//加载完毕
    shopInfo: {}//店铺信息 
  }
})