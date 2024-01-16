<script>
  export let items = [];
  export let activeTabValue = 1;

  const handleClick = (tabValue) => () => (activeTabValue = tabValue);
</script>

<ul>
  {#each items as item}
    <li class={activeTabValue === item.value ? "active" : ""}>
      <button class="tab-label" on:click={handleClick(item.value)}
        >{item.label}</button
      >
    </li>
  {/each}
</ul>
<!-- {#each items as item}
  {#if activeTabValue == item.value}
      <svelte:component this={item.component} />

  {/if}
{/each} -->

<style lang="scss">
  @import "../../../scss/style.scss";

  
  ul {
    background: #EFF1F2;
    display: flex;
    height: fit-content;
    flex-wrap: wrap;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
    padding: 5px;
    border-radius: 6px;
    box-shadow: inset 3px 1px 10px 2px rgba(202, 202, 202, 0.4);
  }
  li {
    margin-bottom: -1px;
  }

  li .tab-label {
    display: block;
    padding: 0.2rem 0.6rem;
    background: #EFF1F2;
   
    font-size: 10px;
    font-weight: 400;
  }

  li.active > .tab-label {
    background-color:#fff;
    border-color: #dee2e6 #dee2e6 #fff;
    border-radius: 4px;
  }


</style>
