<script>
	import Sidebar from '/src/lib/components/sidebar/Sidebar.svelte';
	import SidebarMobile from '/src/lib/components/sidebar/Sidebarmobile.svelte';
	import Replaytxt from '/src/lib/components/dashboard/Replaytxt.svelte';
	import Icon from '@iconify/svelte';
	let drawer;
	
	const openDrawer = ()=>{

		drawer.addEventListener('sl-hide', (event) => console.log('hide'));
		drawer.show();

	};
	
</script>

<sl-drawer class="drawer menu" bind:this={drawer}>
<SidebarMobile />
</sl-drawer>


<svelte:head>

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.0.0-beta.34/dist/themes/base.css">
<script type="module" src="https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.0.0-beta.34/dist/shoelace.js"></script>

</svelte:head>

<main class="container_layout">
	<Sidebar />
<section class="container-main">
	<button on:click={openDrawer} class="drawer-btn">
		<Icon icon="ic:sharp-table-rows"width="30" />
	</button>
	<Replaytxt />
			<slot />
	</section>
	
</main>
<style lang="scss">
.drawer-btn{
	display:none;
	background-color:#F8FAFB;
	padding: 20px 0 0px 20px;
	@media (max-width: 960px) {
      display:block;
    }
}
</style>