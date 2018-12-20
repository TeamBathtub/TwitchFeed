<template>
  <section>
    <li class="container">
      <FavoriteDisplay 
        :favorite="favorite"
      />
    </li>
    <button @click="handleDelete"> 🗑️ Delete </button>
  </section>
</template>

<script>
import api from '../../services/api';
import FavoriteDisplay from './FavoriteDisplay';
export default {
  props: {
    favorite: Object
  },
  created() {
    api.getStreamerDetails(this.favorite.userName)
      .then(response => {
        this.favorite = response.channels[0];
      });
  },
  methods: {
    handleDelete() {
      api.deleteStreamer(this.favorite.userId)
        .then(() => {
          console.log('here from delete');
          this.$router.push('/favorites');
        });
    }
  },
  components: {
    FavoriteDisplay
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-flow: column;
  justify-content: space-evenly;
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
  position: relative;

}
</style>

