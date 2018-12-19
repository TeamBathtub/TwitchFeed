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
  }
  li {
    padding: 10px;
  }
  h3 {
    text-align: center;
  }
  button {
    position: relative;
    left: 45%;
  }
</style>