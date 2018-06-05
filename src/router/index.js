import Vue from 'vue'
import Router from 'vue-router'

import store from '@/store'
import Patients from '@/components/Patients'
import Login from '@/components/Login'
import Main from '@/components/Main'
import SignUp from '@/components/SignUp'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/patients',
      name: 'Patients',
      component: Patients
    }
  ]
})

router.beforeEach((to, from, next) => {
  console.log('Store state isLoggedIn is ' + store.state.isLoggedIn)
  console.log('to:' + to.path + ' - from: ' + from.path)
  if (store.state.isLoggedIn !== true) {
    if (to.name === 'Login' || to.name === 'SignUp') {
      next()
    } else {
      next('/login?next=' + String.trim(to.path))
    };
  } else if (to.name === 'Login') {
    next('/')
  }
  next()
})

export default router
