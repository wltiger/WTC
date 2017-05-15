import Vue from 'vue'
import Router from 'vue-router'
import RegisterView from '@/views/users/regsiter.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/register',
      component: RegisterView
    }
  ]
})
