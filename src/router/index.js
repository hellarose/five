import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Mine from '@/views/Mine.vue'
import Concem from '@/views/Concem.vue'
import Collect from '@/views/Collect.vue'
import Order from '@/views/Order.vue'
import Coupon from '@/views/Coupon.vue'
import Cart from '@/views/Cart.vue'
import Exchange from '@/views/Exchange.vue'
import Vip from '@/views/Vip.vue'
import Feedback from '@/views/Feedback.vue'
import Options from '@/views/Options.vue'
import SetPass from '@/views/Set-new-pass.vue'
import Message from '@/views/Message.vue'
import MessageDetail from '@/views/Message-detail.vue'

// csq
import Sou from '@/components/csq/Sou'
import Dan from '@/components/csq/Dan'
import Bca from '@/components/csq/Bca'
import Cc from '@/components/csq/Cc'
import Tt from '@/components/csq/Tt'
import Tta from '@/components/csq/Tta'
import Ttb from '@/components/csq/Ttb'
import Lianxi from "@/components/csq/Lianxi"
// wyl
import wyl from "@/components/wyl/course"

// zz
import Router from 'vue-router'
import mainpart from '@/components/mainpart'
import indexpart from '@/components/ins'
import selfpart from '@/components/selfpart'
import mylesson from '@/components/mylesson'
import mymoney from '@/components/mymoney'

// zjy
import rili from '@/components/zjy/rili'
import Zjy from '@/components/zjy/Zjy'
import Yuyue from '@/components/zjy/Yuyue'
import Xiangqing from '@/components/zjy/Xiangqing'

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
    component: () => import( /* webpackChunkName: "about" */ '@/views/About.vue')
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
  },
  {
    path:'csq',
    name:'csqindex',
    component: Sou,
    children:[
      {
        path: '/dan',
        component: Dan
      },
      {
        path: '/bca',
        component: Bca
      },
      {
        path: '/cc',
        component: Cc
      },
      {
        path: '/tt',
        component: Tt
      },
      {
        path: '/tta',
        component: Tta
      },
      {
        path: '/ttb',
        component: Ttb
      },
      {
        path: '/lianxi',
        component: Lianxi
      }
    ]
  },
  {
    path:'/wyl',
    name:'wylindex',
    component:wyl,
  },
  {
    path:'/zz',
    name: 'mainpart',
    component: mainpart,
    children:[
      {
        path: '/',
        name: 'indexpart',
        component: indexpart,
      },
      {
        path: '/self',
        name: 'selfpart',
        component: selfpart,
      }
    ]
  },
  {
    path:'/mylesson',
    name: 'mylesson',
    component: mylesson
  },
  {
    path:'/mymoney',
    name: 'mymoney',
    component: mymoney
  },
  {
    path:'/zjyindex',
    name: 'rili',
    component: rili,
    children:[
      {
        path: '/zjy',
        name: 'Zjy',
        component: Zjy
      },
      {
        path: '/yuyue',
        name: 'Yuyue',
        component: Yuyue
      },
      {
        path: '/xiangqing',
        name: 'Xiangqing',
        component: Xiangqing
      }
    ]

  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router