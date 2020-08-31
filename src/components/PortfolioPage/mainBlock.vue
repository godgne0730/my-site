<template>
    <div class="main_block">
        <slot />
    </div>
</template>

<script>
export default {
    
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
        overflow-x: hidden;
        overflow-y: scroll;
    }
</style>