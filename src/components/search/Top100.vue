<template>
  <section>
    <ul>
      <StreamerTile v-for="(result, index) in results"
        v-bind:key="index"
        v-bind:index="index"
        v-bind:result="result"
        v-bind:onAdd="onAdd"/>
    </ul>
  </section>
</template>

<script>
import StreamerTile from './StreamerTile';
export default {
  props: {
    onAdd: Function,
    results: Array
  },
  
  components: {
    StreamerTile
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
  border: 2px solid darkgray;
  box-shadow: 2px 2px 2px darkgray;
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
