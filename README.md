# mallmalls
小程序文件类型
	.json   JSON配置文件
	.wxml   WXML模板文件
	.wxss   WXSS样式文件
	.js     JS脚本逻辑文件


一、JSON配置
	1、小程序配置app.json
		
    {
      "pages": [  //设置页面路径
        "pages/index/index",
        "pages/logs/index"
      ],
      "window": {  //用于设置小程序的状态栏、导航条、标题、窗口背景色
        "backgroundTextStyle":"dark",                //下拉 loading 的样式，仅支持 dark/light
        "navigationBarBackgroundColor": "#000000",   //导航栏背景颜色
        "navigationBarTitleText": "WeChat",          //导航栏标题文字内容
        "navigationBarTextStyle":"white",            //导航栏标题颜色，仅支持 black/white
        "backgroundColor": "#ffffff",                //窗口的背景色
        
      }, 
      "tabBar": {  //指定 tab 栏的表现，以及 tab 切换时显示的对应页面
        "color": "#000000",          		     //tab 上的文字默认颜色
        "selectedColor":"red",           		 //tab 上的文字选中时的颜色
        "backgroundColor": "#ffffff",        //tab 的背景色
        "borderStyle":"black",           		 //tabbar上边框的颜色， 仅支持 black/white
        "position": "bottom",                //可选值 bottom、top
     
        "list": [{                                   //list里面只能配置最少2个、最多5个 tab
          "pagePath": "pages/index/index",           //页面路径，必须在 pages 中先定义
          "text": "首页",                            //tab 上按钮文字
          "iconPath": "pages/index/index",           //图片路径，icon 大小限制为40kb，当 postion 为 top 时，此参数无效，不支持网络图片
          "selectedIconPath": "/index",              //选中时的图片路径

        }, {
          "pagePath": "pages/logs/logs",
          "text": "日志"
        }]
      },
      "networkTimeout": {  //设置网络超时时间
        "request": 10000,
        "downloadFile": 10000
      },
      "debug": true
    }


	2、工具配置project.config.json
	
	3、页面配置 page.json


	
