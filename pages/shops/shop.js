
var app = getApp()
var data = require("./json.js");
var swiper = require("../index/json.js");
Page({
    data: {
        swipData: swiper.data.swipData,
        shopInfo:data.data[0].data
    },
    onLoad: function () {
    }
})