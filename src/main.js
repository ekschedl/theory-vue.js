import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");

const counter = (a = 1, b) => {
  return a + b;
};
console.log(counter(1, 2));
console.log(counter(1, 6));
console.log(counter(undefined, 6));
