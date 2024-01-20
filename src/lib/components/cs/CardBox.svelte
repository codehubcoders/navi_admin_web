<script>
    let boxItems = [
        {
            date: "2023.12.13 16:12",
            local: "가평군",
            role: "대상자",
            name: "홍길동",
            message: "기기 사용시 알람으로 연락주심",
        },
        {
            date: "2023.12.13 16:12",
            local: "인천서구",
            role: "가족",
            name: "홍길동",
            message: "기기 사용시 알람으로 연락주심",
        },
        {
            date: "2023.12.13 16:12",
            local: "인천서구",
            role: "",
            name: "홍길동",
            message: "기기 사용시 알람으로 연락주심",
        },
        {
            date: "2023.12.13 16:12",
            local: "인천서구",
            role: "",
            name: "홍길동",
            message: "기기 사용시 알람으로 연락주심",
        },
    ];
</script>

<div class="card-body">
    {#each boxItems as item}
        <div>
            <div class="w-box">
                <p>{item.date}</p>
                <button class="btn-detail-gray" on:click>상세내역</button>
            </div>
            <div class="content">
                <p class="txt-sm">
                    {item.local}
                    {#if item.role}
                        -
                    {/if}
                    {item.role}
                </p>
                <p class="txt">
                    {item.name}
                </p>
                <p class="txt-sm">
                    {item.message}
                </p>
            </div>
        </div>
    {/each}
</div>

<style lang="scss">
    .gap {
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
            padding: 10px 0px;
            font-size: 14px;
            font-weight: 500;
            display: flex;
            justify-content: space-between;

            &-sm{
                font-size: 12px;
                color: #191C1D;;
            }
        }
    }
</style>
