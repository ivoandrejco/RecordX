<template>
<div>
<Navbar v-bind:signOut="signOut" v-bind:currentUser="currentUser"></Navbar>
<div class="ui grid centered container">
  <slot>
  </slot>
</div>
<Footer></Footer>
</div>
</template>

<script>
import firebase from 'firebase'

import Navbar from './Navbar'
import Footer from './Footer'

export default {
  name: 'Main',
  components: { Navbar, Footer },
  data: function () {
    return {
    }
  },
  methods: {
    signOut () {
      let vm = this

      firebase.auth().signOut().then(
        function () {
          console.log('Signed out Success')
          vm.$store.dispatch('setUser', null)
          vm.$router.push('/sign-in')
        }
      ).catch(
        function () {
          console.log('Sign out Failed')
        }
      )
    }
  },
  computed: {
    currentUser () { return this.$store.state.currentUser ? this.$store.state.currentUser.email : '' }
  }
}
</script>
