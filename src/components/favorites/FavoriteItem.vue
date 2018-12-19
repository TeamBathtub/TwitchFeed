<template>
  <section>
    {{favorite.streamer}}
    <button @click="handleDelete"> Delete </button>
  </section>
</template>

<script>
export default {
  props: {
    favorite: Object
  }
};
</script>

<style>

</style>
