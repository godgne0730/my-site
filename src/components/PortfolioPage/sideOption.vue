<template>
    <li class="side_option"
        :class="{ 'active': onActive }"
        @click="yearFilter(name)">
        {{ name }}
        <span>({{ count }})</span>
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
        // 數量
        count: {
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
    methods: {
        /**
         * 按照年份篩選排序 
         * @param {Number} year 要篩選的年份
         */
        yearFilter: function(year) {
            this.$emit("yearFilter", year);
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
        color: $dark-grey;
        cursor: pointer;
        font-family: AuraSon;
        font-size: $h2;
        text-align: center;
        padding: 10px 0;
        position: relative;
        span {
            font-family: Unbutu;
            font-size: $info;
        }
    }
    .side_option::after {
        display: block;
        content: "";
        width: 0px;
        height: 0px;
        background-color: $yellow;
        position: absolute;
        bottom: 5px;
        left: 0;
        right: 0;
        margin: auto;
        transition: width 0.3s;
    }
    .side_option:hover::after {
        width: 90px;
        height: 3px;
        transition: width 0.3s;
    }
    .side_option.active {
        color: $black;
    }
    .side_option.active::after {
        width: 90px;
        height: 3px;
        transition: width 0.3s;
    }
</style>