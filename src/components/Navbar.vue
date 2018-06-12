<template lang="html">
<div id="navbar" class="ui fixed inverted main menu grid">
    <div class="header item">
      <router-link to="/">RecordX</router-link>
    </div>
    <div class="item">
      <router-link to="/patients">Patients</router-link>
    </div>
    <div class="right menu">
      <div class="item">
          <div class="ui icon input">
            <input type="text" placeholder="Search ..." />
            <i class="search link icon"></i>
          </div>
      </div>
      <div v-if="currentUser" v-html="currentUser" class="item"></div>
      <a @click="signOut" class="ui item">Sign out</a>
    </div>
</div>
</template>

<script>
export default {
  name: 'Navbar',
  props: ['signOut', 'currentUser']
}
</script>
