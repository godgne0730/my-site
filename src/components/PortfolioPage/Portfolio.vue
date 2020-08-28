<template>
    <section id="Portfolio_Page">
        <container :title="title">
            <side-block>
                <side-option v-for="(item, index) in sideOptions"
                    :key="'side_'+index"
                    :name="item.name"
                    :onActive="item.onActive" />
            </side-block>
            <main-block>
                
            </main-block>
        </container>
    </section>
</template>

<script>
import container from "../Global/container.vue";
import sideBlock from "./sideBlock.vue";
import sideOption from "./sideOption.vue";
import mainBlock from "./mainBlock.vue";

export default {
    components: {
        "container": container,
        "side-block": sideBlock,
        "side-option": sideOption,
        "main-block": mainBlock
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