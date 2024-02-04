<script>
	import BarChart from './../../customComponents/chart/BarChart.svelte';
  import SelectBox from "./../../customComponents/selectbox/SelectBox.svelte";
  import LineChart3 from "./../../customComponents/chart/LineChart3.svelte";
  import Icon from "@iconify/svelte";
  import AlarmCard from "../../globalComponents/AlarmCard.svelte";
  // import BarChart from "../../customComponents/chart/BarChart.svelte";
  import MultiLineChart2 from "../../customComponents/chart/MultiLineChart2.svelte";
  import BarChartDash from '../../customComponents/chart/BarChartDash.svelte';
  var myColor = ["#5E72E4", "#f5365c"];
  var labelName = ["본인", "보호자"];
  let items = [
    { title: "서울", value: 1 },
    { title: "경기", value: 2 },
    { title: "대전", value: 3 },
  ];
  let serviceList = [
    "약상자",
    "게임",
    "건강",
    "영상",
    "문화",
    "전화",
    "소식",
    "일정",
    "사진",
  ];
</script>

<div class="tab-content">
  <AlarmCard title="모바일앱 연동 현황">
    <div class="chart-box">
      <div class="w-box">
        <div class="header">
          <p>연동률</p>
          <div class="d-f">
            {#each labelName as item, index}
              <p class="subLabel mr-10">
                <span style="color:{myColor[index]}">● </span>{item}
              </p>
            {/each}
          </div>

          <button class="pr-15"
            ><Icon icon="heroicons-outline:save" /> 그래프 저장</button
          >
        </div>
        <div class="chart">
          <MultiLineChart2 multiLineChart />
        </div>
      </div>
    </div></AlarmCard
  >
  <AlarmCard title="사용현황">
    <div class="chart-box grid">
      <div class="w-box">
        <div class="header">
          <p>실시간 이용률</p>
          <button class="pr-15"
            ><Icon icon="heroicons-outline:save" /> 그래프 저장</button
          >
        </div>
        <div class="selected-box pb-10">
          <SelectBox {items} placeholder="전체" small />
        </div>

        <div class="chart">
          <LineChart3 lineCahrtSmall />
        </div>
      </div>

      <div class="w-box">
        <div class="header">
          <p>사용률 전원 ON</p>
          <button class="pr-15"
            ><Icon icon="heroicons-outline:save" /> 그래프 저장</button
          >
        </div>
        <div class="selected-box pb-10">
          <SelectBox {items} placeholder="전체" small />
        </div>
        <div class="chart">
          <LineChart3 lineCahrtSmall2 />
        </div>
      </div>
    </div>
  </AlarmCard>
</div>
<div class="bottom">
  <AlarmCard title="서비스별 사용 현황">
    <div class="chart-box">
    {#each serviceList as item, index}
    
        <div class="w-box">
          <div class="header">
            <p>{item}</p>
            <button class="pr-15"
              ><Icon icon="heroicons-outline:save" /> 그래프 저장</button
            >
          </div>
          <div class="chart">
            <BarChartDash barChart />
            <!-- <BarChartDash barChart2 /> -->
          <!-- <BarChart /> -->
          </div>
        </div>
    
    {/each}
  </div>
  </AlarmCard>
</div>

<style lang="scss">
  @import "src/lib/scss/style.scss";
  .tab-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
    @media (max-width: 1300px) {
      grid-template-columns: 1fr 2fr;
    }
    @media (max-width: 960px) {
      grid-template-columns: 1fr;
    }
  }
  .chart-box {
    padding: 15px 20px;
    .w-box {
      background-color: white;
      border-radius: 8px;
      padding: 15px 10px;

      .header {
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;
        align-items: center;
        .subLabel {
          color: #A9ABAD;
          font-size: 8px;
        }
        p {
          font-size: 14px;
          font-weight: 500;
        }
        button {
          font-size: 10px;
        }
      }
      .selected-box {
        text-align: right;
      }
      .chart {
        width: 100%;
        // height: 100%;
      }
    }
  }
  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    @media (max-width: 540px) {
      grid-template-columns: 1fr;
    }
  }

  .bottom {
    .chart-box {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 15px;
      @media (max-width: 960px) {
      grid-template-columns: 1fr 1fr;
    }
    @media (max-width: 540px) {
      grid-template-columns: 1fr;
    }
    }
    
  }
</style>
