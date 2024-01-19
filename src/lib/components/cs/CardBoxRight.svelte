<script>
    let boxItems2 = [
        {
            local: "가평군",
            name: "홍길동",
            date: "2023.12.13 16:12",
            title: "원격관리로 알람설정 변경",
            message: "원격관리로 해결",
        },
        {
            local: "부천시",
            name: "홍길동",
            date: "2023.12.13 16:12",
            title: "기기화면 불량으로 A/S요청",
            message: "A/S기사 연결",
        },
        {
            local: "강남구",
            name: "홍길동",
            date: "2023.12.13 16:12",
            title: "원격관리로 알람설정 변경",
            message: "23년 12월 15일 오후 2시 방문예약",
        },
    ];
</script>

<div class="card-body">
    {#each boxItems2 as item}
        <div>
            <div class="w-box">
                <p>{item.local} {item.name}</p>
                <button class="btn-detaile-gray" on:click>상세내역</button>
            </div>
            <div class="content">
                <p class="txt-sm">
                    {item.date}
                </p>
                <p class="txt">
                    {item.title}
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
        // height: 500px;
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

            &-sm {
                font-size: 12px;
                color: #191C1D;
            }
        }
    }
</style>
