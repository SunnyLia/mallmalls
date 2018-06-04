const app = getApp()

Page({
  data: {
    isSearch: false
  },
  onLoad: function () {

  },
  onSearch: function (e) {
    this.setData({ isSearch: !(this.data.isSearch) })
  },
  onSubmit: function (e) {
    var val = e.detail.value;
    wx.navigateTo({
      url:'../component/header'
    })
  }
})
