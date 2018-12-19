<template>
  <section>
    <h1>Favorite Streamers</h1>
      <ul>
        <li v-for="favorite in favorites"
            :key="favorite"
            :favorite="favorite">
          <FavoriteItem v-bind:favorite="favorite" />
        </li>
      </ul>
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
    favorites: Array
  }, 
  created() {
    api.getStreamer()
      .then(response => {
        return this.favorites = response; 
      });
  }
};
</script>
