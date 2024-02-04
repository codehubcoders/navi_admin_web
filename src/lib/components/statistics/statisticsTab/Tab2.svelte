<script>
  import AlarmCard from "../../globalComponents/AlarmCard.svelte";
  import CicleProgress from "../../globalComponents/CicleProgress.svelte";
  import ColumBox from "../../globalComponents/ColumBox.svelte";
  let columnList = [
    { left: "혈압", right: "70/120 ", last: "mmHg" },
    { left: "맥박", right: 68, last: "BPM" },
    { left: "산소포화도", right: "98%", last: "ppm" },
  ];
</script>

<div class="tab-content">
  <AlarmCard title="약상자 현황">
    <div class="top">
      <CicleProgress percentage="72" sub="%" title="건강 사용률" />
      <div class="count">
        <p class="title">평균 걸음수</p>
        <p>15,402<span></span></p>
      </div>
      <div class="count">
        <p class="title">평균 걸음거리</p>
        <p>3.2<span>Km</span></p>
      </div>
      <ColumBox {columnList} />
    </div>
  </AlarmCard>

  <!-- <div class="card-main">
    <div class="header">
      <p>평균 걸음</p>
      <button><Icon icon="ep:more-filled" color="#a9abad" /></button>
    </div>
    <div class="contents">
      <div class="item t-right">
        <div class="item-top">평균 걸음수</div>
        <div class="item-num yellow mt-20">2032</div>
      </div>

      <div class="item t-right">
        <div class="item-top">평균 걸음걸이</div>
        <div class="item-num red mt-20">
          3.2<span>km</span>
        </div>
      </div>
    </div>
  </div>
  <div class="card-main">
    <div class="header">
      <p>평균 건강상태</p>
      <button><Icon icon="ep:more-filled" color="#a9abad" /></button>
    </div>
    <div class="contents">
      <div class="item t-right">
        <div class="item-top">혈압</div>
        <div class="item-num primary-color mt-20">70/120</div>
      </div>
      <div class="item t-right">
        <div class="item-top">산소포화도</div>
        <div class="item-num primary-color mt-20">98</div>
      </div>

      <div class="item t-right">
        <div class="item-top">심박수</div>
        <div class="item-num primary-color mt-20">68</div>
      </div>
    </div>
  </div> -->
</div>

<style lang="scss">
        @import 'src/lib/scss/style.scss';
  .tab-content {
    .top {
      padding: 20px;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      gap: 30px;
      .count {
        background-color: white;
        border-radius: 8px;
        padding: 15px 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .title {
          font-size: 14px;
          font-weight: 500;
          color: #333;
          text-align: left;
        }
        p {
          text-align: center;
          font-size: 64px;
          color: #001E91;
          font-weight: 500;
          span {
            font-size: 20px;
            color: #A9ABAD;
          }
        }
      }
      @media (max-width: 960px) {
        grid-template-columns: 1fr 1fr;
      }
      @media (max-width: 540px) {
        grid-template-columns: 1fr;
      }
    }
    // display: grid;
    // grid-template-columns: 1fr 1fr;
    // gap: 30px;
    // @media (max-width: 960px) {
    //   grid-template-columns: 1fr;
    // }
  }

  .bottom {
    height: 180px;
    padding: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 30px;
    .count {
      background-color: white;
      border-radius: 8px;
      padding: 15px 20px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .title {
        font-size: 14px;
        font-weight: 500;
        color: #333;
        text-align: left;
      }
      p {
        text-align: center;
        font-size: 72px;
        color: #001E91;
        font-weight: 500;
       
        span {
          font-size: 20px;
          color: #A9ABAD;
        }
      }
      @media (max-width: 960px) {
        grid-template-columns: 1fr 1fr;
      }
      @media (max-width: 540px) {
        grid-template-columns: 1fr;
      }
    }
  }
</style>
