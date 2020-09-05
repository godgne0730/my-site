<template>
    <div class="contact_option">
        <a :href="method" target="_blank" :title="name">
            <div class="contact_icon">
                <img :src="image" :alt="name">
            </div>
            <div class="contact_info">
                <h3>{{ name }}</h3>
                <span>{{ info }}</span>
            </div>
        </a>
    </div>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        },
        info: {
            type: String,
            required: true
        },
        method: {
            type: String,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
    @import "../../assets/scss/_rwd.scss";
    @import "../../assets/scss/_style.scss";
    .contact_option {
        display: block;
        width: 100%;
        border: 1px solid $light-grey;
        border-radius: 3px 3px 3px 3px;
        background-color: #FFF;
        margin: 0 5% 20px 0;
        a {
            display: block;
            width: 100%;
            padding: 10px 20px;
            .contact_icon {
                display: inline-block;
                width: 70px;
                vertical-align: middle;
                img {
                    display: block;
                    width: 50px;
                    margin: 0 auto;
                }
            }
            .contact_info {
                display: inline-block;
                width: calc(100% - 70px);
                text-align: left;
                vertical-align: middle;
                h3 {
                    display: block;
                    color: $black;
                    font-size: $info;
                }
                span {
                    display: block;
                    color: $grey;
                    font-size: $info;
                }
            }
        }
    }
</style>