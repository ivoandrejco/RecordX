<template>
<Main>

  <template slot="right-menu">
    <v-btn flat :to="{name: 'PatientsList'}">Cancel</v-btn>
    <v-btn flat @click="onPatientAdd">Add</v-btn>
  </template>

  <template slot="main">
    <PatientForm :patient="patient"></PatientForm>
  </template>

</Main>
</template>

<script>
import Main from '@/components/Main'
import PatientForm from '@/components/patients/Form'
import Patient from '@/classes'
import {v4} from 'uuid'

export default {
  name: 'PatientNew',
  components: {Main, PatientForm},
  data () {
    return {
      patient: new Patient()
    }
  },
  methods: {
    onPatientAdd () {
      this.patient.id = v4()
      this.$store.dispatch('addPatient', this.patient)
      this.$router.push({name: 'PatientsList'})
    }
  }
}
</script>
