<template>
    <div class="portfolio_card" :class="this.$i18n.locale">
        <div class="portfolio_image">
            <img :src="image" :alt="name">
        </div>
        <div class="portfolio_info">
            <h4>{{ name }}</h4>
            <span>{{ type }}</span>
            <article>{{ info }}</article>
            <img v-for="(item, index) in tools" 
                :key="'tool_'+index"
                :src="item" 
                :alt="name">
            <span class="more_info">More</span>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        // 作品名稱
        name: {
            type: String,
            required: true
        },
        // 作品縮圖
        image: {
            type: String,
            required: true
        },
        // 作品類型
        type: {
            type: String,
            required: true
        },
        // 作品介紹
        info: {
            type: String,
            required: true
        },
        // 使用工具
        tools: {
            type: Array,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
    @import "../../assets/scss/_rwd.scss";
    @import "../../assets/scss/_style.scss";
    .portfolio_card {
        display: inline-block;
        width: 30%;
        height: 300px;
        cursor: pointer;
        border: 1px solid $light-grey;
        border-radius: 3px 3px 3px 3px;
        margin: 0 3% 30px 0;
        vertical-align: top;
        .portfolio_image {
            display: block;
            width: 100%;
            img {
                display: block;
                width: 100%;
            }
        }
        .portfolio_info {
            display: block;
            width: 100%;
            padding: 10px;
            h4 {
                display: block;
                width: 100%;
                font-size: $info;
                line-height: 20px;
            }
            span {
                display: block;
                width: 100%;
                color: $dark-grey;
                font-size: 12px;
                line-height: 18px;
            }
            article {
                display: block;
                width: 100%;
                min-height: 100px;
                color: $grey;
                font-size: 12px;
                line-height: 18px;
            }
            img {
                display: inline-block;
                width: 20px;
                height: 20px;
                margin-right: 5px;
                vertical-align: middle;
            }
            .more_info {
                display: block;
                width: 20%;
                border-bottom: 3px solid $yellow;
                color: $grey;
                padding-left: 2%;
                position: relative;
                float: right;
                transition: width 0.3s;
            }
            .more_info::after {
                display: block;
                content: "";
                width: 0px;
                height: 0px;
                background-color: $yellow;
                transform: rotate(135deg);
                position: absolute;
                right: 3px;
                bottom: -3px; 
                transition: height 0.3s;
            }
        }
    }

    .portfolio_card:hover {
        .portfolio_info {
            .more_info {
                width: 22%;
                transition: width 0.3s;
            }
            .more_info::after {
                width: 3px;
                height: 10px;
                transition: height 0.3s;
            }
        }
    }
</style>