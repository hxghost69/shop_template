// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import Vuex from 'vuex'
import store from './vuex/store.js'   //vuex
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'
import './assets/css/base.css'

Vue.use(Vuex);
Vue.use(Mint);
// Vue.use(Mint, {
//   lazyload: {
//     preLoad: 1.3,
//     error: '',
//     loading: require('./assets/images/info.png'),
//     attempt: 1,
//     filter: {
//       webp(listener, options) {

//       },
//     },
//   },
// });
Vue.config.productionTip = false



// const store = new Vuex.Store({
//   state: {
//     nickName:'',
//     cartCount:0
//   },
//   mutations: {
//     //更新用户信息
//     updateUserInfo(state, nickName) {
//       state.nickName = nickName;
//     },
//     updateCartCount(state,cartCount){
//       state.cartCount += cartCount;
//     }
//   }
// });


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
