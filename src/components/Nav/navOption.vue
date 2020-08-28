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
        name: {
            type: String,
            required: true
        },
        id: {
            type: String,
            required: true
        },
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