<script>
    export let showTemPicker = false;
    const handleTimePickerClick = () => {
        showTemPicker = !showTemPicker;
    };
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
    const handleAmPm = (value) => () => (seletedAmPm = value);

    let hour = "";
    let minute = "";
    let amPm = "";
</script>

{#if showTemPicker}
    <div class="backdrop">
        <div class="modal">
            <div class="modal__body">
                <div class="time-box">
                    <input type="text" />:
                    <input type="text" />
                    <div class="ampm-box">
                        {#each ampmList as item}
                            <button on:click={handleAmPm(item.value)} class="pm {item.value === seletedAmPm ? 'selected' :"" }" >{item.name}</button>
                        {/each}
                    </div>
                </div>
                <div class="bottom-txt">
                    <p>시</p>
                    <p>분</p>
                </div>
            </div>
            <div class="modal__button">
                <button
                    class="btn-primary-text mr-5"
                    on:click={handleTimePickerClick}>취소</button
                >
                <button
                    class="btn-primary-small"
                    on:click={handleTimePickerClick}>확인</button
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
        padding: 20px 15px;
        border-radius: 10px;
        max-width: 250px;
        margin: 10% auto;
        text-align: center;
        background-color: white;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        &__body {
            text-align: left;
            font-size: 16px;
            font-weight: 400;
            // color: #8E9192;
            line-height: 1.4em;
            .bottom-txt {
                display: flex;
                justify-content: space-between;
                width: 130px;
                font-size: 12px;
                color: #49454F;
                margin-bottom: 20px;
            }
            .time-box {
                display: flex;
                justify-content: space-between;
                align-items: center;
                font-size: 39px;
                input {
                    width: 70px;
                    height: 70px;
                    font-size: 39px;
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
                        border-radius: 8px 8px 0 0;
                        color: white;
                        background-color: #5E72E4;
                        // width: 100%;
                        padding: 4px 12px;
                    }
                    .pm {
                        // border-radius: 8px 8px 0 0;
                        // background-color: #5E72E4;
                        // width: 100%;
                        padding: 4px 12px;
                    }
                }
            }
        }

        &__button {
            // margin-bottom: 20px;
            display: flex;
            justify-content: end;
        }
        .btn-primary-text {
            color: #5E72E4;
            font-size: 14px;
            font-weight: 500;
            padding: 2px 10px;
        }
    }

    .selected {
        color: white;
        background-color: #5E72E4;
        // width: 100%;
    }
</style>
