import Vue from 'vue'
import App from './App.vue'
import './plugins/vuetify';
import router from "./router";
import '@mdi/font/css/materialdesignicons.css'

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
