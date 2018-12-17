// Credit to https://github.com/apertureless/vue-chartjs/blob/develop/src/examples/BarExample.js

<script>
import { Bar } from './BaseCharts';

export default {
  props: {
    streams: Array
  },
  extends: Bar,
  mounted() {
    this.renderChart({
      labels: ['Ninja', 'DrDisrespect'],
      datasets: [
        {
          label: 'Viewers',
          backgroundColor: '#f87979',
          data: [40, 20]
        },
      ]
    }, { responsive: true, maintainAspectRatio: false });
  }
};
</script>

<style>

</style>
