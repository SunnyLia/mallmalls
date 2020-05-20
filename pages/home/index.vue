<template>
	<view class="container">
		<!-- 
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
			<image class="cls_img" src="../../static/images/classify.png"></image>
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
				<view class="pl_item_ul">
					<view class="pl_item_li" v-for="(val,ind) in item.items" :key="ind">
						<view class="pl_item_left" v-if="val.name">
							<text class="item_text" :style="{color:val.color}">{{val.name}}</text>
							<view class="item_img">
								<image :src="val.img"></image>
							</view>
						</view>
						<view class="pl_item_right" v-else>
							<view class="item_img">
								<image :src="val.img"></image>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="pl_news">
				<text class="nws_text">淘宝头条</text>
				<swiper class="new_swip" :autoplay="true" :vertical="true" :circular="true">
					<swiper-item v-for="(item,index) in taobNews" :key="index">
						<text class="red">{{item.classify}}</text>
						<text>{{item.text}}</text>
					</swiper-item>
				</swiper>
			</view>
		</view>
		 -->
		<view class="more_box">
			<block v-for="(item,index) in moreClassify" :key="index">
				<view class="more_classify" :class="{'active':index == moreActive}">
					<view class="more_top">{{item.name}}</view>
					<text class="more_bot">{{item.text}}</text>
				</view>
			</block>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				scoActive: 0,
				moreActive: 0,
				moreClassify: [{
						name: "全部",
						text: "猜你喜欢"
					},
					{
						name: "告白季",
						text: "立即抢购"
					},
					{
						name: "直播",
						text: "新品搭配购"
					},
					{
						name: "便宜好货",
						text: "特价抢购"
					},
					{
						name: "买家秀",
						text: "真实晒单"
					},
				],
				taobNews: [{
					classify: "评测",
					text: "网红瓶盖饮料，三秒钟把水变成饮料"
				}, {
					classify: "摄影",
					text: "专治镜头尴尬症，7个女生通用pose"
				}, {
					classify: "评测",
					text: "实测：五款最强防霾滤芯安利给你"
				}, {
					classify: "萌宠",
					text: "为什么唤猫的名字，它总不搭理？"
				}],
				pinleiList: [{
					name: "聚划算",
					url: "../../static/images/jhs.png",
					items: [{
							name: "淘抢购",
							color: "#50bdff",
							img: "../../static/images/item4.png",
						},
						{
							name: "天天特卖",
							color: "#ff82a2",
							img: "../../static/images/item6.png",
						}
					]
				}, {
					name: "淘宝直播",
					url: "../../static/images/tbzb.png",
					items: [{
							name: "汪涵8点直播",
							color: "#ff611d",
							img: "../../static/images/item5.png",
						},
						{
							name: "9.9包邮",
							color: "#f9a500",
							img: "../../static/images/item10.jpg",
						}
					]
				}, {
					name: "聚划算",
					url: "../../static/images/jhs.png",
					items: [{
							name: "淘抢购",
							color: "#50bdff",
							img: "../../static/images/item4.png",
						},
						{
							name: "天天特卖",
							color: "#ff82a2",
							img: "../../static/images/item6.png",
						}
					]
				}, {
					name: "淘宝直播",
					url: "../../static/images/tbzb.png",
					items: [{
							name: "汪涵8点直播",
							color: "#ff611d",
							img: "../../static/images/item5.png",
						},
						{
							img: "../../static/images/item10.jpg",
						}
					]
				}],
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

	.more_box {
		display: flex;

		.more_classify {
			width: 20%;
			text-align: center;
			position: relative;

			.more_top {
				font-size: 30rpx;
				font-weight: bold;
				color: #000;
			}
		}

		.more_classify.active {
			.more_top {
				color: #0aa082
			}

			.more_bot {
				background: #0aa082;
				color: #fff;
				display: inline-block;
				padding: 0 10rpx 3rpx 10rpx;
				border-radius: 20px;
			}
		}

		.more_classify:after {
			content: "";
			position: absolute;
			height: 50rpx;
			width: 0;
			border: 1rpx solid #eaeaea;
			right: 0;
			top: 12rpx
		}

		.more_classify:last-child:after {
			border: 0;
		}
	}

	.pinlei_box {
		padding: 20rpx;
		background: #eaeaea;

		.pl_news {
			height: 80rpx;
			line-height: 80rpx;
			background: #fff;
			border-top: 1px solid #eaeaea;
			border-radius: 0 0 20rpx 20rpx;
			padding: 0 20rpx;
			display: flex;
			overflow: hidden;

			.nws_text {
				font-size: 32rpx;
				color: #000;
				font-weight: bold;
				width: 170rpx;
				display: inline-block;
			}

			.new_swip {
				width: 100%;
				height: 100%;
				font-size: 26rpx;
				color: #333;

				.red {
					display: inline;
					background-color: #feefec;
					color: #e86217;
					padding: 4rpx 10rpx;
					border-radius: 4rpx;
					margin: 0 10rpx 0 5rpx;
				}
			}
		}

		.pl_item {
			background: #fff;
			width: 50%;
			padding: 10rpx 0;
			box-sizing: border-box;
			display: inline-block;
			border-right: 1px solid #eaeaea;

			.pl_img {
				height: 40rpx;
				width: 100%;
			}

			.pl_item_ul {
				padding: 0 6rpx 0 20rpx;
				height: 200rpx;

				.pl_item_li {
					display: inline-block;
					width: 50%;
					height: 100%;
					padding-right: 15rpx;
					box-sizing: border-box;
					font-size: 26rpx;
					float: left;

					.pl_item_left,
					.pl_item_right {
						background: #fff8fa;
						border-radius: 10rpx;
						height: 100%;
						padding: 8rpx 10rpx;
						box-sizing: border-box;

						.item_img {
							width: 100%;
							height: 100%;
						}
					}

					.pl_item_left {
						padding: 40rpx 10rpx 8rpx;
						position: relative;

						.item_text {
							position: absolute;
							top: 0;
							height: 40rpx;
							line-height: 40rpx;
						}
					}

					image {
						width: 100%;
						height: 100%;
					}
				}
			}
		}

		.pl_item:nth-child(1) {
			border-radius: 20rpx 0 0 0;
		}

		.pl_item:nth-child(2) {
			border-radius: 0 20rpx 0 0;
		}

		.pl_item:nth-child(2n) {

			.pl_item_left,
			.pl_item_right {
				background: #fff !important;
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
