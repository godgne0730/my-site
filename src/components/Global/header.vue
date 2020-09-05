<template>
    <header :class="{'show_header': this.topOffset > 0}">
        <wrapper>
            <web-logo :name="logo" />
            <nav-bar>
                <nav-option v-for="(item, index) in navs"
                    :key="'nav_'+index"
                    :name="item.name" 
                    :id="item.id"
                    :onActive="item.onActive" />
            </nav-bar>
            <lang-bar>
                <lang-option v-for="(item, index) in langs"
                    :key="'lang_'+index"
                    :name="item.name"
                    :onActive="item.onActive"
                    @changeLang="changeLang(item.val)" />
            </lang-bar>
        </wrapper>
    </header>
</template>

<script>
import wrapper from "./wrapper.vue";
import logo from "../Nav/logo.vue";
import nav from "../Nav/nav.vue";
import navOption from "../Nav/navOption.vue";
import lang from "../Nav/lang.vue";
import langOption from "../Nav/langOption.vue";

export default {
    components: {
        "wrapper": wrapper,
        "web-logo": logo,
        "nav-bar": nav,
        "nav-option": navOption,
        "lang-bar": lang,
        "lang-option": langOption
    },
    data() {
        return {
            logo: "WEI",
            langs: [
                {
                    name: "繁中",
                    val: "tw",
                    onActive: false
                },
                {
                    name: "簡中",
                    val: "cn",
                    onActive: false
                },
                {
                    name: "EN",
                    val: "en",
                    onActive: false
                }
            ],
            navs: [
                {
                    name: this.$t("navs[0]"/*網站開發*/),
                    id: "#Skill_Page",
                    onActive: false
                },
                {
                    name: this.$t("navs[1]"/*作品展示*/),
                    id: "#Portfolio_Page",
                    onActive: false
                },
                // {
                //     name: this.$t("navs[2]"/*個人經歷*/),
                //     id: "",
                //     onActive: false
                // },
                // {
                //     name: this.$t("navs[3]"/*聯絡方式*/),
                //     id: "",
                //     onActive: false
                // }
            ],
            topOffset: 0
        }
    },
    computed: {
        /**
         * 導覽列多語言名稱
         */
        i18nNavs: function() {
            return this.$t("navs");
        }
    },
    methods: {
        /**
         * 導覽列名稱重置
         */
        initNav: function() {
            for(let i = 0; i < this.navs.length; i ++) {
                this.navs[i].name = this.i18nNavs[i];
            }
        },
        /**
         * 導覽列選項啟動狀況重置
         */
        initNavActive: function() {
            for (let i = 0; i < this.navs.length; i++) {
                this.navs[i].onActive = false;
                if (document.querySelector(`${this.navs[i].id}`).getBoundingClientRect().top < 65 && document.querySelector(`${this.navs[i].id}`).getBoundingClientRect().bottom > 65) {
                    this.navs[i].onActive = true;
                }
            }
        },
        /**
         * 視窗偵測捲動畫面距離頂部距離
         */
        watchScroll: function() {
            this.topOffset = document.documentElement.scrollTop || document.body.scrollTop;
            this.initNavActive();
        },
        /**
         * 點擊選項時，切換目前顯示語言
         * @param {String} key 被點擊到的語言鍵值
         */
        changeLang: function(key) {
            if (key !== null) {
                this.$i18n.locale = key; // 切換i18n至新語言
                window.localStorage.setItem("Wei's_language", key); // 設定webstorage
                for (let i = 0; i < this.langs.length; i ++) {
                    if (this.langs[i].key === key) this.langs[i].onActive = true;
                    else this.langs[i].onActive = false;
                }
            // 初始化語言環境
            } else {
                window.localStorage.setItem("Wei's_language", "tw");
                this.$i18n.locale = "tw";
                for (let i = 0; i < this.langs.length; i ++) {
                    console.log(this.langs[i].onActive);
                    if (this.langs[i].key === key) this.langs[i].onActive = true;
                    else this.langs[i].onActive = false;
                }
            }
        }
    },
    beforeMount() {
        this.changeLang(window.localStorage.getItem("Wei's_language"));
    },
    mounted() {
        window.addEventListener("scroll", this.watchScroll);
    },
    beforeDestroy() {
        window.removeEventListener("scroll", this.watchScroll);
    },
    watch: {
        /**
         * 當多語言環境變環時
         */
        "$i18n.locale"() {
            this.initNav();
        }
    }
}
</script>

<style lang="scss" scoped>
    @import "../../assets/scss/_rwd.scss";
    header {
        display: block;
        width: 100%;
        background-color: rgba(0, 0, 0, 0.6);
        position: fixed;
        top: -100px;
        transition: top 0.3s;
        z-index: 99;
    }
    header.show_header {
        top: 0;
        transition: top 0.3s;
    }
</style>