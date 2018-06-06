// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

import 'semantic-ui-css/semantic.min.css'

// Initialize Firebase
var config = {
  apiKey: 'AIzaSyDp58M5BUn1WpNBCSFO88IoBndBfhi_wC4',
  authDomain: 'recordx-7e1c5.firebaseapp.com',
  databaseURL: 'https://recordx-7e1c5.firebaseio.com',
  projectId: 'recordx-7e1c5',
  storageBucket: '',
  messagingSenderId: '58722661207'
}

firebase.initializeApp(config)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'

})
