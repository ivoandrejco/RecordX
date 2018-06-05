<template>
  <div id="patients" class="ui grid container">
    <div class="row">
        <div class="column">
          <PatientsList :patients="patients"></PatientsList>
        </div>
      </div>
  </div>
</template>

<script>
import PatientsList from './PatientsList'

export default {
  name: 'Patients',
  data () {
    return {
      patients: [
        { id: 1, firstname: 'Ivo', surname: 'Andrejco', dob: '10/08/1974', diagnosis: 'Lymphoma', lastSeen: '1/6/2018', todo: 0 },
        { id: 2, firstname: 'Martina', surname: 'Andrejco', dob: '22/10/1972', diagnosis: 'Anemia', lastSeen: '1/6/2018', todo: 2 },
        { id: 3, firstname: 'Sophie', surname: 'Andrejco', dob: '30/10/2008', diagnosis: 'Thalasaemia', lastSeen: '1/6/2018', todo: 1 } ]
    }
  },
  components: { PatientsList }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.ui.menu {
  border-radius:0rem;
}

#patients  {

}
</style>
