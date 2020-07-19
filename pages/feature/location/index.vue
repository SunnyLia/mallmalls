<template>
	<view class="location_box">
		<map style="width: 100%; height: 300px;" :latitude="latitude" :longitude="longitude" :markers="covers">
		</map>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id: 0, // 使用 marker点击事件 需要填写id
				title: 'map',
				latitude: 39.909,
				longitude: 116.39742,
				covers: [{
					id:1,
					latitude: 39.909,
					longitude: 116.39742,
					iconPath: '../../../static/images/location.png'
				}]
			}
		},
		methods: {

		},
		mounted() {
		},
		onLoad() {
			uni.authorize({
			    scope: 'scope.userLocation,scope.userInfo,scope.camera',
			    success() {
			        console.log("授权成功")
			    },
				fail() {
				    console.log("授权失败")
				}
			})
			console.log(11111111111111)
			uni.getLocation({
			    type: 'wgs84',
			    success: function (res) {
			        console.log('当前位置的经度：' + res.longitude);
			        console.log('当前位置的纬度：' + res.latitude);
			    },fail: function (res) {
			        console.log('错误：' + res);
			    }
			});
		}
	}
</script>

<style lang="scss">

</style>
