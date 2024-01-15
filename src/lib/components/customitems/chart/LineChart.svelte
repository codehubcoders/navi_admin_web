<script>
    import { Line } from 'svelte-chartjs';
    import { data } from './data/lineChart.js';
  
    import {
      Chart as ChartJS,
      Title,
      LineElement,
      LinearScale,
      PointElement,
    } from 'chart.js';
  
    ChartJS.register(
      Title,
      LineElement,
      LinearScale,
      PointElement,
    );
  </script>
  
  <Line {data} options={{ responsive: true }} />
  