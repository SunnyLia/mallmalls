var app = getApp()
var data = require("./json.js");
Page({
  data: {
    cartLists: data.data,
    selectedAllStatus: false,
    count: 0,
    number: 0,
    carts: [
      { title: '自营商城', image: 'https://img3.doubanio.com/view/dianpu_product_item/small/public/p1964115.jpg', num: '1', price: '198.0', selected: false, "url": "https://market.douban.com/shop/5D/" },
      { title: '自营商城', image: 'https://img3.doubanio.com/view/dianpu_product_item/small/public/p1964115.jpg', num: '1', price: '100.0', selected: false, "url": "https://market.douban.com/shop/5D/" },
      { title: '自营商城', image: 'https://img3.doubanio.com/view/dianpu_product_item/small/public/p1964115.jpg', num: '3', price: '15.0', selected: false, "url": "https://market.douban.com/shop/5D/" },
      { title: '自营商城', image: 'https://img3.doubanio.com/view/dianpu_product_item/small/public/p1964115.jpg', num: '2', price: '15.2', selected: false, "url": "https://market.douban.com/shop/5D/" },
      { title: '自营商城', image: 'https://img3.doubanio.com/view/dianpu_product_item/small/public/p1964115.jpg', num: '1', price: '122.0', selected: true, "url": "https://market.douban.com/shop/5D/" },
    ]
  },
  // 减法
  // bindMinus: function (e) {
  //   var index = parseInt(e.currentTarget.dataset.index);
  //   var num = this.data.carts[index].num;
  //   if (num > 1) {
  //     num--;
  //   }
  //   var carts = this.data.carts;
  //   carts[index].num = num;

  //   // this.setData({
  //   //   carts: carts
  //   // });
  //   this.getTotalPrice();
  // },
  sub: function (e) {
    var index = parseInt(e.currentTarget.dataset.index);
    var ind = parseInt(e.currentTarget.dataset.ind);
    var num = this.data.cartLists[index].items[ind].quantity;
    if (num > 1) {
      num--;
    }
    console.log(num)
    this.data.cartLists[index].items[ind].quantity = num
  },
  // 加法
  bindPlus: function (e) {
    var index = parseInt(e.currentTarget.dataset.index);
    var num = this.data.carts[index].num;
    num++;
    var carts = this.data.carts;
    carts[index].num = num;

    // this.setData({
    //   carts: carts
    // });
    this.getTotalPrice();
  },
  // 单选
  bindCheckbox: function (e) {
    var index = parseInt(e.currentTarget.dataset.index);
    var selected = this.data.carts[index].selected;
    var carts = this.data.carts;
    // var num = parseInt(this.data.carts[index].num);
    // var price = this.data.carts[index].price;
    // if (!selected) {
    //   this.setData({
    //     count: this.data.count + num * price,
    //     number: num + this.data.number

    //   });
    // } else {
    //   this.setData({
    //     count: this.data.count - num * price,
    //     number: this.data.number - num
    //   });
    // }

    carts[index].selected = !selected;

    // this.setData({
    //   carts: carts
    // });
    this.getTotalPrice();
  },
  // 全选
  bindSelectAll: function () {
    var selectedAllStatus = this.data.selectedAllStatus;
    selectedAllStatus = !selectedAllStatus;
    var carts = this.data.carts;
    if (!selectedAllStatus) {
      for (var i = 0; i < carts.length; i++) {
        carts[i].selected = selectedAllStatus;
        // var num = parseInt(this.data.carts[i].num);
        // var price = parseInt(this.data.carts[i].price);
        // this.setData({
        //   count: this.data.count - num * price,
        //   number: this.data.number - num

        // });
      }
    }
    this.getTotalPrice();
  },
  // 删除
  bindCartsDel: function () { },
  // 价格
  // getTotalPrice() {
  //   var carts = this.data.carts;                  // 获取购物车列表
  //   var total = 0;
  //   var count = 0;
  //   for (var i = 0; i < carts.length; i++) {         // 循环列表得到每个数据
  //     if (carts[i].selected) { 
  //       count += carts[i].num;                   // 判断选中才会计算价格
  //       total += carts[i].num * carts[i].price;   // 所有价格加起来
  //     }
  //   }
  //   this.setData({                                // 最后赋值到data中渲染到页面
  //     carts: carts,
  //     number: count,
  //     count: total.toFixed(2)
  //   });
  // }
  getNumPrice() {
    var carts = this.data.carts;                  // 获取购物车列表
    var total = 0;
    var count = 0;
    for (var i = 0; i < carts.length; i++) {         // 循环列表得到每个数据
      if (carts[i].selected) {
        count += carts[i].num;                   // 判断选中才会计算价格
        total += carts[i].num * carts[i].price;   // 所有价格加起来
      }
    }
    this.setData({                                // 最后赋值到data中渲染到页面
      carts: carts,
      number: count,
      count: total.toFixed(2)
    });
  }
})



