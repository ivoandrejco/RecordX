// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

import 'semantic-ui-css/semantic.min.css'

// Initialize Firebase
var config = {
  apiKey: 'AIzaSyAGPqgWOU7bKnx11ywFp6zXa3dTvF2dRDE',
  authDomain: 'go-chat-1263.firebaseapp.com',
  databaseURL: 'https://go-chat-1263.firebaseio.com',
  projectId: 'go-chat-1263',
  storageBucket: 'go-chat-1263.appspot.com',
  messagingSenderId: '1031388120717'
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
