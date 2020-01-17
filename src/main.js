import Vue from "vue";
import App from "./App.vue";

import AppDice from "./components/AppDice.vue";

// Register global components
Vue.component("AppDice", AppDice);

// Disable production tip in console
Vue.config.productionTip = false;

// Instanciate application
new Vue({
  render: h => h(App)
}).$mount("#app");
