<template>
  <div class="ui centered grid container">

  <form class="ui six wide column form">
  <div class="ui segment">
    <div v-if="error" class="ui red message">{{error}}</div>
    <div v-if="message" class="ui green message">{{message}}</div>
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
      error: '',
      message: ''
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
          vm.message = 'Your account has been created!'
          // sent verification email

          var u = firebase.auth().currentUser
          if (!u) {
            vm.error += 'Unable to send verification email'
          }

          u.sendEmailVerification().then(
            function () {
              alert('Verification email has been sent!')
              vm.message += 'Verification email has been sent!'
            }
          ).catch(
            function (error) {
              alert('Oops! Unable to send Verification email')
              vm.error += 'Oops! Unable to send Verification email!'
            }
          )
        },
        function (err) {
          vm.error = err.message
        }
      )
    }
  }
}
</script>
