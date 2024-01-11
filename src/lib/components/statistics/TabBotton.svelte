<script>
import Icon from '@iconify/svelte';
    let SelectedTab ='복약';

const tabCardList1 = [
   {
     title: '지연복용 현황',
      num1: 12,
      num2: 3,
      num3: 1,
    },
   {
     title: '미복용 현황',
      num1: 12,
      num2: 3,
      num3: 1,
    },
]

const tabCardList2 = [
   {
     title: '이용률 현황',
      num1: 32,
    },
   {
     title: '사용률 ON',
      num1: 70,
    },
]
</script>


<div class="tab-wrapper">
  <div class="tab-item">
    <input type="radio" id="tab1" name="tabGroup" checked={SelectedTab==="복약"}>
    <label for="tab1" class="tab-label">복약</label>
    <div class="tab-content">
    {#each tabCardList1 as item, index}
       <div class="card-main">
            <div class="header">
            <p>{item.title}</p>
            <button><Icon icon="ep:more-filled" color="#a9abad" /></button>
            </div>
            <div class="contents">
               <div class="item">
                  <div class="item-top">
                    3일 이상
                  </div>
                  <div class="item-num yellow mt-20">
                    {item.num1}<span>명</span>
                  </div>
                </div>

                 <div class="item">
                  <div class="item-top">
                    5일 이상
                  </div>
                  <div class="item-num orenge mt-20">
                    {item.num2}<span>명</span>
                  </div>
                </div>

                           <div class="item">
                  <div class="item-top">
                    10일 이상
                  </div>
                  <div class="item-num red mt-20">
                    {item.num3}<span>명</span>
                  </div>
                </div>
            </div>
          </div>
    {/each}
    </div>
  </div>
  
  <div class="tab-item">
    <input type="radio" id="tab2" name="tabGroup">
    <label for="tab2" class="tab-label gray">건강</label>
    <div class="tab-content">
             <div class="card-main">
            <div class="header">
            <p>평균 걸음</p>
            <button><Icon icon="ep:more-filled" color="#a9abad" /></button>
            </div>
            <div class="contents">
               <div class="item t-right">
                  <div class="item-top">
                   평균 걸음수
                  </div>
                  <div class="item-num yellow mt-20">
                    2032
                  </div>
                </div>

                               <div class="item t-right">
                  <div class="item-top">
                   평균 걸음걸이
                  </div>
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
                  <div class="item-top">
                  혈압
                  </div>
                  <div class="item-num primary-color mt-20">
                    70/120
                  </div>
                </div>
                               <div class="item t-right">
                  <div class="item-top">
                  산소포화도
                  </div>
                  <div class="item-num primary-color mt-20">
                    98
                  </div>
                </div>

                               <div class="item t-right">
                  <div class="item-top">
                  심박수
                  </div>
                  <div class="item-num primary-color mt-20">
                    68
                  </div>
                </div>

             </div>
          </div>
    </div>
  </div>
 
  <div class="tab-item">
    <input type="radio" id="tab3" name="tabGroup">
    <label for="tab3" class="tab-label">사용</label>
    <div class="tab-content">
      
       <div class="card-main">
            <div class="header">
            <p>이용률 현황</p>
            <button><Icon icon="ep:more-filled" color="#a9abad" /></button>
            </div>
            <div class="contents">
               <div class="item t-right">
                  <div class="item-top">
                  Mobile APP 연동
                  </div>
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
                  <div class="item-top">
                  사용률
                  </div>
                  <div class="item-num primary-color mt-20">
                    70<span>%</span>
                  </div>
                </div>

             </div>
          </div>

    </div>
  </div>
  
</div>


<style lang="scss">
@import '../../scss/style.scss';
.tab-wrapper {
  margin-top:30px;
  position: relative;
  clear: both;
}

.tab-item {
  float: left;
  
  [type="radio"] {
    display: none;
    
    &:checked ~ .tab-label {
      background: $primary-color;
      border-bottom: 1px solid #fff;
      color: white;
      font-weight:600;
      z-index: 55;
      
      & ~ .tab-content {
        z-index: 50;  
      }
    }
  }
}

.tab-label {
  display: flex;
  align-items: center;
  position: relative;
  height: 30px;
  width:100px;
  padding-right: 24px;
  padding-left: 24px;
  background: white;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  cursor: pointer;
  font-size: 12px;
  color: #757779;
  font-weight:400;

}
  .gray{
    background: #F5F5F5;
  }
.tab-content {
  position: absolute;
  top: 41px;
  right: 0;
  left: 0;
  bottom: 0;
  display:grid;
   grid-template-columns: 1fr 1fr;
   gap: 30px;
 
}
.card-main{
  .header{
    display:flex;
    justify-content: space-between;
    button{
      background:white;
      
    }
  }
  .contents{
    display:flex;
    justify-content: space-between;
    background:#F5F5F5;
    padding:30px 50px;
    .item{
      text-align:center;
      .item-top{
        font-size:16px;
        color:#8E9192;
      }
      .item-num{
        font-size:40px;
        font-weight: 700;
        span{
          font-size:16px;
            font-weight: 400;
            color:#8E9192;
            margin-left:10px;
        }
      }
    }
  }
}
.yellow{
  color:#FFD600;
}
.orenge{
  color:#FF9933;
}
.red{
  color:#F5365C;
}
.primary-color{
  color:#5E72E4;
}
</style>