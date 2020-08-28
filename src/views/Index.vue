<template>
	<div class="main_page" id="Index">
		<hello-page />
		<wrapper>
			<skill-page />
			<portfolio-page />
		</wrapper>
	</div>
</template>

<script>
import wrapper from "../components/Global/wrapper.vue";
import Hello from "../components/HelloPage/Hello.vue";
import Skill from "../components/SkillPage/Skill";
import Portfolio from "../components/PortfolioPage/Portfolio.vue";

export default {
	components: {
		"wrapper": wrapper,
		"hello-page": Hello,
		"skill-page": Skill,
		"portfolio-page": Portfolio
	}
}
</script>

<style lang="scss" scoped>
	@import "../assets/scss/_rwd.scss";
	.main_page {
		display: block;
		width: 100%;
	}
</style>