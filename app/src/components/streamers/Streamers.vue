<template>
  <section class="streamers">
    <h2>Search by Streamer Name</h2>

    <StreamerSearch v-bind:onSearch="handleSearch" v-bind:search="search"/>
    
    <div class="search-container">
      <ul v-if="streamers">
        <Streamer v-for="(streamer, index) in streamers"
          v-bind:key="index"
          v-bind:streamer="streamer"/>
      </ul>
    </div>

    <Top100 v-bind:results="results"></Top100>

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
      results: null,
      streamers: null,
      filteredStreamers: [],
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
    api.getTop100()
      .then(results => this.results = results);
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
          this.streamers = response.data;
        })
        .catch(err => {
          this.error = err.message;
        });
    }
  }
};
</script>