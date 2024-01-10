<script>
	import { browser } from '$app/environment';
    let topBox = [{number: 23, name: '주의', color:'#FFD600'},{number: 12, name: '경고', color:'#FF9933'},{number: 3, name: '위험', color:'#F5365C'}];
    import ReplayIcon from "../../assets/icons/replay_icon.svg";


</script>
<section class="top">
  <div class="update"><p class="rplay"><ReplayIcon  /></p>
  <p class="">2023.12.12 14:46</p>
  </div>
    <div class="top-box">
       <div class="left">
       	{#each topBox as item, index}
          <div class="sub-box" style="background-color:{item.color}">
        <p class="name">{item.name}</p>
        <p class="num">{item.number}</p>
        </div>
	{/each}
        </div>
        <div class="card-main">
         <div class="header"> <p class="txt">알림창</p></div>
         
         <div class="contents">
         {#each {length: 6} as _, i}
               <div class="item">
         <div class="icon-avatar mr-10">
         아이콘</div>
         <div>
        <p class="con-txt"> 가나다 어르신이 화재신고를 하였습니다.</p>
        <p class="date-txt"> 2023-12-12 09:00</p>
         </div>
         </div>
             {/each}
         </div>
     
     </div>
    </div>

</section>

<style lang="scss">
@import '../../scss/style.scss';
     .update{
            display:flex;
            padding-bottom:10px;
            font-size:14px;
            justify-content:end;
            .rplay{
                padding-right:10px;
                 padding-top:1px;
            }
        }

    .top{

        padding-top:20px;

        &-box {
        display:flex;
   
        justify-content: space-between;
            .left {
                display:flex;
                // flex-wrap: wrap;
                justify-content: space-between;
                width:65%;
                background-color:white;
                border-radius: 10px;
                box-shadow: 0 5px 20px rgba(173, 181, 217, 0.2);
                padding: 20px 30px;
                text-align: center;
                margin-right: 20px;
                gap: 1rem;
                height: fit-content;
                .sub-box{
                    height:90px;
                    flex: 1 1 auto;
                    flex-wrap: wrap;
                    
                    border-radius: 12px; 
                    display:flex;
                    justify-content: space-between;
                     align-items:center;
                    p{
                      color:white;
                      padding: 0px 30px;
                    }
                    .name{
                        font-size:24px;
                    }
                    .num{
                        font-size:30px;
                        font-weight:600;
                    }
                }
            }
            .card-main{
                
                width:33%;
         
                .contents{
                    height:250px;
                    overflow: auto;
                    .item{
                    padding: 10px 8px;
                    display: flex;
                    align-items:center;
                    .con-txt{
                        font-size: 12px;
                        font-weight: 500;
                    }
                    .date-txt{
                        font-size: 10px;
                        color:#A9ABAD;
                    }
                }
                }
            }
        }

    }
</style>