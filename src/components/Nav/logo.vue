<template>
    <div class="website_logo">
        <h1>{{ name }}</h1>
    </div>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
    @import "../../assets/scss/_style.scss";
    @import "../../assets/scss/_rwd.scss";
    @import "../../common/fonts/fonts.css";
    .website_logo {
        display: inline-block;
        width: 150px;
        vertical-align: middle;
        h1 {
            display: block;
            width: 100%;
            color: $grey;
            cursor: pointer;
            font-family: PressStart;
            font-size: 36px;
            font-weight: bolder;
            text-align: center;
            letter-spacing: 2px !important;
            line-height: 60px;
            transition: $hover;
        }
        h1:hover {
            color: $light-grey;
            transition: $hover;
        }
    }
</style>