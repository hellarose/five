import Vue from 'vue'
import App from './App.vue'

//vuex 
import store from './store'
Vue.config.productionTip = false

// compostion
import VueCompositionApi from '@vue/composition-api'
Vue.use(VueCompositionApi)

// vue-awesome-swiper
import vueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
Vue.use(vueAwesomeSwiper)
import { swiper, swiperSlide } from 'vue-awesome-swiper'

// axios
import axios from 'axios'
Vue.prototype.$axios=axios
// axios.interceptors.request.use(
//   config => {
//     console.log(789)
//     store.commit('takeloading')
//     return config
//   },
//   error => {
//     return error
//   }
// )
// axios.interceptors.response.use(
//   response => {
// 	  console.log(response)
//     if (response.status == 200) {
//       console.log(45)
//       store.commit('shutloading')
//       return response
//     }
//   },
//   error => {
//     return error
//   }
// );
// element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI, { size: 'small', zIndex: 3000 });

// vant
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant)

// router
import router from './router'

new Vue({
  el:'#app',
  store,
  router,
  components:{
    App,
    swiper,
    swiperSlide,
  },
  template:'<App/>'
})
