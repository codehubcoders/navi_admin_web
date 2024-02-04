<script>
	import RowBar from './RowBar.svelte';
  import Icon from "@iconify/svelte";
import AlarmCard from "../../globalComponents/AlarmCard.svelte";
import CicleProgress from "../../globalComponents/CicleProgress.svelte";


</script>

<div class="tab-content">
  <AlarmCard title="모바일앱 연동 현황">
    <div class="top">
      <CicleProgress percentage="23" sub="%" title="본인" />
      <CicleProgress percentage="68" sub="%" title="보호자" />

    </div>
  </AlarmCard>
  <AlarmCard title="사용현황">
    <div class="top">
      <CicleProgress percentage="23" sub="%" title="실시간 이용률" />
      <div class="count">
        <p class="title pb-15">제품전원 ON/OFF</p>
        <div class="mt-20">
        
          <RowBar />
        </div>
   
      </div>

    </div>
  </AlarmCard>
  <!-- <div class="card-main">
    <div class="header">
      <p>이용률 현황</p>
      <button><Icon icon="ep:more-filled" color="#a9abad" /></button>
    </div>
    <div class="contents">
      <div class="item t-right">
        <div class="item-top">Mobile APP 연동</div>
        <div class="item-num yellow mt-20">
          32<span>%</span>
        </div>
      </div>
    </div>
  </div>

  <div class="card-main">
    <div class="header">
      <p>사용률 ON</p>
      <button><Icon icon="ep:more-filled" color="#a9abad" /></button>
    </div>
    <div class="contents">
      <div class="item">
        <div class="item-top">사용률</div>
        <div class="item-num primary-color mt-20">
          70<span>%</span>
        </div>
      </div>
    </div>
  </div> -->
</div>

<style lang="scss">
        @import 'src/lib/scss/style.scss';
  .tab-content {
    display: grid;
      grid-template-columns: 1fr 1fr ;
      gap: 30px;
      @media (max-width: 960px) {
        grid-template-columns: 1fr;
      }
    .top {
      padding: 20px;
      display: grid;
      grid-template-columns: 1fr 1fr ;
      gap: 15px;
      .count {
        background-color: white;
        border-radius: 8px;
        padding: 15px 20px;

        // display: flex;
        // flex-direction: column;
        // align-items: center;
        .title {
          font-size: 14px;
          font-weight: 500;
          color: #333;
          text-align: left;
        }
        // p {
        //   text-align: center;
        //   font-size: 72px;
        //   color: #001E91;
        //   font-weight: 500;
        //   span {
        //     font-size: 20px;
        //     color: #A9ABAD;
        //   }
        // }
      }
  
      @media (max-width: 540px) {
        grid-template-columns: 1fr;
      }
    }
  }
  //   display: grid;
  //   grid-template-columns: 1fr 1fr;
  //   gap: 30px;
  //   @media (max-width: 960px) {
  //     grid-template-columns: 1fr;
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
