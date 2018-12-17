<template>
  <section class="streamers">
    <nav v-if="user">
     <RouterLink to="/">Home</RouterLink>
     <RouterLink to="/favorites">Favorites</RouterLink>
     <RouterLink to="/streamers">Search</RouterLink>
     <RouterLink to="/ratings">Ratings</RouterLink>
     <RouterLink to="/about">About Us</RouterLink>
     <a href="#" @click="handleLogout">Logout</a>
   </nav>
    <h2>Search by Streamer Name</h2>

    <StreamerSearch v-bind:onSearch="handleSearch" v-bind:search="search"/>
    
    <div class="search-container">
      <ul v-if="streamers">
        <Streamer v-for="(streamer, index) in streamers"
          v-bind:key="index"
          v-bind:streamer="streamer"/>
      </ul>
    </div>

  </section>
</template>

<script>
import api from '../../services/api.js';
import Streamer from './Streamer.vue';
import StreamerSearch from './StreamerSearch.vue';

export default {
  data() {
    const search = this.$route.query.search;
    return {
      streamers: null,
      filteredStreamers: [],
      search: search ? decodeURIComponent(this.$route.query.search) : ''
    };
  },
  components: {
    Streamer,
    StreamerSearch
  },
  created() {
    this.searchStreamers();
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
          this.streamers = response.user_name;
        })
        .catch(err => {
          this.error = err.message;
          this.people = null;
        });
    }
  }
};
</script>