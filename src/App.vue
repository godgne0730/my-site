<template>
	<main id="web" :class="this.$i18n.locale">
		<web-header />
		<router-view />
		<web-footer />
	</main>
</template>

<script>
import header from "./components/Global/header.vue";
import footer from "./components/Global/footer.vue";

export default {
	components: {
		"web-header": header,
		"web-footer": footer
	}
}
</script>

<style lang="scss">
	@import "./assets/scss/_reset.scss";
	@import "./assets/scss/_rwd.scss";
	@import "./assets/scss/_style.scss";
	@import "./common/fonts/fonts.css";
	#web {
		display: block;
		width: 100%;
		background-color: #000;
		color: $black;
		font-family: Ubuntu;
		overflow: hidden;
		position: relative;
		* {
			box-sizing: border-box;
		}
	}
	#web.tw,
	#web.cn {
		* {
			letter-spacing: 1px;
		}
	}
	#web.en {
		* {
			letter-spacing: 0.5px;
		}
	}
</style>