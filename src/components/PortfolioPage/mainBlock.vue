<template>
    <div class="main_block">
        <slot />
    </div>
</template>

<script>
export default {
    props: {
        scrollLeft: {
            type: Boolean,
            required: false
        },
        scrollRight: {
            type: Boolean,
            required: false
        }
    }
}
</script>

<style lang="scss" scoped>
    @import "../../assets/scss/_rwd.scss";
    @import "../../assets/scss/_style.scss";
    .main_block {
        display: inline-block;
        width: 85%;
        height: 100%;
        text-align: left;
        vertical-align: top;
        padding: 30px 20px 50px;
        overflow-y: scroll;
    }
    /* total width */
    .main_block::-webkit-scrollbar {
        background-color: #fff;
        width: 16px;
    }

    /* background of the scrollbar except button or resizer */
    .main_block::-webkit-scrollbar-track {
        background-color: #fff;
    }

    /* scrollbar itself */
    .main_block::-webkit-scrollbar-thumb {
        background-color: #babac0;
        border-radius: 16px;
        border: 4px solid #fff;
    }

    /* set button(top and bottom of the scrollbar) */
    .main_block::-webkit-scrollbar-button {
        display:none;
    }
</style>