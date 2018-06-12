<template>
<div id="signin-form" class="ui centered grid container">
<form class="ui six wide column form">
  <h1 class="ui header"><i class="clipboard outline icon"> <span style="margin-left:1rem;">RecordX</span></i></h1>

<div class="ui segment">
  <div class="ui red message" v-if="error" v-html="error">
  </div>
  <div class="field">
    <div class="ui left icon input" type="email" placeholder="E-mail address">
      <input type="email" autocomplete="email" v-model="email" placeholder="E-mail address">
      <i class="user icon"></i>
    </div>
  </div>
  <div class="field">
    <div class="ui left icon input" type="password" placeholder="Password">
      <input type="password" autocomplete="password" v-model="password" placeholder="Password">
      <i class="lock icon"></i>
    </div>
  </div>
  <input type="hidden" v-model="nextPath" name="nextPath" />
  <button role="button" @click="signIn($event)" class="ui teal fluid large button">Sign In</button>
</div>
<div style="text-align:center">
  You don't have an account? You can <router-link to="/sign-up">create</router-link> one.
</div>
</form>

</div>
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
    signIn: function (e) {
      if (e) e.preventDefault()
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
.grid {
  margin-top: 3.75rem;
}
</style>
