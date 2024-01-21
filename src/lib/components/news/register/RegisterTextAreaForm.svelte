<script>
    import SelectBox from "./../../customComponents/selectbox/SelectBox.svelte";
    import DatePickerUi from "./../../customComponents/datePicker/DatePickerUi.svelte";

    export const label = "";
    import Icon from "@iconify/svelte";

    let radio1 = "";
    let radioList1 = ["알림"];
    let radio2 = "건강";
    let radioList2 = ["건강", "홍보", "기타"];
    let radio3 = "전체";
    let radioList3 = ["전체", "선택"];

    function onChange(event) {
        radio1 = event.currentTarget.value;
    }

    function onChange1(event) {
        radio2 = event.currentTarget.value;
    }

    function onChange2(event) {
        radio3 = event.currentTarget.value;
    }

    let items = [
        { title: "서울", value: 1 },
        { title: "경기", value: 2 },
    ];
    let items2 = [
        { title: "강남", value: 1 },
        { title: "강북", value: 2 },
    ];
    let items3 = [
        { title: "도곡동", value: 1 },
        { title: "개포동", value: 2 },
    ];
</script>

<div class="register-input">
    <div class="content">
        <div class="label">내용</div>
        <textarea placeholder="내용을 입력하세요." />
        <div class="upload-bar">
            <div class="icon">
                <Icon icon="uil:upload-alt" color="#8e9192" width="18" />
            </div>
        </div>
    </div>
    <div class="radio-btn mt-10">
        <div class="label">썸네일</div>
        <div class="thumbnail">
            <Icon icon="lets-icons:add-square-light" width="60" />
            <p>내 컴퓨터에서 업로드</p>
        </div>
    </div>
    <div class="radio-btn">
        <div class="label">알림여부</div>

        <div class="radio">
            {#each radioList1 as item, index}
                <label style={radio1 == item ? "" : "color:#A9ABAD"}>
                    <input
                        checked={radio1 === item}
                        type="radio"
                        value={item}
                        on:change={onChange}
                    />
                    <span class="fw-500"> {item}</span>
                </label>
            {/each}
        </div>
    </div>

    <div class="radio-btn">
        <div class="label">지역설정</div>
        <div class="radio">
            {#each radioList3 as item, index}
                <label>
                    <input
                        checked={radio3 === item}
                        type="radio"
                        value={item}
                        on:change={onChange2}
                    />
                    <span class="fw-500"> {item}</span>
                </label>
            {/each}
            <div class="selecte-local">
                <SelectBox {items} placeholder="시" />
                <SelectBox {items2} placeholder="군" />
                <SelectBox {items3} placeholder="구" />
                <button class="btn-primary-small">추가</button>
            </div>
        
        </div>
        <div class="add-local">
            <div class="local-list">
                <p>서울시 강남구 역삼동</p>
                <Icon
                    icon="material-symbols-light:close"
                    color="#c5c7c8"
                    width="15"
                />
            </div>
            <div class="local-list">
                <p>서울시 강남구 역삼동</p>
                <Icon
                    icon="material-symbols-light:close"
                    color="#c5c7c8"
                    width="15"
                />
            </div>
            <div class="local-list">
                <p>서울시 강남구 역삼동</p>
                <Icon
                    icon="material-symbols-light:close"
                    color="#c5c7c8"
                    width="15"
                />
            </div>
        </div>
    </div>

    <div class="radio-btn">
        <div class="label">태그</div>

        <div class="radio">
            {#each radioList2 as item, index}
                <label>
                    <input
                        checked={radio2 === item}
                        type="radio"
                        value={item}
                        on:change={onChange1}
                    />
                    <span class="fw-500"> {item}</span>
                </label>
            {/each}
        </div>
    </div>

    <div class="label">게시기간</div>
    <div class="datePicker">
        <DatePickerUi /> <span class="mr-10 ml-10">~</span>
        <DatePickerUi />
    </div>
    <div class="bottom-btn">
        <button class="btn-primary">미리보기</button>
        <button class="btn-gray w">취소</button>
    </div>
</div>

<style lang="scss">
    .register-input {
        text-align: left;
        padding: 5px 5px;
        display: block;

        .content {
            position: relative;

            textarea {
                color: #8E9192;
                height: 300px;
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
        .radio-btn {
            padding: 5px;
        }
    }
    .label {
        display: inline-block;
        margin-top: 10px;
        font-size: 16px;
    }

    .radio {
        align-items: center;
        display: flex;
        flex-wrap: wrap;
        margin-top: 5px;
        input[type="radio"] {
            // -webkit-appearance: none;
            width: 18px;
            height: 18px;
            border-radius: 50%;
            outline: none;
            border: 1px solid gray;
        }

        label {
            font-size: 13px;
            line-height: 2rem;
            padding: 0 0.4em;
        }
        [type="radio"],
        span {
            vertical-align: middle;
            padding-left: 3px;
        }

        .selecte-local {
            margin-left: 20px;
            display: flex;
            align-items: center;
            margin-top: 5px;
            @media (max-width: 535px) {
                display: inline-block;
            }
        }
    }
    .datePicker {
        display: flex;
        margin-top: 20px;
        align-items: center;
    }
    .bottom-btn {
        margin: 20px 0;
        display: flex;
        justify-content: space-between;
    }
    .thumbnail {
        margin-top: 10px;
        width: 60%;
        background-color: white;
        font-size: 12px;
        text-align: center;
        border-radius: 8px;
        border: 1px solid #E1E3E4;
        padding: 30px;
    }
    .add-local {
        background-color: white;
        border-radius: 8px;
        border: 1px solid #E1E3E4;
        width: 505px;
        padding: 5px 0;
        @media (max-width: 535px) {
                // display: inline-block;
                width: 100%;
            }
        .local-list {
            font-size: 12px;
            color: #5C5F60;
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 0px 20px;
            padding: 7px 0;
            border-bottom: 1px solid #EFF1F2;
            
            &:nth-last-child(1) {
                border-bottom: none;
            }
            p {
                font-size: 12px;
                color: #5C5F60;
            }
        }
    }
</style>
