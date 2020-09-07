<template>
    <section id="Contact_Page">
        <container :title="title">
            <developer-block
                :name="developer.name"
                :enName="developer.enName"
                :image="developer.image"
                :date="developer.date"
                :countAge="developer.countAge"
                :schools="developer.schools" />
            <contact-block>
                <contact-option v-for="(item, index) in contacts" 
                    :key="'contact_'+index"
                    :name="item.name"
                    :image="item.image"
                    :info="item.info"
                    :method="item.method" />
            </contact-block>
        </container>
    </section>
</template>

<script>
import container from "../Global/container.vue";
import developerBlock from "./developerBlock.vue";
import contactBlock from "./contactBlock.vue";
import contactOption from "./contactOption.vue";

export default {
    components: {
        "container": container,
        "developer-block": developerBlock,
        "contact-block": contactBlock,
        "contact-option": contactOption
    },
    data() {
        return {
            contacts: [
                {
                    name: "Phone",
                    image: require("../../assets/image/icons/icon_phone.png"),
                    info: "0930-297-981",
                    method: "tel:+886930297981"
                },
                {
                    name: "E-Mail",
                    image: require("../../assets/image/icons/icon_mail.png"),
                    info: "wei0730@livemail.tw",
                    method: "mailto:wei0730@livemail.tw"
                },
                {
                    name: "Line",
                    image: require("../../assets/image/icons/icon_line.png"),
                    info: "wei5730",
                    method: "line://ti/p/@wei5730"
                },
                {
                    name: "Skype",
                    image: require("../../assets/image/icons/icon_skype.png"),
                    info: "live:wei0730",
                    method: "https://join.skype.com/invite/dorzEx8Mpo5d"
                },
                {
                    name: "Telegram",
                    image: require("../../assets/image/icons/icon_telegram.png"),
                    info: "@wei0730",
                    method: "https://t.me/wei0730"
                },
                {
                    name: "Facebook",
                    image: require("../../assets/image/icons/icon_facebook.png"),
                    info: "C.W. Chen",
                    method: "https://www.facebook.com/messages/t/GodgNe"
                },
                {
                    name: "Instagram",
                    image: require("../../assets/image/icons/icon_instagram.png"),
                    info: "c.w_wei",
                    method: "https://www.instagram.com/c.w_wei"
                }
            ]
        }
    },
    computed: {
        /**
         * i18n 章節標題
         */
        title: function() {
            return this.$t("navs[3]"/*與我聯絡*/)
        },
        /**
         * 開發者資料
         */
        developer: function() {
            let year = 1991;
            let now = new Date();
            now = now.getFullYear();
            return {
                name: "陳軍瑋",
                enName: "Chun Wei, Chen",
                image: require("../../assets/image/developer/photo.jpeg"),
                date: "1991/07/30",
                countAge: now - year,
                schools: this.$t("schools")
            }
        }
    }    
}
</script>

<style lang="scss" scoped>
    @import "../../assets/scss/_rwd.scss";
    @import "../../assets/scss/_style.scss";
    #Contact_Page {
        @include section();
    }
</style>