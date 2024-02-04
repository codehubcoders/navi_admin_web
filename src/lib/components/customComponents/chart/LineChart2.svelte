
<script>
	import { data, option } from './data/lineChart.js';
  import Chart from "chart.js/auto";
  import { onMount } from "svelte";
 export let lineChartMore 
 export let lineChartMore2 
  onMount(() => {

    const ctx = document.getElementById("lineChartMore").getContext("2d");
    const ctx2 = document.getElementById("lineChartMore2").getContext("2d");
    var lineChartMore = Chart.getChart("lineChartMore");
    var lineChartMore2 = Chart.getChart("lineChartMore2");
    if(lineChartMore){
      lineChartMore.destroy();
    }

    if(lineChartMore2){
      lineChartMore2.destroy();
    }


    lineChartMore = new Chart(ctx, {
      type: "line",
      data: data,
      options:option
    });
  
    lineChartMore2 = new Chart(ctx2, {
      type: "line",
      data: data,
      options:option
    });


  });
</script>
{#if lineChartMore}
<canvas id="lineChartMore" />
{/if}

{#if lineChartMore2}
<canvas id="lineChartMore2" />
{/if}
