<template>
<Main>

  <template slot="right-menu">
    <v-btn flat :to="{name: 'PatientEdit', params: {id: patient.id, next: {name: 'PatientView', params: {id: patient.id}}}}">Edit</v-btn>
    <v-btn flat :to="{name: 'PatientsList'}">Close</v-btn>
  </template>

  <template slot="main">

<v-container grid-list-xs fluid>
    <v-card>
      <v-container grid-list-md fluid>
      <h1 class="display-1">Personal Details</h1>
      <v-divider></v-divider>

      <v-layout row wrap>

        <v-flex md2>
            <div>
              <strong>First Name:</strong>
            </div>

            <strong>{{patient.firstname}}</strong>

        </v-flex>

        <v-flex md=2>
            <div>
              <strong>Middle Name:</strong>
            </div>

              {{patient.middlename}}

        </v-flex>

        <v-flex md2>
          <div>
            <strong>Last Name:</strong>
          </div>

            {{patient.lastname}}

        </v-flex>

        <v-flex md2>
          <div>
            <strong>DOB:</strong>
          </div>
          {{patient.dob}}
        </v-flex>

        <v-flex md2>
          <div>
            <strong>Gender:</strong>
          </div>
            {{patient.gender}}
        </v-flex>

        <v-flex md2>
          <div>
            <strong >Diagnosis:</strong>
          </div>
            {{patient.diagnosis}}
        </v-flex>

      </v-layout>
      </v-container>
    </v-card>
</v-container>

<v-container grid-list-xs fluid>
    <v-card>
      <v-container grid-list-md fluid>
        <h1 class="display-1">Medical History</h1>
      <v-divider></v-divider>
      <v-layout>
        <v-flex md12>
          Presentating complain
        </v-flex>
      </v-layout>
      <v-layout row wrap>
        <v-flex md5>
          <Medications></Medications>
        </v-flex>
        <v-flex md4>
          <h2>Comorbidies</h2>
        </v-flex>
        <v-flex md3>
          <h2>Social Hx</h2>
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
  </v-container>

    <v-container grid-list-xs fluid>
        <v-card>
          <v-container grid-list-md fluid>

      <v-layout row wrap>
        <v-flex md1>
          <h2>TODOs</h2>
        </v-flex>
        <v-flex md3>
          <h2>Notes</h2>
        </v-flex>
        <v-flex md3>
          <h2>Imaging</h2>
        </v-flex>
        <v-flex md3>
          <h2>Pathology</h2>
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
  </v-container>

      <v-divider></v-divider>
      <v-layout row wrap>
        <v-flex md3>
          <h2>Communications</h2>
        </v-flex>
        <v-flex md3>
          <h2>Notes</h2>
        </v-flex>
        <v-flex md3>
          <h2>Imaging</h2>
        </v-flex>
        <v-flex md3>
          <h2>Pathology</h2>
        </v-flex>
      </v-layout>

  </template>

</Main>
</template>

<script>
import Main from '@/components/Main'
import Medications from '@/components/patients/Medications'

export default {
  name: 'PatientView',
  components: {Main, Medications},
  computed: {
    patient () {
      return this.$store.state.patients.list.find(p => p.id === this.$route.params.id)
    }
  }
}
</script>
