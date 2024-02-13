<script>
    import DatePickerUi from "./../../customComponents/datePicker/DatePickerUi.svelte";
    import SelectBoxBgW from "./../../customComponents/selectbox/SelectBoxBgW.svelte";

    import Icon from "@iconify/svelte";

 

    export let showDetailUsim = false;
    const handleDetailUsim = () => {
        showDetailUsim = !showDetailUsim;
    };
   
    let items = [
        { title: "서울", value: 1 },
        { title: "경기", value: 2 },
        { title: "대전", value: 3 },
    ];
</script>


{#if showDetailUsim}
    <div class="backdrop" on:click|self> 
        <div class="modal">
            <div class="modal__header">
                <p>계약등록</p>
            </div>
            <div class="modal__body">
                <div class="title">계약방법</div>
                <SelectBoxBgW {items} width="100%" placeholder="렌탈" />
                <div class="title">계약대상</div>
                <input type="text" placeholder="계약대상" class="inputBox" />
                <div class="title">서비스 제품</div>
                <SelectBoxBgW {items} width="100%" placeholder="스탠다드" />
                <div class="title">계약일자</div>
                <DatePickerUi width="50%" />
                <div class="title">납품기한</div>
                <DatePickerUi width="50%" />
                <div class="title">계약기간</div>
                <div class="row">
                    <DatePickerUi width="100px" /> ~ <DatePickerUi
                        width="100px"
                    />
                </div>
                <div class="title">지역설정</div>
                <div class="row">
                    <SelectBoxBgW {items} width="100%" placeholder="시" />
                    <SelectBoxBgW {items} width="100%" placeholder="군" />
                    <SelectBoxBgW {items} width="100%" placeholder="구" />
                </div>
                <div class="title">대상 수량</div>
                <input
                    type="text"
                    placeholder="수량을 입력해주세요"
                    class="inputBox"
                />
                <div class="title">조달청 계약번호</div>
                <input
                    type="text"
                    placeholder="계약번호를 입력해주세요"
                    class="inputBox"
                />
                <div class="title">첨부파일</div>
                <div class="thumbnail">
                    <Icon icon="lets-icons:add-square-light" width="60" />
                    <p>내 컴퓨터에서 업로드</p>
                </div>
                <div class="title">계약담당자</div>
                <input
                    type="text"
                    placeholder="계약번호를 입력해주세요"
                    class="inputBox"
                />
                <div class="title">기타메모</div>
                <div class="upload-box">
                    <textarea placeholder="메모" />
                    <div class="upload-bar">
                        <div class="icon">
                            <Icon
                                icon="uil:upload-alt"
                                color="#8e9192"
                                width="18"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div class="modal__button">
                <button class="btn-gray mr-10" on:click={handleDetailUsim}
                    >취소</button
                >
                <button class="btn-primary" on:click={handleDetailUsim}
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
        max-width: 450px;
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

    .thumbnail {
        margin-top: 10px;
        background-color: white;
        font-size: 12px;
        text-align: center;
        border-radius: 8px;
        border: 1px solid #E1E3E4;
        padding: 30px;
    }
</style>
