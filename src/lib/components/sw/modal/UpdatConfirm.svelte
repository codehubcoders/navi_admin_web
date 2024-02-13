<script>
    import DatePicker from "./../../customComponents/datePicker/DatePicker.svelte";

    export let showUpdateConfirm = false;
    const handleUpdateConfirm = () => {
        showUpdateConfirm = !showUpdateConfirm;
    };
    const locale = {
        ko: {
            days: "일|월|화|수|목|금|토".split("|"),
            months: "1월|2월|3월|4월|5월|6월|7월|8월|9월|10월|11월|12월".split(
                "|"
            ),
            start: 0,
        },
    };

    let culture = "ko";

    let startDate = "";

    function handleDatePickerClose() {
        showDatePicker = false;
        document.body.removeEventListener("click", handleDatePickerClose);
    }

    let seletedAmPm = 1;

    let ampmList = [
        {
            name: "AM",
            value: 1,
        },
        {
            name: "PM",
            value: 2,
        },
    ];
    const handleAmPm = (value, name) => () => {
        seletedAmPm = value;
        amPm = name;
    };

    let hour = "";
    let minute = "";
    let amPm = "";
</script>

{#if showUpdateConfirm}
    <div class="backdrop" on:click|self>
        <div class="modal">
            <div class="modal__header">
                <p>업데이트관리</p>
            </div>

            <div class="modal__body">
                <p class="title mb-10">베포일자</p>
                <div class="line-box mb-15">
                    <p class="date-value pl-10">{startDate} {hour} 
                        {#if hour != ""}
                        :
                        {/if}
                         {minute} {amPm}</p>
                </div>
                <div class="center mt-15">
                    <DatePicker
                        width="50px"
                        bind:value={startDate}
                        {...locale[culture]}
                    />
                </div>
                <p class="title mt-15">시간설정</p>
                <div class="time-box">
                    <input type="text" bind:value={hour} />:
                    <input type="text" bind:value={minute} />
                    <div class="ampm-box">
                        {#each ampmList as item}
                            {#if item.value == 1}
                                <button
                                    on:click={handleAmPm(item.value, item.name)}
                                    class="pm {item.value === seletedAmPm
                                        ? 'am'
                                        : ''}">{item.name}</button
                                >
                            {:else}
                                <button
                                    on:click={handleAmPm(item.value, item.name)}
                                    class="pm {item.value === seletedAmPm
                                        ? 'selected'
                                        : ''}">{item.name}</button
                                >
                            {/if}

                        {/each}
                    </div>
                </div>
                <div class="bottom-txt">
                    <p>시간</p>
                    <p>분</p>
                </div>
                <p class="title">담당자</p>
                <input type="text" placeholder="담당자">
            </div>

            <div class="modal__button">
                <button
                    class="btn-detail-gray"
                    style="background-color:#E1E3E4"
                    on:click={handleUpdateConfirm}
                    ><div style="color:white">취소</div></button
                >
                <button
                    class="btn-primary-small ml-10"
                    on:click={handleUpdateConfirm}>확인</button
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
        max-width: 380px;
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
            font-size: 12px;
            font-weight: 400;
            color: #444748;
            line-height: 1.4em;
            margin-bottom: 20px;
            .title {
                font-size: 12px;
                font-weight: 500;
            }
            input[type="text"] {
                height: 36px;
                color: #444748;
            }
        }
        &__button {
            margin-bottom: 20px;
            display: flex;
            justify-content: end;
        }
    }
    .line-box {
        display: flex;
        align-items: center;

        height: 30px;
        width: 100%;
        border: 2px solid #5E72E4;
        .date-value {
            font-size: 14px;
            color: #444748;
            // padding-left: 20px;
        }
    }
    .time-box {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 39px;
        padding: 0 20px;
     
        input[type="text"] {
            width: 120px;
            height: 60px;
            font-size: 39px;
            text-align: center;
        }
        .ampm-box {
            text-align: center;
            background-color: #EFF1F2;
            font-size: 15px;
            font-weight: 400;
            border-radius: 8px;
            border: 1px solid #757779;
            color: #8E9192;
           
            .am {
                height: 30px;
                border-radius: 7px 7px 0 0;
                color: white;
                background-color: #5E72E4;
                // width: 100%;
                padding: 4px 10px;
            }
            .pm {
                height: 30px;
                padding: 4px 12px;
            }
        }
    }

    .bottom-txt {
        padding: 0 20px;
        display: flex;
        justify-content: space-between;
        width:  180px;
        font-size: 12px;
        color: #49454F;
        margin-bottom: 20px;
    }
    .selected {
        color: white;
        object-fit: cover;
        border-radius: 0 0 7px 7px;
        background-color: #5E72E4;
        // width: 100%;
    }
</style>
