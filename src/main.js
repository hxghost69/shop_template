// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import Vuex from 'vuex'
import store from './vuex/store.js'   //vuex
import Mint from 'mint-ui';
import api from '@/api/api.js' 
import 'mint-ui/lib/style.css'
import './assets/css/base.css'

Vue.use(Vuex);
Vue.use(Mint);
Vue.prototype.$api = api;
Vue.prototype.$axios = axios;
// 引入mockjs
require('./mock.js')
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

// 请求拦截
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  // store.commit('SET_LOADING',true);
  // 如果有token,添加到请求报文 后台会根据该报文返回status
  // if(store.state.login.token) {
  //   config.headers.Authorization = `token ${store.state.login.token}`;
  // }
  return config;

}, function (error) {
  // 对请求错误做些什么
  alert('网络错误,请稍后再试');

  store.commit('SET_LOADING',false);
  return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  // 加到时器主要是为了 展示Loading效果 项目中应去除
  // setTimeout(()=>{
  //   store.commit('SET_LOADING',false);
  // },300)
  return response;

}, function (error) {
  // 对响应错误做点什么
  // store.commit('SET_LOADING',false);
  if(errore.response) {

    if(error.response.status== 401) {
        // 如果返回401 即没有权限，跳到登录页重新登录
      store.commit('CHANGE_TOKEN',0);

      alert('请重新登录');

      router.replace({
        path: 'login',
        query: {redirect: router.currentRoute.fullPath}
      })

    }
  }

  return Promise.reject(error);
});

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
