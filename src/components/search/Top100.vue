<template>
  <section>
    <ul>
      <li v-bind:key="index"
        v-for="(result, index) in results">
        <h3>#{{index + 1}} {{result.user_name}}</h3>
        <p>Number of Viewers: {{result.viewer_count}}</p>
        <button>Add to Favorites</button>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  props: {
    results: Array
  }
};
</script>

<style scoped>
ul {
  display: grid;
  list-style-type: none;
  grid-template-columns: repeat(4, 1fr);
  padding: 0;
  grid-column-gap: 10px;
  grid-row-gap: 10px;
}
li {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border: 2px solid navy;
  box-shadow: 4px 4px 4px black;
  background: black;
  margin: 5px 10px;
  text-align: center;
}
h3 {
  margin-bottom: 0px;
}
p, h3{
  color: white;
}
button {
  margin-bottom: 15px;
}
</style>
