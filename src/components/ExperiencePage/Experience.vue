<template>
    <section id="Experience_Page">
        <container :title="title">
            <job-block v-for="(item, index) in jobs"
                :key="'job_'+index"
                :jobTitle="item.title"
                :company="item.company"
                :jobPlace="item.place"
                :jobDuring="item.during"
                :jobDuties="item.duties" />
        </container>
    </section>
</template> 

<script>
import container from "../Global/container.vue";
import jobBlock from "./jobBlock.vue";

export default {
    components: {
        "container": container,
        "job-block": jobBlock
    },
    computed: {
        /**
         * i18n 章節標題
         */
        title: function() {
            return this.$t("navs[2]"/*工作經歷*/)
        },
        /**
         * 工作經驗
         */
        jobs: function() {
            return [
                {
                    title: this.$t("jobs[0].title"/*Web全端工程師*/),
                    company: {
                        name: this.$t("jobs[0].company"/*Kechen*/),
                        image: require("../../assets/image/jobs/kechen.png")
                    },
                    place: this.$t("jobs[0].place"/*菲律賓*/),
                    during: "2019/09/16 ~ 2020/05/01",
                    duties: this.$t("jobs[0].duties")
                },
                {
                    title: this.$t("jobs[1].title"/*Web前端工程師*/),
                    company: {
                        name: this.$t("jobs[1].company"/*蜂巢遊戲*/),
                        image: require("../../assets/image/jobs/hornet.png")
                    },
                    place: this.$t("jobs[1].place"/*台灣*/),
                    during: "2019/01/02 ~ 2020/09/01",
                    duties: this.$t("jobs[1].duties")
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
    @import "../../assets/scss/_rwd.scss";
    @import "../../assets/scss/_style.scss";
    #Experience_Page {
        @include section();
    }
</style>