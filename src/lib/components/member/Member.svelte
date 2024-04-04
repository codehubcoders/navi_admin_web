<script>
	import TabsMember from './../customComponents/tabs/TabsMember.svelte';
	import SearchTableMember from './table/SearchTableMember.svelte';
import SearchTable from './table/searchTable.svelte';


	import MemberTop from './MemberTop.svelte';
import SearchTableManage from './table/SearchTableManage.svelte';
  export let activeTabValue = 1;
  let items = [
    { label: "나비회원(1234)", value: 1, component: SearchTable},
    { label: "모바일회원(123)", value: 2,  component: SearchTableMember},
    { label: "관리이력", value: 3,  component: SearchTableManage},
  ];
</script>

<section class="memeber">
  <MemberTop />
<TabsMember {items} {activeTabValue}/>
  <!-- <SearchTable  />
  <SearchTableMember /> -->
</section>

<style lang="scss">
        @import 'src/lib/scss/style.scss';
</style>
