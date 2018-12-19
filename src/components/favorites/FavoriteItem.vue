<template>
  <button @click="handleDelete"> Delete </button>
</template>

<script>
import api from '../../services/api';
export default {
  data() {
    return {
      streamer: null
    };
  },
  created() {
    api.getStreamer(this.$route.params.id)
      .then(streamer => {
        this.streamer = streamer; 
      });
  }
};
</script>

<style>

</style>
