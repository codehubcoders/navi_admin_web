<script>

  import AlarmCard from "../../globalComponents/AlarmCard.svelte";
  import CicleProgress from "../../globalComponents/CicleProgress.svelte";
  import ColumBox from "../../globalComponents/ColumBox.svelte";
 export  let  detailBtn = true;
  let columnList = [
    { left: "아침", right: 50, last: "%" },
    { left: "점심", right: 80, last: "%" },
    { left: "저녁", right: 60, last: "%" },
  ];
  let columnListSub = [
    { left: "3일 이상", right: 10, last: "명", sub: "지연복용 현황" },
    { left: "5일 이상", right: 5, last: "명", sub: "지연복용 현황" },
    { left: "10일 이상", right: 2, last: "명", sub: "지연복용 현황" },
  ];


</script>

<div class="tab-content">

<AlarmCard title="약상자 현황">
  <div class="top">
    <CicleProgress percentage="72" sub="%" title="복약순응도" />
    <CicleProgress percentage="72" sub="%" title="약상자 사용률" />
    <div class="count">
      <p class="title">약종류수</p>
      <p>3 <span>개</span></p>
    </div>
    <ColumBox {columnList} />
  </div>
</AlarmCard>
<div class="mt-20" />
<AlarmCard title="복용현황">
  <div class="bottom">
    <ColumBox {columnListSub} />
    <ColumBox {columnListSub} />
    <div class="count">
      <p class="title">과다복용 의심</p>
      <p>3 <span>명</span></p>
    </div>
  </div>
</AlarmCard>

 


  <!-- {#each tabCardList1 as item, index}s
    <div class="card-main">
      <div class="header">
        <p>{item.title}</p>
        <button><Icon icon="ep:more-filled" color="#a9abad" /></button>
      </div>
      <div class="contents">
        <div class="item">
          <div class="item-top">3일 이상</div>
          <div class="item-num yellow mt-20">
            {item.num1}<span>명</span>
          </div>
        </div>

        <div class="item">
          <div class="item-top">5일 이상</div>
          <div class="item-num orenge mt-20">
            {item.num2}<span>명</span>
          </div>
        </div>

        <div class="item">
          <div class="item-top">10일 이상</div>
          <div class="item-num red mt-20">
            {item.num3}<span>명</span>
          </div>
        </div>
      </div>
    </div>
  {/each} -->
</div>

<style lang="scss">
  @import "src/lib/scss/style.scss";
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
          font-size: 72px;
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
    // height: 180px;
    padding: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 30px;
    @media (max-width: 960px) {
        grid-template-columns: 1fr 1fr;
      }
      @media (max-width: 540px) {
        grid-template-columns: 1fr;
      }
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
  // .chart-box {
  //   display: grid;
  //   grid-template-columns: 1fr 1fr 1fr;
  //   @media (max-width: 1300px) {
  //       grid-template-columns: 1fr 1fr;
  //     }
  //     @media (max-width: 540px) {
  //       grid-template-columns: 1fr;
  //     }
  //   gap: 15px;
  //   padding: 20px;
  //   .w-box {
  //     background-color: white;
  //     border-radius: 8px;
  //     padding: 10px;
  //     .header{
  //       display: flex;
  //       justify-content: space-between;
  //       margin-bottom: 10px;
  //       align-items: center;
  //       .subLabel{
  //         color:#A9ABAD;
  //         font-size: 8px;
  //       }
  //       p{
  //         font-size: 14px;
  //         font-weight: 500;
  //       }
  //       button{
  //         font-size: 10px;
  //       }
  //     }
  //     .chart{
  //       width: 100%;
  //       height: 100%;
  //     }
  //   }
  // }
  // .card-main {
  //   .header {
  //     display: flex;
  //     justify-content: space-between;
  //     button {
  //       background: white;
  //     }
  //   }
  //   .contents {
  //     display: flex;
  //     justify-content: space-between;
  //     background: #F5F5F5;
  //     border-radius: 12px;
  //     padding: 30px 50px;
  //     .item {
  //       text-align: center;
  //       .item-top {
  //         font-size: 16px;
  //         color: #8E9192;
  //       }
  //       .item-num {
  //         font-size: 40px;
  //         font-weight: 700;
  //         span {
  //           font-size: 16px;
  //           font-weight: 400;
  //           color: #8E9192;
  //           margin-left: 10px;
  //         }
  //       }
  //     }
  //   }
  // }
  // .yellow {
  //   color: #FFD600;
  // }
  // .orenge {
  //   color: #FF9933;
  // }
  // .red {
  //   color: #F5365C;
  // }
  // .primary-color {
  //   color: #5E72E4;
  // }
</style>
