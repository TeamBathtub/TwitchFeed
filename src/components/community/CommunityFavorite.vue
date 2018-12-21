<template>
<section>
      <li>
      {{favorite.user_name}}
      </li>
</section>
</template>

<script>
export default {
  props: {
    favorite: Object
  },
  created() {
    console.log(this.favorite);
  }
};
</script>

<style scoped>
li {
  background-color: rgba(177, 158, 214, 0.2);
  box-shadow: 1pt 1pt 1pt black;
  text-align: center;
  width: 20vw;
}
</style>
