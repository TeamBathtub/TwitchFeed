<template>
  <section>
    <h3>#{{index + 1}} {{result.user_name}}</h3>
    <p>Number of Viewers: {{result.viewer_count}}</p>
    <button @click="handleAdd">Add to Favorites</button>
  </section>
</template>

<script>
export default {
  props: {
    result: Object,
    index: Number,
    onAdd: Function
  }, 
  methods: {
    handleAdd() {
      this.onAdd(this.result);
    }
  }
};
</script>

<style>

</style>
