<script>
    let detaileCardBoxItems = [
        {
            title: "인천서구",
            name: '김길동',
            content: {
                no: "A/S000001",
                noMessage: "수리",
                return: "회수완료",
                returnDate: "2024.01.23 회수",
                done: "완료",
                doneDate: "2024.01.24 제공",
            },
        },
        {
            title: "인천서구",
            name: '김길동',
            content: {
                no: "A/S000002",
                noMessage: "수리",
                return: "회수완료",
                returnDate: "2024.01.23 회수",
                done: "",
                doneDate: "",
            },
        },
    ];
</script>

    <div class="card-body">
        {#each detaileCardBoxItems as item}
        <div>
            <div class="w-box">
                <p>{item.title} - {item.name}</p>
                <button class="btn-detail-gray">상세내역</button>
            </div>
            <div class="content">
                <p class="txt">
                    <span>{item.content.no}</span><span class="right">{item.content.noMessage}</span>
                </p>
                <p class="txt">
                    <span class="fw-500">{item.content.return}</span><span class="right">{item.content.returnDate}</span>
                </p>
                <p class="txt">
                    <span class="fw-500">{item.content.done}</span><span class="right">{item.content.doneDate}</span>
                </p>
            </div>
        </div>
          
        {/each}
    </div>


<!-- {#each detaileCardBoxItems as item}
<div class="w-box">
    <p>{item.localName}({item.total})</p>
    <button on:click class="btn-detail-gray">상세내역</button>
</div>
{/each} -->
<style lang="scss">
    .gap{
        margin-bottom: 20px;
    }
    .card-body {
        overflow-x: hidden;
        height: 500px;
        padding: 15px;
        display: flex;
        flex-direction: column;
        gap: 15px;
        overflow: scroll;
    }
        .w-box {
            background-color: white;
            padding: 15px 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-radius: 4px;
            p {
                font-size: 14px;
                font-weight: 500;
            }
        }
        .content {
            padding: 15px 20px;
            background-color: #F8FAFB;
            .txt {
                padding: 5px 0px;
                font-size: 14px;
                display: flex;
                justify-content: space-between;
                
                .right {
                    font-size: 12px;
                    color: #191C1D;
                }
            }
        }
    
</style>
