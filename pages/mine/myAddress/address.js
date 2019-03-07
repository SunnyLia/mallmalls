var app = getApp()
var data = require("./json.js");
var list = require("./json1.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    addressLists: data.data,
    maskShow: false,
    animate: {
      provinces: [],
      province: "请选择",
      citys: [],
      city: "请选择",
      countys: [],
      county: "请选择",
      value: [0, 0, 0],
      condition: false      
    },
    animationData: {}
  },
  showMask: function () {
    this.animation = wx.createAnimation({
      duration: 500, //动画持续时间 ms
      timingFunction: "ease" //动画效果
    })
    if (this.data.maskShow) {
      this.animation.height(0 + 'rpx').step()
    } else {
      this.animation.height(1332 + 'rpx').step()
    }
    this.setData({
      maskShow: !this.data.maskShow,
      animationData: this.animation.export()
    })
  },
  bindChange: function (e) {
    const val = e.detail.value //可以对应省市区的位置
    var tdVal = this.data.animate.value
    var citys = this.data.animate.citys
    var countys = this.data.animate.countys
    if (val[0] != tdVal[0]) { //如果省份有变化,得同时改变市 跟 区
      var citys = [];
      var countys = [];
      for (let j = 0; j < list.data[val[0]].regions.length; j++) {
        citys.push(list.data[val[0]].regions[j].name)
      }
      for (let k = 0; k < list.data[val[0]].regions[0].regions.length; k++) {
        countys.push(list.data[val[0]].regions[0].regions[k].name)
      }
      this.setData({
        "animate.value": [val[0], 0, 0]
      })
    }
    if (val[1] != tdVal[1]) { //如果市有变化,改变区
      var countys = [];
      for (let k = 0; k < list.data[val[0]].regions[val[1]].regions.length; k++) {
        countys.push(list.data[val[0]].regions[val[1]].regions[k].name)
      }
      this.setData({
        "animate.value": [val[0], val[1], 0]
      })
    }

    this.setData({
      "animate.province": list.data[val[0]].name,
      "animate.citys": citys,
      "animate.city": list.data[val[0]].regions[val[1]].name,
      "animate.countys": countys,
      "animate.county": list.data[val[0]].regions[val[1]].regions[val[2]].name
    })
  },
  open: function (e) {
    this.setData({
      "animate.condition": !this.data.animate.condition
    })
    console.log(this.data.animate.condition)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var provinces = []
    const citys = [];
    const countys = [];
    for (let i = 0; i < list.data.length; i++) {
      provinces.push(list.data[i].name)
    }
    for (let j = 0; j < list.data[0].regions.length; j++) {
      citys.push(list.data[0].regions[j].name)
    }
    for (let k = 0; k < list.data[0].regions[0].regions.length; k++) {
      countys.push(list.data[0].regions[0].regions[k].name)
    }

    this.setData({
      "animate.provinces": provinces,
      "animate.citys": citys,
      "animate.countys": countys
    })

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

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