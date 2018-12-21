<template>
  <section>
    <h2 class="info">{{twitchFavorite.display_name}}</h2>
      <div v-if="twitchFavorite.profile_banner">
        <img v-bind:src="twitchFavorite.profile_banner">
      </div>
      <div v-else>
        <img src="https://i.ytimg.com/vi/GY8PkikQ8ZE/maxresdefault.jpg">
      </div>
      <div class="info">
        <p><span>Online Status:</span></p>
      <div v-if="twitchFavorite.game">
          🔴 Online <br/>
          <p><span>Currently:</span></p>
          {{twitchFavorite.game}}
      </div>
      <div v-else>
        Offline
      </div> 
        <p><span>Followers:</span><br/><br/>
          {{twitchFavorite.followers}}
        </p>
        <p><span>Views:</span><br/><br/>
          {{twitchFavorite.views}}
        </p>
        <p><span><a v-bind:href="`${twitchFavorite.url}`" target="_blank">
          Stream Url</a></span>
        </p>
      </div>
    <button @click="handleDelete"> 🗑️ Delete </button>
  </section>
</template>

<script>
import api from '../../services/api';
export default {
  props: {
    twitchFavorite: Object,
    onDelete: Function
  },
  methods: {
    handleDelete() {
      api.deleteStreamer(this.twitchFavorite.display_name)
        .then(() => {
          this.$router.push('/favorites');

        });
    }
  }
};
</script>

<style scoped>
h2 {
  font-size: 20px;
  background-color: gray;
  padding: 10px;
  border: gray outset 4px;
}
a {
  color: white;
  background-color: rgba(178, 178, 178, 0.6);
  border-radius: 20px;
  text-decoration: none;
  padding: 8px;
  text-align: center;
  border: gray 2px solid;
  font-size: 1.2rem;
}
a:hover {
  color: white;
  background-color: rgb(178, 178, 178);
  border-radius: 20px;
  text-decoration: none;
  padding: 8px;
  margin: 1vh;
  border-color: #B19ED6;
}
img {
  height: 100px;
  width: 300px;
  border: black solid 5px;
  margin-top: 10px;
 
}
span {
  font-weight: bold;
}

button {
  border-radius: 10px;
  width: 100px;
}
</style>
