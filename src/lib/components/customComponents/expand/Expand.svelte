<script>
    // based on suggestions from:
    // Inclusive Components by Heydon Pickering https://inclusive-components.design/collapsible-sections/
    export let headerText;

    let expanded = false
</script>

<div class="collapsible">
    <h3>
        <button class="expand" aria-expanded={expanded} on:click={() => expanded = !expanded}>{headerText}
<!-- <svg viewBox="0 0 20 20" fill="none" >
<path class="vert" d="M10 1V19" stroke="black" stroke-width="2"/>
<path d="M1 10L19 10" stroke="black" stroke-width="2"/>
</svg> -->
        </button>
    </h3>
    
    <div class='contents' hidden={!expanded}>
        <slot></slot>
    </div>
</div>

<style lang="css">

	
	h3 {
		font-weight: 500;
    font-size: 14px;
	}
	
  .expand{
    background-color: var(--background, #fff);
    color: var(--gray-darkest, #282828);
    display: flex;
		justify-content: space-between;
    align-items:center;
    width: 100%;
		border: none;
		/* margin: 0; */
    height: 50px;
    padding: 0px 20px;
        /* margin-bottom: 15px; */
		/* padding: 18px 20px; */
    border-radius:8px;
  }

 .expand[aria-expanded="true"] {
    /* border-bottom: 1px solid var(--gray-light, #eee); */
  }

  .expand[aria-expanded="true"] .vert {
        display: none;
    }

.expand:focus svg{
        outline: 2px solid;
    }

.expand [aria-expanded="true"] rect {
        fill: currentColor;
    }

    .expand svg {
        height: 0.7em;
				width: 0.7em;
    }
</style>