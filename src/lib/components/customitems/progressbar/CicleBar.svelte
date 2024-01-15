<script>
let percentage = 23
</script>
<div class="progressbar"role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="--value:{percentage}">
  <p>{percentage}<span class="txt-per">%</span></p>
</div>


<style lang="scss">
@keyframes growProgressBar {
  0%, 33% { --pgPercentage: 0; }
  100% { --pgPercentage: var(--value); }
}

@property --pgPercentage {
  syntax: '<number>';
  inherits: false;
  initial-value: 0;
}

div[role="progressbar"] {
  --size: 9rem;
  --fg: #5E72E4;
  --bg: #E1E3E4;
  --pgPercentage: var(--value);
  animation: growProgressBar 3s 1 forwards;
  width: var(--size);
  height: var(--size);
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: 
    radial-gradient(closest-side, white 90%, transparent 0 99.9%, white 0),
    conic-gradient(var(--fg) calc(var(--pgPercentage) * 1%), var(--bg) 0)
    ;

  font-size: calc(var(--size) / 2.5);
  color: var(--fg);
  
}
p{  color: #001E91;

}
.txt-per{
    color: var(--bg);
    font-size: calc(var(--size) / 6);
    margin-left: 5px;
}


</style>