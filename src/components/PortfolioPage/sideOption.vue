<template>
    <li class="side_option"
        :class="{ 'active': onActive }">
        {{ name }}
    </li>
</template>

<script>
export default {
    props: {
        // 名稱
        name: {
            type: Number,
            required: true
        },
        // 啟動中
        onActive: {
            type: Boolean,
            default: false,
            required: true
        }
    },
    data() {
        return {

        }
    }
}
</script>

<style lang="scss" scoped>
    @import "../../assets/scss/_rwd.scss";
    @import "../../assets/scss/_style.scss";
    @import "../../common/fonts/fonts.css";
    .side_option {
        display: block;
        width: 100%;
        color: $grey;
        font-family: PressStart;
        font-size: $h3;
        text-align: center;
        padding: 15px 0;
    }
</style>