const baseUrl = "http://127.0.0.1:8081"
const getOrderList = function(){
	uni.request({
	    url: baseUrl+"/getOrderList", 
	    success: (res) => {
	        console.log(res);
	       
	    },
		fail: (res) => {
		    console.log(res);
		}
	});
}

export default getOrderList;
