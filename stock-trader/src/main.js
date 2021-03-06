import Vue from "vue";
import vuetify from "./plugins/vuetify";
import App from "./App.vue";
import router from "./router/index";
import store from "./store/store";

Vue.config.productionTip = false;

Vue.filter('currency', value => {
  return 'R$ ' + value.toLocaleString()
})

new Vue({
  router,
  vuetify,
  store,
  render: (h) => h(App),
}).$mount("#app");
