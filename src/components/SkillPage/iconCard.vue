<template>
    <div class="icon_card">
        <div class="card_image">
            <img :src="img.src" :alt="img.name">
        </div>
        <div class="card_info">
            <ul>
                <li v-for="(item, index) in infos"
                    :key="index">
                    {{ item }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        img: {
            type: Object,
            required: true
        },
        infos: {
            type: Array,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
    @import "../../assets/scss/_rwd.scss";
    @import "../../assets/scss/_style.scss";
    .icon_card {
        display: inline-block;
        width: 30%;
        border-radius: 5px 5px 5px 5px;
        box-shadow: 0px 0px 10px 1px $light-grey;
        min-height: 320px;
        margin: 10px 1%;
        padding: 20px 10px;
        vertical-align: middle;
        .card_image {
            display: block;
            width: 48%;
            margin: 20px auto 30px;
            img {
                display: block;
                width: 100%;
            }
        }
        .card_info {
            display: block;
            width: 60%;
            margin: 5px auto;
            ul {
                display: block;
                width: 100%;
                li {
                    display: block;
                    width: 100%;
                    color: $grey;
                    font-size: $info;
                    text-align: left;
                    line-height: 20px;
                    margin: 3px 0;
                    position: relative;
                }
                li:before {
                    display: block;
                    content: "";
                    width: 5px;
                    height: 5px;
                    border-radius: 100%;
                    background-color: $light-yellow;
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    left: -15px;
                    margin: auto;
                }
            }
        }
    }
</style>