<script>
    export let showHistory = false;
    const handleHistoryClick = () => {
        showHistory = !showHistory;
    };

    let tableList = [
        {
            down: "엑셀",
            contents: "항목",
            user: "강남구 홍길동",
            date: "2023.02.10 11:32",
        },
        {
            down: "그래프",
            contents: "항목",
            user: "강남구 홍수빈",
            date: "2023.02.09 16:32",
        },
        {
            down: "엑셀",
            contents: "항목",
            user: "강남구 홍길동",
            date: "2023.02.10 11:32",
        },
        {
            down: "엑셀",
            contents: "항목",
            user: "강남구 홍길동",
            date: "2023.02.10 11:32",
        },
        {
            down: "그래프",
            contents: "항목",
            user: "강남구 홍수빈",
            date: "2023.02.09 16:32",
        },
    ];
</script>

{#if showHistory}
    <div class="backdrop" on:click|self>
        <div class="modal">
            <div class="modal__header">
                <p>다운로드 이력</p>
                <button class="btn-primary">Excel 다운로드</button>
            </div>
            <div class="modal__body">
                <p class="sub-title">전체이력</p>
                <div class="table">
                    <ul class="row">
                        <li class="head">다운로드정보</li>
                        <li class="head">항목</li>
                        <li class="head">사용자정보</li>
                        <li class="head">날짜</li>
                    </ul>
                    {#each tableList as item}
                    <ul class="row">
                        <li class="data">{item.down}</li>
                        <li class="data">{item.contents}</li>
                        <li class="data">{item.user}</li>
                        <li class="data">{item.date}</li>
                    </ul>
                    <div class="line" />
                    {/each}
      
                    
                </div>
            </div>
            <div class="modal__button">
                <button class="btn-primary" on:click={handleHistoryClick}
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
                    display: flex;
                    .head {
                        width: 100%;
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
