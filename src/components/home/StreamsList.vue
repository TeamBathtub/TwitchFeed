<template>
  <section>
    <ul>
      <StreamerItem v-for="(stream, index) in streams"
      :key="index"
      :stream="stream"
      :index="index"/>
    </ul>
  </section>
</template>

<script>
import StreamerItem from './StreamerItem';

export default {
  components: {
    StreamerItem
  },
  props: {
    streams: Array
  }
};
</script>

<style scoped>
  ul {
    list-style-type: none;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 3vw;;
    margin: 4vw;
  }
  h3 {
    text-align: center;
  }
  button {
    position: relative;
    left: 45%;
  }
  section {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px;
  }
</style>