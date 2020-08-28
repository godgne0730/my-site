<template>
    <div class="lang_bar">
        <ul>
            <slot />
        </ul>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    @import "../../assets/scss/_rwd.scss";
    .lang_bar {
        display: inline-block;
        width: 150px;
        vertical-align: middle;
    }
</style>