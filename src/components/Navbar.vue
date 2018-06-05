<template lang="html">
<div id="navbar" class="ui fixed inverted main menu grid">
    <div class="header item">
      <router-link to="/">RecordX</router-link>
    </div>
    <div class="item">
      <router-link to="/patients">Patients</router-link>
    </div>
    <div class="right menu">
      <router-link to="/login" class="ui item">Login</router-link>
    </div>
</div>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>
