<template>
  <section>
    <div>
        <BarChart/>
        <div v-if="streams"> {{ streams }} </div>
    </div>
   </section>
</template>

<script>
import BarChart from './BarChart';
import api from '../../services/api';
export default {
  data() {
    return {
      streams: null,
      user: null
    };
  },
  components: {
    BarChart
  },
  created() {
    api.getTopStreamers()
      .then(response => this.streams = response);
  }
};
</script>

<style>

</style>