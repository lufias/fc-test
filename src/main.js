import Vue from 'vue'
import App from './App.vue'
import router from './router'

window.Popper = require('popper.js').default;
window.$ = window.jQuery = require('jquery');
window._ = require('lodash')

require('bootstrap');
import 'bootstrap/dist/css/bootstrap.css';

import { store } from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
