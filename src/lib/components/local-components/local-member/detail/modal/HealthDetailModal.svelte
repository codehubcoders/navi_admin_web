<script>
    // import StatisticsTable from './../../../customComponents/table/statisticsTable.svelte';
    export let showHealth = false;
    // const handleHealthClick = () => {
    //     showHealth = !showHealth;
    // };

    let tableList = [
        {
            title: "평균 걸음수",
            data: ["2528", "3854", "4563", "5672", "8732", "3512", "5421"],
            date: [
                "12/01",
                "12/02",
                "12/03",
                "12/04",
                "12/05",
                "12/06",
                "12/07",
            ],
        },
        {
            title: "걸음거리",
            data: ["2528", "3854", "4563", "5672", "8732", "3512", "5421"],
            date: [
                "12/01",
                "12/02",
                "12/03",
                "12/04",
                "12/05",
                "12/06",
                "12/07",
            ],
        },
        {
            title: "산소포화도",
            data: ["2528", "3854", "4563", "5672", "8732", "3512", "5421"],
            date: [
                "12/01",
                "12/02",
                "12/03",
                "12/04",
                "12/05",
                "12/06",
                "12/07",
            ],
        },
        {
            title: "혈압",
            data: ["2528", "3854", "4563", "5672", "8732", "3512", "5421"],
            date: [
                "12/01",
                "12/02",
                "12/03",
                "12/04",
                "12/05",
                "12/06",
                "12/07",
            ],
        },
        {
            title: "심박수",
            data: ["2528", "3854", "4563", "5672", "8732", "3512", "5421"],
            date: [
                "12/01",
                "12/02",
                "12/03",
                "12/04",
                "12/05",
                "12/06",
                "12/07",
            ],
        },
    ];
</script>

{#if showHealth}
    <div class="backdrop" on:click|self>
        <div class="modal">
            <div class="modal__header">
                <p>건강 상세보기</p>
            </div>
            <div class="modal__body">
                {#each tableList as item}
                    <div class="box">
                        <div class="title">{item.title}</div>
                        <table class="table_border">
                            <tr>
                                {#each item.date as dateItem}
                                    <td>{dateItem}</td>
                                {/each}
                            </tr>
                            <tr>
                                {#each item.data as dataItem}
                                    <td>{dataItem}</td>
                                {/each}
                            </tr>
                        </table>
                    </div>
                {/each}

                <!-- <StatisticsTable /> -->
                <!-- <p class="sub-title">전체이력</p>
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
                </div> -->
            </div>
            <!-- <div class="modal__button">
                <button class="btn-primary" on:click={handleHealthClick}
                    >확인</button
                >
            </div> -->
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
        max-width: 600px;
        margin: 5% auto;
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
            .box {
                background-color: white;
                padding: 20px;
                border-radius: 8px;
                box-shadow: 0 5px 10px rgba(173, 181, 217, 0.4);
                margin-bottom: 20px;
                .title {
                    font-size: 16px;
                    color: #444748;
                    text-align: left;
                    margin-bottom: 20px;
                }
            }

            .table_border {
                width: 100%;
                border: 1px solid #A9ABAD;
                border-collapse: collapse;
                tr {
                    border: 1px solid #A9ABAD;
                    border-collapse: collapse;
                }
                td {
                    padding: 8px 0px;
                    font-size: 9px;
                    color: #A9ABAD;
                    text-align: center;
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
