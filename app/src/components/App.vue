<template>
 <div id="app">
  <header> 
    <span id="user" v-if="user"> 
      Hello {{user.username}}!
    </span>
  </header>
  <main>
    <!--Need to add in user v-if in RouterLink and Auth-->
    <RouterView></RouterView>
     <Auth 
        :onSignUp="handleSignUp"
        :onSignIn="handleSignIn"
      />
  </main>
 </div>
</template>

<script>
import api from '../services/api';
import Auth from './auth/Auth'; 
export default {
  data() {
    return {
      user:null
    };
  },
  components: {
    Auth
  },
  created() {
    const json = window.localStorage.getItem('profile');
    if(json) {
      this.setUser(JSON.parse(json));
    }
  },
  methods: {
    handleSignUp(profile) {
      return api.signUp(profile)
        .then(user => {
          this.setUser(user);
        });
    },
    handleSignIn(credentials) {
      return api.signIn(credentials)
        .then(user => {
          console.log(user);
          this.setUser(user);
        });
    },
  }, 
  setUser(user) {
    this.user = user;
    console.log(user);
    if(user) {
      api.setToken(user.token);
      window.localStorage.setItem('profile', JSON.stringify(user));                                     
    }
    else {
      api.setToken();
      window.localStorage.removeItem('profile');
    }
  },
  handleLogout() {
    this.setUser(null);
    this.$router.push('/');
  }
};

</script>

