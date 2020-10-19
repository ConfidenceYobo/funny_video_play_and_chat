import Vue from "vue";
import CanvasVideo from "vue-canvasvideo";

import App from "./App.vue";
import "vue-canvasvideo/dist/vuecanvasvideo.min.css";
import "./registerServiceWorker";

Vue.config.productionTip = false;
Vue.use(CanvasVideo);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
