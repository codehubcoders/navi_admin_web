<script>
	import LocalMemberTop from './LocalMemberTop.svelte';
	// import TabsMember from './../customComponents/tabs/TabsMember.svelte';
import SearchTableLocalMember from './SearchTableLocalMember.svelte';
  // export let activeTabValue = 1;
  // let items = [
  //   { label: "나비회원(1234)", value: 1, component: SearchTable},
  //   { label: "모바일회원(123)", value: 2,  component: SearchTableMember},

  // ];
</script>

<section class="memeber">
  <LocalMemberTop />
  <SearchTableLocalMember />
<!-- <TabsMember {items} {activeTabValue}/> -->

  <!-- <SearchTableMember />  -->
</section>

<style lang="scss">
        @import 'src/lib/scss/style.scss';
</style>
