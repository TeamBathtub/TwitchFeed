<template>
  <section class="wrapper">
    <div class="video-wrap">
    </div>
    <div class="overlay" v-if="method === 'signin'">
      <h1> Welcome to Twitch Feed </h1>
      <form @submit.prevent="handleSignInSubmit(profile)">
        <label>
          Username: 
          <input v-model="profile.username" required>
        </label>
        <label>
          Password:
          <input v-model="profile.password" required> 
        </label>
          <button> Sign In </button>
    </form>
         <p>
        Need to Register?
        <button @click="method = 'signup'"> Sign Up </button>
        </p>
    </div>
      <div class="overlay" v-else>
        <h2>Sign Up</h2>
        <form @submit.prevent="handleSignUpSubmit(profile)"> 
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
          <button>Sign Up</button>
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
<style>
body {
  font-size: 40pt;
  color:rgb(255, 255, 255);
}
label {
  font-size: 20pt;
}
h1 {
  margin-top: 100pt;
}
section {
  text-align: center;
}
.wrapper {
  height: 100%;
  position: fixed;
  width: 100%;
  display: flex;
  align-items: center;
}
.video-wrap {
  position: fixed;
  width: 100%; 
  height: 100%;
  opacity: .3;
  z-index: 1;
}
.overlay {
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background-color: rgba(103, 17, 129, 0.221);
  opacity: .6;
}
</style>
