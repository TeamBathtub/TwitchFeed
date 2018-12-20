<template>
  <section>
    <li class="container">
      <FavoriteDisplay 
        :favorite="favorite"
      />
    </li>
  </section>
</template>

<script>
// import api from '../../services/api';
import FavoriteDisplay from './FavoriteDisplay';
export default {
  props: {
    favorite: Object,
    // onDelete: Function
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

