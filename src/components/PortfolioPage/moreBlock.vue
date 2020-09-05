<template>
    <div class="more_block" :class="{ 'show': onActive }">
        <div class="close_btn" 
            @click="closeWindow()">
            <font-awesome-icon class="icon_arrow" 
                :icon="arrow"/>
        </div>
        <div class="more_info">
            <h4>{{ name }}</h4>
            <article>{{ info }}</article>
            <video id="video_player" autoplay controls muted>
                <source :src="src" type="video/mp4">
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
        // 名稱
        name: {
            type: String,
            required: true
        },
        // 詳細介紹
        info: {
            type: String,
            required: true
        },
        // 分頁影片
        videos: {
            type: Array,
            required: true
        },
        // 分頁內容
        pages: {
            type: Array,
            required: true
        },
        // 是否開啟
        onActive: {
            type: Boolean,
            default: false,
            required: true
        }
    },
    data() {
        return {
            arrow: "chevron-left",
            src: ""
        }
    },
    methods: {
        /**
         * 初始化影片播放器內容
         * @param {Number} key 鍵值
         */
        initPlayer: function(key) {
            let player = document.querySelector("#video_player");
            if (!key) this.src = this.$props.videos[0];
            else if (key) this.src = this.$props.videos[key];
            player.load();
        },
        /**
         * 關閉本彈窗
         */
        closeWindow: function() {
            this.$emit("closeWindow");
        }
    },
    watch: {
        "$props.videos": function() {
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
        width: 100%;
        height: calc(100% - 36px);
        background-color: #FFF;
        padding: 10px 30px 30px;
        position: absolute;
        left: 100%;
        right: 0;
        bottom: 0;
        z-index: 1;
        transition: left 0.3s;
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
            transition: all 0.3s;
            svg {
                width: 12px;
                height: 12px;
                color: $grey;
                position: absolute;
                top: 0;
                right: 0;
                left: 0;
                bottom: 0;
                margin: auto;
                transition: all 0.3s;
            }
        }
        .close_btn:hover {
            border: 1px solid $yellow;
            transition: all 0.3s;
            svg {
                color: $yellow;
                transition: all 0.3s;
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
            article {
                display: block;
                width: 100%;
                color: $grey;
                font-size: $info;
                text-align: left;
                line-height: 18px;
                margin: 20px 0 10px;
            }
            video {
                display: block;
                width: 100%;
                height: 400px;
                margin: 20px 0;
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
                    vertical-align: top;
                    img {
                        display: block;
                        max-width: 100%;
                        max-height: 100px;
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
        left: 0;
        overflow-y: scroll;
        transition: left 0.3s;
    }
    /* total width */
    .more_block::-webkit-scrollbar {
        background-color: #fff;
        width: 16px;
    }

    /* background of the scrollbar except button or resizer */
    .more_block::-webkit-scrollbar-track {
        background-color: #fff;
    }

    /* scrollbar itself */
    .more_block::-webkit-scrollbar-thumb {
        background-color: #babac0;
        border-radius: 16px;
        border: 4px solid #fff;
    }

    /* set button(top and bottom of the scrollbar) */
    .more_block::-webkit-scrollbar-button {
        display:none;
    }
</style>