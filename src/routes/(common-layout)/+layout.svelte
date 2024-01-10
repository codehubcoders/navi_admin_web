<script>
	import Sidebar from '/src/lib/components/sidebar/Sidebar.svelte';
</script>
<main class="container_layout">
	<Sidebar />
	<section class="container-main">
			<slot />
	</section>

</main>
