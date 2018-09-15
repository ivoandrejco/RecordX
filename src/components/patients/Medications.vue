<template>
<div>
  <h2 class="headline">Medications <v-icon size="14" color="green lighten-1" @click="toggleEditing">fas fa-edit</v-icon></h2>

  <v-layout row wrap v-show="editMedications">
    <v-flex xs3>
      <v-text-field
        v-model="medication.name"
        name="name"
        label="Name"
        height="16"
        required>
      </v-text-field>
    </v-flex>
    <v-flex xs2>
      <v-text-field
        v-model="medication.dose"
        name="dose"
        label="Dose"
        height="10"
      >
      </v-text-field>
    </v-flex>
    <v-flex xs3>
      <v-text-field
        v-model="medication.frequency"
        name="frequency"
        label="Frequency"
        height="16"
      >
      </v-text-field>
    </v-flex>
    <v-flex xs2>
      <v-text-field
        v-model="medication.route"
        name="route"
        label="Route"
      >
      </v-text-field>
    </v-flex>
    <v-flex xs1 align-left>
      <v-icon @click="addDrug()" size="30" color="green" >fas fa-plus</v-icon>
    </v-flex>
  </v-layout>

      <v-list>
        <template v-for="(item, index) in medications">
         <v-list-tile-content v-bind:key="index + 1">
           <v-list-tile-title>
             <v-layout row>
              <v-flex xs3 v-text="index + 1 + '. ' + item.name">.</v-flex>
              <v-flex xs2 v-text="item.dose"></v-flex>
              <v-flex xs3 v-text="item.frequency"></v-flex>
              <v-flex xs2>{{item.route}}</v-flex>
              <v-flex xs2>
                <v-icon size="14" color="green" @click="editDrug(item.id)">far fa-edit</v-icon>
                <v-icon size="14" color="red" @click="deleteDrug(item.id)">far fa-trash-alt</v-icon>
              </v-flex>
              </v-layout>
            </v-list-tile-title>
         </v-list-tile-content>
       </template>
     </v-list>

</div>

</template>

<script>
import {v4} from 'uuid'

import {Medication} from '@/classes'

export default {
  name: 'Medications',
  data () {
    return {
      medications: [
        {id: 1, name: 'Metformin', dose: '1g', frequency: 'bd', route: 'PO'},
        {id: 2, name: 'Ramipril', dose: '5mg', frequency: 'daily', route: 'PO'}
      ],
      medication: new Medication(),
      editMedications: false
    }
  },
  computed: {
    xsF () {
      return this.editMedications ? 'xs3' : 'xs10'
    }
  },
  methods: {
    editDrug (id) {
      this.medication = this.medications.find(m => m.id === id)
    },
    deleteDrug (id) {
      const i = this.medications.findIndex(m => m.id === id)
      console.log('deleteing drug ' + i + ' - ' + id)
      this.medications.splice(i, 1)
    },
    addDrug () {
      console.log('adding medication')
      if (this.medication.id === '' || this.medication.id === undefined) {
        console.log('addDrug: ' + this.medication.id)
        this.medication.id = v4()
        this.medications.push(this.medication)
      }
      this.medication = new Medication()
    },
    toggleEditing () {
      this.editMedications = !this.editMedications
    }
  }
}
</script>
