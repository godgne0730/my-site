<template>
    <li class="nav_option"
        :class="{'active': onActive}"
        v-scroll-to="id">
        {{ name }}
    </li>
</template>

<script>
export default {
    props: {
        // 導覽列選項名稱
        name: {
            type: String,
            required: true
        },
        // 滾動至章節的id
        id: {
            type: String,
            required: true
        },
        // 根據目前顯示的區塊顯示啟動中
        onActive: {
            type: Boolean,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
    @import "../../assets/scss/_style.scss";
    @import "../../assets/scss/_rwd.scss";
    .nav_option {
        display: inline-block;
        cursor: pointer;
        color: $grey;
        font-size: 14px;
        padding: 5px 15px;
        vertical-align: middle;
        position: relative;
        transition: $hover;
    }
    .nav_option:before {
        display: block;
        content: "";
        width: 0;
        height: 3px;
        background-color: $light-yellow;
        position: absolute;
        bottom: -3px;
        right: 0;
        left: 0;
        margin: auto;
    }
    .nav_option:hover {
        color: $light-grey;
        transition: $hover;
    }
    .nav_option:hover:before,
    .nav_option.active:before {
        width: 80%;
        transition: width 0.3s;
    }
    .nav_option.active {
        color: #FFF;
    }
</style>