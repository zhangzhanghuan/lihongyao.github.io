// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
//引入swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

//使用swiper
Vue.use(VueAwesomeSwiper)

//引入Axios
 import Axios from 'axios'

 import Qs from 'qs';
 Axios.interceptors.request.use(function (config) {
   if(config.method == 'post') {
     config.data = Qs.stringify(config.data);
   }
   return config;
 }, function (error) {
   return Promise.reject(error);
 });

// 将axios挂载到Vue上
Vue.prototype.$axios = Axios

Vue.config.productionTip = false

//使用store
router.beforeEach((to, from, next) => {
  if(JSON.parse(sessionStorage.isLogin) == true){
    store.state.loginState = true;
  }
  switch(to.name) {
    case "home":  store.commit('changeTitle', "主页"); break;
    case "type":  store.commit('changeTitle', "分类"); break;
    case "buy":  store.commit('changeTitle', "购物车"); break;
    case "mine":  store.commit('changeTitle', "个人中心"); break;
    case "details": store.commit('changeTitle', "详情页");break;
    case "modification": store.commit('changeTitle',"个人资料修改");break;
    case "address": store.commit('changeTitle',"收货地址");break;
    case "loginB": store.commit('changeTitle',"登录 / 注册");break;
    case "register": store.commit('changeTitle',"注册");break;
    case "pay": store.commit('changeTitle',"结算中心");break;
  }
  next();
})
// 阿里图标
import './assets/icon/iconfont.css'

// Bmob
import Bmob from "hydrogen-js-sdk";


// 初始化
Bmob.initialize("271a2fd5585f966b2b9e39e1df8e0dc6", "1a82f88b7dd57b485779af83ffd17573");

// 挂载到全局使用
Vue.prototype.Bmob = Bmob


// 映入element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);


// 按需引入
import { Button, Select } from 'element-ui';
Vue.component(Button.name, Button);
Vue.component(Select.name, Select);

/* eslint-disable no-new */

new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
