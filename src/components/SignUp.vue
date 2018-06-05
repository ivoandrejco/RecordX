<template>
  <div class="ui centered grid container">

  <form class="ui six wide column form">
  <div class="ui segment">
    <div v-if="error" class="ui red message">{{error}}</div>
    <h1 class="ui header">Sign Up</h1>
    <div class="field">
      <div class="ui left icon input" type="email" placeholder="E-mail address">
        <input type="email" v-model="email" autocomplete="email" placeholder="E-mail address">
        <i class="user icon"></i>
      </div>
    </div>
    <div class="field">
      <div class="ui left icon input" type="password" placeholder="Password">
        <input type="password" v-model="password1" autocomplete="new-password" placeholder="Password">
        <i class="lock icon"></i>
      </div>
    </div>
    <div class="field">
      <div class="ui left icon input" type="password" placeholder="Repeat Password">
        <input type="password" v-model="password2" autocomplete="new-password" placeholder="Repeat Password">
        <i class="lock icon"></i>
      </div>
    </div>
    <button role="button" @click="signup($event)" class="ui teal fluid large button">Sign Up</button>
  </div>
  <p style="text-align:center">
    or go to <router-link to="/login">Login</router-link>
  </p>
  </form>
  </div>
</template>

<script>

import firebase from 'firebase'

export default {
  name: 'SignUp',
  data: function () {
    return {
      email: '',
      password1: '',
      password2: '',
      error: ''
    }
  },
  computed: {
    password () {
      return this.password1 === this.password2 ? this.password1 : ''
    }
  },
  methods: {
    signup () {
      console.log('email: ' + this.email + ' password: ' + this.password)
      if (this.password === '') {
        console.log('Passwords do not match')
      }
      var vm = this
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
        function (user) {
          alert('Your account has been created')
        },
        function (err) {
          alert('oops. ' + err.message)
          vm.error = err.message
        }
      )
    }
  }
}
</script>
