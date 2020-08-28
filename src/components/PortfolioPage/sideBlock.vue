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
        width: 30%;
        vertical-align: top;
        ul {
            display: block;
            width: 100%;
        }
    }
</style>