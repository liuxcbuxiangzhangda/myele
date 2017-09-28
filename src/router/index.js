import Vue from 'vue'
import Router from 'vue-router'
import takeOut from '@/components/takeout/takeOut'
import find from '@/components/find'
import orderlist from '@/components/orderlist'
import personal from '@/components/personal'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'takeOut',
      component: takeOut
    },
    {
      path: '/find',
      name: 'find',
      component: find
    },
    {
      path: '/orderlist',
      name: 'orderlist',
      component: orderlist
    },
    {
      path: '/personal',
      name: 'personal',
      component: personal
    }
  ]
})
