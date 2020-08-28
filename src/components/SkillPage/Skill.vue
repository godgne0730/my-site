<template>
    <section id="Skill_Page">
        <container>
            <icon-card v-for="(item, index) in cardBlocks.cards"
                :key="'card_'+index"
                :img="item.img"
                :infos="item.infos" />
            <info-block v-for="(item, index) in infoBlocks.infos"
                :key="'info_'+index"
                :wordPosition="item.wordPosition"
                :articlePosition="item.articlePosition"
                :word="item.word"
                :infoTitle="item.infoTitle"
                :articles="item.articles"
                :icons="item.icons" />
        </container>
    </section>
</template>

<script>
import container from "../../components/Global/container.vue";
import iconCard from "./iconCard.vue";
import infoBlock from "./infoBlock.vue";

export default {
    components: {
        "container": container,
        "icon-card": iconCard,
        "info-block": infoBlock
    },
    computed: {
        cardBlocks: function() {
            return {
                cards: [
                    {
                        img: {
                            src: require("../../assets/image/icons/frontend.png"),
                            alt: "frontend_icon"   
                        },
                        infos: this.$t("skills[0]")
                    },
                    {
                        img: {
                            src: require("../../assets/image/icons/backend.png"),
                            alt: "backend_icon"
                        },
                        infos: this.$t("skills[1]")
                    },
                    {
                        img: {
                            src: require("../../assets/image/icons/database.png"),
                            alt: "database_icon"
                        },
                        infos: this.$t("skills[2]")
                    }
                ]
            }
        },
        infoBlocks: function() {
            return {
                infos: [
                    {
                        wordPosition: "left",
                        articlePosition: "right",
                        word: this.$t("skillTitles[0].word"/*前*/),
                        infoTitle: this.$t("skillTitles[0].title"/*Web前端*/),
                        articles: this.$t("skillInfos[0]"/**/),
                        icons: [
                            {
                                name: "HTML5",
                                src: require("../../assets/image/icons/icon_html5.png")
                            },
                            {
                                name: "CSS3",
                                src: require("../../assets/image/icons/icon_css3.png")
                            },
                            {
                                name: "JavaScript",
                                src: require("../../assets/image/icons/icon_js.png")
                            },
                            {
                                name: "Vue.js",
                                src: require("../../assets/image/icons/icon_vue.png")
                            },
                            {
                                name: "jQuery",
                                src: require("../../assets/image/icons/icon_jquery.png")
                            },
                            {
                                name: "SASS",
                                src: require("../../assets/image/icons/icon_sass.png")
                            },
                            {
                                name: "Webpack",
                                src: require("../../assets/image/icons/icon_webpack.png")
                            },
                            {
                                name: "Gulp",
                                src: require("../../assets/image/icons/icon_gulp.png")
                            }
                        ]
                    },
                    {
                        wordPosition: "right",
                        articlePosition: "left",
                        word: this.$t("skillTitles[1].word"/*後*/),
                        infoTitle: this.$t("skillTitles[1].title"/*Web後端*/),
                        articles: this.$t("skillInfos[1]"/**/),
                        icons: [
                            {
                                name: "Node.js",
                                src: require("../../assets/image/icons/icon_nodejs.png"),
                            },
                            {
                                name: "PHP",
                                src: require("../../assets/image/icons/icon_php.png")
                            },
                            {
                                name: "PM2",
                                src: require("../../assets/image/icons/icon_pm2.png")
                            },
                            {
                                name: "CentOS",
                                src: require("../../assets/image/icons/icon_centOS.png")
                            }
                        ]
                    },
                    {
                        wordPosition: "left",
                        articlePosition: "right",
                        word: this.$t("skillTitles[2].word"/*資*/),
                        infoTitle: this.$t("skillTitles[2].title"/*Web資料庫*/),
                        articles: this.$t("skillInfos[2]"/**/),
                        icons: [
                            {
                                name: "MySQL",
                                src: require("../../assets/image/icons/icon_mySQL.png")
                            },
                            {
                                name: "SQLite",
                                src: require("../../assets/image/icons/icon_sqlite.png")
                            },
                            {
                                name: "PHPMyAdmin",
                                src: require("../../assets/image/icons/icon_phpMyAdmin.png")
                            }
                        ]
                    }
                ]
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    @import "../../assets/scss/_rwd.scss";
    @import "../../assets/scss/_style.scss";
    #Skill_Page {
        @include section;
    }
</style>