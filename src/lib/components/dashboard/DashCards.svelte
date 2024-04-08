<script>
    import PieChartAge from "./../customComponents/chart/PieChartAge.svelte";
    import PieChartGender from "./../customComponents/chart/PieChartGender.svelte";
    import LocalCardDash from "./../globalComponents/LocalCardDash.svelte";
    import ColumBox from "./../globalComponents/ColumBox.svelte";
    import CicleProgress from "./../globalComponents/CicleProgress.svelte";
    import AlarmCard from "./../globalComponents/AlarmCard.svelte";

    let columnList = [
        { left: "미복용", right: 3, last: "명" },
        { left: "관심복용", right: 4, last: "명" },
        { left: "과다복용 의심", right: 3, last: "명" },
    ];
    let columnList2 = [
        { left: "실시간 이용률", right: 70, last: "%" },
        { left: "전원 off", right: 15, last: "명" },
        { left: "배터리  미연결", right: 24, last: "명" },
        { left: "모바일 앱 연동률(본인)", right: 24, last: "명" },
        { left: "모바일 앱 연동률(보호자)", right: 24, last: "명" },
    ];
    let columnList3 = [
        { left: "스탠다드", right: 12, last: "명" },
        { left: "플러스", right: 24, last: "명" },
        { left: "모바일앱", right: 48, last: "명" },
        { left: "기관회원", right: 32, last: "명" },
    ];
    
    let loginList = [
        { message: "서울시 홍길동님이 활동중이십니다." },
        { message: "서울시 홍길동님이 활동중이십니다." },
        { message: "서울시 홍길동님이 활동중이십니다." },
    ];



</script>

<section class="cards">
    <div class="cards__middle">
        <AlarmCard title="약상자 현황">
            <div class="left">
                <CicleProgress percentage="72" sub="%" title="복약순응도" />
                <CicleProgress percentage="72" sub="%" title="약상자 사용률" />
                <a href="/statistics"> <ColumBox {columnList} /></a>
            </div>
        </AlarmCard>
        <AlarmCard title="사용현황">
            <div class="right" >
               <a href="/statistics"><ColumBox {columnList2} /></a> 
            </div>
        </AlarmCard>
    </div>
    <div class="cards__bottom">
        <AlarmCard title="회원 현황">
            <div class="left">
                <a href="/member"><ColumBox {columnList3} /></a>
            </div>
        </AlarmCard>
        <AlarmCard title="지역현황">
            <div class="middle">
                <LocalCardDash />
            </div>
        </AlarmCard>
        <AlarmCard title="기관회원 로그인 현황">
            <div class="right">
                {#each loginList as item}
                    <div class="box">{item.message}</div>
                {/each}
            </div>
        </AlarmCard>
    </div>
    <div class="cards__bottom_graph">
        <AlarmCard title="기본정보">
            <div class="contents">
                <div class="left">
                    <PieChartGender />
                </div>
                <div class="left">
                    <PieChartAge />
                </div>
                <div class="right">
                <p class="fw-600">평균 연령</p>
                <p class="age">72<span>세</span></p>
                </div>
            </div>
        </AlarmCard>
    </div>
</section>

<style lang="scss">
    @import "../../scss/style.scss";
    .cards {
        padding-top: 5px;
        &__middle {
            margin-top: 20px;
            display: grid;
            grid-template-columns: 3fr 2fr;
            gap: 30px;
            @media (max-width: 1200px) {
                grid-template-columns: 1fr;
            }
            .left {
                padding: 10px 10px 20px 10px;
                display: grid;
                grid-template-columns: 1fr 1fr 1fr;
                gap: 15px;
                // height: 220px;
                @media (max-width: 620px) {
                grid-template-columns: 1fr;
                height: 100%;
            }
            }
            .right {
                height: 220px;
                padding: 10px;
            }
        }
        &__bottom {
            margin-top: 20px;
            display: grid;
            grid-template-columns: 1.5fr 1.5fr 2fr;
            @media (max-width: 720px) {
                grid-template-columns: 1fr;
          
            }
            gap: 30px;
            .left {
                height: 250px;
                padding: 10px;
            }
            .middle {
                height: 250px;
                padding: 10px;
            }
            .right {
                padding: 10px;
                .box {
                    margin-bottom: 10px;
                    background-color: white;
                    font-size: 14px;
                    color: #5C5F60;
                    padding: 18px 20px;
                    border-radius: 8px;
                }
            }
        }
        &__bottom_graph {
            margin-top: 20px;
            display: grid;
            grid-template-columns: 3fr 2fr;
            @media (max-width: 1280px) {
                grid-template-columns: 1fr;
          
            }
            .contents {
               padding: 10px;
                display: grid;
                grid-template-columns: 1fr 1fr 1fr;
                @media (max-width: 960px) {
                grid-template-columns: 1fr;
          
            }
                gap: 20px;
                .left {
                    padding:  20px 15px;
                    background-color: white;
                    border-radius: 8px;

                }
                .right {
                    padding:  20px 15px;
                    background-color: white;
                    border-radius: 8px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    .age{
                        text-align: right;
                        font-size: 42px;
                        color:#001E91;
                        font-weight: 500;
                        span{
                            margin-left: 5px;
                            color:#A9ABAD;
                            font-size: 16px;
                            font-weight: 400;
                        }
                    }
                }
            }
        }
    }
</style>
