<template>
	<h1 class="title" v-if="size==='large'">
		{{label}}
	</h1>
	<h2 class="title" v-else-if="size==='middle'">
		{{label}}
	</h2>
	<h3 class="title" v-else>
		{{label}}
	</h3>
</template>

<script>
	export default {
		name: '',
		props: {
			label: {
				type: String,
				default: function(val) {
					return val ? val : '未设置Title'
				}
			},
			size: {
				type: String,
				default: function(val) {
					return (val === 'middle' || val === 'large') ? val : 'small'
				}
			}
		},
		data() {
			return {
			}
		}
	}
</script>

<style lang="less" scoped>
	@import url('../public/landing.less');

	.title {
		width: 100%;
	}
	
</style>