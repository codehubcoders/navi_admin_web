<script>
  export let tabItems = [];
  export let activeTabValue = 1;

  const handleClick = (tabValue) => () => (activeTabValue = tabValue);
</script>

<ul>
<div class="label">
  {#each tabItems as item}
  <li class={activeTabValue === item.value ? "active" : ""}>
    <button class="tab-label" on:click={handleClick(item.value)}
      >{item.label}</button
    >
  </li>
{/each}
</div>
<slot name="button"></slot>
  <!-- <button on:click class="btn-primary">통계상세보기</button> -->
</ul>
{#each tabItems as item}
  {#if activeTabValue == item.value}
    <div class="box">
      <svelte:component this={item.component} />
    </div>
  {/if}
{/each}

<style lang="scss">
  @import "../../../scss/style.scss";
  .box {
    padding-top: 20px;
    border-radius: 0 0 0.5rem 0.5rem;
    border-top: 0;
  }
  ul {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
    border-bottom: 1px solid #C5C7C8;
    // padding-top: 30px;
    .label{
      display: flex;
    }
  }
  li {
    margin-bottom: -1px;
  }

  li .tab-label {
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
    border: 1px solid #C5C7C8;
    display: block;
    padding: 0.3rem 1rem;
    // width: 140px;
    background-color: #E1E3E4;
    font-size: 12px;
    color: #fff;
    font-weight: 400;
  }

  li.active > .tab-label {
    color: #444748;
    background-color: white;
    font-weight: 400;
    // border: 1px solid #C5C7C8;
  }

</style>
