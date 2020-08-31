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
                        :name="item.name"
                        :image="item.image"
                        :type="item.type"
                        :info="item.info"
                        :tools="item.tools" />
                </main-block>
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

export default {
    components: {
        "container": container,
        "decoration-block": decorationBlock,
        "side-block": sideBlock,
        "side-option": sideOption,
        "main-block": mainBlock,
        "portfolio-card": portfolioCard
    },
    data() {
        return {
            sideOptions: [
                {
                    name: "2020",
                    onActive: false
                },
                {
                    name: "2019",
                    onActive: false
                },
                {
                    name: "2018",
                    onActive: false
                }
            ],
            
        }
    },
    computed: {
        title: function() {
            return this.$t("navs[1]"/*作品展示*/)
        },
        portfolios: function() {
            return [
                {
                    name: "Hosailey",
                    image: require("../../assets/image/portfolios/hosailey.png"),
                    year: 2020,
                    type: "企業官方網站",
                    info: "馬來西亞沙巴公司企業形象網站，使用Vue-cli3開發，利用Vue i18n開發多語言環境",
                    tools: [ require("../../assets/image/icons/icon_vue.png"), require("../../assets/image/icons/icon_sass.png") ]
                },
                {
                    name: "開誠行政管理系統",
                    image: require("../../assets/image/portfolios/oa_frontend.png"),
                    year: 2020,
                    type: "後台管理系統",
                    info: "開誠企業內部行政管理、項目管理系統，前端使用Vue-cli3開發，後端使用Express開發伺服器，做完登入及系統切換功能後專案暫停，未完成",
                    tools: [ require("../../assets/image/icons/icon_vue.png"), require("../../assets/image/icons/icon_sass.png"), require("../../assets/image/icons/icon_nodejs.png") ]
                },
                {
                    name: "TikChat",
                    image: require("../../assets/image/portfolios/tikchat.png"),
                    year: 2020,
                    type: "企業官方網站",
                    info: "TikChat聊天軟體官方晚站，使用Vue-cli3開發，利用Vue i18n開發多語言環境",
                    tools: [ require("../../assets/image/icons/icon_vue.png"), require("../../assets/image/icons/icon_sass.png") ]
                },
                {
                    name: "開誠人才網站管理系統",
                    image: require("../../assets/image/portfolios/hr_frontend.png"),
                    year: 2020,
                    type: "後台管理系統",
                    info: "開誠企業人才招募網站管理系統，HR可利用本系統更新招募網站上的職缺開放內容，前端使用Vue-cli3開發，後端使用Express開發伺服器",
                    tools: [ require("../../assets/image/icons/icon_vue.png"), require("../../assets/image/icons/icon_sass.png"), require("../../assets/image/icons/icon_nodejs.png") ]
                },
                {
                    name: "開誠人才招募網站",
                    image: require("../../assets/image/portfolios/hr_web.png"),
                    year: 2019,
                    type: "企業官方網站",
                    info: "開誠企業人才招募網站，使用Vue-cli3開發，利用Vue i18n開發多語言環境",
                    tools: [ require("../../assets/image/icons/icon_vue.png"), require("../../assets/image/icons/icon_sass.png") ]
                },
                {
                    name: "多樂遊戲",
                    image: require("../../assets/image/portfolios/dg.png"),
                    year: 2019,
                    type: "企業官方網站",
                    info: "多樂遊戲官方網站，使用Vue-cli3開發，利用Vue i18n開發多語言環境",
                    tools: [ require("../../assets/image/icons/icon_vue.png"), require("../../assets/image/icons/icon_sass.png") ]
                },
                {
                    name: "AOWOO",
                    image: require("../../assets/image/portfolios/aowoo.png"),
                    year: 2019,
                    type: "企業官方網站",
                    info: "AOWOO聊天軟體官方網站，使用HTML5+Css3+JavaScript+jQuery開發",
                    tools: [ require("../../assets/image/icons/icon_html5.png"), require("../../assets/image/icons/icon_css3.png"), require("../../assets/image/icons/icon_js.png") ]
                },
                {
                    name: "GDSA射擊俱樂部",
                    image: require("../../assets/image/portfolios/gdsa.png"),
                    year: 2019,
                    type: "企業官方網站",
                    info: "射擊俱樂部官方網站，使用Vue-cli3開發",
                    tools: [ require("../../assets/image/icons/icon_vue.png"), require("../../assets/image/icons/icon_sass.png") ]
                },
                {
                    name: "皇室遊戲",
                    image: require("../../assets/image/portfolios/rg_new.png"),
                    year: 2019,
                    type: "企業官方網站",
                    info: "皇室遊戲官方網站，使用Vue-cli2開發，利用Vue i18n開發多語言環境",
                    tools: [ require("../../assets/image/icons/icon_vue.png"), require("../../assets/image/icons/icon_sass.png") ]
                },
                {
                    name: "皇室遊戲 遊戲下載頁",
                    image: require("../../assets/image/portfolios/rg_download.png"),
                    year: 2019,
                    type: "企業官方網站",
                    info: "皇室遊戲遊戲下載頁面，使用HTML5+Css3+JavaScript+jQuery開發",
                    tools: [ require("../../assets/image/icons/icon_html5.png"), require("../../assets/image/icons/icon_css3.png"), require("../../assets/image/icons/icon_js.png") ]
                },
                {
                    name: "皇室遊戲(舊版)",
                    image: require("../../assets/image/portfolios/rg_old.png"),
                    year: 2019,
                    type: "企業官方網站",
                    info: "皇室遊戲官方網站，使用Vue-cli2開發，利用Vue i18n開發多語言環境",
                    tools: [ require("../../assets/image/icons/icon_vue.png"), require("../../assets/image/icons/icon_sass.png") ]
                },
                {
                    name: "關大師風水網站",
                    image: require("../../assets/image/portfolios/guan.png"),
                    year: 2019,
                    type: "個人形象網站",
                    info: "關大師風水大師形象網站，使用HTML5+Css3+JavaScript+jQuery開發",
                    tools: [ require("../../assets/image/icons/icon_html5.png"), require("../../assets/image/icons/icon_css3.png"), require("../../assets/image/icons/icon_js.png") ]
                },
                {
                    name: "樂悠遊",
                    image: require("../../assets/image/portfolios/sz.png"),
                    year: 2019,
                    type: "企業官方網站",
                    info: "深圳樂悠遊企業官方網站，使用Vue-cli2開發",
                    tools: [ require("../../assets/image/icons/icon_vue.png"), require("../../assets/image/icons/icon_sass.png") ]
                }
            ]
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