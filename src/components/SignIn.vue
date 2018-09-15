<template>
<v-container fluid fill-height>
  <v-layout align-center justify-center>
    <v-flex xs12 sm8 md4>
      <v-card class="elevation-3">
        <v-toolbar dark color="primary">
          <v-toolbar-title>RecordX - Login</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <p v-if="error" v-text="error">

          </p>
          <v-form>
            <v-text-field prepend-icon="person" v-model="email" name="email" label="Email" type="email"></v-text-field>
            <v-text-field prepend-icon="lock" v-model="password" name="password" label="Password" type="password"></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" round v-on:click="signIn">Login</v-btn>
        </v-card-actions>
          <v-subheader><router-link to="/sign-up">Sign Up</router-link></v-subheader>
      </v-card>
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>

// import store from '@/store'
import firebase from 'firebase'

export default {
  name: 'SignIn',
  data: function () {
    return {
      email: '',
      password: '',
      error: ''
    }
  },
  methods: {
    signIn: function () {
      let vm = this
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
        function (user) {
          console.log('Login Success: ' + user.user.email)
          vm.$store.dispatch('setUser', user)
          vm.$router.push('/')
        }
      ).catch(
        function (error) {
          vm.error = 'ERROR: ' + error.message
        }
      )
    }
  },
  computed: {
    nextPath () {
      return this.$store.nextPath
    }
  }
}
</script>

<style scoped>

</style>
