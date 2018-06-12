<template>
<div class="ui six column wide">
  <form class="ui form">
    <h1 class="ui dividing header" v-text="header"></h1>
    <div class="inline fields">
      <div class="eight wide field">
        <label>Name</label>
        <input type="text" v-model="patient.firstname" placeholder="First Name" />
      </div>
      <div class="three wide field">
          <input type="text" v-model="patient.middlename" placeholder="Middle Name"  />
      </div>
      <div class="five wide field">
          <input type="text" v-model="patient.lastname" placeholder="Last Name" />
      </div>
    </div>
    <div class="inline fields">
      <div class="four wide field">
          <label>DOB</label>
          <input type="date" v-model="patient.dob" />
      </div>
    </div>

    <button class="ui primary button" @click.prevent="$emit('add-patient', patient)">{{buttonText}}</button>
    <button class="ui primary button" @click.prevent="$emit('add-patient', null)">Cancel</button>
  </form>
</div>
</template>

<script>

export default {
  name: 'PatientForm',
  props: {
    header: {
      type: String,
      default: 'New Patient'
    },
    buttonText: String,
    patient: {
      type: Object,
      default: function () {
        return {
          firstname: '',
          middlename: '',
          lastname: ''
        }
      }
    }
  }
}
</script>
