<template>
    <header>
        <wrapper>
            <!-- logo -->
            <web-logo :name="logo" />
            <!-- nav bar -->
            <nav-bar>
                <nav-option v-for="(item, index) in navs"
                    :key="'nav_'+index"
                    :name="item.name" 
                    :id="item.id" />
            </nav-bar>
            <!-- language option -->
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
            ]
        }
    },
    computed: {
        navs: function() {
            return [
                {
                    name: this.$t("navs[0]"/*關於自己*/),
                    id: ""
                },
                {
                    name: this.$t("navs[1]"/*成長經歷*/),
                    id: ""
                },
                {
                    name: this.$t("navs[2]"/*工作經歷*/),
                    id: ""    
                },
                {
                    name: this.$t("navs[3]"/*作品簡介*/),
                    id: ""
                },
                {
                    name: this.$t("navs[4]"/*聯絡方式*/),
                    id: ""
                }
            ]
        }
    },
    methods: {
        /**
         * click options to change active language
         * @param {String} val which language onclick 
         */
        changeLang: function(val) {
            if (val !== null) {
                this.$i18n.locale = val; // set new lang on i18n
                window.localStorage.setItem("Wei's_language", val); // set webstorage
                for (let i = 0; i < this.langs.length; i ++) {
                    if (this.langs[i].val === val) this.langs[i].onActive = true;
                    else this.langs[i].onActive = false;
                }
            // init lang's status
            } else {
                window.localStorage.setItem("Wei's_language", "tw");
                this.$i18n.locale = "tw";
                for (let i = 0; i < this.langs.length; i ++) {
                    console.log(this.langs[i].onActive);
                    if (this.langs[i].val === val) this.langs[i].onActive = true;
                    else this.langs[i].onActive = false;
                }
            }
        }
    },
    beforeMount() {
        this.changeLang(window.localStorage.getItem("Wei's_language"));
    }
}
</script>

<style lang="scss" scoped>
    @import "../../assets/scss/_rwd.scss";
    header {
        display: block;
        width: 100%;
    }
</style>