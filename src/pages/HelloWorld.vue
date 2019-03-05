<template>
	<div class="container">
		<Header></Header>
		<FullScreenAD></FullScreenAD>
	</div>
</template>

<script>
import Header from '../components/header';
import FullScreenAD from '../components/full-screen-ad';

export default {
	name: "Home",
	components: {
		Header,
		FullScreenAD
	},
	data() {
		return {
			msg: ""
		};
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
</style>
