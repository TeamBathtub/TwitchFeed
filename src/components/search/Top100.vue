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
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  padding: 0;
  grid-column-gap: 10px;
  grid-row-gap: 10px;
}

</style>
