<template>
    <div class="decoration_block">
        <div class="window_bar">
            <div class="window_button" v-for="(item, index) in btns"
                :key="'btn_'+index" 
                :class="item" />
        </div>
        <slot />
    </div>
</template>

<script>
export default {
    data() {
        return {
            btns: [ "red", "yellow", "green" ]
        }
    }
}
</script>

<style lang="scss" scoped>
    @import "../../assets/scss/_rwd.scss";
    @import "../../assets/scss/_style.scss";
    .decoration_block {
        display: block;
        width: 100%;
        height: 600px;
        background-color: #FFF;
        border-radius: 0px 0px 5px 5px;
        overflow: hidden;
        position: relative;
        .window_bar {
            display: block;
            width: 100%;
            height: 36px;
            background-color: rgb(29, 30, 33);
            box-shadow: 0px 2px 10px 1px $black;
            text-align: left;
            padding: 10px 0 10px 10px;
            overflow-x: hidden;
            position: relative;
            z-index: 2;
            .window_button {
                display: inline-block;
                width: 11px;
                height: 11px;
                border-radius: 100%;
                margin-right: 8px;
                vertical-align: middle;
                position: relative;
            }
            .window_button.red {
                background-color: rgb(255, 77, 70);
            }
            .window_button.yellow {
                background-color: rgb(255, 185, 41);
            }
            .window_button.green {
                background-color: rgb(38, 202, 59);
            }
        }
    }
</style>