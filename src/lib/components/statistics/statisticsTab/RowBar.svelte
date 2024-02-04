<script>
let onValue = 73
$:offValue = 100 - onValue
</script>

<div class="row-bar">

  <div class="row-bar__body">
    <div class="on" style="width: {onValue}%">
      <p class="top">on</p>
      <p class="bottom">{onValue}</p>
    </div>
    <div class="off" style="width:{offValue}%">
  <p class="top">off</p>
      <p class="bottom">{offValue}</p>
    </div>
  </div>
</div>

<style lang="scss">
        @import 'src/lib/scss/style.scss';
  .row-bar {
    background-color: white;
    border-radius: 8px;
    // padding: 15px 20px;

    // .num {
    //   margin-top: 10px;
    //   color: #001E91;
    //   font-size: 14px;
    // }
    // .txt-per {
    //   color: #A9ABAD;
    //   font-size: 20px;
    //   margin-left: 5px;
    // }

    // &__header {
    //   display: flex;
    //   justify-content: space-between;
    //   align-items: center;
    //   margin-bottom: 20px;
    //   .title {
    //     font-size: 14px;
    //     font-weight: 500;
    //   }
    //   .btn-gray {
    //     background-color: #EFF1F2;
    //     border-radius: 4px;
    //     padding: 8px 10px;
    //     font-size: 12px;
    //   }
    // }
    &__body {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 65%;
      .on{
  
        background-color: #97A5FF;
        padding:10px;
        .top{
          color: white;
          font-weight: 400;
          font-size:14px;
        }
        .bottom{
          color: white;
          font-weight: 500;
          font-size:40px;
        }
      }
      .off{
        padding:10px;
        background-color: #C5C7C8;
        .top{
          color: white;
          font-weight: 400;
          font-size:14px;
        }
        .bottom{
          color: white;
          font-weight: 500;
          font-size:40px;
        }
      }
    }
  }
</style>
