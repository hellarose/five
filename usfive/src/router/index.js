import Vue from 'vue'
import Router from 'vue-router'
import mainpart from '@/components/mainpart'
import ins from '@/components/ins'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'mainpart',
      component: mainpart
    },
    {
      path: '/ins',
      name: 'ins',
      component: ins
    }
  ]
})
