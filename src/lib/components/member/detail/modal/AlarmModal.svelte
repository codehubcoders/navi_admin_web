<script>
    export let showAlarm = false;
    const handleAlarmClick = () => {
        showAlarm = !showAlarm;
    };

    let tableList = [
        {
            contents: "BMS미연결",
            code: "25SGAG24A",
            name: "김길자",
            date: "2023.02.10",
        },
        {
            contents: "약상자가 열려있습니다",
            code: "25SGAG24A",
            name: "홍수빈",
            date: "2023.02.10",
        },
        {
            contents: "약을 미복용 하셨습니다",
            code: "25SGAG24A",
            name: "김길자",
            date: "2023.02.10",
        },
        {
            contents: "BMS미연결",
            code: "25SGAG24A",
            name: "홍수빈",
            date: "2023.02.10",
        },
  
    ];
</script>

{#if showAlarm}
    <div class="backdrop" on:click|self>
        <div class="modal">
            <div class="modal__header">
                <p>최근알림</p>
                <button class="btn-primary">Excel 다운로드</button>
            </div>
            <div class="modal__body">
                <p class="sub-title">전체이력</p>
                <div class="table">
                    <ul class="row">
                        <li class="head">알림내용</li>
                        <li class="head">제품코드</li>
                        <li class="head">성함</li>
                        <li class="head">일시</li>
                    </ul>
                    {#each tableList as item}
                        <ul class="row">
                            <li class="data">{item.contents}</li>
                            <li class="data">{item.code}</li>
                            <li class="data">{item.name}</li>
                            <li class="data">{item.date}</li>
                        </ul>
                        <div class="line" />
                    {/each}
                </div>
            </div>
            <div class="modal__button">
                <button class="btn-primary" on:click={handleAlarmClick}
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
        padding: 10px 15px;
        border-radius: 10px;
        max-width: 600px;
        margin: 10% auto;
        text-align: center;
        background-color: white;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        &__header {
            margin-top: 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
            font-weight: 500;
        }

        &__body {
            text-align: left;
            font-size: 16px;
            font-weight: 400;
            color: #8E9192;
            line-height: 1.4em;
            .sub-title {
                font-size: 12px;
                font-weight: 500;
                margin-bottom: 10px;
            }
            .table {
                width: 100%;
                border: 1px solid #E1E3E4;
                border-radius: 8px;
                margin-bottom: 20px;
                .row {
                    display: grid;

                    grid-template-columns: 1.5fr 1fr 1fr 1fr;
                    .head {
                        // width: 100%;
                        padding: 5px 20px;
                        font-size: 14px;
                        color: #444748;
                        background-color: #F4F4F4;
                    }
                    .data {
                        width: 100%;
                        padding: 5px 20px;
                        color: #8E9192;
                        font-size: 12px;
                    }
                }
                .line {
                    margin: 0px 10px;
                    border-bottom: 1px solid #E1E3E4;
                }
            }
        }

        &__button {
            margin-bottom: 20px;
            display: flex;
            justify-content: end;
        }
    }
</style>
