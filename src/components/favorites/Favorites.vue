<template>
<section>
  <h1>Favorite Streamers</h1>
  <div>
    <li>
    <FavoriteItem v-for="streamer in streamers"
    :key="streamer"
    :streamer="streamer"/>
    </li>
  </div>
</section>
</template>

<script>
import FavoriteItem from './FavoriteItem';
import api from '../../services/api';

export default {
  components: {
    FavoriteItem
  },
  props: {
    streamer: Object
  }, 
  created() {
    api.getStreamer()
      .then(streamer => {
        this.streamer = streamer; 
      });
  }
};
</script>
