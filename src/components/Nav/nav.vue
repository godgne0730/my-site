<template>
    <nav class="nav_bar">
        <ul>
            <slot />
        </ul>
    </nav>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    @import "../../assets/scss/_rwd.scss";
    .nav_bar {
        display: inline-block;
        width: calc(100% - 300px);
        text-align: right;
        vertical-align: middle;
    }
</style>