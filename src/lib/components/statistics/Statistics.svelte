<script>
  import Tab1Detail from "./statisticsTab/Tab1Detail.svelte";
  import Tabs from "./../customComponents/tabs/Tabs.svelte";
  import TopRadioBox from "./TopRadioBox.svelte";
  // import CardList from './CardList.svelte'
  import UseMonth from "./UseMonth.svelte";
  import Tab1 from "./statisticsTab/Tab1.svelte";
  import Tab2 from "./statisticsTab/Tab2.svelte";
  import Tab3 from "./statisticsTab/Tab3.svelte";
  import Tab2Detail from "./statisticsTab/Tab2Detail.svelte";
  import Tab3Detail from "./statisticsTab/Tab3Detail.svelte";
  let items = [
    { label: "복약(123)", value: 1 },
    { label: "건강", value: 2 },
    { label: "사용", value: 3 },
  ];
  let detailBtn = true;
  let detailBtn2 = true;
  let detailBtn3 = true;
  function detailBtnHandle() {
    detailBtn = !detailBtn;
  }
  // import TabBotton from "src/lib/components/component/tabbotton/TabBotton.svelte"
</script>

<section class="statistics-main">
  <TopRadioBox />
  <Tabs {items}>
    <div slot="button">
      <button on:click={detailBtnHandle} class="btn-primary">
        {#if detailBtn}
          통계상세보기
        {:else}
          현황보기
        {/if}</button
      >
    </div>
    <div slot="tab1">
      {#if detailBtn}
        <Tab1 />
      {:else}
        <Tab1Detail />
      {/if}
    </div>
    <div slot="tab2">
      {#if detailBtn}
        <Tab2 />
      {:else}
        <Tab2Detail />
      {/if}
    </div>
    <div slot="tab3">
      {#if detailBtn}
        <Tab3 />
      {:else}
        <Tab3Detail />
      {/if}
    </div>
  </Tabs>
  <!-- <CardList /> -->
  <!-- <UseMonth /> -->
</section>

<style lang="scss">
  @import "src/lib/scss/style.scss";
</style>
