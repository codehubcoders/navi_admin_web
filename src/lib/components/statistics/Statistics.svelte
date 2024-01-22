<script>
	import Tabs from './../customComponents/tabs/Tabs.svelte';
import TopRadioBox from "./TopRadioBox.svelte";
import CardList from './CardList.svelte'
import UseMonth from "./UseMonth.svelte";
import Tab1 from './statisticsTab/Tab1.svelte'
import Tab2 from './statisticsTab/Tab2.svelte'
import Tab3 from './statisticsTab/Tab3.svelte'
  let items = [
    { label: "복약",
		 value: 1,
		 component: Tab1
		},
    { label: "건강",
		 value: 2,
		 component: Tab2
		},
    { label: "사용",
		 value: 3,
		 component: Tab3
		}
  ];
  
// import TabBotton from "src/lib/components/component/tabbotton/TabBotton.svelte"

</script>

<section class="statistics-main">
  <TopRadioBox />
  <Tabs {items} />
  <CardList />
  <UseMonth />
</section>


<style lang="scss">
      @import 'src/lib/scss/style.scss';
</style>