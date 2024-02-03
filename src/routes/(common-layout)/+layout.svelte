<script>
	import DefaultDrawer from "./../../lib/components/customComponents/modal/DefaultDrawer.svelte";
	import Replaytxt from "./../../lib/components/globalComponents/Replaytxt.svelte";
	import Sidebar from "$lib/components/sidebar/Sidebar.svelte";

	import Icon from "@iconify/svelte";

	let showDrawer = false;
	const toggleDrawer = () => {
		showDrawer = !showDrawer;
	};
</script>

<main class="container_layout">
	<nav>
		<Sidebar />
	</nav>
	
	<section class="container-main">
		<Replaytxt />
		<button on:click={toggleDrawer} class="drawer-btn">
			<Icon icon="ic:sharp-table-rows" width="30" />
		</button>
	
		<slot />
	</section>
	<DefaultDrawer {showDrawer} on:click={toggleDrawer} />
	<!-- <sl-drawer class="drawer menu" bind:this={drawer}>
		<SidebarMobile />
	</sl-drawer> -->
</main>

<style lang="scss">
	@import "src/lib/scss/style.scss";

	.drawer-btn {
		display: none;
		background-color: #F8FAFB;
		padding: 20px 0 0px 20px;
		@media screen and (max-width: 960px) {
			display: block;
		}
	}
</style>
