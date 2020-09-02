<template>
    <li class="side_option"
        :class="{ 'active': onActive }"
        @click="yearFilter(name)">
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
        color: $grey;
        cursor: pointer;
        font-family: PressStart;
        font-size: $h3;
        text-align: center;
        padding: 15px 0;
        background-color: $yellow;
    }
</style>