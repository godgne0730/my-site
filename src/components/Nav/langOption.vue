<template>
    <li class="lang_option" 
        :class="{'active': onActive}"
        @click="changeLang(val)">
        {{ name }}
    </li>
</template>

<script>
export default {
    props: {
        // 語言選項名稱
        name: {
            type: String,
            required: true
        },
        // 語言選項鍵值
        val: {
            type: String,
            required: false
        },
        // 該語種啟動中
        onActive: {
            type: Boolean,
            default: false,
            required: true
        }
    },
    methods: {
        /**
         * 點擊新語種切換目前顯示語言
         * @param {String} key 被點選到語言的鍵值 
         */
        changeLang: function(key) {
            this.$emit("changeLang", key);
        }
    }
}
</script>

<style lang="scss" scoped>
    @import "../../assets/scss/_style.scss";
    @import "../../assets/scss/_rwd.scss";
    .lang_option {
        display: inline-block;
        color: $dark-grey;
        cursor: pointer;
        font-size: 12px;
        padding: 5px 12px;
        vertical-align: middle;
        transition: $hover;
    }

    // 啟動中語言的樣式
    .lang_option.active {
        color: #FFF;
    }

    .lang_option:hover {
        color: $light-yellow;
        transition: $hover;
    }
</style>