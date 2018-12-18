<template>
  
</template>

<script>
import api from '../../services/api.js';
export default {
  created() {
    api.getTop100();
  }
};
</script>

<style>

</style>
