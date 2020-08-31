<template>
    <div class="info_container">
        <h2 class="sub_title"
            v-if="title">
            {{ title }}
        </h2>
        <slot />
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            require: false
        }
    }
}
</script>

<style lang="scss" scoped>
    @import "../../assets/scss/_rwd.scss";
    @import "../../assets/scss/_style.scss";
    .info_container {
        display: block;
        width: 100%;
        padding: 20px 0;
        text-align: center;
        .sub_title {
            display: block;
            width: 100%;
            color: #FFF;
            font-size: $h2;
            text-align: center;
            margin: 10px 0 30px;
            position: relative;
        }
        .sub_title::before {
            display: block;
            content: "";
            width: 50px;
            height: 3px;
            background-color: $yellow;
            position: absolute;
            right: 0;
            left: 0;
            bottom: -10px;
            margin: auto;
        }
    }
</style>