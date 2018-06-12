import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  currentUser: null,
  nextPath: null,
  userMeta: null,
  patients: {
    currentPatient: null,
    patients: []
  }
}

const mutations = {
  SET_USER (state, user) {
    if (user) {
      state.currentUser = user
    } else {
      state.currentUser = null
      state.userMeta = null
    }
  },
  SET_NEXT_PATH (state, path) {
    if (path) {
      state.nextPath = path
    } else {
      state.nextPath = null
    }
  }
}

const actions = {
  setUser ({commit}, user) {
    commit('SET_USER', user)
  },
  setNextPath ({commit}, path) {
    commit('SET_NEXT_PATH', path)
  }
}

const getters = {
  currentUser: state => state.currentUser,
  nextPath: state => state.nextPath
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
