<template>
  <Main>
  <div id="patients" class="ui grid container">
    <div class="row">
        <div v-if="showPatients" class="column">
            <div class="ui right aligned grid">
              <div class="column">
                <button id="addPatient" class="ui primary button" @click="createPatient">Add Patient</button>
              </div>
            </div>
            <PatientsList :patients="patients"></PatientsList>
        </div>
        <div v-if="showNewPatientForm" class="left aligned column">
          <PatientForm v-on:add-patient="addPatient" header="New Patient" :patient="patient" buttonText="Add Patient">
          </PatientForm>
        </div>
      </div>
  </div>
  </Main>
</template>

<script>
import PatientsList from './PatientsList'
import PatientForm from './PatientForm'
import Main from './Main'

export default {
  name: 'Patients',
  data () {
    return {
      patients: [
        { id: 1, firstname: 'Ivo', surname: 'Andrejco', dob: '10/08/1974', diagnosis: 'Lymphoma', lastSeen: '1/6/2018', todo: 0 },
        { id: 2, firstname: 'Martina', surname: 'Andrejco', dob: '22/10/1972', diagnosis: 'Anemia', lastSeen: '1/6/2018', todo: 2 },
        { id: 3, firstname: 'Sophie', surname: 'Andrejco', dob: '30/10/2008', diagnosis: 'Thalasaemia', lastSeen: '1/6/2018', todo: 1 }
      ],
      showPatients: true,
      showNewPatientForm: false,
      patient: {
        firstname: '',
        middlename: '',
        lastname: '',
        dob: null,
        mrn: '',
        diagnosis: '',
        todo: [],
        initSeen: null,
        lastSeen: null
      }
    }
  },
  components: { PatientForm, PatientsList, Main },
  methods: {
    resetView () {
      this.showPatients = false
      this.showNewPatientForm = false
    },
    createPatient () {
      this.resetView()
      this.showNewPatientForm = true
    },
    addPatient (p) {
      if (p) this.patients.push(p)
      
      this.resetView()
      this.showPatients = true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.ui.menu {
  border-radius:0rem;
}

#addPatient  {
  margin: 0.5rem 0;
}

</style>
