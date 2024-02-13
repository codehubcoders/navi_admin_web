<script>
        import Icon from "@iconify/svelte";

    let localtems = [
        {
            startDate: "2024.1.13",
            endDate: "2024.12.13",
            title: "가나라마가나다라마바사아자차카타파하바사",
            target: "전체",
            views: 65,
            read: true,
        },
        {
            startDate: "2024.1.13",
            endDate: "2024.12.13",
            title: "가나다라마바사아자차카타파하",
            target: "전체",
            views: 65,
            read: true,
        },
        {
            startDate: "2023.10.13",
            endDate: "2023.12.13",
            title: "가나다라마바사아자차카타파하",
            target: "전체",
            views: 65,
            read: false,
        },
        {
            startDate: "2023.10.13",
            endDate: "2023.12.13",
            title: "가나다라마바사아자차카타파하",
            target: "전체",
            views: 65,
            read: false,
        },
        {
            startDate: "2023.10.13",
            endDate: "2023.12.13",
            title: "가나다라마바사아자차카타파하",
            target: "전체",
            views: 65,
        },
        {
            startDate: "2023.10.13",
            endDate: "2023.12.13",
            title: "가나다라마바사아자차카타파하",
            target: "전체",
            views: 65,
        },
    ];
</script>

<div class="card-body">
    {#each localtems as item}
        <div class={item.read != true ? " w-box bg_gray" : "w-box"}>
            <div class="title">
                <p>{item.title}</p>
                <button
                    ><Icon
                        icon="material-symbols:close"
                        color="#8e9192"
                        width="18"
                    /></button
                >
              
            </div>

            <div class="info">
                <p>{item.target}</p>
                <div class="bottom">
                    <p>조회수{item.views}</p>
                    <p>{item.startDate}~{item.endDate}</p>
                </div>
            </div>
        </div>
    {/each}
</div>

<style lang="scss">
          @import 'src/lib/scss/style.scss';
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
        border-radius: 4px;
        .title {
            display: flex;
            justify-content: space-between;
            font-size: 14px;
            font-weight: 500;
        }
        .info {
            margin-top: 15px;
            .bottom {
                display: flex;
                justify-content: space-between;
            }
            p {
                color: #C5C7C8;
                font-size: 12px;
            }
        }
    }
    // .content {
    //     padding: 15px 20px;
    //     background-color: #F8FAFB;
    //     .txt {
    //         padding: 10px 0px;
    //         font-size: 14px;
    //         font-weight: 500;
    //         display: flex;
    //         justify-content: space-between;

    //         &-sm {
    //             font-size: 12px;
    //             color: #191C1D;
    //         }
    //     }
    // }
    .bg_gray {
        background-color: #F8FAFB;
    }
    .gray {
        color: #757779;
    }
</style>
