<script>
    // import StatisticsTable from './../../../customComponents/table/statisticsTable.svelte';
    export let showMedication = false;
    // const handleMedicationClick = () => {
    //     showMedication = !showMedication;
    // };

    let month = [
        {
            title: "1월",
            monthData: [
                {
                    notTaking: 45,
                    interest: 45,
                    taking: 90,
                    
                },
            ],
        },
        {
            title: "2월",
            monthData: [
                {
                    notTaking: 45,
                    interest: 45,
                    taking: 90,
                },
            ],
        },
        {
            title: "3월",
            monthData: [
                {
                    notTaking: 45,
                    interest: 45,
                    taking: 90,
                },
            ],
        },
        {
            title: "4월",
            monthData: [
                {
                    notTaking: 45,
                    interest: 45,
                    taking: 90,
                },
            ],
        },
        {
            title: "5월",
            monthData: [
                {
                    notTaking: 45,
                    interest: 45,
                    taking: 90,
                },
            ],
        },
        {
            title: "6월",
            monthData: [
                {
                    notTaking: 45,
                    taking: 45,
                    interest: 90,
                },
            ],
        },
        {
            title: "7월",
            monthData: [
                {
                    notTaking: 45,
                    interest: 45,
                    taking: 90,
                },
            ],
        },
        {
            title: "8월",
            monthData: [
                {
                    notTaking: 45,
                    interest: 45,
                    taking: 90,
                },
            ],
        },
        {
            title: "9월",
            monthData: [
                {
                    notTaking: 45,
                    interest: 45,
                    taking: 90,
                },
            ],
        },
        {
            title: "10월",
            monthData: [
                {
                    notTaking: 45,
                    interest: 45,
                    taking: 90,
                },
            ],
        },
        {
            title: "11월",
            monthData: [
                {
                    notTaking: 45,
                    interest: 45,
                    taking: 90,
                },
            ],
        },
        {
            title: "12월",
            monthData: [
                {
                    notTaking: 45,
                    interest: 45,
                    taking: 90,
                },
            ],
        },
    ];
    let quarter = [
        {
            title: "1분기",
            monthData: [
                {
                    notTaking: 45,
                    taking: 999,
                    interest: 999,
                },
            ],
        },
        {
            title: "2분기",
            monthData: [
                {
                    notTaking: 45,
                    taking: 999,
                    interest: 999,
                },
            ],
        },
        {
            title: "3분기",
            monthData: [
                {
                    notTaking: 45,
                    taking: 999,
                    interest: 999,
                },
            ],
        },
        {
            title: "4분기",
            monthData: [
                {
                    notTaking: 45,
                    taking: 999,
                    interest: 999,
                },
            ],
        },
    ];

    let year = [
        {
            title: "2022",
            monthData: [
                {
                    notTaking: 1234,
                   
                    interest: 1234,
                    taking: 45,
                },
            ],
        },
        {
            title: "2023",
            monthData: [
                {
                    notTaking: 1234,
                  
                    interest: 1234,
                    taking: 45,
                },
            ],
        },
    ];
</script>

{#if showMedication}
    <div class="backdrop" on:click|self>
        <div class="modal">
     
            <div class="modal__body">
                <div class="row">              <div class="color-box">
                    <div class="color green mr-5"/>
                    복용
                </div>
                <div class="color-box">
                    <div class="color orange mr-5"/>
                    관심
                </div>
                <div class="color-box">
                    <div class="color red mr-5"/>
                    복용
                </div></div>
                <div class="head">
                    월간
                </div>
                <div class="box">
                    {#each month as item}
                    <div class="column">
                        {#each item.monthData as barItem}
               
                            <div class="bar-chart">
                                <div
                                    class="bar red"
                                    style="height:{barItem.notTaking}px;"
                                >
                                    {barItem.notTaking}
                                </div>
                                <div
                                    class="bar orange"
                                    style="height:{barItem.interest}px"
                                >
                                    {barItem.interest}
                                </div>
                                <div
                                    class="bar green"
                                    style="height:{barItem.taking}px"
                                >
                                    {barItem.taking}
                                </div>
                            </div>
                        {/each}
                        <div class="title">{item.title}</div>
                    </div>
                        
                    {/each}
                </div>

                <div class="head">
                    분기
                </div>
                <div class="box">
                    {#each quarter as item}
                    <div class="column">
                        {#each item.monthData as barItem}
               
                            <div class="bar-chart">
                                <div
                                    class="bar red"
                                    style="height:{barItem.notTaking}px; width: 25px"
                                >
                                    {barItem.notTaking}
                                </div>
                                <div
                                    class="bar orange"
                                    style="height:{barItem.interest/10}px; width: 25px"
                                >
                                    {barItem.interest}
                                </div>
                                <div
                                    class="bar green"
                                    style="height:{barItem.taking/10}px; width: 25px"
                                >
                                    {barItem.taking}
                                </div>
                            </div>
                        {/each}
                        <div class="title">{item.title}</div>
                    </div>
                        
                    {/each}
                </div>


                <div class="head">
                    연간
                </div>
                <div class="box">
                    {#each year as item}
                    <div class="column">
                        {#each item.monthData as barItem}
               
                            <div class="bar-chart">
                                <div
                                    class="bar red"
                                    style="height:{barItem.notTaking/10}px; width: 35px"
                                >
                                    {barItem.notTaking}
                                </div>
                                <div
                                    class="bar orange"
                                    style="height:{barItem.interest/10}px; width: 35px"
                                >
                                    {barItem.interest}
                                </div>
                                <div
                                    class="bar green"
                                    style="height:{barItem.taking}px; width: 35px"
                                >
                                    {barItem.taking}
                                </div>
                            </div>
                        {/each}
                        <div class="title">{item.title}</div>
                    </div>
                        
                    {/each}
                </div>
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
        max-width: 600px;
        margin: 5% auto;
        text-align: center;
        background-color: white;
        display: flex;
        flex-direction: column;
        justify-content: space-between;


        &__body {
            .row{
                display: flex;
                justify-content: end;
                margin-top: 20px;
                .color-box{
                display: flex;
                font-size: 14px;
                font-weight: 600;
                margin-right: 10px;
                .color{
                    width: 16px;
                    height: 16px;
                }
            }
            }
     
            .head {
                font-size: 16px;
                color: #444748;
                text-align: left;
                margin-bottom: 20px;
            }
            .box {
                // overflow-y: hidden;
                overflow-x:scroll;
 
                background-color: #FAF9FC;
                padding: 20px;
                border-radius: 8px;
                display: flex;
                // box-shadow: 0 5px 10px rgba(173, 181, 217, 0.4);
                margin-bottom: 20px;
                
                .column{
                    
                    .bar-chart {
                    display: flex;
                    align-items: flex-end;
                    margin-right: 5px;
                  
                    .bar{padding: 0 5px 5px ;
                        display: flex;
                    align-items: flex-end; 
                    justify-content: center;
                    color: white;
                    font-size: 14px;
                    max-height: 100px;
                    margin-right: 4px;
                    }
                    
                }
                .title{
                    text-align: center;
                    font-size: 14px;
                    font-weight: 600;
                    margin-top: 10px;
                }
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

    .orange {
        background-color: #FF9933;
    }
    .red {
        background-color: #F5365C;
    }

    .green {
        background-color: #2DCE89;
    }
</style>
