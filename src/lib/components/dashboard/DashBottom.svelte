
<script>
	import CollapsibleSection from '../customitems/expand/Expand.svelte'

 let firstData = ['평균약순응도', ' 지연복용', ' 미복용', '과다복용 의심'];
  let memberData = ['스탠다드(00)', ' 플러스(00)', ' 나비 APP(00)'];

  let useData = ['실시간 이용률', ' 사용률', ' 서비스 사용현황'];

  
</script>

<section class="dash-bottom">

   <div class="left">
        <div class="card-main">
            <div class="header">
            복약순응도
            </div>
            <div class="contents">
                <div class="item-detail">
                {#each firstData as item, index}
                <div class="detail-box">
                <p class="txt">{item}</p>
                <button class="btn-gray fs-12 fw-600" >상세보기</button>
                </div>
                {/each}
                </div>
            </div>
        </div>
     </div>

        <div class="middle">
        <div class="card-main">
            <div class="header">
            회원 현황
            </div>
            <div class="contents">
                <div class="item-detail">
                    {#each memberData as item, index}
                        <div class="detail-box">
                            <p class="txt">{item}</p>
                            <button class="btn-gray fs-12 fw-600" >상세보기</button>
                        </div>
                    {/each}
                </div>
            </div>
        </div>
     </div>

        <div class="right">
        <div class="card-main">
            <div class="header">
            지역현황
            </div>
            <div class="contents">
            <div class="state-detail">
                <CollapsibleSection headerText={'서울(52)'} >
                        <div class="state-box">
                        <p class="txt">OO동(12)</p>
                        <button class="btn-gray fs-12 fw-600" >상세보기</button>
                        </div>
                           <div class="state-box">
                        <p class="txt">OO동(12)</p>
                        <button class="btn-gray fs-12 fw-600" >상세보기</button>
                        </div>
                </CollapsibleSection>
                </div>

            <div class="state-detail">
                <CollapsibleSection headerText={'서울(52)'} >
                        <div class="state-box">
                        <p class="txt">OO동(12)</p>
                        <button class="btn-gray fs-12 fw-600" >상세보기</button>
                        </div>
                           <div class="state-box">
                        <p class="txt">OO동(12)</p>
                        <button class="btn-gray fs-12 fw-600" >상세보기</button>
                        </div>
                </CollapsibleSection>
                </div>

                         <div class="state-detail">
                <CollapsibleSection headerText={'서울(52)'} >
                        <div class="state-box">
                        <p class="txt">OO동(12)</p>
                        <button class="btn-gray fs-12 fw-600" >상세보기</button>
                        </div>
                           <div class="state-box">
                        <p class="txt">OO동(12)</p>
                        <button class="btn-gray fs-12 fw-600" >상세보기</button>
                        </div>
                </CollapsibleSection>
                </div>
            </div>
        </div>
     </div>
     <div class="right">
        <div class="card-main">
            <div class="header">
            이용률 현황
            </div>
            <div class="contents">
                <div class="item-detail">
                    {#each useData as item, index}
                        <div class="detail-box">
                            <p class="txt">{item}</p>
                            <button class="btn-gray fs-12 fw-600" >상세보기</button>
                        </div>
                    {/each}
                </div>
            </div>
        </div>
     </div>

     
</section>


<style lang="scss">

  .dash-bottom{
    margin-top: 40px;
    display: grid;
    grid-template-columns: 1.5fr 1fr 1fr;
    gap: 30px;
     @media (max-width: 960px) {
        grid-template-columns: 1.5fr 1fr ;
    }
         @media (max-width: 535px) {
        grid-template-columns: 1fr ;
    }
  }

  .contents{
    height:300px;
  }
.state-detail{
    padding: 10px 10px 5px;
    .state-box{
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #F8FAFB;
        border-radius: 8px;
        padding: 10px 20px;
       
        .txt{
            font-weight: 500;
            font-size: 12px;
            color:#8E9192;
        }
}}
  
</style>