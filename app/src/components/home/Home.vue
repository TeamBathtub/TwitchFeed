<template>
  <section>
    <nav v-if="user">
     <RouterLink to="/">Home</RouterLink>
     <RouterLink to="/favorites">Favorites</RouterLink>
     <RouterLink to="/streamers">Search</RouterLink>
     <RouterLink to="/ratings">Ratings</RouterLink>
     <RouterLink to="/about">About Us</RouterLink>
     <a href="#" @click="handleLogout">Logout</a>
   </nav>
    <div>
        <BarChart
        :streams="streams"
        />
    </div>
   </section>
</template>

<script>
import BarChart from './BarChart';
import api from '../../services/api';
export default {
  data() {
    return {
      streams: null
    };
  },
  components: {
    BarChart
  },
  created() {
    api.getTopStreamers()
      .then(response => this.streams = response);
  }
};
</script>

<style>

</style>