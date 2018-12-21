<template>
  <section class="streamers">
    <h1>Search</h1>
    <StreamerSearch v-bind:onSearch="handleSearch" v-bind:search="search"/>
    
    <div class="search-container">
      <ul v-if="streamer">
        <StreamerResult 
          v-bind:streamer="streamer"
          v-bind:onAdd="handleAdd"/>
      </ul>
      <div v-else class="no-results">
        <p>No results found. Try another search.</p>
      </div>
    </div>

    <h2>Browse Top 100 Streamers</h2>
    <Top100 class="grid" v-bind:onAdd="handleAdd" v-bind:results="results"></Top100>
  </section>
</template>

<script>
import api from '../../services/api.js';
import StreamerResult from './StreamerResult.vue';
import StreamerSearch from './StreamerSearch.vue';
import Top100 from './Top100.vue';

export default {
  data() {
    const search = this.$route.query.search;
    return {
      streamer: null,
      results: null,
      search: search ? decodeURIComponent(this.$route.query.search) : '',
      favorite: true
    };
  },

  components: {
    StreamerResult,
    StreamerSearch,
    Top100
  },

  created() {
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
          this.streamer = response.data[0];
        })
        .catch(err => {
          this.error = err.message;
        });
    },

    handleAdd(favorite) {
      return api.addStreamer(favorite)
        .then(() => {
          if(!this.favorite) {
            alert('Favorited already');
          }
          else {
            this.$swal('Done!', 'Added to your favorites', 'OK');
          }
        });
    }
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
h2 {
  text-align: center;
  background-color: rgb(177, 158, 214);
  padding: 2vh;
  border-bottom: 2px solid black;
  color: white;
}
.no-results {
  text-align: center;
  font-size: 1.2em;
  color: red;
}
</style>