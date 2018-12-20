<template>
  <section>
    <li>
      <h3>#{{index + 1}} {{result.user_name}}</h3>
      <p>Number of Viewers: {{result.viewer_count}}</p>
      <button @click="handleAdd">Add to Favorites</button>
    </li>
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
li {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border: 2px solid  rgb(75, 56, 122);;
  box-shadow: 2px 2px 2px  rgb(75, 56, 122);;
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
