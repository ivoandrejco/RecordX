<template>
<div id="login-form" class="ui centered grid container">
<form class="ui six wide column form">
<div class="ui segment">
  <h1 class="ui header">Login</h1>
  <div class="field">
    <div class="ui left icon input" type="email" placeholder="E-mail address">
      <input type="email" autocomplete="email" placeholder="E-mail address">
      <i class="user icon"></i>
    </div>
  </div>
  <div class="field">
    <div class="ui left icon input" type="password" placeholder="Password">
      <input type="password" autocomplete="password" placeholder="Password">
      <i class="lock icon"></i>
    </div>
  </div>
  <button role="button" @click="login($event)" class="ui teal fluid large button">Login</button>
</div>
<div style="text-align:center">
  You don't have an account? You can <router-link to="/signup">create</router-link> one.
</div>
</form>

</div>
</template>

<script>

import store from '@/store'

export default {
  name: 'Login',
  methods: {
    login: function (e) {
      if (e) e.preventDefault()

      console.log('called method login')
      store.commit('login')
      this.$router.replace('/')
    }
  }
}
</script>
