<template>
  <section class="wrapper">
    <div class="video-wrap">
      <video src="../../../assets/twitchClip.mp4" autoplay="" loop="" controls muted></video>
    </div>
    <div class="overlay" v-if="method === 'signin'">
      <img src="../../../assets/twitch-logo-purple.png" alt="">
      <h1> Welcome to Twitch Feed </h1>
      <form class="form" @submit.prevent="handleSignInSubmit(profile)">
        <label>
          Username: 
          <input v-model="profile.username" required>
        </label>
        <label>
          Password:
          <input type="password" v-model="profile.password" required> 
        </label>
          <button class="signIn"> Sign In </button>
    </form>
         <p>
        Need to Register?
        <button class="signUp" @click="method = 'signup'"> Sign Up </button>
        </p>
    </div>
      <div class="overlay" v-else>
        <h2>Sign Up</h2>
        <form class="form" @submit.prevent="handleSignUpSubmit(profile)"> 
        <label>
          Name:
          <input v-model="profile.firstName" required>
        </label>
        <label>
          Username:
          <input v-model="profile.username" required>
        </label>
        <label>
          Email:
          <input v-model="profile.email" required>
        </label>
        <label>
          Password:
          <input  v-model="profile.password" required>
        </label>
        <label>
          <button class="signUp">Sign Up</button>
        </label>
      </form> 
    </div>
     <pre v-if="error">{{error}}</pre>
  </section>
</template>

<script>
export default {
  props: {
    onSignIn: Function,
    onSignUp: Function
  },
  data() {
    return {
      method: 'signin',
      error: '',
      profile: {
        username: '',
        firstName: '',
        email: '',
        password: ''
      } 
    };
  }, 
  methods: {
    handleSignInSubmit() {
      this.error = '',
      this.onSignIn(this.profile)
        .catch(error => {
          this.error = error.error;
        });
    },
    handleSignUpSubmit() {
      this.error = '';
      this.onSignUp(this.profile)
        .catch(error => {
          this.error = error.error;
        });
    }
  }
};
</script>

<style scoped>
.wrapper {
  font-size: 40pt;
  color:rgb(75, 56, 122);
  text-shadow: 1pt 3pt 1pt white;
  font-family: 'Acme', sans-serif;
  height: 100%;
  position: fixed;
  width: 100%;
  display: flex;
  align-items: center;
}
label {
  font-size: 20pt;
}
input {
  height: 50px;
  width: 200px;
  margin-right: 10px;
  border-radius: 10px;
  font-size: 20px;
}
section {
  text-align: center;
  z-index: 99;
}
.video-wrap {
  position: fixed;
  width: 100%; 
  height: 100;
  opacity: .3;
  z-index: -1;
   -webkit-filter: blur(5px);
  -moz-filter: blur(5px);
  -o-filter: blur(5px);
  -ms-filter: blur(5px);
  filter: blur(5px);
}
.overlay {
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background-color: rgba(103, 17, 129, 0.221);
  opacity: .6;
}
.signIn, .signUp {
  padding: 15px 32px;
  text-align: center;
  display: inline-block;
  font-size: 16px;
  background-color:rgb(88, 15, 162);
  color:white;
  border: 3px solid black; 
  border-radius: 10px;
}
img {
  height: 100px;
  width: 100px;
  display: block;
}
</style>

