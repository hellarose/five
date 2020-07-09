import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Mine from '../views/Mine.vue'
import Concem from '../views/Concem.vue'
import Collect from '../views/Collect.vue'
import Order from '../views/Order.vue'
import Coupon from '../views/Coupon.vue'
import Cart from '../views/Cart.vue'
import Exchange from '../views/Exchange.vue'
import Vip from '../views/Vip.vue'
import Feedback from '../views/Feedback.vue'
import Options from '../views/Options.vue'
import SetPass from '../views/Set-new-pass.vue'
import Message from '../views/Message.vue'
import MessageDetail from '../views/Message-detail.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Mine',
    component: Mine,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: "/home",
    name: "Home",
    component: Home
  },
  {
    path: "/concem",
    name: "Concem",
    component: Concem
  },
  {
    path: "/collect",
    name: "Collect",
    component: Collect
  },
  {
    path: "/order",
    name: "Order",
    component: Order
  },
  {
    path: "/coupon",
    name: "Coupon",
    component: Coupon
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart
  },
  {
    path: "/exchange",
    name: "Exchange",
    component: Exchange
  },
  {
    path: "/vip",
    name: "Vip",
    component: Vip
  },
  {
    path: "/feedback",
    name: "Feedback",
    component: Feedback
  },
  {
    path: "/options",
    name: "Options",
    component: Options
  },
  {
    path: "/set-new-pass",
    name: "Set-new-pass",
    component: SetPass
  },
  {
    path: "/message",
    name: "Message",
    component: Message
  },
  {
    path: "/message-detail",
    name: "MessageDetail",
    component: MessageDetail
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router