<template>
  <div>
    <table class="ui table">
      <thead>
        <tr>
          <th colspan="6" class="aligned left">
              Patients List
          </th>
        </tr>
        <tr>
          <th>
            Name
          </th>
          <th>
            MRN
          </th>
          <th>
            Birthdate
          </th>
          <th>
            Diagnosis
          </th>
          <th>
            Last Seen
          </th>
          <th>
            TODO
          </th>
        </tr>
      </thead>
      <tbody>
        <tr :key="p.id" v-for="p in patients">
          <td>
            {{p.firstname}} {{p.surname}}
          </td>
          <td>
            -
          </td>
          <td>
            {{p.dob}}
          </td>
          <td>
            {{p.diagnosis}}
          </td>
          <td>
            {{p.lastSeen}}
          </td>
          <td>
            {{p.todo}}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'PatientsList',
  props: {
    patients: Array
  }
}
</script>
