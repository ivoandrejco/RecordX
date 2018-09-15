<template>
<Main>

  <template slot="right-menu">
      <v-btn flat :to="{name: 'PatientNew'}">New Patient</v-btn>
  </template>

  <template slot="main">
  <v-data-table
      :headers="headers"
      :items="patients"
      :pagination.sync="pagination"
      select-all
      item-key="name"
      class="elevation-1"
      loading=true
      :rows-per-page-items="rowsPerPageItems"
    >

    <template slot="headers" slot-scope="props">
          <tr>
            <th
              v-for="header in props.headers"
              class="text-md-left"
              :key="header.text"
              :class="[ 'column sortable', pagination.descending ? 'desc' : 'asc', header.value === pagination.sortBy ? 'active' : '']"
              @click="changeSort(header.value)"
            >
              <v-icon small>arrow_upward</v-icon>
              {{ header.text }}
            </th>
          </tr>
    </template>

    <template slot="items" slot-scope="props">
      <tr :active="selected" @click="selected = !selected">

        <td>
          <router-link
            :to="{name: 'PatientView', params: {id: props.item.id}}" :key="props.item.id"
          >
          {{ name(props.item) }}
          </router-link>
        </td>
        <td>{{ props.item.gender }}</td>
        <td>{{ props.item.dob }}</td>
        <td>{{ props.item.diagnosis }}</td>
        <td>{{ props.item.last_seen }}</td>
        <td>{{ props.item.todo.length }}</td>
        <td>
          <router-link
            :to="{name: 'PatientEdit', params: {id: props.item.id}}"
          >
            <v-icon color="green" small>far fa-edit</v-icon>
          </router-link>
          <v-icon @click="onPatientDelete(props.item.id)" small color="red">far fa-trash-alt</v-icon>
          <router-link
            :to="{name: 'PatientView', params: {id: props.item.id}}"
          >
            <v-icon color="blue" small>far fa-eye</v-icon>
          </router-link>
        </td>
      </tr>
    </template>

  </v-data-table>

<v-dialog v-model="dialog" max-width="500px">
<v-card>
  <v-card-title class="headline">
   <h3>{{patient.firstname}} {{patient.lastname}}</h3>
  </v-card-title>
  <v-card-text>
    Do this want to delete the patient's details?
  </v-card-text>
  <v-card-actions>
    <v-btn color="primary" flat @click.stop="dialog=false">No</v-btn>
    <v-btn color="primary" flat @click.stop="onDeleteConfirm(patient.id)">Yes</v-btn>
  </v-card-actions>
</v-card>
</v-dialog>

</template>

</Main>
</template>

<script>

import Main from '@/components/Main'

export default {
  name: 'PatientsList',
  components: {Main},
  data () {
    return {
      pagination: {
        sortBy: 'lastname'
      },
      dialog: false,
      selected: [],
      patient: {},
      rowsPerPageItems: [10, 20, 50, {text: 'All', value: -1}],
      headers: [
        {
          text: 'Patients',
          value: 'lastname',
          class: 'title',
          sortable: true
        },
        {
          text: 'Gender',
          value: 'gender',
          class: 'title',
          sortable: true
        },
        {
          text: 'D.O.B',
          value: 'dob',
          class: 'title',
          sortable: true
        },
        {
          text: 'Diagnosis',
          value: 'diagnosis',
          class: 'title'
        },
        {
          text: 'Last Seen',
          value: 'last_seen',
          class: 'title'
        },
        {
          text: 'TODOs',
          value: 'todo',
          class: 'title'
        },
        {
          text: 'Actions',
          value: 'actions',
          align: 'center',
          class: 'title',
          sortable: false
        }
      ]
    }
  },
  computed: {
    patients () {
      return this.$store.state.patients.list
    }
  },
  methods: {
    name (p) {
      return p.lastname + ' ' + p.firstname
    },
    toggleAll () {
      if (this.selected.length) this.selected = []
      else this.selected = this.patients.slice()
    },
    changeSort (column) {
      if (this.pagination.sortBy === column) {
        this.pagination.descending = !this.pagination.descending
      } else {
        this.pagination.sortBy = column
        this.pagination.descending = false
      }
    },
    getPatient (id) {
      return Object.assign({}, this.$store.state.patients.list.find(p => p.id === id))
    },
    onPatientDelete (id) {
      this.patient = this.getPatient(id)
      this.dialog = true
    },
    onDeleteConfirm (id) {
      this.$store.dispatch('deletePatient', id)
      this.patient = {}
      this.dialog = false
    }
  }
}
</script>
