var app = getApp()
Page({
  data: {
    scrollHeight: 0,
    loadShow: false,
    noned: false
  },

  loadMore: function (that) {
    that.setData({
      loadShow: true
    });
    wx.request({
      url: 'https://linearlaw.github.io/node_test_demo/dist/static/orderList.json?tdsourcetag=s_pcqq_aiomsg',
      data: {},
      success: function (res) { 
        console.log(res.data.data)
      }
    });
  },
  onLoad: function () {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          scrollHeight: res.windowHeight
        });
      }
    });
    this.loadMore(that);
  }
})