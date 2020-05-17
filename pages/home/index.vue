<template>
	<view class="container">
		<view class="search-box">
			<image src="../../static/images/scan.png" mode=""></image>
			<view class="search-text">
				<image src="../../static/images/search.png" mode=""></image>
				<input class="ser-input" type="text" value="输入关键字搜索" disabled />
				<text class="">
					搜索
				</text>
			</view>

			<image src="../../static/images/message.png" mode=""></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				href: 'https://uniapp.dcloud.io/component/README?id=uniui'
			}
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	.container {
		padding: 0 20rpx;
		color: #7A7E83;
		font-size: 14rpx;
	}

	.search-box {
		position: absolute;
		left: 0;
		top: 0;
		z-index: 9999;
		width: 100%;
		display: flex;
		padding: 10rpx;
		box-sizing: border-box;
		background: #eaeaea;

		image {
			width: 60rpx;
			height: 60rpx;
		}

		.search-text {
			flex: 1;
			display: flex;
			.ser-input {
				height: 56rpx;
				line-height: 56rpx;
				font-size: 14rpx;
				margin: 0 10rpx;
				padding: 0 20rpx;

				border: 1rpx solid #0aa082;
				border-radius: 28rpx;
				background: rgba(255, 255, 255, 0.6);
			}
		}
	}
</style>
