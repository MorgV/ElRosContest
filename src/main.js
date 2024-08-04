import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia, PiniaVuePlugin } from 'pinia'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

Vue.config.productionTip = false

Vue.use(PiniaVuePlugin)
const pinia = createPinia()


new Vue({
  pinia,
  router,
  render: h => h(App)
}).$mount('#app')
