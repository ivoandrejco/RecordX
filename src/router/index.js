import Vue from 'vue'
import Router from 'vue-router'

import Main from '@/components/Main'
import Patients from '@/components/patients/Patients'
import PatientsList from '@/components/patients/List'
import PatientNew from '@/components/patients/New'
import PatientView from '@/components/patients/View'
import PatientEdit from '@/components/patients/Edit'
import SignIn from '@/components/SignIn'
import SignUp from '@/components/SignUp'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/sign-in',
      name: 'SignIn',
      component: SignIn
    },
    {
      path: '/sign-up',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/patients/',
      name: 'Patients',
      component: Patients,
      meta: {
        requiresAuth: true
      },
      children: [
        {
          path: '',
          name: 'PatientsList',
          component: PatientsList,
          meta: {
            requiresAuth: true
          }
        },
        {
          path: 'new',
          name: 'PatientNew',
          component: PatientNew,
          meta: {
            requiresAuth: true
          }
        },
        {
          path: ':id',
          name: 'PatientView',
          component: PatientView,
          meta: {
            requiresAuth: true
          }
        },
        {
          path: '/patients/:id/edit',
          name: 'PatientEdit',
          component: PatientEdit,
          meta: {
            requiresAuth: true
          }
        }
      ]
    }
  ]
})
/*
router.beforeEach((to, from, next) => {
  let currentUser = store.state.currentUser
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth)

  if (currentUser) console.log('User email: ' + currentUser.email)

  if (requiresAuth && !currentUser) {
    next({path: '/sign-in', params: {nextPath: from.path}})
  } else if ((to.path === '/sign-in' || to.path === '/sign-up') && currentUser) {
    next('/')
  } else {
    next()
  }
})
*/
export default router
