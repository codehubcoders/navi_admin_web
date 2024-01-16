<script>
	import LocalCard from './../globalComponents/LocalCard.svelte';
    // import CollapsibleSection from "../customComponents/expand/Expand.svelte";

    let firstData = ["평균약순응도", " 지연복용", " 미복용", "과다복용 의심"];
    let memberData = ["스탠다드(00)", " 플러스(00)", " 나비 APP(00)"];

    let useData = ["실시간 이용률", " 사용률", " 서비스 사용현황"];
</script>

<section class="dash-bottom">
    <div class="left">
        <div class="card-main">
            <div class="header">복약순응도</div>
            <div class="contents">
                <div class="item-detail">
                    {#each firstData as item, index}
                        <div class="detail-box">
                            <p class="txt">{item}</p>
                            <button class="btn-gray fs-12 fw-600"
                                >상세보기</button
                            >
                        </div>
                    {/each}
                </div>
            </div>
        </div>
    </div>

    <div class="middle">
        <div class="card-main">
            <div class="header">회원 현황</div>
            <div class="contents">
                <div class="item-detail">
                    {#each memberData as item, index}
                        <div class="detail-box">
                            <p class="txt">{item}</p>
                            <button class="btn-gray fs-12 fw-600"
                                >상세보기</button
                            >
                        </div>
                    {/each}
                </div>
            </div>
        </div>
    </div>

    <div class="right">
        <div class="card-main">
            <div class="header">지역현황</div>
            <div class="contents">
                <LocalCard />
            </div>
          
        </div>
    </div>
    <div class="right">
        <div class="card-main">
            <div class="header">이용률 현황</div>
            <div class="contents">
                <div class="item-detail">
                    {#each useData as item, index}
                        <div class="detail-box">
                            <p class="txt">{item}</p>
                            <button class="btn-gray fs-12 fw-600"
                                >상세보기</button
                            >
                        </div>
                    {/each}
                </div>
            </div>
        </div>
    </div>
</section>

<style lang="scss">
    .dash-bottom {
        margin-top: 40px;
        display: grid;
        grid-template-columns: 1.3fr 1fr 1fr;
        gap: 20px;
        @media (max-width: 960px) {
            grid-template-columns: 1.3fr 1fr;
        }
        @media (max-width: 535px) {
            grid-template-columns: 1fr;
        }
    }

    .contents {
        height: 300px;
    }
   
</style>
