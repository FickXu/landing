<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style lang="less">
	#app {
		font-family: "Avenir", Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: #2c3e50;
		// background-color: #eef1f6;
		width: 100vw;
		min-height: 100vh;
		overflow: auto;
		// .border-bottom {
		// 	border-bottom: 1px solid #e0e5ee;
		// }
	}
</style>
