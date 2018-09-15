<template>
<Main>

<template slot="right-menu">
  <v-btn flat @click="close">Cancel</v-btn>
  <v-btn flat @click="onPatientUpdate">Update</v-btn>
</template>

<template slot="main">
  <PatientForm :patient="patient"></PatientForm>
</template>

</Main>
</template>

<script>
import Main from '@/components/Main'
import PatientForm from '@/components/patients/Form'

export default {
  name: 'PatientEdit',
  components: {Main, PatientForm},
  props: {
  },
  computed: {
    patient () {
      let p = this.$store.state.patients.list.find(p => p.id === this.$route.params.id)
      return Object.assign({}, p)
    }
  },
  methods: {
    close () {
      let next = {name: 'PatientsList'}
      const params = this.$route.params
      if (params.next) {
        next = params.next
      }
      this.$router.push(next)
    },
    onPatientUpdate () {
      this.$store.dispatch('updatePatient', this.patient)
      this.close()
    }
  }
}
</script>
