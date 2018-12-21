// Credit to https://github.com/apertureless/vue-chartjs/blob/develop/src/examples/BarExample.js

<script>
import { Bar } from './BaseCharts';
export default {
  props: {
    labels: Array,
    viewerCounts: Array
  },
  
  extends: Bar, 
  mounted() {
    this.renderChart({
      labels: this.labels,
      datasets: [
        {
          label: 'Viewers',
          backgroundColor: '#B19ED6',
          data: this.viewerCounts
        },
      ]
    }, { responsive: true, maintainAspectRatio: false });
  }
};
</script>