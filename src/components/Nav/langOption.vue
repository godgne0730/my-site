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
        name: {
            type: String,
            required: true
        },
        val: {
            type: String,
            required: false
        },
        onActive: {
            type: Boolean,
            default: false,
            required: true
        }
    },
    methods: {
        /**
         * click options to change active language
         * @param {String} val which language onclick 
         */
        changeLang: function(val) {
            this.$emit("changeLang", val);
        }
    }
}
</script>

<style lang="scss" scoped>
    @import "../../assets/scss/_style.scss";
    @import "../../assets/scss/_rwd.scss";
    .lang_option {
        display: inline-block;
        color: $grey;
        cursor: pointer;
        font-size: 12px;
        padding: 5px 12px;
        vertical-align: middle;
    }

    // 啟動中語言的樣式
    .lang_option.active {
        color: $black;
    }
</style>