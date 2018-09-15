<template>
<v-card>
  <v-container grid-list-md fluid>
    <h1>Personal Details</h1>
    <v-divider></v-divider>
    <v-layout row wrap>
      <v-flex md2>
        <v-text-field
          v-model="patient.firstname"
          name="firstname"
          label="First Name"
          required>
        </v-text-field>
      </v-flex>
      <v-flex md=2>
        <v-text-field
          v-model="patient.middlename"
          name="middlename"
          label="Middle Name"
          >
        </v-text-field>
      </v-flex>
      <v-flex md2>
        <v-text-field
          v-model="patient.lastname"
          name="lastname"
          label="Last Name"
          required>
        </v-text-field>
      </v-flex>
      <v-flex md2>
          <v-text-field
            v-model="patient.dob"
            name="dob"
            type="date"
            label="Birthday"
            required>
          </v-text-field>
      </v-flex>
      <v-flex md2>
          <v-select
            v-model="patient.gender"
            name="sex"
            label="Gender"
            :items="genders"
            item-value="text"
            required>
          </v-select>
      </v-flex>
      <v-flex md2>
            <v-text-field
              v-model="patient.diagnosis"
              name="diagnosis"
              label="Diagnosis"
              required>
            </v-text-field>
      </v-flex>
    </v-layout>
  </v-container>
</v-card>

</template>

<script>
export default {
  name: 'PatientForm',
  props: {
    patient: Object
  },
  data () {
    return {
      genders: [
        {text: 'Male'},
        {text: 'Female'},
        {text: 'None'}
      ]
    }
  }
}
</script>
