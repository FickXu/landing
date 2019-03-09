<template>
	<div :class="['container', {'reverse-layout': isReverse}]">
		<div class="summary">
			<Title :label="data.summary.title" :size="'large'"></Title>
			<div class="description">
				{{data.summary.description}}
			</div>
		</div>
		<div class="infomations">
			<div>
				<div class="item" v-for="item in data.infomations" :key="item.abstract">
					<img :src="item.url" alt="">
					<span>{{item.abstract}}</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Title from './title.vue'
	export default {
		components: {
			Title
		},
		name: '',
		props: {
			isReverse: {
				type: Boolean,
				default: function (val) {
					return val ? true : false
				}
			},
			data: {
				type: Object,
				default: function () {
					return {
						summary: {
							title: 'Innomation赋能创业者',
							description: '创新在技术和资本之间存在现实鸿沟，据统计，全球仅3%的创业企业可以成功获得早期投资，大量的创新理念无法实现。Innomation通过整合区块链技术并将其应用于孵化领域，实现创新资产化、价值显性化，拉近技术和资本的距离，让创业不再困难。'
						},
						infomations: [
							{
								url: require('../assets/zwt.jpg'),
								abstract: '可信可靠的团队合作'
							},
							{
								url: require('../assets/zwt.jpg'),
								abstract: '数据化的价值评估'
							},
							{
								url: require('../assets/zwt.jpg'),
								abstract: '可信可靠通畅的股权代币化融资通道的团队合作'
							},
							{
								url: require('../assets/zwt.jpg'),
								abstract: '持续的创新创业导师服务'
							},
							{
								url: require('../assets/zwt.jpg'),
								abstract: '公开可信的项目空间'
							},
							{
								url: require('../assets/zwt.jpg'),
								abstract: '托管可信的资金使用'
							}
						]
					}
				}
			}
		},
		data () {
			return {
			}
		}
	}
</script>

<style lang="less" scoped>
	@import url('../public/landing.less');

	.reverse-layout {
		.summary {
			order: 1;
		}
		.infomations {
			order: 0;
		}
	}
	.container {
		height: 300px;
		width: 90%;
		margin: 30px auto 0;
		.layout-flex;
		flex-wrap: wrap;
		.summary {
			flex: 1;
			.layout-flex;
			.flex-direction(column);
			.align-items;
			.title {
				width: 80%;
				// margin: 30px auto 0;
				font-size: 28px;
				font-weight: 600;
			}
			.description {
				width: 80%;
				margin-top: 30px;
				line-height: 30px;
			}
		}
		.infomations {
			flex: 1;
			.layout-flex;
			.justify-content;
			>div {
				width: 87%;
				height: 75%;
				.layout-flex(inline-flex);
				flex-wrap: wrap;
				.item {
					width: 50%;
					.layout-flex;
					.align-items(center);
					img {
						width: 100px
					}
				}
			}
		}
	}
	
</style>