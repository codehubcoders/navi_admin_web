<script>
    let boxItems2 = [
        {
            title: "나비 2.0 ver",
            message: "앱 전반적인 업데이트",
            status: "완료",
        },
        {
            title: "나비 1.9 ver",
            message: "앱 전반적인 업데이트",
            status: "완료",
        },
        {
            title: "나비 1.3 ver",
            message: "앱 전반적인 업데이트",
            status: "완료",
        },
        {
            title: "나비 1.9 ver",
            message: "앱 전반적인 업데이트",
            status: "완료",
        },
        {
            title: "나비 1.3 ver",
            message: "앱 전반적인 업데이트",
            status: "완료",
        },
    ];
</script>

<div class="card-body">
    {#each boxItems2 as item}
        <div>
            <div class="w-box">
                <p>{item.title}</p>
                <button class="btn-detail-gray" on:click>상세내역</button>
            </div>
            <div class="content">
                <p class="txt">
                    {item.message}
                </p>
                <p class="txt-sm">
                    {item.status}
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
        display: flex;
        justify-content: space-between;
        align-items: center;
        .txt {
            padding: 10px 0px;
            font-size: 14px;
            color: #191C1D;

            &-sm {
                font-size: 12px;
            }
        }
    }
</style>
