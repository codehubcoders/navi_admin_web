<script>

    // import LineChart from "./../../customComponents/chart/LineChart.svelte";
    import SelectBox from "./../../customComponents/selectbox/SelectBox.svelte";

    export let showDetailUsim = false;
    const handleDetailUsim = () => {
        showDetailUsim = !showDetailUsim
    };

    let items = [
        { title: "1월", value: 1 },
        { title: "2월", value: 2 },
        { title: "3월", value: 3 },
    ];
</script>

{#if showDetailUsim}
    <div class="backdrop" on:click|self>
        <div class="modal">
            <div class="modal__header">
                <p>USIM 상세보기</p>
            </div>
            <div class="modal__body">
                <div class="row">
                    데이터 사용량
                    <SelectBox {items} placeholder="12월" />
                </div>
<div class="chart">
    <!-- <LineChart lineChart3 /> -->
</div>
                <!-- <LineChart lineChart /> -->
                <div class="row-sub">
                    <p class="left">USIM No.</p>
                    <p class="right">156241245525489614859</p>
                </div>
                <div class="row-sub">
                    <p class="left">전화번호</p>
                    <p class="right">010-6210-1314</p>
                </div>
                <div class="row-sub">
                    <p class="left">사용현황</p>
                    <p class="right">사용중</p>
                </div>
                <div>제품정보</div>
                <div class="row-sub mt-10">
                    <p class="left">제품코드</p>
                    <p class="right">1321SR156H13E2</p>
                </div>
                <div class="row-sub">
                    <p class="left">최초설치일</p>
                    <p class="right">2024.01.01</p>
                </div>
                <div>신고이력(3)</div>
                <div class="call-box">
                    <div class="w-box">
                        <p class="title">신고 발생</p>
                        <p class="date">2023.12.31 16:43</p>
                    </div>
                    <div class="w-box">
                        <p class="title">신고 발생</p>
                        <p class="date">2023.12.31 16:43</p>
                    </div>
                    <div class="w-box">
                        <p class="title">신고 발생</p>
                        <p class="date">2023.12.31 16:43</p>
                    </div>
                </div>
            </div>

            <div class="modal__button">
         
                <button class="btn-primary" on:click={handleDetailUsim}
                    >확인</button
                >
            </div>
        </div>
    </div>
{/if}

<style lang="scss">
    @import "src/lib/scss/style.scss";
    .backdrop {
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.8);
        z-index: 99;
        overflow-y: auto;
    }
    .modal {
        padding: 10px 20px;
        border-radius: 10px;
        max-width: 450px;
        margin: 5% auto;
        // text-align: center;
        background-color: white;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        &__header {
            margin-top: 20px;
            margin-bottom: 20px;
            font-weight: 500;
            font-size: 18px;
        }

        &__body {
            text-align: left;
            font-size: 14px;
            font-weight: 400;
            // color: #8E9192;
            line-height: 1.4em;
            margin-bottom: 20px;
            .title {
                font-weight: 400;
                span {
                    color: #A9ABAD;
                    font-size: 12px;
                }
            }
            .inputBox {
                padding: 0px 10px;
                height: 33px;
                input[type="text"] {
                    height: 33px;
                    border-radius: 4px;
                }
                input::placeholder {
                    font-size: 12px;
                    color: #5C5F60;
                    font-weight: 300;
                }
            }
        }
        &__button {
            margin-bottom: 20px;
            display: flex;
            justify-content: end;
        }
    }
    .row {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .row-sub {
        display: flex;
        align-items: center;
        margin: 15px 0;
        .left {
            font-size: 14px;
            font-weight: 300;
            width: 100px;
        }
        .right {
            font-size: 14px;
            color: #A9ABAD;
        }
    }

    .call-box {
        background-color: #EFF1F2;
        padding: 15px;
        border-radius: 8px;
        padding-bottom: 10px;
        margin-top: 10px;
        .w-box {
            
            background-color: white;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 10px 20px;
            border-radius: 8px;
            margin-bottom: 10px;
            .title {
                color: #2E3132;
                font-size: 14px;
                font-weight: 500;
            }
            .date {
                font-size: 12px;
                color: #C5C7C8;
            }
        }
    }
    .chart{
        width: 100%;
        height: 200px;
    }
</style>
