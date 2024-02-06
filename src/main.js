import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import axios from "axios";
import VueAxios from "vue-axios";

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

axios.defaults.headers["Content-Type: application/json;", "Accept: application/json"]
axios.defaults.baseURL = "https://data.jsdelivr.com/v1";

Vue.config.productionTip = false;

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueAxios, axios)

Vue.component("PackageDetail", require("@/components/PackageDetail.vue").default);

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
