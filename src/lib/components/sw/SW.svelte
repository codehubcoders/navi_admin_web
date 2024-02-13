<script>
	import TabsMember from './../customComponents/tabs/TabsMember.svelte';
	import SwTop from './SwTop.svelte';
import Tab1 from './tabs/Tab1.svelte';
import Tab2 from './tabs/Tab2.svelte';
    export let activeTabValue = 1;
  let items = [
    { label: "업데이트관리", value: 1, component: Tab1},
    { label: "로그관리", value: 2,  component: Tab2},

  ];
</script>

<section class="sw">
    <SwTop />
<TabsMember {activeTabValue} {items}/>
</section>

<style lang="scss">
          @import 'src/lib/scss/style.scss';
    .sw__top {
  
    }
</style>
