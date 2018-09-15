import Vue from 'vue'
import Vuex from 'vuex'

import {HTTP} from '@/http'
import Patient from '@/classes'

Vue.use(Vuex)

const state = {
  patients: {
    current: null,
    list: []
  }
/*  currentUser: null,
  nextPath: null,
  userMeta: null,
   */
}

const mutations = {
  PATIENTS_LOAD (state, patients) {
    if (patients) {
      state.patients.list = Object.assign([], patients)
    }
  },
  PATIENT_DELETE (state, id) {
    if (id) {
      state.patients.list = state.patients.list.filter(p => p.id !== id)
    }
  },
  PATIENT_ADD (state, p) {
    if (p) {
      state.patients.list.push(p)
    }
  },
  PATIENT_UPDATE (state, pt) {
    if (pt) {
      const index = state.patients.list.findIndex(p => p.id === pt.id)
      Vue.set(state.patients.list, index, pt)
    }
  }
  /*
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
  },
 */
}

const actions = {
  loadPatients ({commit}, patients) {
    HTTP.get('patients')
      .then(response => {
        commit('PATIENTS_LOAD', response.data)
      })
      .catch(
        e => console.log('LOAD PATIENTS ERROR: ' + e)
      )
  },
  deletePatient ({commit}, id) {
    HTTP.delete('/patients/' + id)
      .then(response => {
        console.log('Deleted patient ' + id)
        commit('PATIENT_DELETE', id)
      })
      .catch(
        e => console.log('DELETE error:  ' + e)
      )
  },
  addPatient ({commit}, patient) {
    HTTP.post('/patients', Object.assign(new Patient(), patient))
      .then(response => {
        commit('PATIENT_ADD', response.data)
        console.log('NEW patient: ' + response.data.firstname)
      })
      .catch(err => {
        console.log('ERROR: storing patient ' + err)
      })
  },
  updatePatient ({commit}, patient) {
    if (patient) {
      HTTP.put('/patients/' + patient.id, patient)
        .then(response => {
          commit('PATIENT_UPDATE', response.data)
        })
        .catch(e => {
          console.log('UPDATE ERROR: ' + e)
        })
    }
  }
  /*
  setUser ({commit}, user) {
    commit('SET_USER', user)
  },
  setNextPath ({commit}, path) {
    commit('SET_NEXT_PATH', path)
  },
 */
}

const getters = {
//  currentUser: state => state.currentUser,
//  nextPath: state => state.nextPath,
  patients: state => state.patients.list
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  strict: true
})
