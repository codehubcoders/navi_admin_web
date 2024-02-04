
<script>
	import { smallData, optionSmall } from './data/lineChart.js';
  import Chart from "chart.js/auto";
  import { onMount } from "svelte";
 export let lineCahrtSmall 
 export let lineCahrtSmall2 
  onMount(() => {

    const ctx = document.getElementById("lineCahrtSmall").getContext("2d");
    const ctx2 = document.getElementById("lineCahrtSmall2").getContext("2d");
    var lineCahrtSmall = Chart.getChart("lineCahrtSmall");
    var lineCahrtSmall2 = Chart.getChart("lineCahrtSmall2");
    if(lineCahrtSmall){
      lineCahrtSmall.destroy();
    }

    if(lineCahrtSmall2){
      lineCahrtSmall2.destroy();
    }


    lineCahrtSmall = new Chart(ctx, {
      type: "line",
      data: smallData,
      options:optionSmall
    });
  
    lineCahrtSmall2 = new Chart(ctx2, {
      type: "line",
      data: smallData,
      options:optionSmall
    });


  });
</script>
{#if lineCahrtSmall}
<div class="width"><canvas id="lineCahrtSmall" width="150" height="150" /></div>

{/if}

{#if lineCahrtSmall2}
<div class="width"><canvas id="lineCahrtSmall2"width="150" height="150" /></div>
{/if}

<style lang="scss">
  .width{
    width: 100%;
  }
</style>