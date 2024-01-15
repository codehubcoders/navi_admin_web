<script>
  import Icon from "@iconify/svelte";
  const tabCardList1 = [
    {
      title: "지연복용 현황",
      num1: 12,
      num2: 3,
      num3: 1,
    },
    {
      title: "미복용 현황",
      num1: 12,
      num2: 3,
      num3: 1,
    },
  ];

  const tabCardList2 = [
    {
      title: "이용률 현황",
      num1: 32,
    },
    {
      title: "사용률 ON",
      num1: 70,
    },
  ];
</script>

<div class="tab-content">
  {#each tabCardList1 as item, index}
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
  {/each}
</div>

<style lang="scss">
  .tab-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
    @media (max-width: 960px) {
      grid-template-columns: 1fr;
    }
  }
  .card-main {
    .header {
      display: flex;
      justify-content: space-between;
      button {
        background: white;
      }
    }
    .contents {
      display: flex;
      justify-content: space-between;
      background: #F5F5F5;
      border-radius: 12px;
      padding: 30px 50px;
      .item {
        text-align: center;
        .item-top {
          font-size: 16px;
          color: #8E9192;
        }
        .item-num {
          font-size: 40px;
          font-weight: 700;
          span {
            font-size: 16px;
            font-weight: 400;
            color: #8E9192;
            margin-left: 10px;
          }
        }
      }
    }
  }
  .yellow {
    color: #FFD600;
  }
  .orenge {
    color: #FF9933;
  }
  .red {
    color: #F5365C;
  }
  .primary-color {
    color: #5E72E4;
  }
</style>
