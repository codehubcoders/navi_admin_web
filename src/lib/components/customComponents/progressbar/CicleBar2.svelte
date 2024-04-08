<script>
  let percentage = 70;
</script>
<div class="con">

  <div class="progressbar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="--value:{percentage}">

    <p>{percentage}<span class="txt-per">%</span></p>
    <div class="dot"></div> <!-- 점 추가 -->

  </div>
  
</div>

<style lang="scss">
@import 'src/lib/scss/style.scss';
.con{
  position: relative;
}
@keyframes growProgressBar {
  0%, 33% { --pgPercentage: 0; }
  100% { --pgPercentage: var(--value); }
}

@property --pgPercentage {
  syntax: '<number>';
  inherits: false;
  initial-value: 0;
}

.progressbar[role="progressbar"] {
  --size: 9rem;
  --fg: #5E72E4;
  --bg: #E1E3E4;
  --pgPercentage: var(--value);
  position: relative;
  animation: growProgressBar 3s 1 forwards;
  width: var(--size);
  height: var(--size);
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: 
    radial-gradient(closest-side, white 94%, transparent 0 99.9%, white 0),
    conic-gradient(from -180deg, var(--fg) calc(var(--pgPercentage) * 1%), var(--bg) 0)
    ;
    
  font-size: calc(var(--size) / 2.5);
  color: var(--fg);
}

.progressbar[role="progressbar"]::after {
  content: '';
  position: absolute;
  height: calc(var(--size) / 2 + 5px );
  width: calc(10 / 100 * var(--size) + 20px);
  top: 50%;
  left: 50%;
  transform: translateX(-50%) rotate(calc(var(--pgPercentage) / 100 * 360deg));
  transform-origin:top;
  animation: growProgressBar 3s 1 forwards;
  z-index: 1;
  background-image: radial-gradient(var(--fg) 0 50%, transparent 50% 100%);
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: 15px 15px;
}

p {
  color: #001E91;
  margin-top: 10px;
  position: absolute;
}

.txt-per {
  color: var(--bg);
  font-size: calc(var(--size) / 6);
  margin-left: 5px;
}
</style>