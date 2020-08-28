<template>
    <section id="Hello_Page">
        <vue-typed-js 
            :strings="words"
            :typeSpeed="120"
            :backSpeed="50"
            :loop="false">
            <span class="typing"/>
        </vue-typed-js>
        <font-awesome-icon class="icon_arrow" 
            :icon="arrow"
            v-scroll-to="nextSection" />
        <vue-particles 
            color="#DDD"
            :particleOpacity="0.3"
            :particlesNumber="120"
            :particleSize="5"
            :lineLinked="true" />
    </section>
</template>

<script>
export default {
    data() {
        return {
            words: [ "HELLO WORLD!" ],
            arrow: "chevron-down",
            nextSection: "#Skill_Page"
        }
    }
}

</script>

<style lang="scss" scoped>
    @import "../../assets/scss/_rwd.scss";
    @import "../../assets/scss/_style.scss";
    @import "../../common/fonts/fonts.css";
    #Hello_Page {
        display: block;
        width: 100%;
        position: relative;
        .typed-element {
            display: block;
            width: 100%;
            color: #FFF;
            font-family: PressStart;
            font-size: 50px !important;
            line-height: 100px;
            letter-spacing: 1px !important;
            text-align: center;
            padding: 15% 0;
            position: relative;
            z-index: 1;
        }
        .icon_arrow {
            display: block;
            width: 30px;
            height: 30px;
            color: #FFF;
            cursor: pointer;
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            margin: auto;
            animation-name: jump;
            animation-duration: 1s;
            animation-iteration-count: infinite;
            animation-timing-function: ease-in-out;
            transition: $hover;
            z-index: 1;
        }
        .icon_arrow:hover {
            animation-name: none;
            color: $light-grey;
            transition: $hover;
        }
        #particles-js {
            display: block;
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            z-index: 0;
        }
    }

    @keyframes jump {
        0% {
            bottom: 0;
        }
        50% {
            bottom: 10px;
        }
        100% {
            bottom: 0;
        }
    }
</style>