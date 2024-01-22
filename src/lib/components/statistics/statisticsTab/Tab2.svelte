<script>
  import Icon from "@iconify/svelte";
</script>

<div class="tab-content">
  <div class="card-main">
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
  </div>
</div>

<style lang="scss">
        @import 'src/lib/scss/style.scss';
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
