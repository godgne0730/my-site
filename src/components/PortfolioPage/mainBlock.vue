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
        width: 70%;
        vertical-align: top;
    }
</style>