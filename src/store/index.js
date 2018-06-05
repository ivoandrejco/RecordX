import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    isLoggedIn: false
  },
  mutations: {
    login: state => { console.log('setting state.isLoggedIn to true'); state.isLoggedIn = true }
  }
})

export default store
