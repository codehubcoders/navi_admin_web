<script>
  export let percentage = 0;
  export let sub = "";
  export let title = "";
  export let titleNum =  0;
  export let button;
</script>

<div class="progressbar">
  <div class="progressbar__header">
    <p class="title">{title}
      {#if titleNum}
      ({titleNum})
      {/if}
     </p>
     {#if button}
    <button class="btn-gray">상세보기</button>
    {/if}
  </div>
  <div class="progressbar__body">
    <div
    role="progressbar"
    aria-valuenow="0"
    aria-valuemin="0"
    aria-valuemax="100"
    style="--value:{percentage}"
  >
    <p class="num">{percentage}<span class="txt-per">{sub}</span></p>
  </div>
  <div class="w-box"></div>
  </div>

</div>

<style lang="scss">
        @import 'src/lib/scss/style.scss';
  @keyframes growProgressBar {
    0%,
    33% {
      --pgPercentage: 0;
    }
    100% {
      --pgPercentage: var(--value);
    }
  }
  @property --pgPercentage {
    syntax: "<number>";
    inherits: false;
    initial-value: 0;
  }
  .progressbar {
    background-color: white;
    border-radius: 8px;
    padding: 15px 20px;

    div[role="progressbar"] {
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

div::after {
  content: '';
  position: absolute;
  height: calc(var(--size) / 2 + 5px );
  width: calc(10 / 100 * var(--size) + 20px);
  top: 50%;
  left: 50%;
  transform: translateX(-50%) rotate(calc(var(--pgPercentage) / 100 * 360deg));
  transform-origin:top;
  animation: growProgressBar 3s 1 forwards;
 
  background-image: radial-gradient(var(--fg) 0 50%, transparent 50% 100%);
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: 15px 15px;
}
    .num {
      margin-top: 10px;
      color: #001E91;
    }
    .txt-per {
      color: #A9ABAD;
      font-size: 20px;
      margin-left: 5px;
    }

    &__header{
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
      .title{
        font-size: 14px;
        font-weight: 500;

      }
      .btn-gray{
        background-color: #EFF1F2;
        border-radius: 4px;
        padding:8px 10px;
        font-size: 12px;
      }
    }
    &__body{
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      .w-box{
       
      bottom: -5px;
      position: absolute;
      width: 85%;
      height: 20px;
      background-color: white;
      border-top:1px solid #EFF1F2 ;
    }
    }
    
  }
</style>
