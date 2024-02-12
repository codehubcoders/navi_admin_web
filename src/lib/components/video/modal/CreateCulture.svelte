<script>
    // import SelectBox from "./../../customComponents/selectbox/SelectBox.svelte";
    import DatePickerUi from "./../../customComponents/datePicker/DatePickerUi.svelte";
    import SelectBoxBgW from "./../../customComponents/selectbox/SelectBoxBgW.svelte";

    // import Icon from "@iconify/svelte";
    import SoundtrackUpload from "../../../assets/icons/soundtrack_upload.svg";

    export let showCreateCulture = false;
    const handleCreateCulture = () => {
        showCreateCulture = !showCreateCulture;
    };

    

    let selectedState = "전체";
    let stateRadio = ["전체", "선택"];

    function onChangeState(event) {
        selectedState = event.currentTarget.value;
    }


    
    let selectedDate = "상시";
    let dateRadio = ["상시", "선택"];
    
    function onChangeDate(event) {
        selectedDate = event.currentTarget.value;
    }

    let items = [
        { title: "서울", value: 1 },
        { title: "경기", value: 2 },
        { title: "대전", value: 3 },
    ];
    let fixed = 1;
</script>

{#if showCreateCulture}
    <div class="backdrop" on:click|self>
        <div class="modal">
            <div class="modal__header">
                <p>문화등록</p>

                <div class="round">
                    <input type="checkbox" id="checkbox" value={fixed} />
                    <label for="checkbox" />
                    <div class="label">고정</div>
                </div>
            </div>
            <div class="modal__body">
                <div class="title">지은이</div>
                <input
                    type="text"
                    placeholder="지은이를 입력하세요."
                    class="inputBox"
                />
                <div class="title">제목</div>
                <input
                    type="text"
                    placeholder="제목을 입력하세요."
                    class="inputBox"
                />
                <div class="title">음원 업로드</div>
                <div class="thumbnail">
                    <SoundtrackUpload />
                    <p class="mt-10">내 컴퓨터에서 업로드</p>
                </div>
              
            <div class="title">게시지역</div>
            <div class="radio-box">
                <div class="radio">
                    {#each stateRadio as item, index}
                        <label
                            style={selectedState != item ? "color:#757779" : ""}
                        >
                            <input
                                checked={selectedState == item}
                                on:change={onChangeState}
                                type="radio"
                                name="state"
                                value={item}
                            />
                            <span class="fw-500"> {item}</span>
                        </label>
                    {/each}
                    <div class="mr-10" />
                    <SelectBoxBgW {items} placeholder="시" width="100px" />
                    <SelectBoxBgW {items} placeholder="군" width="100px" />
                    <SelectBoxBgW {items} placeholder="구" width="100px"  />
                </div>
            </div>

            <div class="title">게시기간</div>
            <div class="radio-box">
                <div class="radio">
                    {#each dateRadio as item, index}
                        <label
                            style={selectedDate != item ? "color:#757779" : ""}
                        >
                            <input
                                checked={selectedDate == item}
                                on:change={onChangeDate}
                                type="radio"
                                name="date"
                                value={item}
                            />
                            <span class="fw-500"> {item}</span>
                        </label>
                    {/each}
                    <div class="mr-10" />
                <DatePickerUi  width="100px"/> <span class="ml-10 mr-10"> ~ </span>
                <DatePickerUi  width="100px"/>
                </div>
            </div>

            
        </div>
           

            <div class="modal__button">
                <button class="btn-gray mr-10" on:click={handleCreateCulture}
                    >취소</button
                >
                <button class="btn-primary" on:click={handleCreateCulture}
                    >등록하기</button
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
        max-width: 550px;
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
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        &__body {
            text-align: left;
            font-size: 12px;
            font-weight: 400;
            // color: #8E9192;
            line-height: 1.4em;
            margin-bottom: 20px;
            .title {
                margin-top: 10px;
                font-weight: 400;
                span {
                    color: #A9ABAD;
                    font-size: 12px;
                }
            }
            .inputBox {
                padding: 0px 10px;
                height: 33px;
                input[type="text"] {
                    height: 33px;
                    border-radius: 4px;
                }
                input::placeholder {
                    font-size: 12px;
                    color: #5C5F60;
                    font-weight: 300;
                }
            }
        }
        &__button {
            margin-bottom: 20px;
            display: flex;
            justify-content: end;
        }
    }
    .row {
        display: flex;
        width: 100%;
        gap: 10px;
        align-items: center;
    }

    .thumbnail {
        margin-top: 10px;
        background-color: white;
        font-size: 12px;
        text-align: center;
        border-radius: 8px;
        border: 1px solid #E1E3E4;
        padding: 30px;
    }

    .round {
        position: relative;
        display: flex;
        align-items: center;
    }

    .round label {
        background-color: #fff;
        border: 1px solid #ccc;
        border-radius: 50%;
        cursor: pointer;
        height: 15px;
        left: 0;
        position: absolute;
        top: 0;
        width: 15px;
    }
    .label {
        font-size: 12px;
        font-weight: 400;
        color: #A9ABAD;
    }
    .round label:after {
        border: 2px solid #fff;
        border-top: none;
        border-right: none;
        content: "";
        height: 5px;
        left: 4px;
        opacity: 0;
        position: absolute;
        top: 3px;
        transform: rotate(-45deg);
        width: 5px;
    }

    .round input[type="checkbox"] {
        visibility: hidden;
    }

    .round input[type="checkbox"]:checked + label {
        background-color: #596DDF;
        border-color: #596DDF;
    }

    .round input[type="checkbox"]:checked + label:after {
        opacity: 1;
    }

    .radio-box {
        .radio {
            background-color: white;
            align-items: center;
            display: flex;
            flex-wrap: wrap;
            label {
                font-size: 12px;
                line-height: 2rem;
                padding: 0.2em 0em;
                margin-right: 10px;
            }
            [type="radio"],
            span {
                vertical-align: middle;
            }
            [type="radio"] {
                width: 1.25em;
                height: 1.25em;
            }
        }
        .detail {
            display: flex;
        }
    }
</style>
