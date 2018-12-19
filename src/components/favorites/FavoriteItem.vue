<template>
  <section>
    <li>
      {{favorite.userName}}
    </li>
    <!-- <button @click="handleDelete"> Delete </button> -->
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
