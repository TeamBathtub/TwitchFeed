<template>
  <section>
    <li class="container">
      <FavoriteDisplay 
        :favorite="favorite"
        :thumbnail="thumbnail"
        :url="url"
      />
    </li>
    <!-- <button @click="handleDelete"> Delete </button> -->
  </section>
</template>

<script>
import api from '../../services/api';
import FavoriteDisplay from './FavoriteDisplay';
export default {
  props: {
    url: String,
    thumbnail: String,
    favorite: Object
  },
  created() {
    this.makeUrl();
    this.getStreamerThumbnail();
  },
  methods: {
    getStreamerThumbnail() {
      api.getStreamers(this.favorite.userName)
        .then(response => {
          return this.thumbnail = response.data[0].profile_image_url;
        })
        .catch(err => {
          this.error = err.message;
        });
    },
    makeUrl() {
      return this.url = 'https://www.twitch.tv/' + this.favorite.userName;
    }
  },
  components: {
    FavoriteDisplay
  }
};
</script>

<style scoped>
.container {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  background-color: slateblue;
  padding: 2vw;
  color: white;
  border: gray outset 7px;
}
li {
  margin-bottom: 20px;
  text-align: center;
}
</style>

