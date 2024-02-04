
<script>
	import { multiData2, multiOption } from './data/lineChart.js';
  import Chart from "chart.js/auto";
  import { onMount } from "svelte";
 export let multiLineChart 
//  export let multiLineChart2 
  onMount(() => {

    const ctx = document.getElementById("multiLineChart").getContext("2d");
    // const ctx2 = document.getElementById("multiLineChart2").getContext("2d");
    var multiLineChart = Chart.getChart("multiLineChart");
    // var multiLineChart2 = Chart.getChart("multiLineChart2");
    if(multiLineChart){
      multiLineChart.destroy();
    }

    // if(multiLineChart2){
    //   multiLineChart2.destroy();
    // }
 
  
    multiLineChart = new Chart(ctx, {
      type: "line",
      data: multiData2,
      options:multiOption
    });
  
    // multiLineChart2 = new Chart(ctx2, {
    //   type: "line",
    //   data: multiData2,
    //   options:multiOption
    // });

  });
</script>
{#if multiLineChart}
<canvas id="multiLineChart" />
{/if}
<!-- {#if multiLineChart2}
<canvas id="multiLineChart2" />
{/if} -->
