<template>
<section>
    <ul>
      <li>
      {{favorite.user_name}}
      </li>
    </ul>
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
