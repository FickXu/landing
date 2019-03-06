<template>
	<div class="container">
		<Header></Header>
		<FullScreenAD></FullScreenAD>
		<Notion></Notion>
		<Notion isReverse></Notion>
		<Notion></Notion>
	</div>
</template>

<script>
import Header from '../components/header';
import FullScreenAD from '../components/full-screen-ad';
import Notion from '../components/notion-view';

export default {
	name: "Home",
	components: {
		Header,
		FullScreenAD,
		Notion
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
