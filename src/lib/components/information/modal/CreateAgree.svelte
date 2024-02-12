<script>
    // import SelectBox from "./../../customComponents/selectbox/SelectBox.svelte";
    import DatePickerUi from "./../../customComponents/datePicker/DatePickerUi.svelte";
    import SelectBoxBgW from "./../../customComponents/selectbox/SelectBoxBgW.svelte";

    import Icon from "@iconify/svelte";


    export let showCreateAgree = false;
    const handleCreateAgree = () => {
        showCreateAgree = !showCreateAgree;
    };

    let selectMember = "나비 회원";
    let MemberRadio = ["나비 회원", "모바일 회원", "기관 회원"];

    function onChangeMember(event) {
        selectMember = event.currentTarget.value;
    }



    let selectChoice = "필수항목";
    let ChoiceRadio = ["필수항목", "선택항목"];

    function onChangeChoicev(event) {
        selectChoice = event.currentTarget.value;
    }
</script>

{#if showCreateAgree}
    <div class="backdrop" on:click|self>
        <div class="modal">
            <div class="modal__header">
                <p>개인정보처리방침 등록</p>

           
            </div>
            <div class="modal__body">
                <div class="title">제목</div>
                <input
                    type="text"
                    placeholder="제목을 입력하세요."
                    class="inputBox"
                />
                <div class="upload-box">
                    <div class="label">내용</div>
                    <textarea placeholder="상담내용을 입력하세요" />
                    <div class="upload-bar">
                        <div class="icon">
                            <Icon icon="uil:upload-alt" color="#8e9192" width="18" />
                        </div>
                    </div>
                </div>
             
                <div class="title">게시대상</div>
                <div class="radio-box">
                    <div class="radio">
                        {#each MemberRadio as item, index}
                            <label
                                style={selectMember != item ? "color:#757779" : ""}
                            >
                                <input
                                    checked={selectMember == item}
                                    on:change={onChangeMember}
                                    type="radio"
                                    name="member"
                                    value={item}
                                />
                                <span class="fw-500"> {item}</span>
                            </label>
                        {/each}
                    </div>
                </div>
           
     

            <div class="title">항목</div>
            <div class="radio-box">
                <div class="radio">
                    {#each ChoiceRadio as item, index}
                        <label
                            style={selectChoice != item ? "color:#757779" : ""}
                        >
                            <input
                                checked={selectChoice == item}
                                on:change={onChangeChoicev}
                                type="radio"
                                name="choice"
                                value={item}
                            />
                            <span class="fw-500"> {item}</span>
                        </label>
                    {/each}
                </div>
            </div>
        </div>
           

            <div class="modal__button">
                <button class="btn-gray mr-10" on:click={handleCreateAgree}
                    >취소</button
                >
                <button class="btn-primary" on:click={handleCreateAgree}
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

    
    .upload-box {
            position: relative;

            textarea {
                color: #8E9192;
                height: 200px;
            }
            .upload-bar {
                position: absolute;
                width: calc(100% - 2px);
                background-color: #F5F5F5;
                bottom: 0px;
                border: 1px solid #E1E3E4;
                border-top: none;
                border-radius: 0 0 12px 12px;
                padding: 8px 0px;
                .icon {
                    padding-left: 20px;
                }
            }
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
