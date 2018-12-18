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
        v-if="streams"
        :labels="labels"
        :viewerCounts="viewerCounts"
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
      streams: null,
      labels: null,
      viewerCounts: null
    };
  },
  components: {
    BarChart
  },
  created() {
    api.getTopStreamers()
      .then(response => {
        console.log('response', response);
        return this.streams = response;
      
      })
      .then(() => this.labels = this.getLabels())
      .then(() => this.viewerCounts = this.getViewerCounts());
       
  },
  methods: {
    getLabels() {
      return this.streams.map(stream => {
        return stream.user_name;
      });
    },
    getViewerCounts() {
      return this.streams.map(stream => {
        return stream.viewer_count;
      });
    }
  }
};
</script>

<style>

</style>