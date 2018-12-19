<template>
  <section> 
    <h1>Community</h1>
    <table align="center" v-if="stats">
     <thead>
       <tr>
         <th> Average </th>
       </tr>
     </thead>
     <tbody>
       <tr v-for="stat in stats"
         :key="stat.user_name">
         <td> {{stat.average}} </td>
       </tr>
     </tbody>
   </table>
  </section>
</template>

<script>
import api from '../../services/api';

export default {
  data() {
    return {
      stats: null
    };
  },
  created() {
    api.getStats()
      .then(stats => this.stats = stats);
    console.log(this.stats);
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