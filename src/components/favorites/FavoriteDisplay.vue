<template>
  <section>
    <h2>{{favorite.userName}}</h2>
    <img :src="thumbnail"/>
    <a :href="url" target="_blank">View Stream</a>
    <!-- <button @click="handleDelete"> Delete </button> -->
  </section>
</template>

<script>
export default {
  props: {
    url: String,
    thumbnail: String,
    favorite: Object
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
  text-align: center;
  border-color: #B19ED6;
}
img {
  width: 100%;
  height: 100%;
  border: black solid 5px;
  margin-top: 10px;
  margin-bottom: 30px;
}
</style>