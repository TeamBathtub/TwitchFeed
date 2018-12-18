<template>
  <section>
    <ul v-bind:key="index"
    v-for="(stream, index) in streams">
      <li>
        <h3>#{{index + 1}} {{stream.user_name}}</h3>
        <p>Number of Viewers: {{stream.viewer_count}}</p>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
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
    border: 2px solid black;
    box-shadow: 2px 2px 2px darkgray;
    padding: 10px;
  }
  h3 {
    text-align: center;
  }

</style>