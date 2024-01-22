<script>
    import DatePickerUi from "./../customComponents/datePicker/DatePickerUi.svelte";
    import SelectBox from "./../customComponents/selectbox/SelectBox.svelte";

    export const label = "";
    import Icon from "@iconify/svelte";

    let radio1 = "";
    let radioList1 = ["고정"];
    let radio2 = "전체";
    let radioList2 = ["전체", "나비 회원", "모바일 회원"];
    let radio3 = "전체";
    let radioList3 = ["전체", "선택"];

    let items = [
        { title: "서울", value: 1 },
        { title: "경기", value: 2 },
    ];
    function onChange1(event) {
        radio1 = event.currentTarget.value;
    }

    let items2 = [
        { title: "강남", value: 1 },
        { title: "강북", value: 2 },
    ];
    function onChange2(event) {
        radio2 = event.currentTarget.value;
    }

    let items3 = [
        { title: "도곡동", value: 1 },
        { title: "개포동", value: 2 },
    ];
    function onChange3(event) {
        radio3 = event.currentTarget.value;
    }

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
        <div class="label">상단 고정</div>

        <div class="radio">
            {#each radioList1 as item, index}
                <label>
                    <input
                        checked={radio1 === item}
                        on:change={onChange1}
                        type="radio"
                        value={item}
                    />
                    <span class="fw-500"> {item}</span>
                </label>
            {/each}
        </div>
    </div>

    <div class="radio-btn">
        <div class="label">게시대상</div>

        <div class="radio">
            {#each radioList2 as item, index}
                <label>
                    <input
                        checked={radio2 === item}
                        type="radio"
                        value={item}
                        on:change={onChange2}
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
                        on:change={onChange3}
                    />
                    <span class="fw-500"> {item}</span>
                </label>
            {/each}
            <div class="selecte-local">
                <SelectBox {items} placeholder="시" />
                <SelectBox {items2} placeholder="군" />
                <SelectBox {items3} placeholder="구" />
            </div>
        </div>
    </div>

    <div class="label">게시기간</div>
    <div class="datePicker">
        <DatePickerUi /> <span class="mr-10 ml-10">~</span> <DatePickerUi />
    </div>
    <div class="bottom-btn">
        <button class="btn-primary">미리보기</button>
        <button class="btn-gray w">취소</button>
    </div>
</div>

<style lang="scss">
          @import 'src/lib/scss/style.scss';
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
        [type="radio"] {
            width: 1.25em;
            height: 1.25em;
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
    .datePicker{
        display: flex;
        margin-top: 20px;
            align-items: center;
    }
    .bottom-btn{
        margin: 20px 0;
        display: flex;
        justify-content: space-between;
    }
</style>
