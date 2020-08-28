<template>
	<main id="web" :class="this.$i18n.locale">
		<web-header />
		<router-view />
	</main>
</template>

<script>
import header from "./components/Global/header.vue";

export default {
	components: {
		"web-header": header
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
		overflow: hidden;
		font-family: Ubuntu;
		color: $black;
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