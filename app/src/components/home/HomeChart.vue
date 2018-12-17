<script>
import { Bar } from 'vue-chartjs';

export default {
  extends: Bar,
  data: () => ({
    chartdata: {
      datacollection: {
        labels: ['January', 'February'],
        datasets: [
          {
            label: 'Data One',
            backgroundColor: '#000000',
            data: [40, 20]
          },
          {
            label: 'Data Two',
            backgroundColor: '#000000',
            data: [98, 28]
          }
        ]
      }
    },
    options: {
      responsive: true,
      maintainAspectRatio: true
    }
  }),
  mounted() {
    this.renderChart(this.datacollection, this.options);
  },
};
</script>

<style>

</style>
