<template>
    <div class="info_block">
        <div class="info_word" :class="[wordPosition, this.$i18n.locale]">
            <span>{{ word }}</span>
        </div>
        <div class="info_article" :class="articlePosition">
            <h3>{{ infoTitle }}</h3>
            <ul>
                <li v-for="(item, index) in articles"
                :key="'articles_'+index">{{ item }}</li>
            </ul>
            <div class="info_list">
                <div class="info_icons" v-for="(item, index) in icons"
                    :key="'icons_'+index">
                    <img :src="item.src" :alt="item.name">
                    <span>{{ item.name }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        // 大字版面位置
        wordPosition: {
            type: String,
            default: "left",
            required: false
        },
        // 詳細資訊列表版面位置
        articlePosition: {
            type: String,
            default: "right",
            required: false
        },
        // 大字字串內容
        word: {
            type: String,
            required: true
        },
        // 詳細資訊標題內容
        infoTitle: {
            type: String,
            required: true
        },
        // 裝載詳細資訊的陣列
        articles: {
            type: Array,
            required: true
        },
        // 裝載icon資訊的陣列
        icons: {
            type: Array,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
    @import "../../assets/scss/_rwd.scss";
    @import "../../assets/scss/_style.scss";
    @import "../../common/fonts/fonts.css";
    .info_block {
        display: block;
        width: 100%;
        margin: 30px 0;
        .info_word {
            display: inline-block;
            width: 30%;
            vertical-align: top;
            padding: 50px 0;
            span {
                display: block;
                width: 60%;
                border-bottom: 5px solid $light-yellow;
                color: $grey;
                font-size: 120px;
                font-weight: bolder;
                line-height: 100px;
                margin: 0 auto;
            }
        }
        .info_article {
            display: inline-block;
            width: 70%;
            text-align: left;
            vertical-align: top;
            h3 {
                display: block;
                width: 100%;
                font-size: $h3;
                color: $yellow;
                margin: 0 0 10px;
            }
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
                    padding-left: 15px;
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
                    left: 0;
                    margin: auto;
                }
            }
            .info_list {
                display: block;
                width: 100%;
                .info_icons {
                    display: inline-block;
                    width: 80px;
                    vertical-align: middle;
                    margin: 5px 10px 5px 0;
                    img {
                        display: block;
                        width: 80%;
                        margin: auto;
                    }
                    span {
                        display: block;
                        color: $grey;
                        font-size: $info;
                        line-height: 2*$info;
                        text-align: center;
                    }
                }
            }
        }

        // 英文下的字體樣式
        .info_word.en {
            span {
                font-family: PressStart;
                line-height: 60px;
            }
        }
        // 中文下的字體樣式
        .info_word.tw,
        .info_word.cn {
            span {
                font-family: AuraSon;
            }
        }
        
        // 大字在左樣式
        .info_word.left {
            span {
                border-right: 5px solid $light-yellow;
            }
        }
        // 大字在右樣式
        .info_word.right {
            position: relative;
            left: 68%;
            span {
                border-left: 5px solid $light-yellow;
            }
        }
        // 詳細資訊在左右樣式
        .info_article.left {
            position: relative;
            right: 22%;
        }
    }
</style>