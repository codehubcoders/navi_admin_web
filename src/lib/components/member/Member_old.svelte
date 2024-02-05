<script>
	import SearchTableMember from './../customComponents/table/SearchTableMember.svelte';
import SearchTable from '../customComponents/table/searchTable.svelte';


	import MemberTop from './MemberTop.svelte';

  
</script>

<section class="memeber">
  <MemberTop />

  <SearchTable  />
  <SearchTableMember />
</section>

<style lang="scss">
        @import 'src/lib/scss/style.scss';
</style>
