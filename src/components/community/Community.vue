<template>
  <section> 
    <h1>Community</h1>
    <table>
      <thead>
       <tr>
         <th>Streamer</th>
         <th>Average</th>
       </tr>
     </thead>
     <tbody>
        <CommunityRating 
          v-for="stat in stats"
          :stat="stat"
          :key="stat.user_name" 
        />
     </tbody>
    </table>
    <h1>Community Favorites</h1>
    <CommunityFavorite 
    v-for="favorite in favorites"
    :favorite="favorite"
    :key="favorite.user_name" />
  </section>
</template>

<script>
import api from '../../services/api';
import CommunityRating from './CommunityRating'; 
import CommunityFavorite from './CommunityFavorite';

export default {
  data() {
    return {
      stats: null,
      favorites: null
    };
  },
  created() {
    api.getStats()
      .then(stats => this.stats = stats);
    console.log(typeof(this.stat));

    api.getAllFavorites()
      .then(favorites => this.favorites = favorites);
  },
  methods: {
    getRatings() {
      return api.getRatings()
        .then(ratings => {
          this.ratings = ratings;
        });
    }
  }, 
  components: {
    CommunityRating,
    CommunityFavorite
  }
};
</script>

<style>
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
</style>