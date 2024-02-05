<script>
  import DownDetailModal from "./DownDetailModal.svelte";
  import LocalCardDash from "./../globalComponents/LocalCardDash.svelte";
  import AlarmCard from "./../globalComponents/AlarmCard.svelte";
  import BarChart from "./../customComponents/chart/BarChart.svelte";
  import LocalCard from "../globalComponents/LocalCard.svelte";
  import DownHistoryModal from "./DownHistoryModal .svelte";

  const handleDetailClick = () => {
    showDetail = !showDetail;
  };
  let showDetail = false;

  const handleHistoryClick = () => {
    showHistory = !showHistory;
  };
  let showHistory = false;

  let selectedDate = 1;

  let dateRadio = [
    { value: 1, label: "일" },
    { value: 2, label: "주" },
    { value: 3, label: "월" },
  ];
  let selected;
  let activeSelected = false;
  let columnList = [
    {
      columnText: [
        { top: "다운로드 정보", bottom: "엑셀" },
        { top: "사용자정보", bottom: "강남구 홍길동" },
        { top: "항목", bottom: "회원관리" },
        { top: "날짜", bottom: "2023.12.05 16:52" },
      ],
    },
    {
      columnText: [
        { top: "다운로드 정보", bottom: "그래프" },
        { top: "사용자정보", bottom: "강남구 홍길동" },
        { top: "항목", bottom: "회원관리" },
        { top: "날짜", bottom: "2023.12.05 16:52" },
      ],
    },
  ];

  const selectClick = (index) => () => {
    selected = index;
    showDetail = true;
  };
  const onChangeDate = (tabValue) => () => (selectedDate = tabValue);
</script>

<div class="use-month">
  <div class="card-main">
    <div class="header">
      기관 회원 로그인 현황
      <div class="radio-btn">
        {#each dateRadio as item, index}
          <button on:click={onChangeDate(item.value)}>
            <div class="custom {selectedDate === item.value ? 'active' : ''}">
              {item.label}
            </div>
          </button>
        {/each}
      </div>
    </div>
    <div class="contents">
      <BarChart />
    </div>
  </div>

  <AlarmCard title="다운로드 이력">
    <div slot="topicon">
      <button class="btn-detail-gray" on:click={handleHistoryClick}
        >전체보기</button
      >
    </div>
    <div class="content">
      {#each columnList as item, index}
        <div
          class="box4 {selected === index ? 'selecete' : ''}"
          on:click={selectClick(index)}
        >
          {#each item.columnText as subitem}
            <div class="row-text">
              <div class="sub">{subitem.top}</div>
              <div>
                {subitem.bottom}
              </div>
            </div>
          {/each}
        </div>
      {/each}
    </div>
  </AlarmCard>
  <AlarmCard title="지역별 기관회원 현황">
    <div class="local">
      <LocalCardDash />
    </div>
  </AlarmCard>
  <AlarmCard title="기관모니터링">
    <div class="local">
      <LocalCard />
    </div>
  </AlarmCard>
</div>
<DownHistoryModal {showHistory} on:click={handleHistoryClick} />
<DownDetailModal {showDetail} on:click={handleDetailClick} />

<style lang="scss">
  @import "src/lib/scss/style.scss";
  button {
    background: white;
    font-size: 10px;
    font-weight: 400;
    background-color: #F5F5F5;
  }
  .radio-btn {
    display: flex;
    font-size: 12px;
    color: #2E3132;
    background-color: #F5F5F5;
    padding: 5px;
    border-radius: 4px;
    .custom {
      text-align: center;
      // border: 1px solid #C5C7C8;

      cursor: pointer;
      padding: 2px 20px;
      box-sizing: content-box;
      border-radius: 2px;
    }
  }
  .active {
    background-color: white;
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
    font-size: 18px;
    // button {
    //   background: white;
    //   display: flex;
    //   justify-content: space-between;
    //   gap: 2px;
    // }
  }
  .contents {
    background: white;
    padding: 15px;
    border-radius: 0 0px 12px 12px;
  }

  .content {
    padding: 15px;
  }
  .local {
    padding: 15px;
    height: 240px;
  }
  .selecete {
    // border: 1px solid #C5C7C8;
    box-shadow: 0 5px 10px rgba(173, 181, 217, 0.4);
    background-color: #C5C7C8;
  }
  .box4 {
    margin-bottom: 10px;
    padding: 12px 20px;
    border-radius: 8px;
    background-color: white;
    color: #5C5F60;
    font-size: 14px;
    font-weight: 400;
    display: flex;
    cursor: pointer;
    justify-content: space-between;
    .row-text {
      .sub {
        font-size: 12px;
        color: #C5C7C8;
        margin: 0;
        margin-bottom: 5px;
      }
    }

    @media (max-width: 620px) {
      margin-bottom: 10px;
    }
  }
  // .contents_right {
  //   background: #F5F5F5;
  //   display: grid;
  //   grid-template-columns: 1fr 1fr;

  //   gap: 15px;
  //   padding: 15px;
  //   // @media (max-width: 535px) {
  //   //             grid-template-columns: 1fr;

  //   //         }

  // }
  // .item {
  //   background: white;
  //   border-radius: 12px;
  //   font-size: 14px;
  //   font-weight: 500;
  //   padding: 15px 15px 5px 15px;
  //   height: 100%;
  //   &__top {
  //     display: flex;
  //     justify-content: space-between;
  //     align-items: center;
  //     margin-bottom: 20px;
  //     .btn-gray {
  //       background-color: #EFF1F2;
  //       // color:#;
  //       padding: 10px;
  //       font-size: 12px;
  //     }
  //   }
  //   &__body {
  //     display: flex;
  //     justify-content: center;
  //     align-items: center;
  //     position: relative;
  //     .w-box{
  //     bottom: 0px;
  //     position: absolute;
  //     width: 85%;
  //     height: 15px;
  //     background-color: white;
  //     border-top:1px solid #EFF1F2 ;
  //   }
  //   }
  //   &__right{
  //     height: 60%;
  //     display: flex;
  //     justify-content: center;
  //     align-items: center;
  //     .bar{
  //       background-color:#F5F5F5;
  //       width: 130px;
  //       height: 100%;
  //       position: relative;
  //       .result{
  //         position: absolute;
  //         bottom: 0;
  //        display: flex;
  //        justify-content: center;
  //        align-items:flex-end;
  //         width: 100%;
  //        background-color: #97A5FF;

  //        p{
  //         font-size: 3.4em;
  //        color: white;
  //         span{
  //         font-size: 20px;
  //         margin-bottom: 0;
  //        }
  //        }

  //       }
  //     }
  //   }
  // }
</style>
