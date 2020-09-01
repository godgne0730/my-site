<template>
    <section id="Portfolio_Page">
        <container :title="title">
            <decoration-block>
                <side-block>
                    <side-option v-for="(item, index) in sideOptions"
                        :key="'side_'+index"
                        :name="item.name"
                        :onActive="item.onActive" />
                </side-block>
                <main-block>
                    <portfolio-card v-for="(item, index) in portfolios"
                        :key="'portfolio_'+index"
                        :index="index"
                        :name="item.name"
                        :image="item.image"
                        :type="item.type"
                        :info="item.info"
                        :tools="item.tools"
                        @showMore="initMoreData" />
                </main-block>
                <more-block :name="moreShows.name"
                    :pages="moreShows.pages"
                    :video="moreShows.video"
                    :onActive="activeMore"
                    @closeWindow="closeWindow" />
            </decoration-block>
        </container>
    </section>
</template>

<script>
import container from "../Global/container.vue";
import decorationBlock from "./decorationBlock.vue";
import sideBlock from "./sideBlock.vue";
import sideOption from "./sideOption.vue";
import mainBlock from "./mainBlock.vue";
import portfolioCard from "./portfolioCard.vue";
import moreBlock from "./moreBlock.vue";

export default {
    components: {
        "container": container,
        "decoration-block": decorationBlock,
        "side-block": sideBlock,
        "side-option": sideOption,
        "main-block": mainBlock,
        "portfolio-card": portfolioCard,
        "more-block": moreBlock
    },
    data() {
        return {
            sideOptions: [
                {
                    name: 2020,
                    onActive: false
                },
                {
                    name: 2019,
                    onActive: false
                },
                {
                    name: 2018,
                    onActive: false
                }
            ],
            activeMore: false,
            moreShows: {
                name: "",
                pages: [],
                video: ""
            }
        }
    },
    computed: {
        title: function() {
            return this.$t("navs[1]"/*作品展示*/)
        },
        portfolios: function() {
            return [
                {
                    name: this.$t("portfolios[0].name"/*Hosailey*/),
                    image: require("../../assets/image/portfolios/hosailey.png"),
                    year: 2020,
                    type: this.$t("portfolioTypes[0]"/*企業官方網站*/),
                    info: this.$t("portfolios[0].info"/*馬來西亞沙巴公司企業形象網站*/),
                    tools: [ require("../../assets/image/icons/icon_vue.png"), require("../../assets/image/icons/icon_sass.png") ],
                    pages: [ 
                        { 
                            name: "Index",
                            image: require("../../assets/image/portfolios/hosailey_1.png"),
                            video: require("../../assets/video/hosailey_1.webm")
                        },
                        {
                            name: "Page_2",
                            image: require("../../assets/image/portfolios/hosailey_2.png"),
                            video: require("../../assets/video/hosailey_2.webm")
                        },
                        {
                            name: "Page_3",
                            image: require("../../assets/image/portfolios/hosailey_3.png"),
                            video: require("../../assets/video/hosailey_3.webm")
                        },
                        {
                            name: "Page_4",
                            image: require("../../assets/image/portfolios/hosailey_4.png"),
                            video: require("../../assets/video/hosailey_4.webm")
                        }
                    ]
                },
                {
                    name: this.$t("portfolios[1].name"/*KeChen行政管理系統*/),
                    image: require("../../assets/image/portfolios/oa_frontend.png"),
                    year: 2020,
                    type: this.$t("portfolioTypes[1]"/*後台管理系統*/),
                    info: this.$t("portfolios[1].info"/*KeChen企業內部行政管理*/),
                    tools: [ require("../../assets/image/icons/icon_vue.png"), require("../../assets/image/icons/icon_sass.png"), require("../../assets/image/icons/icon_nodejs.png") ]
                },
                {
                    name: this.$t("portfolios[2].name"/*TikChat*/),
                    image: require("../../assets/image/portfolios/tikchat.png"),
                    year: 2020,
                    type: this.$t("portfolioTypes[0]"/*企業官方網站*/),
                    info: this.$t("portfolios[2].info"/*TikChat聊天軟體官方網站*/),
                    tools: [ require("../../assets/image/icons/icon_vue.png"), require("../../assets/image/icons/icon_sass.png") ]
                },
                {
                    name: this.$t("portfolios[3].name"/*KeChen人才網站管理系統*/),
                    image: require("../../assets/image/portfolios/hr_frontend.png"),
                    year: 2020,
                    type: this.$t("portfolioTypes[1]"/*後台管理系統*/),
                    info: this.$t("portfolios[3].info"/*KeChen企業人才招募網站管理系統*/),
                    tools: [ require("../../assets/image/icons/icon_vue.png"), require("../../assets/image/icons/icon_sass.png"), require("../../assets/image/icons/icon_nodejs.png") ]
                },
                {
                    name: this.$t("portfolios[4].name"/*KeChen人才招募網站*/),
                    image: require("../../assets/image/portfolios/hr_web.png"),
                    year: 2019,
                    type: this.$t("portfolioTypes[0]"/*企業官方網站*/),
                    info: this.$t("portfolios[4].info"/*KeChen企業人才招募網站*/),
                    tools: [ require("../../assets/image/icons/icon_vue.png"), require("../../assets/image/icons/icon_sass.png") ]
                },
                {
                    name: this.$t("portfolios[5].name"/*多樂遊戲*/),
                    image: require("../../assets/image/portfolios/dg.png"),
                    year: 2019,
                    type: this.$t("portfolioTypes[0]"/*企業官方網站*/),
                    info: this.$t("portfolios[5].info"/*多樂遊戲官方網站*/),
                    tools: [ require("../../assets/image/icons/icon_vue.png"), require("../../assets/image/icons/icon_sass.png") ]
                },
                {
                    name: this.$t("portfolios[6].name"/*AOWOO*/),
                    image: require("../../assets/image/portfolios/aowoo.png"),
                    year: 2019,
                    type: this.$t("portfolioTypes[0]"/*企業官方網站*/),
                    info: this.$t("portfolios[6].info"/*AOWOO聊天軟體官方網站*/),
                    tools: [ require("../../assets/image/icons/icon_html5.png"), require("../../assets/image/icons/icon_css3.png"), require("../../assets/image/icons/icon_js.png") ]
                },
                {
                    name: this.$t("portfolios[7].name"/*GDSA射擊俱樂部*/),
                    image: require("../../assets/image/portfolios/gdsa.png"),
                    year: 2019,
                    type: this.$t("portfolioTypes[0]"/*企業官方網站*/),
                    info: this.$t("portfolios[7].info"/*射擊俱樂部官方網站*/),
                    tools: [ require("../../assets/image/icons/icon_vue.png"), require("../../assets/image/icons/icon_sass.png") ]
                },
                {
                    name: this.$t("portfolios[8].name"/*皇室遊戲*/),
                    image: require("../../assets/image/portfolios/rg_new.png"),
                    year: 2019,
                    type: this.$t("portfolioTypes[0]"/*企業官方網站*/),
                    info: this.$t("portfolios[8].info"/*皇室遊戲官方網站*/),
                    tools: [ require("../../assets/image/icons/icon_vue.png"), require("../../assets/image/icons/icon_sass.png") ]
                },
                {
                    name: this.$t("portfolios[9].name"/*皇室遊戲 遊戲下載頁*/),
                    image: require("../../assets/image/portfolios/rg_download.png"),
                    year: 2019,
                    type: this.$t("portfolioTypes[0]"/*企業官方網站*/),
                    info: this.$t("portfolios[9].info"/*皇室遊戲遊戲下載頁面*/),
                    tools: [ require("../../assets/image/icons/icon_html5.png"), require("../../assets/image/icons/icon_css3.png"), require("../../assets/image/icons/icon_js.png") ]
                },
                {
                    name: this.$t("portfolios[10].name"/*皇室遊戲(舊版)*/),
                    image: require("../../assets/image/portfolios/rg_old.png"),
                    year: 2019,
                    type: this.$t("portfolioTypes[0]"/*企業官方網站*/),
                    info: this.$t("portfolios[10].info"/*皇室遊戲官方網站*/),
                    tools: [ require("../../assets/image/icons/icon_vue.png"), require("../../assets/image/icons/icon_sass.png") ]
                },
                {
                    name: this.$t("portfolios[11].name"/*關大師風水網站*/),
                    image: require("../../assets/image/portfolios/guan.png"),
                    year: 2019,
                    type: this.$t("portfolioTypes[2]"/*個人形象網站*/),
                    info: this.$t("portfolios[11].info"/*關大師風水大師形象網站*/),
                    tools: [ require("../../assets/image/icons/icon_html5.png"), require("../../assets/image/icons/icon_css3.png"), require("../../assets/image/icons/icon_js.png") ]
                },
                {
                    name: this.$t("portfolios[12].name"/*樂悠遊*/),
                    image: require("../../assets/image/portfolios/sz.png"),
                    year: 2019,
                    type: this.$t("portfolioTypes[0]"/*企業官方網站*/),
                    info: this.$t("portfolios[12].info"/*深圳樂悠遊企業官方網站*/),
                    tools: [ require("../../assets/image/icons/icon_vue.png"), require("../../assets/image/icons/icon_sass.png") ]
                }
            ]
        }
    },
    methods: {
        /**
         * 初始化更多資料的內容
         */
        initMoreData: function(key) {
            this.moreShows.name = this.portfolios[key].name;
            this.moreShows.pages = this.portfolios[key].pages;
            this.moreShows.video = this.portfolios[key].pages[0].video
            this.activeMore = true;
        },
        /**
         * 關閉彈窗
         */
        closeWindow: function() {
            this.activeMore = false;
        }
    }
}
</script>

<style lang="scss" scoped>
    @import "../../assets/scss/_rwd.scss";
    @import "../../assets/scss/_style.scss";
    #Portfolio_Page {
        @include section();
    }
</style>