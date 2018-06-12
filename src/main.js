// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import firebase from 'firebase'
import 'semantic-ui-css/semantic.min.css'

import store from '@/store'
import router from '@/router'
import fireconf from '@/config'

// Initialize Firebase
firebase.initializeApp(fireconf)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>',
  created () {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        store.dispatch('setUser', user)
        // this.$store.state.user = this.$firebase.auth().currentUser
      } else {
        store.dispatch('setUser', null)
        // this.$store.state.user = null
      }
    })
    console.log('Vue instance created ...')
  }
})
