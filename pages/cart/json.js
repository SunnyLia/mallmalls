
var list = {
  "r": 0,
  "data": {
    "id": "23654134",
    "owner_id": "167932999",
    "shops": [

      {
        "services_phone": "18050108605",
        "total_quantity": 1,
        "total_amount": "1.00",
        "url": "https://market.douban.com/shop/miniteaset/",
        "items": [
          {
            "can_buy": true,
            "amount": "1.00",
            "product_type": 0,
            "is_flash_sale": false,
            "product_sku": {
              "id": "90190",
              "url": "https://market.douban.com/item/90190/",
              "stock": 64,
              "title": "小巨蛋T1便携式茶具礼品套装砂岩釉茶盒版（极客黑）",
              "price": "1.00",
              "color": "极客黑",
              "size": "",
              "color_name": "颜色",
              "size_name": "尺寸",
              "product_id": "28726",
              "promote_price": "1.00",
              "master_photo": {
                "large_url": "https://img1.doubanio.com/view/dianpu_product_item/large/public/p449949.jpg",
                "id": 449949,
                "original_filename": "0.jpg",
                "normal_url": "https://img1.doubanio.com/view/dianpu_product_item/small/public/p449949.jpg"
              },
              "is_pre_sale": false,
              "pre_sale_display": ""
            },
            "id": "951309",
            "promote_detail": {},
            "quantity": 1
          }
        ],
        "sid": "miniteaset",
        "services_name": "小巨蛋市集",
        "is_self_supported": false,
        "services_doumail": "147936413",
        "id": "12572",
        "name": "小巨蛋市集"
      },
      {
        "services_phone": "4008086101",
        "total_quantity": 3,
        "total_amount": "3.00",
        "url": "https://market.douban.com/shop/Saturnbird/",
        "items": [
          {
            "can_buy": true,
            "amount": "1.00",
            "product_type": 0,
            "is_flash_sale": false,
            "product_sku": {
              "id": "114828",
              "url": "https://market.douban.com/item/114828/",
              "stock": 41,
              "title": "三顿半 | 第2代SENSE LIVING系列  手冲挂耳咖啡大满贯套装",
              "price": "1.00",
              "color": "云崖灰",
              "size": "",
              "color_name": "颜色",
              "size_name": "尺寸",
              "product_id": "34460",
              "promote_price": "1.00",
              "master_photo": {
                "large_url": "https://img3.doubanio.com/view/dianpu_product_item/large/public/p573553.jpg",
                "id": 573553,
                "original_filename": "1.jpg",
                "normal_url": "https://img3.doubanio.com/view/dianpu_product_item/small/public/p573553.jpg"
              },
              "is_pre_sale": false,
              "pre_sale_display": ""
            },
            "id": "948060",
            "promote_detail": {},
            "quantity": 1
          },
          {
            "can_buy": true,
            "amount": "2.00",
            "product_type": 0,
            "is_flash_sale": false,
            "product_sku": {
              "id": "200651",
              "url": "https://market.douban.com/item/200651/",
              "stock": 74,
              "title": "三顿半 | 第2代精品冷萃奶萃咖啡套装带滤泡杯",
              "price": "1.00",
              "color": "「DAILY LATTE」拿铁套装",
              "size": "",
              "color_name": "颜色",
              "size_name": "尺寸",
              "product_id": "29983",
              "promote_price": "1.00",
              "master_photo": {
                "large_url": "https://img1.doubanio.com/view/dianpu_product_item/large/public/p1955767.jpg",
                "id": 1955767,
                "original_filename": "1.jpg",
                "normal_url": "https://img1.doubanio.com/view/dianpu_product_item/small/public/p1955767.jpg"
              },
              "is_pre_sale": false,
              "pre_sale_display": ""
            },
            "id": "948005",
            "promote_detail": {},
            "quantity": 2
          }
        ],
        "sid": "Saturnbird",
        "services_name": "三顿半",
        "is_self_supported": false,
        "services_doumail": "133229683",
        "id": "11174",
        "name": "三顿半"
      }
    ],
    "total_amount": "4.00",
    "total_quantity": 4
  }
}

var datas = list.data.shops
for (var i = 0; i < datas.length;i++){
  datas[i].checked = false;
  for (var j = 0; j < datas[i].items.length; j++) {
    datas[i].items[j].checked = false;
  }
}
module.exports = {
  data: list.data.shops
}
