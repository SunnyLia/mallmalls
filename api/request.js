const baseUrl = "http://127.0.0.1:8081"
const getOrderList = function(func) {
	uni.showLoading({
		title: '加载中'
	});
	uni.request({
		url: baseUrl + "/getHomeList",
		success: (res) => {
			func(res.data)
			uni.hideLoading();
		}
	});
}

export default getOrderList;
