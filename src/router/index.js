import Vue from 'vue'
import Router from 'vue-router'
import takeOut from '@/components/takeOut'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'takeOut',
      component: takeOut
    }
  ]
})
