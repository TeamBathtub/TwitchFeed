<template>
  <section> 
    <h1>Community</h1>
    <CommunityRating 
      v-for="stat in stats"
      :stat="stat"
      :key="stat.user_name" />
  </section>
</template>

<script>
import api from '../../services/api';
import CommunityRating from './CommunityRating'; 
export default {
  data() {
    return {
      stats: null
    };
  },
  created() {
    api.getStats()
      .then(stats => this.stats = stats);
    console.log(typeof(this.stat));
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
    CommunityRating
  }
};
</script>

<style>

</style>