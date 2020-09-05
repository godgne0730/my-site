<template>
	<div class="main_page" id="Index">
		<hello-page />
		<wrapper>
			<skill-page />
			<portfolio-page />
			<experience-page />
			<contact-page />
		</wrapper>
	</div>
</template>

<script>
import wrapper from "../components/Global/wrapper.vue";
import Hello from "../components/HelloPage/Hello.vue";
import Skill from "../components/SkillPage/Skill";
import Portfolio from "../components/PortfolioPage/Portfolio.vue";
import Experience from "../components/ExperiencePage/Experience.vue";
import Contact from "../components/ContactPage/Contact.vue";

export default {
	components: {
		"wrapper": wrapper,
		"hello-page": Hello,
		"skill-page": Skill,
		"portfolio-page": Portfolio,
		"experience-page": Experience,
		"contact-page": Contact
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