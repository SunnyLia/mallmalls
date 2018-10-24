var app = getApp()
var data = require("./json.js");
Page({
  data: {
    cartLists: data.data,
    isAllAll: false,
    totalMoney: 0,
    totalNum: 0,
    carts: [
      { title: '自营商城', image: 'https://img3.doubanio.com/view/dianpu_product_item/small/public/p1964115.jpg', num: '1', price: '198.0', selected: false, "url": "https://market.douban.com/shop/5D/" },
      { title: '自营商城', image: 'https://img3.doubanio.com/view/dianpu_product_item/small/public/p1964115.jpg', num: '1', price: '100.0', selected: false, "url": "https://market.douban.com/shop/5D/" },
      { title: '自营商城', image: 'https://img3.doubanio.com/view/dianpu_product_item/small/public/p1964115.jpg', num: '3', price: '15.0', selected: false, "url": "https://market.douban.com/shop/5D/" },
      { title: '自营商城', image: 'https://img3.doubanio.com/view/dianpu_product_item/small/public/p1964115.jpg', num: '2', price: '15.2', selected: false, "url": "https://market.douban.com/shop/5D/" },
      { title: '自营商城', image: 'https://img3.doubanio.com/view/dianpu_product_item/small/public/p1964115.jpg', num: '1', price: '122.0', selected: true, "url": "https://market.douban.com/shop/5D/" },
    ]
  },

  sub: function (e) {
    var index = parseInt(e.currentTarget.dataset.index);//店铺索引
    var ind = parseInt(e.currentTarget.dataset.ind);//商品索引
    var list = this.data.cartLists
    var num = list[index].items[ind].quantity;//获取商品数量
    var price = list[index].items[ind].product_sku.promote_price;//获取商品价格
    if (num > 1) {
      num--;
    }
    list[index].items[ind].quantity = num //更新商品数量
    list[index].items[ind].amount = num * price //更新商品总价格

    this.setData({
      cartLists: list
    });
  },
  add: function (e) {
    var index = parseInt(e.currentTarget.dataset.index);//店铺索引
    var ind = parseInt(e.currentTarget.dataset.ind);//商品索引
    var list = this.data.cartLists
    var num = list[index].items[ind].quantity;//商品数量
    var price = list[index].items[ind].product_sku.promote_price;//获取商品价格
    num++;
    list[index].items[ind].quantity = num
    list[index].items[ind].amount = num * price //更新商品总价格
    this.setData({
      cartLists: list
    });
  },
  checkList: function (e) {
    var index = parseInt(e.currentTarget.dataset.index);//店铺索引
    var ind = parseInt(e.currentTarget.dataset.ind);//商品索引
    var list = this.data.cartLists
    var amount = parseInt(list[index].items[ind].amount);//获取商品总价格
    var totalMoney = this.data.totalMoney;//获取总价格
    var isAllAll = this.data.isAllAll;//获取全选状态
    var checked = list[index].items[ind].checked;
    
    if (checked) {//当前商品未中
      if (totalMoney > 0) {
        totalMoney = totalMoney - amount;
      }
      list[index].checked = false//当前店铺未中
      list[index].items[ind].checked = !checked
      isAllAll = false;
    } else {//当前商品选中
      totalMoney = totalMoney + amount;//计算当前总价钱
      list[index].items[ind].checked = !checked
      // 判断是否选择当前店铺的全选
      var flag = true;
      for (var i = 0; i < list[index].items.length; i++) {//遍历当前店铺商品
        if (list[index].items[i].checked == false) {//当前商品未中
          flag = false;//只要有一个商品没选，不成立
          break;
        }
      }
      flag == true ? list[index].checked = true : list[index].checked = false;
    }
    this.isChooseAll()
    this.setData({
      cartLists: list,
      totalMoney: totalMoney
    });

  },
  checkAll(e) {// 店铺全选

    var index = parseInt(e.currentTarget.dataset.index);//店铺索引
    var list = this.data.cartLists
    var totalMoney = this.data.totalMoney;//获取总价格
    var isAllAll = this.data.isAllAll;//获取全选状态
    var total_amount = parseInt(list[index].total_amount)//获取店铺总价钱
    var checked = list[index].checked
    if (checked) {//当前店铺未中
      if (totalMoney > 0) {
        totalMoney = totalMoney - total_amount;//计算店铺总价钱
      };
      for (var i = 0; i < list[index].items.length; i++) {//遍历当前店铺商品
        list[index].items[i].checked = false;
      }
    } else {//当前店铺选中
      totalMoney = totalMoney + total_amount;//计算店铺总价钱
      for (var i = 0; i < list[index].items.length; i++) {//遍历当前店铺商品
        list[index].items[i].checked = true;
      }
    }
    list[index].checked = !checked;
    this.isChooseAll()
    this.setData({
      cartLists: list,
      totalMoney: totalMoney
    });
  },
  isChooseAll() {
    var list = this.data.cartLists
    var isAllAll = this.data.isAllAll;
    var flag = true;
    for (var i = 0; i < list.length; i++) {//遍历店铺数量
      if (list[i].checked == false) {//店铺未中
        flag = false;//只要有一个店铺没选，不成立
        break;
      }
    }
    flag == true ? isAllAll = true : isAllAll = false;
    this.setData({
      isAllAll: isAllAll
    })
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
  // 加法
  // bindPlus: function (e) {
  //   var index = parseInt(e.currentTarget.dataset.index);
  //   var num = this.data.carts[index].num;
  //   num++;
  //   var carts = this.data.carts;
  //   carts[index].num = num;

  //   // this.setData({
  //   //   carts: carts
  //   // });
  //   this.getTotalPrice();
  // },

  // 单选
  // bindCheckbox: function (e) {
  //   var index = parseInt(e.currentTarget.dataset.index);
  //   var selected = this.data.carts[index].selected;
  //   var carts = this.data.carts;
  //   // var num = parseInt(this.data.carts[index].num);
  //   // var price = this.data.carts[index].price;
  //   // if (!selected) {
  //   //   this.setData({
  //   //     count: this.data.count + num * price,
  //   //     number: num + this.data.number

  //   //   });
  //   // } else {
  //   //   this.setData({
  //   //     count: this.data.count - num * price,
  //   //     number: this.data.number - num
  //   //   });
  //   // }

  //   carts[index].selected = !selected;

  //   // this.setData({
  //   //   carts: carts
  //   // });
  //   this.getTotalPrice();
  // },

  // 全选
  // bindSelectAll: function () {
  //   var selectedAllStatus = this.data.selectedAllStatus;
  //   selectedAllStatus = !selectedAllStatus;
  //   var carts = this.data.carts;
  //   if (!selectedAllStatus) {
  //     for (var i = 0; i < carts.length; i++) {
  //       carts[i].selected = selectedAllStatus;
  //       // var num = parseInt(this.data.carts[i].num);
  //       // var price = parseInt(this.data.carts[i].price);
  //       // this.setData({
  //       //   count: this.data.count - num * price,
  //       //   number: this.data.number - num

  //       // });
  //     }
  //   }
  //   this.getTotalPrice();
  // },
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
})



