<template>
    <div class="wrapper">
        <slot />
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    @import "../../assets/scss/_rwd.scss";
    .wrapper {
        display: block;
        width: 100%;
        overflow: hidden;
        @include pc-ver {
            max-width: $wrapper;
            margin: 0 auto;
        }
    }
</style>