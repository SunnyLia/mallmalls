
var app = getApp()
var data = require("./json.js");
Page({
  data: {
    isSearch: false,
    swipData: data.data.swipData,
    products: data.data.products,
    shops: data.data.shops,
    swiperOption: {
      slidesPerView: 2.5,
      spaceBetween: 10
    }
  },
  onLoad: function () {
  },
  onSearch: function (e) {
    this.setData({ isSearch: !(this.data.isSearch) })
  },
  onSubmit: function (e) {
    var val = e.detail.value;
    wx.navigateTo({
      url: '../index/index'
    })
  }
})

