<template>
  <section v-if="twitchFavorite">
    <li class="container">
      <FavoriteDisplay 
        :twitchFavorite="twitchFavorite"
        :onDelete="onDelete" />
    </li>
  </section>
</template>

<script>
import api from '../../services/api';
import FavoriteDisplay from './FavoriteDisplay';
export default {
  data() {
    return {
      twitchFavorite: null
    };
  },

  props: {
    favorite: Object,
    onDelete: Function
  },

  created() {
    api.getStreamerDetails(this.favorite.userName)
      .then(response => {
        this.twitchFavorite = response.channels[0];
      });
  },
  
  components: {
    FavoriteDisplay
  } 
};
</script>

<style scoped>
.container {
  display: flex;
  flex-flow: column;
  justify-content: space-evenly;
  align-items: center;
  width: 300px;
  background-color:rgb(100, 33, 167);
  padding: 2vw;
  color: white;
  border: gray outset 7px;
}
li {
  margin-bottom: 20px;
  text-align: center;
  position: relative;
}
</style>