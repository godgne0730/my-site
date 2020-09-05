<template>
    <div class="developer_block">
        <div class="developer_image">
            <img :src="image" :alt="name">
        </div>
        <div class="developer_info">
            <h3>{{ name }}</h3>
            <h3>{{ enName }}</h3>
            <ul>
                <li>{{ age }}: {{ countAge }}</li>
                <li>{{ birth }}: {{ date }}</li>
                <li v-if="schools">{{ graduate }}:</li>
                <li v-for="(item, index) in schools"
                    :key="'school_'+index">
                    {{ item }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        // 姓名
        name: {
            type: String,
            required: true
        },
        // 英文姓名
        enName: {
            type: String,
            required: false
        },
        // 照片
        image: {
            type: String,
            required: true
        },
        // 生日日期
        date: {
            type: String,
            required: true
        },
        // 年齡
        countAge: {
            type: Number,
            required: true
        },
        // 學歷
        schools: {
            type: Array,
            required: true
        }
    },
    computed: {
        age: function() {
            return this.$t("age"/*年齡*/)
        },
        birth: function() {
            return this.$t("birth"/*生日*/)
        },
        graduate: function() {
            return this.$t("graduate"/*學歷*/)
        }
    }
}
</script>

<style lang="scss" scoped>
    @import "../../assets/scss/_rwd.scss";
    @import "../../assets/scss/_style.scss";
    .developer_block {
        display: inline-block;
        width: 70%;
        vertical-align: middle;
        .developer_image {
            display: inline-block;
            width: 50%;
            vertical-align: middle;
            img {
                display: block;
                width: 80%;
                margin: 0 auto;
            }
        }
        .developer_info {
            display: inline-block;
            width: 50%;
            text-align: left;
            padding: 30px 10px 0;
            vertical-align: middle;
            h3 {
                display: block;
                width: 100%;
                color: $yellow;
                font-size: $h3;
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
                    position: relative;
                }
            }
        }
    }
</style>