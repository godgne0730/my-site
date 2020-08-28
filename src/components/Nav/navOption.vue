<template>
    <li class="nav_option"
        @click="toAnchor(id)">
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
        }
    },
    methods: {
        /**
         * Ckick to scroll the screen to anchor
         * @param {String} id anchor's id 
         */
        toAnchor: function(id) {
            console.log(id);
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
        transition: $hover;
    }
    .nav_option {
        color: $light-grey;
        transition: $hover;
    }
</style>