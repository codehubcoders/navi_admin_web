<script>
  import Icon from "@iconify/svelte";
  import Table from "../customComponents/table/statisticsTable.svelte"
import ChartModal from '../customComponents/modal/ChartModal.svelte';

  let cardList = [
    {
      title: "평균 걸음수",
    },
    {
      title: "걸음거리",
    },
    {
      title: "혈압",
    },
    {
      title: "산소포화도",
    },
    {
      title: "심박수",
    },
  ];

  let showModal = false;    const toggleModal = () => {    showModal = !showModal;  };
</script>

<div class="card-list">
  {#each cardList as item, index}
    <div class="card-main">
      <div class="header">
        <p>{item.title}</p>
        <button on:click={toggleModal}><Icon icon="solar:graph-up-linear" />그래프 보기</button>
      </div>
      <div class="contents">
        <div class="item">
          <Table />
        </div>
      </div>
    </div>
  {/each}
</div>

<ChartModal title='평균 걸음' {showModal}  on:click={toggleModal} />
<style lang="scss">
        @import 'src/lib/scss/style.scss';
  button {
    background: white;
    font-size: 13px;
    font-weight: 400;
  }

  .card-list {
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
    padding-top: 20px !important;
    button {
      background: white;
      display: flex;
      justify-content: space-between;
      gap: 5px;
    }
  }
  .contents {
    height: 200ox;
    background: white;
    padding: 20px 20px 30px;
    border-radius: 0 0px 12px 12px;
  }
</style>
