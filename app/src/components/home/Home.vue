<template>
  <div>
      <BarChart/>
      <div v-if="streams"> {{ streams }} </div>
  </div>
</template>

<script>
import BarChart from './BarChart';
import api from '../../services/api';
export default {
  data() {
    return {
      streams: null
    };
  },
  components: {
    BarChart
  },
  created() {
    api.getStreamers()
      .then(response => this.streams = response);
  }
};
</script>

<style>

</style>
