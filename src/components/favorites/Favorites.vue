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
    // api.getStreamerId(this.$route.params.id)
    //   .then(favorite => {
    //     this.favorite = favorite; 
    //   });
  }
};
</script>

<style scoped>
h1 {
  text-align: center;
  font-size: 6vh;
  margin: 2vh 35vw 2vh 35vw;
  border: solid gray 2px;
  border-radius: 20vw;
  color: gray;
  width: 25vw;
  justify-content: center;
}
button {
  background-color: white;
  color: black;
  border: 2px solid gray;
  padding: 14px 40px;
}
ul {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  padding: 0;
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  justify-items: center;
}
section {
  margin: 20px;
}
</style>


