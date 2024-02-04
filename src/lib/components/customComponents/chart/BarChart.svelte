<script>
	// import { Bar } from 'svelte-chartjs';
    import { data, option } from './data/barChart.js';
    import Chart from "chart.js/auto";
  import { onMount } from "svelte";

//   export let barChart 
//  export let barChart2
  onMount(() => {

    const ctx = document.getElementById("barChart").getContext("2d");
    // const ctx2 = document.getElementById("barChart2").getContext("2d");
    var barChart = Chart.getChart("barChart");
    // var barChart2 = Chart.getChart("barChart2");
    if(barChart){
      lineCahrtSmall.destroy();
    }



    barChart = new Chart(ctx, {
      type: "bar",
      data: data,
      options:option
    });
  
    // barChart2 = new Chart(ctx2, {
    //   type: "bar",
    //   data: data,
    //   options:option
    // });


  });

    // import {
    //   Chart,

    
    //   BarElement,
    //   CategoryScale,
    //   LinearScale,
    // } from 'chart.js';
  
    // Chart.register(

    
    //   BarElement,
    //   CategoryScale,
    //   LinearScale,
    // );
  
  </script>
  
  <canvas id="barChart" />
  <!-- <Bar {data} options={{ responsive: true }}  /> -->
  