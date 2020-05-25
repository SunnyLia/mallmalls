<!-- 应用配置，用来配置App全局样式以及监听 -->
<script>
	export default {
		globalData: {
			text: 'text'
		},
		onLaunch: function() {
			console.log('App Launch');
		},
		onShow: function() {
			console.log('App Show');
		},
		onHide: function() {
			console.log('App Hide');
		}
	};
</script>

<style>
	/* 解决头条小程序组件内引入字体不生效的问题 */
	/* #ifdef MP-TOUTIAO */
	@font-face {
		font-family: uniicons;
		src: url('/static/uni.ttf');
	}

	/* #endif */

	.uni-countdown__number {
		width: 35rpx !important;
		height: 35rpx !important;
		line-height: 35rpx !important;
		background: #ff611d !important;
		margin: 0 !important;
		color: #fff !important;
		border-radius: 5rpx;
	}

	.uni-countdown__splitor {
		line-height: 1 !important;
		color: #ff611d !important;
	}
	uni-swiper .uni-swiper-wrapper{
		overflow: visible;
	}
	uni-page-wrapper{
		background: #eaeaea;
	}
</style>
