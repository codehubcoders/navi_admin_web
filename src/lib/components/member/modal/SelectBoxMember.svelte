<script>
	export let selected;
	export let placeholder = "";
	export let items = [];

	// export let long;
	// export let small;
</script>

<div class="selectd-box">
	<select bind:value={selected}>
		{#if placeholder}
			<option  disabled selected>{placeholder}</option>
		{/if}
		{#each items as item}
			<option>{item.title}</option>
		{/each}
	</select>
</div>

<style lang="scss">
	@import "src/lib/scss/style.scss";
	.selectd-box {
		

		select {
			color: #2E3132;
			font-size: 12px;
			// background-color: #F5F5F5;
			border: 1px solid #E1E3E4;
			padding: 8px 8px;
			min-width: 140px;
			height: 30px;
			border-radius: 4px;
			-webkit-appearance: none;
			-moz-appearance: none;
			// border: none;
			background-image: url("data:image/svg+xml;utf8,<svg fill='gray' height='20' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
			background-repeat: no-repeat;
			background-position-x: 100%;

			background-position-y: 5px;
			option.disabled:disabled {
				font-size: 12px;
				color: #E1E3E4;
				font-weight: 300;
			}
		}
	}
	select option[disabled]{
    color: #ccc;
}
select when disabled option is selected {
    color: #ccc
}
</style>
