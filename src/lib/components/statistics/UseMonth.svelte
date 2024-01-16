<script>

  import CicleBar from "./../customComponents/progressbar/CicleBar.svelte";
  import Icon from "@iconify/svelte";
  // import Chart from "../customitems/chart/StatustucsChart.svelte";  export let activeTabValue = 1;
  import TableTabs from "../customComponents/tabs/TableTabs.svelte";
  import Tab1 from "./useTabs/Tab1.svelte";
  import Tab2 from "./useTabs/Tab2.svelte";
  import Tab3 from "./useTabs/Tab3.svelte";
   
  let barPercentage = 72;
  let activeTabValue = 1;
  let items = [
    { label: "전일", value: 1, component: Tab1 },
    { label: "전주", value: 2, component: Tab2 },
    { label: "사용", value: 3, component: Tab3 },
  ];

  	

</script>

<div class="use-month">
  <div class="card-main">
    <div class="header">
      <p>월별 사용 현황</p>
      <TableTabs {items} />
      <button
        >밴드<Icon icon="iconamoon:arrow-down-2-fill" color="#d9d9d9" /></button
      >
      <!-- <button><Icon icon="heroicons-outline:save" />그래프 저장</button> -->
    </div>
    <div class="contents">
      {#if activeTabValue == 1}
        <Tab1 />
      {:else if activeTabValue == 2}
        <Tab2 />
      {:else}
        <Tab3 />
      {/if}
    </div>
  </div>
  <div class="card-main">
    <div class="header">
      <p>월별 사용 현황</p>

      <button><Icon icon="ep:more-filled" color="#d9d9d9" /></button>
      <!-- <button><Icon icon="heroicons-outline:save" />그래프 저장</button> -->
    </div>
    <div class="contents_right">
      <div class="item">
        <div class="item__top">
          <p>Mobile APP 연동</p>
          <button class="btn-gray">상세보기</button>
        </div>
        <div class="item__body"><CicleBar />
        <div class="w-box"></div></div>
      </div>
      <div class="item">
        <div class="item__top">
          <p>사용율</p>
          <button class="btn-gray">상세보기</button>
        </div>
        <div class="item__right">
          <div class="bar"> <div class="result" style=" height: {barPercentage}%"> <p>{barPercentage}<span>%</span></p></div></div>
        
        </div>
      </div>
    </div>
  </div>

</div>



<style lang="scss">
  button {
    background: white;
    font-size: 13px;
    font-weight: 400;
  }

  .use-month {
    margin-top: 30px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;

    @media (max-width: 960px) {
      grid-template-columns: 1fr;
    }
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 20px !important;
    button {
      background: white;
      display: flex;
      justify-content: space-between;
      gap: 2px;
    }
  }
  .contents {
    background: white;
    padding: 15px;
    border-radius: 0 0px 12px 12px;

  }
  .contents_right {
    background: #F5F5F5;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px;
    padding: 15px;
    
  }
  .item {
    background: white;
    border-radius: 12px;
    font-size: 14px;
    font-weight: 500;
    padding: 15px 15px 5px 15px;
    height: 100%;
    &__top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
      .btn-gray {
        background-color: #EFF1F2;
        // color:#;
        padding: 10px;
        font-size: 12px;
      }
    }
    &__body {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      .w-box{
      bottom: 0px;
      position: absolute;
      width: 85%;
      height: 15px;
      background-color: white;
      border-top:1px solid #EFF1F2 ;
    }
    }
    &__right{
      height: 60%;
      display: flex;
      justify-content: center;
      align-items: center;
      .bar{
        background-color:#F5F5F5;
        width: 130px;
        height: 100%;
        position: relative;
        .result{
          position: absolute;
          bottom: 0;
         display: flex;
         justify-content: center;
         align-items:flex-end;
          width: 100%;
         background-color: #97A5FF; 

         p{
          font-size: 3.4em;
         color: white;
          span{
          font-size: 20px;
          margin-bottom: 0;
         }
         }
      
        }
      }
    }
  }
</style>
