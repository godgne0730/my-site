<template>
    <div class="side_block">
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
    @import "../../assets/scss/_style.scss";
    .side_block {
        display: inline-block;
        width: 15%;
        height: 100%;
        border-right: 1px solid $grey;
        vertical-align: top;
        padding: 30px 0 0;
        ul {
            display: block;
            width: 100%;
        }
    }
</style>