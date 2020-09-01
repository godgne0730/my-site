<template>
    <div class="more_block" :class="{ 'show': onActive }">
        <div class="close_btn" 
            @click="closeWindow()">
            <font-awesome-icon class="icon_arrow" 
                :icon="arrow"/>
        </div>
        <div class="more_info">
            <h4>{{ name }}</h4>
            <video id="video_player" controls muted>
                <source :src="video" type="video/webm">
            </video>
            <div class="pages_container">
                <div class="pages_card" v-for="(item, index) in pages"
                    :key="'image_'+index"
                    @click="initPlayer(index)">
                    <img :src="item.image" :alt="item.name">
                    <span>{{ item.name }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            required: true
        },
        video: {
            type: String,
            required: true
        },
        pages: {
            type: Array,
            required: true
        },
        onActive: {
            type: Boolean,
            default: false,
            required: true
        }
    },
    data() {
        return {
            arrow: "chevron-left"
        }
    },
    methods: {
        /**
         * 初始化影片播放器內容
         * @param {Number} key 鍵值
         */
        initPlayer: function(key) {
            let player = document.querySelector("#video_player");
            if (key === undefined) {
                player.load();
                player.play();
            } else {
                this.video = this.$props.pages[key].video;
                player.load();
                player.play();
            }
        },
        /**
         * 關閉本彈窗
         */
        closeWindow: function() {
            this.$emit("closeWindow");
        }
    },
    watch: {
        "$props.video": function() {
            this.initPlayer();
        }
    }
}
</script>

<style lang="scss" scoped>
    @import "../../assets/scss/_rwd.scss";
    @import "../../assets/scss/_style.scss";
    .more_block {
        display: block;
        width: 0;
        height: 0;
        background-color: #FFF;
        padding: 40px 30px 30px;
        overflow-y: scroll;
        position: absolute;
        left: 0;
        bottom: 0;
        z-index: 1;
        .close_btn {
            display: block;
            width: 30px;
            height: 30px;
            border-radius: 100%;
            background-color: #FFF;
            border: 1px solid $grey;
            cursor: pointer;
            margin: 10px 0 0;
            position: relative;
            svg {
                width: 15px;
                height: 15px;
                color: $grey;
                position: absolute;
                top: 0;
                right: 0;
                left: 0;
                bottom: 0;
                margin: auto;
            }
        }
        .close_btn:hover {
            background-color: $light-yellow;
            border: 1px solid $light-yellow;
            svg {
                color: #FFF;
            }
        }
        .more_info {
            display: block;
            width: 80%;
            padding: 20px 0;
            margin: 0 auto;
            h4 {
                display: block;
                width: 100%;
                font-size: $h3;
                text-align: left;
                position: relative;
            }
            h4::before {
                display: block;
                content: "";
                width: 60px;
                height: 3px;
                background-color: $yellow;
                position: absolute;
                left: 0;
                bottom: -8px;
            }
            video {
                display: block;
                width: 100%;
                height: 400px;
                margin: 30px 0;
            }
            .pages_container {
                display: block;
                width: 100%;
                text-align: left;
                .pages_card {
                    display: inline-block;
                    width: 18%;
                    border: 1px solid $grey;
                    border-radius: 3px 3px 3px 3px;
                    cursor: pointer;
                    margin-right: 2%;
                    padding: 10px;
                    img {
                        display: block;
                        height: 100px;
                        margin: 0 auto;
                    }
                    span {
                        display: block;
                        width: 100%;
                        font-size: $info;
                        line-height: 20px;
                        text-align: center;
                        margin: 5px 0;
                    }
                }
            }
        }
    }
    .more_block.show {
        width: 100%;
        height: 100%;
    }
</style>