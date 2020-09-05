<template>
    <div class="job_block">
        <div class="company_logo">
            <div class="logo_container">
                <img :src="company.image" :alt="company.name">
            </div>
        </div>
        <div class="job_info">
            <h3>{{ jobTitle }}</h3>
            <h4>{{ company.name }}</h4>
            <ul>
                <li class="point_li" v-if="jobPlace">{{ place }}: {{ jobPlace }}</li>
                <li class="point_li" v-if="jobDuring">{{ during }}: {{ jobDuring }}</li>
                <li class="point_li" v-if="jobDuties">{{ duty }}:</li>
                <li v-for="(item, index) in jobDuties"
                    :key="'duties_'+index">
                    {{ item }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        // 工作職稱
        jobTitle: {
            type: String,
            required: true
        },
        // 公司內容
        company: {
            type: Object,
            required: true
        },
        // 工作地點
        jobPlace: {
            type: String,
            required: false
        },
        // 工作期間
        jobDuring: {
            type: String,
            required: false
        },
        // 工作內容
        jobDuties: {
            type: Array,
            required: false
        }
    },
    computed: {
        place: function() {
            return this.$t("jobPlace"/*工作地點*/)
        },
        during: function() {
            return this.$t("jobDuring"/*在職期間*/)
        },
        duty: function() {
            return this.$t("jobDuty"/*工作職責*/)
        }
    }
}
</script>

<style lang="scss" scoped>
    @import "../../assets/scss/_rwd.scss";
    @import "../../assets/scss/_style.scss";
    .job_block {
        display: inline-block;
        width: 50%;
        margin: 30px 0;
        vertical-align: top;
        .company_logo {
            display: inline-block;
            width: 30%;
            border-radius: 100%;
            vertical-align: top;
            padding: 0 0 50px;
            .logo_container {
                display: block;
                width: 100px;
                height: 60px;
                border-right: 5px solid $light-yellow;
                border-bottom: 5px solid $light-yellow;
                margin: 0 auto;
                position: relative;
                img {
                    display: block;
                    width: 80%;
                    padding: 10px;
                    position: absolute;
                    right: 10%;
                    bottom: -40%;
                }
            }
        }
        .job_info {
            display: inline-block;
            width: 70%;
            text-align: left;
            vertical-align: top;
            h3 {
                display: block;
                width: 100%;
                color: $yellow;
                font-size: $h3;
                margin: 0 0 10px;
            }
            h4 {
                display: block;
                width: 100%;
                color: #FFF;
                font-size: 18px;
                line-height: 20px;
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
                .point_li:before {
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
        }
    }
</style>