<template>
    <div class="contact_block">
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
    .contact_block {
        display: inline-block;
        width: 30%;
        vertical-align: middle;
    }
</style>