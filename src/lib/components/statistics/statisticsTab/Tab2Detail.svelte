<script>
	import LineChart2 from './../../customComponents/chart/LineChart2.svelte';
  import LineChart from "./../../customComponents/chart/LineChart.svelte";
  import Icon from "@iconify/svelte";
  import AlarmCard from "../../globalComponents/AlarmCard.svelte";


  
</script>

<div class="tab-content">

 
  <AlarmCard title="약상자 현황">
    <div class="chart-box">
      <div class="w-box">
        <div class="header">
          <p>건강 사용률</p>

          <button class="pr-15"
            ><Icon icon="heroicons-outline:save" /> 그래프 저장</button
          >
        </div>
        <div class="chart">
          <LineChart lineChart />
        </div>
      </div>
      <div class="w-box">
        <div class="header">
          <p>평균 걸음수</p>

          <button class="pr-15"
            ><Icon icon="heroicons-outline:save" /> 그래프 저장</button
          >
        </div>
        <div class="chart">
          <LineChart lineChart2 />
        </div>
      </div>
      <div class="w-box">
        <div class="header">
          <p>평균 걸음거리</p>

          <button class="pr-15"
            ><Icon icon="heroicons-outline:save" /> 그래프 저장</button
          >
        </div>
        <div class="chart">
          <LineChart lineChart3 />
        </div>
      </div>
      <div class="w-box">
        <div class="header">
          <p>혈압</p>

          <button class="pr-15"
            ><Icon icon="heroicons-outline:save" /> 그래프 저장</button
          >
        </div>
        <div class="chart">
          <LineChart lineChart4 />
        </div>
      </div>
      <div class="w-box">
        <div class="header">
          <p>맥박</p>

          <button class="pr-15"
            ><Icon icon="heroicons-outline:save" /> 그래프 저장</button
          >
        </div>
        <div class="chart">
          <LineChart2 lineChartMore />
        </div>
      </div>
      <div class="w-box">
        <div class="header">
          <p>산소포화도</p>

          <button class="pr-15"
            ><Icon icon="heroicons-outline:save" /> 그래프 저장</button
          >
        </div>
        <div class="chart">
          <LineChart2 lineChartMore2 />
        </div>
      </div>
    </div>
  </AlarmCard>
 
</div>

<style lang="scss">
  @import "src/lib/scss/style.scss";


  .chart-box {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    @media (max-width: 1300px) {
        grid-template-columns: 1fr 1fr;
      }
      @media (max-width: 540px) {
        grid-template-columns: 1fr;
      }
    gap: 15px;
    padding: 20px;
    .w-box {
      background-color: white;
      border-radius: 8px;
      padding: 10px;
      .header{
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;
        align-items: center;
        .subLabel{
          color:#A9ABAD;
          font-size: 8px;
        }
        p{
          font-size: 14px;
          font-weight: 500;
        }
        button{
          font-size: 10px;
        }
      }
      .chart{
        width: 100%;
        height: 100%;
      }
    }
  }

</style>
