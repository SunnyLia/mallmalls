var app = getApp()
var data = require("./json.js");
Page({
  data: {
    cartLists: data.data,
    isAllAll: false,
    totalMoney: 0,
    totalNum: 0
  },

  sub: function (e) {
    var index = parseInt(e.currentTarget.dataset.index);//店铺索引
    var ind = parseInt(e.currentTarget.dataset.ind);//商品索引
    var list = this.data.cartLists
    var num = parseInt(list[index].items[ind].quantity);//获取商品数量

    if (num > 1) {
      num--;
      list[index].items[ind].quantity = num //更新商品数量
      this.getTotalPrice()
    }
  },
  add: function (e) {
    var index = parseInt(e.currentTarget.dataset.index);//店铺索引
    var ind = parseInt(e.currentTarget.dataset.ind);//商品索引
    var list = this.data.cartLists
    var num = parseInt(list[index].items[ind].quantity);//获取商品数量

    if (num < 100) {
      num++;
      list[index].items[ind].quantity = num
      this.getTotalPrice()
    }
  },
  //商品单选
  checkList: function (e) {
    var index = parseInt(e.currentTarget.dataset.index);//店铺索引
    var ind = parseInt(e.currentTarget.dataset.ind);//商品索引
    var list = this.data.cartLists
    var checked = list[index].items[ind].checked;//当前商品是否选中
    // 判断是否选择当前店铺的全选
    var flag = true;
    list[index].items[ind].checked = !checked
    for (var i = 0; i < list[index].items.length; i++) {//遍历当前店铺商品
      if (list[index].items[i].checked == false) {//当前商品未中
        flag = false;//只要有一个商品没选，不成立
        break;
      }
    }

    flag == true ? list[index].checked = true : list[index].checked = false;
    this.getTotalPrice()
  },
  // 店铺单选
  checkAll(e) {
    var index = parseInt(e.currentTarget.dataset.index);//店铺索引
    var list = this.data.cartLists

    var checked = list[index].checked
    list[index].checked = !checked;

    for (var i = 0; i < list[index].items.length; i++) {
      if (checked) {//当前店铺未中
        list[index].items[i].checked = false;
      } else {//当前店铺选中
        list[index].items[i].checked = true;
      }
    }

    this.getTotalPrice()
  },
  //全部总选
  allAll() {
    var list = this.data.cartLists
    var isAllAlls = this.data.isAllAll;//获取全选状态
    var flag = true;
    if (this.data.isAllAll) {
      flag = false;
    }
    for (var i = 0; i < list.length; i++) {
      list[i].checked = flag;//店铺checked
      for (var j = 0; j < list[i].items.length; j++) {
        list[i].items[j].checked = flag;//店铺商品checked
      }
    }

    this.getTotalPrice()
  },
  //计算总数及价钱
  getTotalPrice() {
    var list = this.data.cartLists
    var isAllAll = this.data.isAllAll;
    var total = 0;
    var count = 0;
    var flag = true;
    for (var i = 0; i < list.length; i++) {
      if (list[i].checked == false) {
        flag = false;
      }
      for (var j = 0; j < list[i].items.length; j++) {
        if (list[i].items[j].checked) {
          var num = parseInt(list[i].items[j].quantity);
          count = count + num;
          total = total + num * parseInt(list[i].items[j].product_sku.price)
        }
      }
    }
    flag == true ? isAllAll = true : isAllAll = false;
    this.setData({
      cartLists: list,
      totalMoney: total,
      totalNum: count,
      isAllAll: isAllAll
    });
  }
})



