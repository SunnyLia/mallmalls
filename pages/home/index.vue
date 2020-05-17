<template>
	<view class="container">
		<view class="search-box">
			<image src="../../static/images/scan.png" mode=""></image>
			<view class="search-text">
				<image src="../../static/images/search.png" mode="" class="ser-img"></image>
				<input class="ser-input" type="text" value="输入关键字搜索" disabled />
				<text class="ser-text">搜索</text>
			</view>
			<image src="../../static/images/message.png" mode=""></image>
		</view>
		<view class="classify_box">
			<view class="cls_scroll">
				<view v-for="(item, index) in classifyList" class="cls_item" :class="{'active':scoActive==index}" :key="index">{{item.name}}</view>
			</view>
			<!-- <view> -->
			<image class="cls_img" src="../../static/images/classify.png"></image>
			<!-- </view> -->
		</view>
		<view class="swipe_box">
			<swiper class="swiper" :indicator-dots="true" circular="true" indicator-active-color="#0aa082" :autoplay="true"
			 interval="2000">
				<swiper-item class="swi_item" v-for="(item, index) in swipeList" :key="index">
					<image :src="item.src"></image>
				</swiper-item>
			</swiper>
		</view>
		<view class="funct_box">
			<view class="fun_item" v-for="(item,index) in functList" :key="index">
				<image :src="item.url"></image>
				<text>{{item.name}}</text>
			</view>
		</view>
		<view class="staImg_box">
			<image src="../../static/images/jds.gif"></image>
		</view>
		<view class="pinlei_box">
			<view class="pl_item" v-for="(item,index) in pinleiList" :key="index">
				<image :src="item.url" class="pl_img"></image>
				<view>
					<view class="pl_item_item" v-for="(val,ind) in item.items" :key="ind">
						<text>{{val.name}}</text>
						<!-- <view class="item_img"> -->
						<image :src="val.img"></image>
						<!-- </view> -->
					</view>

				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				scoActive: 0,
				pinleiList: [{
						name: "聚划算",
						url: "../../static/images/jhs.png",
						items: [{
								name: "淘抢购",
								img: "../../static/images/item4.png",
							},
							{
								name: "抢大额券",
								img: "../../static/images/item6.png",
							}
						]
					},
					{
						name: "淘宝直播",
						url: "../../static/images/tbzb.png",
						items: [{
								name: "汪涵8点直播",
								img: "../../static/images/item5.png",
							},
							{
								name: null,
								img: "../../static/images/item10.jpg",
							}
						]
					}
				],
				functList: [{
						name: "天猫超市",
						url: "../../static/images/tmcs.png"
					},
					{
						name: "天猫国际",
						url: "../../static/images/tmgj.png"
					},
					{
						name: "饿了么",
						url: "../../static/images/elem.png"
					},
					{
						name: "机票酒店",
						url: "../../static/images/feiz.png"
					},
					{
						name: "土货鲜食",
						url: "../../static/images/zwxm.png"
					},
					{
						name: "阿里健康",
						url: "../../static/images/aljk.png"
					},
					{
						name: "金币庄园",
						url: "../../static/images/jinb.png"
					},
					{
						name: "充值中心",
						url: "../../static/images/czzx.png"
					},
					{
						name: "会员中心",
						url: "../../static/images/hysh.png"
					},
					{
						name: "口碑生活",
						url: "../../static/images/kbsh.png"
					},
				],
				swipeList: [{
						src: "../../static/images/home_1.jpg"
					},
					{
						src: "../../static/images/home_2.jpg"
					}
				],
				href: 'https://uniapp.dcloud.io/component/README?id=uniui',
				classifyList: [{
						name: "首页"
					},
					{
						name: "女装"
					},
					{
						name: "鞋靴"
					},
					{
						name: "医药"
					},
					{
						name: "百货"
					},
					{
						name: "洗护"
					},
					{
						name: "进口"
					},
					{
						name: "箱包"
					},
					{
						name: "手机"
					},
					{
						name: "食品"
					},
					{
						name: "家装"
					},
					{
						name: "美妆"
					},
					{
						name: "运动"
					},
					{
						name: "数码"
					}
				]
			}
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	.container {
		// padding: 0 20rpx;
		color: #7A7E83;
		font-size: 24rpx;
	}

	.pinlei_box {
		padding: 10rpx 20rpx;
		background: #eaeaea;

		.pl_item {
			background: #fff;
			width: 50%;
			padding: 10rpx 0;
			box-sizing: border-box;
			display: inline-block;

			.pl_img {
				height: 40rpx;
				width: 100%;
			}

			.pl_item_item {
				width: 50%;
				padding: 0 20rpx;
				box-sizing: border-box;
				display: inline-block;

				// .item_img {
				// 	width: 100%;
				// 	height: 0;
				// 	padding-bottom: 100%;
				// 	overflow: hidden;
				image {
					width: 100%;
					height: 100%;
				}

				// }
			}
		}
	}

	.staImg_box {
		padding: 10px 0;

		image {
			width: 100%;
			height: 200rpx
		}
	}

	.funct_box {
		padding: 0 20rpx;

		.fun_item {
			width: 20%;
			text-align: center;
			display: inline-block;

			image {
				width: 120rpx;
				height: 100rpx
			}
		}
	}

	.swipe_box {
		padding: 0 15rpx;
		box-sizing: border-box;

		.swiper {
			width: 100%;
			height: 250rpx;
			border-radius: 16rpx;
			overflow: hidden;

			image {
				width: 100%;
				height: 100%;
			}
		}

	}

	.classify_box {
		margin-top: 80rpx;
		font-size: 30rpx;
		display: flex;
		align-items: center;
		height: 70rpx;
		line-height: 70rpx;
		padding-right: 80rpx;
		position: relative;

		.cls_img {
			width: 50rpx;
			height: 50rpx;
			position: absolute;
			right: 0;
			margin-right: 15rpx;
		}

		.cls_scroll {
			width: 100%;
			height: 100%;
			overflow-x: auto;
			white-space: nowrap;

			.cls_item {
				padding: 0 20rpx;
				display: inline-block;
			}

			.active {
				// font-size: 34rpx;
				color: #0aa082;
				font-weight: bold;
			}
		}

		.cls_scroll:after {
			position: absolute;
			content: "";
			height: 40rpx;
			top: 16rpx;
			right: 79rpx;
			width: 0;
			border-left: solid #7A7E83 1px;
		}

	}

	.search-box {
		position: fixed;
		left: 0;
		top: 0;
		z-index: 9999;
		width: 100%;
		display: flex;
		padding: 10rpx 20rpx;
		box-sizing: border-box;
		align-items: center;

		image {
			width: 55rpx;
			height: 55rpx;
		}

		.search-text {
			flex: 1;
			display: flex;
			position: relative;

			.ser-input {
				height: 56rpx;
				line-height: 56rpx;
				font-size: 14rpx;
				margin: 0 15rpx 0 10rpx;
				padding: 0 120rpx 0 50rpx;
				flex: 1;
				border: 1rpx solid #0aa082;
				border-radius: 28rpx;
				background: rgba(255, 255, 255, 0.6);
			}

			.ser-img {
				width: 40rpx;
				height: 40rpx;
				position: absolute;
				left: 20rpx;
				top: 9rpx;
			}

			.ser-text {
				position: absolute;
				right: 15rpx;
				width: 110rpx;
				height: 58rpx;
				background: #0aa082;
				border-radius: 28rpx;
				color: #fff;
				text-align: center;
				line-height: 58rpx;
			}
		}
	}
</style>
