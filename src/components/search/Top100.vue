<template>
  <section>
    <ul>
      <StreamerTile v-for="(result, index) in results"
        :key="index"
        :index="index"
        :result="result"
        :onAdd="onAdd" />
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
  grid-template-columns: repeat(3, 1fr);
  padding: 0;
  grid-column-gap: 10px;
  grid-row-gap: 10px;
}
</style>