<script>
  export let headerText;
  export let headerTextRight;
  let expanded = true
  export let button;
</script>

<div class="collapsible">
  <h3>
      <button class="expand" aria-expanded={expanded} on:click={() => expanded = !expanded}>
<div class="p"></div>
       <p> {headerText} </p>
      {#if headerTextRight}
      <p>{headerTextRight}</p>
      {/if} 
      {#if button}
    <button class="btn-detail-gray">상세보기</button>
      {/if} 

  <svg viewBox="0 0 20 20" fill="none" >
   <path class="vert"  d="m7 10l5 5l5-5" stroke="#898D90" stroke-width="2"/>
    <path class="vert2" d="m17 14l-5-5m0 0l-5 5" stroke="#898D90" stroke-width="2"/>
  </svg>

      </button>
  </h3>
  
  <div class='contents' hidden={!expanded}>
      <slot></slot>
  </div>
</div>

<style lang="scss">
    @import 'src/lib/scss/style.scss';

h3 {
  font-weight: 500;
  font-size: 14px;
}

.expand{
  background-color: #EBEBEB;
  color: var(--gray-darkest, #282828);
  display: flex;
  justify-content: space-between;
  align-items:center;
  width: 100%;
  border: none;
  /* margin: 0; */
  height: 40px;
  padding: 0px 20px;
  font-size: 16px;
  border-radius:8px;
}

// .expand[aria-expanded="true"] {
//   /* border-bottom: 1px solid var(--gray-light, #eee); */
// }

.expand[aria-expanded="true"] .vert {
      display: none;
  }
  .expand[aria-expanded="false"] .vert2 {

    display: none;
  }



  .expand svg {
      height: 1em;
      width: 1em;
      color: #898D90;
  }
</style>