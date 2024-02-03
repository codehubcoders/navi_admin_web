<script>
  import { onMount } from "svelte";
  var data = [28,72 ];
  var myColor = ["#4065C5","#CB4727", ];
    var labels = ["28", "72" ];
    var labelName =  ["남","여"];
  onMount(async () => {
    var canvas = document.getElementById("gender");
    var ctx = canvas.getContext("2d");
    var lastend = 0;
    var myTotal = 0;

    for (var e = 0; e < data.length; e++) {
      myTotal += data[e];
    }

    // make the chart 10 px smaller to fit on canvas
    var off = 10;
    var w = (canvas.width - off) / 2;
    var h = (canvas.height - off) / 2;
    for (var i = 0; i < data.length; i++) {
      ctx.fillStyle = myColor[i];
      ctx.strokeStyle = "white";
      ctx.lineWidth = 0;
      ctx.beginPath();
      ctx.moveTo(w, h);
      var len = (data[i] / myTotal) * 2 * Math.PI;
      var r = h - off / 2;
      ctx.arc(w, h, r, lastend, lastend + len, false);
      ctx.lineTo(w, h);
      ctx.fill();
      ctx.stroke();
      ctx.fillStyle = "white";
      ctx.font = "10px Arial";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      var mid = lastend + len / 2;
      ctx.fillText(
        labels[i] + " %",
        w + Math.cos(mid) * (r / 2),
        h + Math.sin(mid) * (r / 2)
      );
      lastend += Math.PI * 2 * (data[i] / myTotal);
    }
  });
</script>


<p class="fw-600">남/여 비율</p>

<div class="graph">
  <canvas id="gender" width="120" height="120" />
  <div class="mt-10">
    {#each labelName as item, index}
      <p><span style="color:{myColor[index]}">● </span>{item}</p>
    {/each}
  </div>
</div>

<style lang="scss">
  @import "../../../scss/style.scss";
  .graph {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    p {
      font-size: 9px;
      line-height: 1.5em;
    }
  }
</style>
