<template>
  <section> 
    <h1>Community</h1>
    {{ ratings }}
  </section>
</template>

<script>
import api from '../../services/api';

export default {
  data() {
    return {
      ratings: null
    };
  },
  created() {
    this.getRatings();
    console.log(this.ratings);
  },
  methods: {
    getRatings() {
      return api.getRatings()
        .then(ratings => {
          this.ratings = ratings;
        });
    }
  }
};
</script>

<style>

</style>