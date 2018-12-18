<template>
  <section>
    <div v-if="method === 'signin'">
      <h1> Welcome to Twitch Feed </h1>
      <h2>Sign In</h2>
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
      <div v-else>
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
