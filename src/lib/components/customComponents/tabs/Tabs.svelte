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
{#each items as item}
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
    flex-wrap: wrap;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
    padding-top: 30px;
  }
  li {
    margin-bottom: -1px;
  }

  li .tab-label {
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
    display: block;
    padding: 0.6rem 0rem;
    width: 140px;
    background: white;
    font-size: 14px;
    color: #757779;
    font-weight: 400;
  }

  li.active > .tab-label {
    color: #fff;
    background-color: $primary-color;
    border-color: #dee2e6 #dee2e6 #fff;
    font-weight: 500;
  }

  .gray {
    background: #F5F5F5;
  }
</style>
