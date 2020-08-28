import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import i18n from "./i18n";
import VueTypedJs from "vue-typed-js";
import VueParticles from "vue-particles";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

Vue.config.productionTip = false
Vue.use(VueTypedJs);
Vue.use(VueParticles);

library.add(faChevronDown);
Vue.component("font-awesome-icon", FontAwesomeIcon);

new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount('#web')