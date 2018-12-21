<template>
  <section>
    <h3>#{{index + 1}} {{result.user_name}}</h3>
      <p> 👤{{result.viewer_count}}</p>
      <button @click="handleAdd">❤️Add to Favorites</button>
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

<style scoped>
section {
  align-items: center;
  text-align: center;
  border: gray outset 3px;
  padding: 1vw;
}
button:hover {
  border-color: aqua;
}
</style>