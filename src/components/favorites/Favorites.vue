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

export default {
  components: {
    FavoriteItem
  },
  props: {
    streamer: Object
  }
};
</script>
