<template>
  <section>
      {{favorite.userName}}
      <a :href="url">View Stream</a>
      <img :src="thumbnail"/>
    <!-- <button @click="handleDelete"> Delete </button> -->
  </section>
</template>

<script>
export default {
  props: {
    url: String,
    thumbnail: String,
    favorite: Object
  }
};
</script>

<style scoped>

</style>