<template>
  <section>
    <ul v-bind:key="index"
    v-for="(result, index) in results">
      <li>
        <h3>#{{index + 1}} {{result.name}}</h3>
        <p>Number of Viewers: {{result.views}}</p>
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

<style>

</style>
