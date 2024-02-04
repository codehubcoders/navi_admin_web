
<script>
	import { data, option } from './data/lineChart.js';
  import Chart from "chart.js/auto";
  import { onMount } from "svelte";
 export let lineChart 
 export let lineChart2 
 export let lineChart3
 export let lineChart4
 export let lineChart5
  onMount(() => {

    const ctx = document.getElementById("lineChart").getContext("2d");
    const ctx2 = document.getElementById("lineChart2").getContext("2d");
    const ctx3 = document.getElementById("lineChart3").getContext("2d");
    const ctx4 = document.getElementById("lineChart4").getContext("2d");
    var lineChart = Chart.getChart("lineChart");
    var lineChart2 = Chart.getChart("lineChart2");
    var lineChart3 = Chart.getChart("lineChart3");
    var lineChart4 = Chart.getChart("lineChart4");
    if(lineChart){
      lineChart.destroy();
    }

    if(lineChart2){
      lineChart2.destroy();
    }
    if(lineChart3){
      lineChart3.destroy();
    }
    if(lineChart4){
      lineChart4.destroy();
    }

    lineChart = new Chart(ctx, {
      type: "line",
      data: data,
      options:option
    });
  
    lineChart2 = new Chart(ctx2, {
      type: "line",
      data: data,
      options:option
    });
    lineChart3 = new Chart(ctx3, {
      type: "line",
      data: data,
      options:option
    });
    lineChart4 = new Chart(ctx4, {
      type: "line",
      data: data,
      options:option
    });

  });
</script>
{#if lineChart}
<canvas id="lineChart" />
{/if}

{#if lineChart2}
<canvas id="lineChart2" />
{/if}
{#if lineChart3}
<canvas id="lineChart3" />
{/if}

{#if lineChart4}
<canvas id="lineChart4" />
{/if}

