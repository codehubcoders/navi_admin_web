<script>
	import { Bar } from 'svelte-chartjs';
    import { data } from '../chart/data/useMonth.js';
  
    import {
      Chart,

    
      BarElement,
      CategoryScale,
      LinearScale,
    } from 'chart.js';
  
    Chart.register(

    
      BarElement,
      CategoryScale,
      LinearScale,
    );
  
  </script>
  
  <Bar {data} options={{ responsive: true }}  />
  