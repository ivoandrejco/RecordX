<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-card class="elevation-3">
          <v-toolbar dark color="primary">
            <v-toolbar-title>RecordX - Login</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <p v-if="error" v-text="error"></p>
            <v-form>
              <v-text-field prepend-icon="person" v-model="email" autocomplete="email" name="email" label="Email" type="email"></v-text-field>
              <v-text-field prepend-icon="lock" v-model="password1" autocomplete="new-password" name="password1" label="Password" type="password"></v-text-field>
              <v-text-field prepend-icon="lock" v-model="password2" autocomplete="new-password" name="password2" label="Repeat Password" type="password"></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" round v-on:click="signIn">Login</v-btn>
          </v-card-actions>
          <v-subheader><router-link to="/sign-in">Sign In</router-link></v-subheader>
        </v-card>
      </v-flex>
    </v-layout>
</v-container>
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
              vm.error += 'Oops! Unable to send Verification email! ' + error
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

<style scoped>
.grid {
  margin-top: 3.75rem;
}
</style>
