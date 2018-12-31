<template>
  <section>
    <h2 class="info">{{favorite.display_name}}</h2>
    <img class="banner" :src="banner">

    <div class="info">
      <h3>Online Status:</h3>
      <div v-if="favorite.game">
        <p>🔴 Online</p>
        <p>Currently:</p>
        <p>{{favorite.game}}</p>
      </div>
      <div v-else>
        <p>Offline</p>
      </div> 

      <h3>Followers:</h3>
      <p>{{favorite.followers}}</p>
      
      <h3>Views:<h3>
      <p>{{favorite.views}}</p>
      <p>
        <a :href="`${favorite.url}`" target="_blank">
        Stream Url
        </a>
      </p>
    </div>
      
    <button @click="onDelete(favorite.display_name)"> 🗑️ Delete </button>
  </section>
</template>

<script>
export default {
  props: {
    // much more readable as just "favorite"
    favorite: Object,
    onDelete: Function
  },
  computed: {
    banner() {
      return favorite.profile_banner || 'https://i.ytimg.com/vi/GY8PkikQ8ZE/maxresdefault.jpg';
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