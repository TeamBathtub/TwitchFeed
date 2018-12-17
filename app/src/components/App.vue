<template>
 <div id="app">
   <RouterView></RouterView>
   {{result}}
   <Home/>
 </div>
</template>

<script>
import api from '../services/api';
import Home from './home/Home';
export default {
  data() {
    return {
      result: null
    };
  },
  created() {
    api.test()
      .then(result => this.result = result);
  },
  components: {
    Home
  }
};
</script>

