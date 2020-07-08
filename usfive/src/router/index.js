import Vue from 'vue'
import Router from 'vue-router'
import mainpart from '@/components/mainpart'
import indexpart from '@/components/ins'
import selfpart from '@/components/selfpart'
import mylesson from '@/components/mylesson'
import mymoney from '@/components/mymoney'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'mainpart',
      component: mainpart,
      alias:"/indexlike",
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
    }
  ]
})
