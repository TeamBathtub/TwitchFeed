<template>
<section>
  <h1>Favorite Streamers</h1>
  <div>
    <ul>
    </ul>
  </div>
</section>
</template>

<script>
import api from '../../services/api';

export default {
  created() {
    api.getStreamer(this.$route.params.id)
      .then(streamer => {
        this.streamer = streamer; 
      });
  }
};
</script>
