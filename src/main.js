// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuetify from 'vuetify'

import 'babel-polyfill'

import App from './App'
import firebase from 'firebase'

import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader
import 'material-design-icons-iconfont/dist/material-design-icons.css' // Ensure you are using css-loader
import '@fortawesome/fontawesome-free/css/all.css'
import store from '@/store'
import router from '@/router'
import fireconf from '@/config'

// Helpers
import colors from 'vuetify/es5/util/colors'

Vue.use(Vuetify, {
  theme: {
    primary: colors.blue.darken1, // #E53935
    secondary: colors.blue.lighten4, // #FFCDD2
    accent: colors.indigo.base // #3F51B5
  }
})

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
        // store.dispatch('setUser', user)
        // this.$store.state.user = this.$firebase.auth().currentUser
      } else {
      //  store.dispatch('setUser', firebase.auth().currentUser)
        // this.$store.state.user = null
      }
    })
    console.log('Vue instance created ...')
  }
})
