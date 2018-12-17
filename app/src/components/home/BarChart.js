// Credit to https://github.com/apertureless/vue-chartjs/blob/develop/src/examples/BarExample.js

import { Bar } from './BaseCharts';

export default {
  extends: Bar,
  mounted() {
    this.renderChart({
      labels: ['Ninja', 'DrDisrespect', 'Tyler1', 'TimTheTatMan', 'LIRIK', 'Iceposideon', 'Summit1G', 'JoshOG', 'SquishyMuffins', 'Kronovi', 'tarik', 'Stewie2k'],
      datasets: [
        {
          label: 'Viewers',
          backgroundColor: '#f87979',
          data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
        },
        {
          label: 'Community',
          backgroundColor: '#000000',
          data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
        },
      ]
    }, { responsive: true, maintainAspectRatio: false });
  }
};