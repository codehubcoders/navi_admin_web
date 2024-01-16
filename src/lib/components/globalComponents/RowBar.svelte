<script>
    export let percentage = 0;
    export let sub = "";
    export let title = "";
    export let titleNum =  0;
  </script>
  
  <div class="row-bar">
    <div class="row-bar__header">
      <p class="title">제품전원 ON/OFF
       
       </p>
      <button class="btn-gray">상세보기</button>
    </div>
    <div class="row-bar__body">
     
    </div>
  
  </div>
  
  <style lang="scss">
   
    .row-bar {
      background-color: white;
      border-radius: 8px;
      padding: 15px 20px;
  
      .num {
        margin-top: 10px;
        color: #001E91;
      }
      .txt-per {
        color: #A9ABAD;
        font-size: 20px;
        margin-left: 5px;
      }
  
      &__header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
        .title{
          font-size: 14px;
          font-weight: 500;
  
        }
        .btn-gray{
          background-color: #EFF1F2;
          border-radius: 4px;
          padding:8px 10px;
          font-size: 12px;
        }
      }
      &__body{
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  </style>
  