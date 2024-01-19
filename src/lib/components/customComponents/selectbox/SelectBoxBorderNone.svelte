<script>
	export let selected;
	export let placeholder = "";
	export let items = [];
	export let items2 = [];
	export let items3 = [];
</script>

<div class="selectd-box">
	<select bind:value={selected} class="selectd-box__header">
		{#if placeholder}
			<option disabled selected>{placeholder}</option>
		{/if}
		{#each items as item}
			<option>{item.title}</option>
		{/each}
		{#each items2 as item}
			<option>{item.title}</option>
		{/each}
		{#each items3 as item}
			<option>{item.title}</option>
		{/each}
	</select>
</div>

<style lang="scss">
	.selectd-box {
		// margin-right: 10px;

		select {
			border: none;
			color: #2E3132;
			font-size: 12px;
			background-color: none;
			padding: 6px 8px;
			width: 60px;
			-webkit-appearance: none;
			-moz-appearance: none;
			margin: 0px;
			background-image: url("data:image/svg+xml;utf8,<svg fill='gray' height='20' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
			background-repeat: no-repeat;
			background-position-x: 100%;
			background-position-y:3px;
			border-radius: 6px;
		}
	}
</style>
