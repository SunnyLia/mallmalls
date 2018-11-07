var app = getApp()
var data = require("./json.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    addressLists: data.data,
    maskShow: false,
    provinces: "",
    province: "请选择",
    citys: "",
    city: "请选择",
    countys:"",
    county: "请选择",
    value: [9999, 1, 1],
    condition: false
  },
  showMask: function () {
    this.data.maskShow = !this.data.maskShow
    this.setData({
      data: this.data
    })
  },
  select: function (e) {
    var index = e.currentTarget.dataset.index

  },
  bindChange: function (e) {
    const val = e.detail.value
    this.setData({
      year: this.data.years[val[0]],
      month: this.data.months[val[1]],
      day: this.data.days[val[2]]
    })
  },
  open: function (e) {
    this.data.condition = !this.data.condition;
    this.setData({
      condition:this.data.condition
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})