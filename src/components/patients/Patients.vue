<template>
<Main>
  <template slot="main">

    <v-content>
      <router-view></router-view>
    </v-content>

  </template>
</Main>
</template>

<script>
import Main from '@/components/Main'

export default {
  name: 'Patients',
  components: {Main},
  created () {
    console.log('List created')
    this.$store.dispatch('loadPatients')
  }
}
</script>
