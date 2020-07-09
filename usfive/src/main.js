import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios' // 引过来axios

import "./common/rem"


// 引入vant
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);
// 引入element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import VueCompositionApi from '@vue/composition-api'
Vue.use(VueCompositionApi)


// 将axios对象绑定到Vue原型
Vue.prototype.$axios = axios // 将对象挂载原型上

// 请求拦截器
axios.interceptors.request.use(
  config => {
    // 改变vuex中的isLoading状态数据，当为true，loading显示
    store.state.isLoading = true
    return config;
  },
  error => {
    return Promise.error(error);
  }
);

// 响应拦截器
axios.interceptors.response.use(
  response => {
    // 如果返回的状态码为200，说明接口请求成功，可以正常拿到数据
    // 否则的话抛出错误
    if (response.status === 200) {
      store.state.isLoading = false
      return Promise.resolve(response);
    } else {
      return Promise.reject(response);
    }
  },
  error => {
    if (error.response.status) {
      return Promise.reject(error.response);
    }
  }
);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')