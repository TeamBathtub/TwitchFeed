<template>
  <section>
    <h1>Favorite Streamers</h1>
      <ul>
        <FavoriteItem v-for="favorite in favorites"
          :key="favorite.id"
          :favorite="favorite"
           />
      </ul>
  </section>
</template>

<script>
import FavoriteItem from './FavoriteItem';
import api from '../../services/api';

export default {
  data() {
    return {
      favorites: null
      
    };
  },
  components: {
    FavoriteItem
  },
  created() {
    api.getStreamer()
      .then(response => {
        return this.favorites = response; 
      });
  }
};
</script>


