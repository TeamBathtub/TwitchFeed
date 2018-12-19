<template>
 <div id="app">
  <header> 
    <nav v-if="user">
     <RouterLink to="/">Home</RouterLink>
     <RouterLink to="/search">Search</RouterLink>
     <RouterLink to="/favorites">Favorites</RouterLink>
     <RouterLink to="/ratings">Ratings</RouterLink>
     <RouterLink to="/community">Community</RouterLink>
     <RouterLink to="/about">About Us</RouterLink>
     <a href="#" @click="handleLogout">Logout</a>
   </nav>
    <span id="user" v-if="user"> 
      Hello {{user.username}}!
    </span>
  </header>
  <main>
    <RouterView v-if="user" :user="user"></RouterView>
     <Auth v-else
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
      console.log('giggles', profile);
      return api.signUp(profile)
        .then(user => {
          this.setUser(user);
        });
    },
    handleSignIn(credentials) {
      console.log('cred', credentials);
      return api.signIn(credentials)
        .then(user => {
          console.log(user);
          this.setUser(user);
        });
    },
    setUser(user) {
      this.user = user;
      console.log('set user', user);
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
  }
};

</script>

<style>
nav {
  display: flex;
  justify-content: space-around;
  background-color: rgb(75, 56, 122);
  padding: 2vh;
}
nav a {
  color: white;
  text-decoration: none;
  font-weight: bold;
  font-size: 3vh;
}
nav a:hover {
  color: rgb(177, 158, 214);
  text-decoration: underline;
  font-weight: bolder;
}
body {
  margin: 0;
  font-family: "Times New Roman", Times, serif;
}
#user {
  display: flex;
  justify-content: center;
  padding: 1vh;
  background-color: rgb(25, 23, 28);
  color: white;
  font-weight: bold;
}

</style>