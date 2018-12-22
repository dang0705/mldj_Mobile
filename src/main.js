import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
import {Msg} from 'vux'
import { Confirm } from 'vux'
import store from './store'   /*vuex store*/
import axios from 'axios'
import './assets/css/reset.css'
import './assets/css/H5Reset.css'
import Vuex from 'vuex';
import vuexI18n from 'vuex-i18n';
import  { ConfirmPlugin } from 'vux'
Vue.use(ConfirmPlugin)
const store1 = new Vuex.Store({
  modules: {
    i18n: vuexI18n.store
  }
});
Vue.use(vuexI18n.plugin, store1)
Vue.component('msg', Msg)
Vue.component('confirm', Confirm)
// plugins


Vue.prototype.$axios = axios;

Vue.config.productionTip = false
fastClick.attach(document.body);

/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  store,
  components:{App},
  template: '<App/>',
  render: h => h(App)
})
