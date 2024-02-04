<script>
	// import { Bar } from 'svelte-chartjs';
    import { data, option } from './data/barChart.js';
    import Chart from "chart.js/auto";
  import { onMount } from "svelte";

  export let barChart=""
//  export let barChart2
  onMount(() => {

    const ctx = document.getElementById("barChart").getContext("2d");
    // const ctx2 = document.getElementById("barChart2").getContext("2d");
    var barChart = Chart.getChart("barChart");
    // var barChart2 = Chart.getChart("barChart2");
    if(barChart){
      barChart.destroy();
    }

    // if(barChart2){
    //   barChart2.destroy();
    // }

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

  
  </script>
  <!-- {#if barChart} -->
  <canvas id="barChart" />
  <!-- {/if}
  {#if barChart2}
  <canvas id="barChart2" /> -->
  <!-- {/if} -->
  <!-- <Bar {data} options={{ responsive: true }}  /> -->
  