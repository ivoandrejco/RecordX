<template>
<div>

  <v-navigation-drawer v-if="navDrawer"  app>
      <Navbar></Navbar>
  </v-navigation-drawer>
  <v-toolbar app color="primary" dark>
    <v-toolbar-side-icon @click="navDrawer = !navDrawer"></v-toolbar-side-icon>
    <v-toolbar-title>
      <slot name="toolbar-title"></slot>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <slot name="right-menu">
      </slot>
    </v-toolbar-items>
  </v-toolbar>
          <slot name="main"></slot>
  <Footer></Footer>

</div>
</template>

<script>
import firebase from 'firebase'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default {
  name: 'Main',
  components: { Navbar, Footer },
  data: function () {
    return {
      navDrawer: false
    }
  },
  methods: {
    signOut () {
      const self = this

      firebase.auth().signOut().then(
        function () {
          console.log('Signed out Success')
          self.$store.dispatch('setUser', null)
          self.$router.push('/sign-in')
        }
      ).catch(
        function () {
          console.log('Sign out Failed')
        }
      )
    },
    showDrawer () {

    }
  },
  computed: {
    currentUser () { return this.$store.state.currentUser ? this.$store.state.currentUser.email : '' }
  }
}
</script>
