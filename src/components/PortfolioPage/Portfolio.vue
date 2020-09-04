<template>
    <section id="Portfolio_Page">
        <container :title="title">
            <decoration-block>
                <side-block>
                    <side-option v-for="(item, index) in sideOptions"
                        :key="'side_'+index"
                        :name="item.name"
                        :count="item.count"
                        :onActive="item.onActive"
                        @yearFilter="yearFilter" />
                </side-block>
                <main-block>
                    <portfolio-card v-for="(item, index) in filtedArray"
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
                    :info="moreShows.info"
                    :pages="moreShows.pages"
                    :videos="moreShows.videos"
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
            // 側邊欄選項資料
            sideOptions: [
                {
                    name: 2020,
                    count: 0,
                    onActive: false
                },
                {
                    name: 2019,
                    count: 0,
                    onActive: false
                },
                {
                    name: 2018,
                    count: 0,
                    onActive: false
                }
            ],
            // 暫存開啟更多資料區塊的鍵值
            moreTemp: null,
            // 暫存篩選年份的值值
            yearTemp: "",
            // 是否開啟更多資料彈窗
            activeMore: false,
            // 更多資訊資料
            moreShows: {
                name: "",
                info: "",
                pages: [],
                videos: []
            },
            // 篩選後要顯示的作品集陣列
            filtedArray: [],
        }
    },
    computed: {
        /**
         * i18n 章節標題
         */
        title: function() {
            return this.$t("navs[1]"/*作品展示*/)
        },
        /**
         * i18n 作品集資料
         */
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
                            name: this.$t("portfolios[0].pages[0]"/*首頁*/),
                            image: require("../../assets/image/portfolios/hosailey_1.png"),
                            video: require("../../assets/video/hosailey_1.mp4")
                        },
                        {
                            name: this.$t("portfolios[0].pages[1]"/*關於公司*/),
                            image: require("../../assets/image/portfolios/hosailey_2.png"),
                            video: require("../../assets/video/hosailey_2.mp4")
                        },
                        {
                            name: this.$t("portfolios[0].pages[2]"/*結構體系*/),
                            image: require("../../assets/image/portfolios/hosailey_3.png"),
                            video: require("../../assets/video/hosailey_3.mp4")
                        },
                        {
                            name: this.$t("portfolios[0].pages[3]"/*建設思路*/),
                            image: require("../../assets/image/portfolios/hosailey_4.png"),
                            video: require("../../assets/video/hosailey_4.mp4")
                        }
                    ]
                },
                {
                    name: this.$t("portfolios[1].name"/*KeChen行政管理系統*/),
                    image: require("../../assets/image/portfolios/oa_frontend.png"),
                    year: 2020,
                    type: this.$t("portfolioTypes[1]"/*後台管理系統*/),
                    info: this.$t("portfolios[1].info"/*KeChen企業內部行政管理*/),
                    tools: [ require("../../assets/image/icons/icon_vue.png"), require("../../assets/image/icons/icon_sass.png"), require("../../assets/image/icons/icon_nodejs.png") ],
                    pages: [
                        {
                            name: this.$t("portfolios[1].pages[0]"/*登入*/),
                            image: require("../../assets/image/portfolios/oa_system_1.png"),
                            video: require("../../assets/video/oa_system_1.mp4")
                        }
                    ]
                },
                {
                    name: this.$t("portfolios[2].name"/*TikChat*/),
                    image: require("../../assets/image/portfolios/tikChat.png"),
                    year: 2020,
                    type: this.$t("portfolioTypes[0]"/*企業官方網站*/),
                    info: this.$t("portfolios[2].info"/*TikChat聊天軟體官方網站*/),
                    tools: [ require("../../assets/image/icons/icon_vue.png"), require("../../assets/image/icons/icon_sass.png") ],
                    pages: [
                        {
                            name: this.$t("portfolios[2].pages[0]"/*首頁*/),
                            image: require("../../assets/image/portfolios/tikChat_1.png"),
                            video: require("../../assets/video/tikChat_1.mp4")
                        },
                        {
                            name: this.$t("portfolios[2].pages[1]"/*應用*/),
                            image: require("../../assets/image/portfolios/tikChat_2.png"),
                            video: require("../../assets/video/tikChat_2.mp4")
                        },
                        {
                            name: this.$t("portfolios[2].pages[2]"/*接入*/),
                            image: require("../../assets/image/portfolios/tikChat_3.png"),
                            video: require("../../assets/video/tikChat_3.mp4")
                        },
                        {
                            name: this.$t("portfolios[2].pages[3]"/*疑問*/),
                            image: require("../../assets/image/portfolios/tikChat_4.png"),
                            video: require("../../assets/video/tikChat_4.mp4")
                        },
                        {
                            name: this.$t("portfolios[2].pages[4]"/*隱私*/),
                            image: require("../../assets/image/portfolios/tikChat_5.png"),
                            video: require("../../assets/video/tikChat_5.mp4")
                        }
                    ]
                },
                {
                    name: this.$t("portfolios[3].name"/*KeChen人才網站管理系統*/),
                    image: require("../../assets/image/portfolios/hr_frontend.png"),
                    year: 2020,
                    type: this.$t("portfolioTypes[1]"/*後台管理系統*/),
                    info: this.$t("portfolios[3].info"/*KeChen企業人才招募網站管理系統*/),
                    tools: [ require("../../assets/image/icons/icon_vue.png"), require("../../assets/image/icons/icon_sass.png"), require("../../assets/image/icons/icon_nodejs.png") ],
                    pages: [
                        {
                            name: this.$t("portfolios[3].pages[0]"/*登入*/),
                            image: require("../../assets/image/portfolios/hr_frontend_1.png"),
                            video: require("../../assets/video/hr_frontend_1.mp4")
                        }
                    ]
                },
                {
                    name: this.$t("portfolios[4].name"/*KeChen人才招募網站*/),
                    image: require("../../assets/image/portfolios/hr_web.png"),
                    year: 2019,
                    type: this.$t("portfolioTypes[0]"/*企業官方網站*/),
                    info: this.$t("portfolios[4].info"/*KeChen企業人才招募網站*/),
                    tools: [ require("../../assets/image/icons/icon_vue.png"), require("../../assets/image/icons/icon_sass.png") ],
                    pages: [ 
                        { 
                            name: this.$t("portfolios[4].pages[0]"/*首頁*/),
                            image: require("../../assets/image/portfolios/hr_web_1.png"),
                            video: require("../../assets/video/hr_web_1.mp4")
                        },
                        {
                            name: this.$t("portfolios[4].pages[1]"/*職缺詳情*/),
                            image: require("../../assets/image/portfolios/hr_web_2.png"),
                            video: require("../../assets/video/hr_web_2.mp4")
                        }
                    ]
                },
                {
                    name: this.$t("portfolios[5].name"/*多樂遊戲*/),
                    image: require("../../assets/image/portfolios/dg.png"),
                    year: 2019,
                    type: this.$t("portfolioTypes[0]"/*企業官方網站*/),
                    info: this.$t("portfolios[5].info"/*多樂遊戲官方網站*/),
                    tools: [ require("../../assets/image/icons/icon_vue.png"), require("../../assets/image/icons/icon_sass.png") ],
                    pages: [ 
                        { 
                            name: this.$t("portfolios[5].pages[0]"/*首頁*/),
                            image: require("../../assets/image/portfolios/dg_1.png"),
                            video: require("../../assets/video/dg_1.mp4")
                        },
                        {
                            name: this.$t("portfolios[5].pages[1]"/*遊戲列表*/),
                            image: require("../../assets/image/portfolios/dg_2.png"),
                            video: require("../../assets/video/dg_2.mp4")
                        },
                        {
                            name: this.$t("portfolios[5].pages[2]"/*玩法介紹*/),
                            image: require("../../assets/image/portfolios/dg_3.png"),
                            video: require("../../assets/video/dg_3.mp4")
                        },
                        {
                            name: this.$t("portfolios[5].pages[3]"/*商務合作*/),
                            image: require("../../assets/image/portfolios/dg_4.png"),
                            video: require("../../assets/video/dg_4.mp4")
                        },
                        {
                            name: this.$t("portfolios[5].pages[4]"/*聯繫我們*/),
                            image: require("../../assets/image/portfolios/dg_5.png"),
                            video: require("../../assets/video/dg_5.mp4")
                        },
                        {
                            name: this.$t("portfolios[5].pages[5]"/*遊戲詳情*/),
                            image: require("../../assets/image/portfolios/dg_6.png"),
                            video: require("../../assets/video/dg_6.mp4")
                        }
                    ]
                },
                {
                    name: this.$t("portfolios[6].name"/*AOWOO*/),
                    image: require("../../assets/image/portfolios/aowoo.png"),
                    year: 2019,
                    type: this.$t("portfolioTypes[0]"/*企業官方網站*/),
                    info: this.$t("portfolios[6].info"/*AOWOO聊天軟體官方網站*/),
                    tools: [ require("../../assets/image/icons/icon_html5.png"), require("../../assets/image/icons/icon_css3.png"), require("../../assets/image/icons/icon_js.png") ],
                    pages: [ 
                        { 
                            name: this.$t("portfolios[6].pages[0]"/*首頁*/),
                            image: require("../../assets/image/portfolios/aowoo_1.png"),
                            video: require("../../assets/video/aowoo_1.mp4")
                        },
                        {
                            name: this.$t("portfolios[6].pages[1]"/*應用*/),
                            image: require("../../assets/image/portfolios/aowoo_2.png"),
                            video: require("../../assets/video/aowoo_2.mp4")
                        },
                        {
                            name: this.$t("portfolios[6].pages[2]"/*接入*/),
                            image: require("../../assets/image/portfolios/aowoo_3.png"),
                            video: require("../../assets/video/aowoo_3.mp4")
                        },
                        {
                            name: this.$t("portfolios[6].pages[3]"/*疑問*/),
                            image: require("../../assets/image/portfolios/aowoo_4.png"),
                            video: require("../../assets/video/aowoo_4.mp4")
                        },
                        {
                            name: this.$t("portfolios[6].pages[4]"/*隱私*/),
                            image: require("../../assets/image/portfolios/aowoo_5.png"),
                            video: require("../../assets/video/aowoo_5.mp4")
                        }
                    ]
                },
                {
                    name: this.$t("portfolios[7].name"/*GDSA射擊俱樂部*/),
                    image: require("../../assets/image/portfolios/gdsa.png"),
                    year: 2019,
                    type: this.$t("portfolioTypes[0]"/*企業官方網站*/),
                    info: this.$t("portfolios[7].info"/*射擊俱樂部官方網站*/),
                    tools: [ require("../../assets/image/icons/icon_vue.png"), require("../../assets/image/icons/icon_sass.png") ],
                    pages: [ 
                        { 
                            name: this.$t("portfolios[7].pages[0]"/*首頁*/),
                            image: require("../../assets/image/portfolios/gdsa_1.png"),
                            video: require("../../assets/video/gdsa_1.mp4")
                        },
                        {
                            name: this.$t("portfolios[7].pages[1]"/*會員*/),
                            image: require("../../assets/image/portfolios/gdsa_2.png"),
                            video: require("../../assets/video/gdsa_2.mp4")
                        },
                        {
                            name: this.$t("portfolios[7].pages[2]"/*比賽*/),
                            image: require("../../assets/image/portfolios/gdsa_3.png"),
                            video: require("../../assets/video/gdsa_3.mp4")
                        },
                        {
                            name: this.$t("portfolios[7].pages[3]"/*俱樂部*/),
                            image: require("../../assets/image/portfolios/gdsa_4.png"),
                            video: require("../../assets/video/gdsa_4.mp4")
                        },
                        {
                            name: this.$t("portfolios[7].pages[4]"/*排行*/),
                            image: require("../../assets/image/portfolios/gdsa_5.png"),
                            video: require("../../assets/video/gdsa_5.mp4")
                        },
                        {
                            name: this.$t("portfolios[7].pages[5]"/*商店*/),
                            image: require("../../assets/image/portfolios/gdsa_6.png"),
                            video: require("../../assets/video/gdsa_6.mp4")
                        },
                        {
                            name: this.$t("portfolios[7].pages[6]"/*關於*/),
                            image: require("../../assets/image/portfolios/gdsa_7.png"),
                            video: require("../../assets/video/gdsa_7.mp4")
                        },
                        {
                            name: this.$t("portfolios[7].pages[7]"/*資源*/),
                            image: require("../../assets/image/portfolios/gdsa_8.png"),
                            video: require("../../assets/video/gdsa_8.mp4")
                        },
                    ]
                },
                {
                    name: this.$t("portfolios[8].name"/*皇室遊戲*/),
                    image: require("../../assets/image/portfolios/rg_new.png"),
                    year: 2019,
                    type: this.$t("portfolioTypes[0]"/*企業官方網站*/),
                    info: this.$t("portfolios[8].info"/*皇室遊戲官方網站*/),
                    tools: [ require("../../assets/image/icons/icon_vue.png"), require("../../assets/image/icons/icon_sass.png") ],
                    pages: [
                        {
                            name: this.$t("portfolios[8].pages[0]"/*首頁*/),
                            image: require("../../assets/image/portfolios/rg_new_1.png"),
                            video: require("../../assets/video/rg_new_1.mp4")
                        },
                        {
                            name: this.$t("portfolios[8].pages[1]"/*遊戲*/),
                            image: require("../../assets/image/portfolios/rg_new_2.png"),
                            video: require("../../assets/video/rg_new_2.mp4")
                        },
                        {
                            name: this.$t("portfolios[8].pages[2]"/*遊戲規則*/),
                            image: require("../../assets/image/portfolios/rg_new_3.png"),
                            video: require("../../assets/video/rg_new_3.mp4")
                        },
                        {
                            name: this.$t("portfolios[8].pages[3]"/*商務合作*/),
                            image: require("../../assets/image/portfolios/rg_new_4.png"),
                            video: require("../../assets/video/rg_new_4.mp4")
                        },
                        {
                            name: this.$t("portfolios[8].pages[4]"/*關於我們*/),
                            image: require("../../assets/image/portfolios/rg_new_5.png"),
                            video: require("../../assets/video/rg_new_5.mp4")
                        },
                        {
                            name: this.$t("portfolios[8].pages[5]"/*遊戲詳情*/),
                            image: require("../../assets/image/portfolios/rg_new_6.png"),
                            video: require("../../assets/video/rg_new_6.mp4")
                        }
                    ]
                },
                {
                    name: this.$t("portfolios[9].name"/*皇室遊戲 遊戲下載頁*/),
                    image: require("../../assets/image/portfolios/rg_download.png"),
                    year: 2019,
                    type: this.$t("portfolioTypes[0]"/*企業官方網站*/),
                    info: this.$t("portfolios[9].info"/*皇室遊戲遊戲下載頁面*/),
                    tools: [ require("../../assets/image/icons/icon_html5.png"), require("../../assets/image/icons/icon_css3.png"), require("../../assets/image/icons/icon_js.png") ],
                    pages: [
                        {
                            name: this.$t("portfolios[9].pages[0]"/*首頁*/),
                            image: require("../../assets/image/portfolios/rg_download_1.png"),
                            video: require("../../assets/video/rg_download_1.mp4")
                        }
                    ]
                },
                {
                    name: this.$t("portfolios[10].name"/*皇室遊戲(舊版)*/),
                    image: require("../../assets/image/portfolios/rg_old.png"),
                    year: 2019,
                    type: this.$t("portfolioTypes[0]"/*企業官方網站*/),
                    info: this.$t("portfolios[10].info"/*皇室遊戲官方網站*/),
                    tools: [ require("../../assets/image/icons/icon_vue.png"), require("../../assets/image/icons/icon_sass.png") ],
                    pages: [
                        {
                            name: this.$t("portfolios[10].pages[0]"/*首頁*/),
                            image: require("../../assets/image/portfolios/rg_old_1.png"),
                            video: require("../../assets/video/rg_old_1.mp4")
                        },
                        {
                            name: this.$t("portfolios[10].pages[1]"/*遊戲*/),
                            image: require("../../assets/image/portfolios/rg_old_2.png"),
                            video: require("../../assets/video/rg_old_2.mp4")
                        },
                        {
                            name: this.$t("portfolios[10].pages[2]"/*玩法介紹*/),
                            image: require("../../assets/image/portfolios/rg_old_3.png"),
                            video: require("../../assets/video/rg_old_3.mp4")
                        },
                        {
                            name: this.$t("portfolios[10].pages[3]"/*合作*/),
                            image: require("../../assets/image/portfolios/rg_old_4.png"),
                            video: require("../../assets/video/rg_old_4.mp4")
                        },
                        {
                            name: this.$t("portfolios[10].pages[4]"/*客服支援*/),
                            image: require("../../assets/image/portfolios/rg_old_5.png"),
                            video: require("../../assets/video/rg_old_5.mp4")
                        },
                        {
                            name: this.$t("portfolios[10].pages[5]"/*遊戲詳情*/),
                            image: require("../../assets/image/portfolios/rg_old_6.png"),
                            video: require("../../assets/video/rg_old_6.mp4")
                        }
                    ]
                },
                {
                    name: this.$t("portfolios[11].name"/*關大師風水網站*/),
                    image: require("../../assets/image/portfolios/guan.png"),
                    year: 2019,
                    type: this.$t("portfolioTypes[2]"/*個人形象網站*/),
                    info: this.$t("portfolios[11].info"/*關大師風水大師形象網站*/),
                    tools: [ require("../../assets/image/icons/icon_html5.png"), require("../../assets/image/icons/icon_css3.png"), require("../../assets/image/icons/icon_js.png") ],
                    pages: [
                        {
                            name: this.$t("portfolios[11].pages[0]"/*首頁*/),
                            image: require("../../assets/image/portfolios/guan_1.png"),
                            video: require("../../assets/video/guan_1.mp4")
                        }
                    ]
                },
                {
                    name: this.$t("portfolios[12].name"/*樂悠遊*/),
                    image: require("../../assets/image/portfolios/sz.png"),
                    year: 2019,
                    type: this.$t("portfolioTypes[0]"/*企業官方網站*/),
                    info: this.$t("portfolios[12].info"/*深圳樂悠遊企業官方網站*/),
                    tools: [ require("../../assets/image/icons/icon_vue.png"), require("../../assets/image/icons/icon_sass.png") ],
                    pages: [
                        {
                            name: this.$t("portfolios[12].pages[0]"/*首頁*/),
                            image: require("../../assets/image/portfolios/sz_1.png"),
                            video: require("../../assets/video/sz_1.mp4")
                        },
                        {
                            name: this.$t("portfolios[12].pages[1]"/*招聘*/),
                            image: require("../../assets/image/portfolios/sz_2.png"),
                            video: require("../../assets/video/sz_2.mp4")
                        }
                    ]
                }
            ]
        }
    },
    methods: {
        /**
         * 初始化更多資料的內容
         */
        initMoreData: function(key) {
            this.moreShows.videos = []; // 清空更多資料的影片陣列
            this.moreShows.name = this.filtedArray[key].name; // 將被選定的名字傳入更多資料
            this.moreShows.info = this.filtedArray[key].info; // 將被選定的詳細介紹傳入更多資料
            this.moreShows.pages = this.filtedArray[key].pages; // 將被選定的分頁傳入更多資料
            for (let i = 0; i < this.filtedArray[key].pages.length; i++) {
                this.moreShows.videos.push(this.filtedArray[key].pages[i].video); // 將影片push進更多資料的影片陣列
            }
            this.moreTemp = key; // 設定開啟彈窗的暫存資料
            if (this.activeMore === false) this.activeMore = true; // 如果彈窗未開啟，設為開啟
        },
        /**
         * 按照年份篩選排序 
         * @param {Number} year 要篩選的年份
         */
        yearFilter: function(year) {
            this.filtedArray = []; // 將篩選後陣列歸零
            if (year) { // 如果有傳入要篩選的年份
                this.yearTemp = year; // 暫存要篩選的年份
                for (let i = 0; i < this.portfolios.length; i++) {
                    if (this.portfolios[i].year === year) this.filtedArray.push(this.portfolios[i]); // 從i18n的陣列傳入資料至篩選後的陣列
                }
                for (let j = 0; j < this.sideOptions.length; j++) {
                    this.sideOptions[j].onActive = false; // 重置側邊欄的啟動狀態
                    if (this.sideOptions[j].name === year) this.sideOptions[j].onActive = true; // 將側邊欄選定的年份設為啟動中
                }
            } else if (!year) { // 如果沒有要篩選的陣列
                this.filtedArray = this.portfolios; // 將所有i18n的陣列資料傳入篩選後的陣列
            }
        },
        /**
         * 計算各年份的作品數量
         */
        countPortfolios: function() {
            let yearArray = [];
            for (let i = 0; i < this.sideOptions.length; i++) {
                yearArray.push(this.sideOptions[i].name); // 將側邊欄的選項年份存進yearArray
                for (let j = 0; j < this.filtedArray.length; j++) {
                    if (this.filtedArray[j].year === yearArray[i]) { 
                        this.sideOptions[i].count ++; // 比對作品集內的年份，若年份一樣count+1
                    }
                }
            }
        },
        /**
         * 關閉彈窗
         */
        closeWindow: function() {
            this.activeMore = false; // 將彈窗設為關閉
            this.moreTemp = null; // 清空開啟彈窗的暫存資料
        }
    },
    mounted() {
        this.yearFilter();
        this.countPortfolios();
    },
    watch: {
        "$i18n.locale"() {
            this.yearFilter(this.yearTemp);
            if (this.moreTemp !== null) this.initMoreData(this.moreTemp);
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