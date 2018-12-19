<template>
  <section class="streamers">
    <h2>Search by Streamer Name</h2>

    <StreamerSearch v-bind:onSearch="handleSearch" v-bind:search="search"/>
    
    <div class="search-container">
      <ul v-if="streamer">
        <Streamer 
          v-bind:streamer="streamer"
          v-bind:onAdd="handleAdd"/>
      </ul>
    </div>

    <h2>View Top 100 Streamers</h2>
    <Top100 class="grid" v-bind:onAdd="handleAdd" v-bind:results="results"></Top100>

  </section>
</template>

<script>
import api from '../../services/api.js';
import Streamer from './Streamer.vue';
import StreamerSearch from './StreamerSearch.vue';
import Top100 from './Top100.vue';
export default {
  data() {
    const search = this.$route.query.search;
    return {
      streamer: null,
      results: null,
      search: search ? decodeURIComponent(this.$route.query.search) : ''
    };
  },
  components: {
    Streamer,
    StreamerSearch,
    Top100
  },
  created() {
    this.searchStreamers();
    console.log(this.results, 'HI');
    api.getTop100()
      .then(response => 
        this.results = response.data);
  },
  watch: {
    $route(newRoute) {
      const newSearch = newRoute.query.search;
      this.search = decodeURIComponent(newSearch);
      this.searchStreamers();
    }
  },
  methods: {
    handleSearch(search) {
      this.search = search || '';
      this.searchStreamers();
    },
    searchStreamers() {
      api.getStreamers(this.search)
        .then(response => {
          this.streamers[0] = response.data;
        })
        .catch(err => {
          this.error = err.message;
        });
    },
    handleAdd(favorite) {
      return api.addStreamer(favorite)
        .then(saved => {
          this.favorites.push(saved); 
        });
    }
  }
};
</script>

<style scoped>
h2 {
  text-align: center;
  margin-bottom: 25px;
}
section {
  padding: 20px;
}
</style>