<script>
    import SelectBoxBorderNone from "./../customComponents/selectbox/SelectBoxBorderNone.svelte";
    import SelectBox from "./../customComponents/selectbox/SelectBox.svelte";

    let selectedLocal = "전체";
    let localRadio = ["전체", "상세설정"];

    function onChangeLocal(event) {
        selectedLocal = event.currentTarget.value;
    }

    let selectedProduct = "전체";
    let productRadio = ["전체", "플러스", "스탠다드"];

    function onChangeProduct(event) {
        selectedProduct = event.currentTarget.value;
    }

    let selectedAge = "전체";
    let ageRadio = [
        { value: "전체", total: 123 },
        { value: "60대", total: 50 },
        { value: "70대", total: 43 },
        { value: "80대", total: 20 },
        { value: "90대", total: 10 },
    ];

    function onChangeAge(event) {
        selectedAge = event.currentTarget.value;
    }

    let selectedGender = "전체";
    let genderRadio = ["전체", "남성", "여성"];

    function onChangeGender(event) {
        selectedGender = event.currentTarget.value;
    }
    let selectedDate = 1;

    let dateRadio = [
        { value: 1, label: "1개월" },
        { value: 2, label: "3개월" },
        { value: 3, label: "1년" },
        { value: 4, label: "직접입력" },
    ];

    export let activeTabValue = 1;

    const onChangeDate = (tabValue) => () => (selectedDate = tabValue);

    let items = [
        { title: "서울", value: 1 },
        { title: "경기", value: 2 },
        { title: "대전", value: 3 },
    ];
    let items2 = [
        { title: "강남구", value: 1 },
        { title: "깅북구", value: 2 },
        { title: "구로구", value: 3 },
    ];

    let user = {
        ageRange: 0,
    };

    let onChangeAgeRange = 0;

    const onChange = () => {
        onChangeAgeRange = user.ageRange;
    };
</script>

<button class="btn-primary  mt-5">Excel다운로드</button>
<div class="radio-group">
    <div class="radio-box">
        <div class="radio-title">지역</div>
        <div class="radio">
            {#each localRadio as item, index}
                <label style={selectedLocal != item ? "color:#757779" : ""}>
                    <input
                        checked={selectedLocal == item}
                        on:change={onChangeLocal}
                        type="radio"
                        name="local"
                        value={item}
                    />
                    <span class="fw-500"> {item}</span>
                </label>
            {/each}

            <div class="detail">
                <SelectBox {items} placeholder="대분류" />
                <SelectBox {items} placeholder="중분류" />
                <SelectBox {items} placeholder="소분류" />
            </div>
        </div>
    </div>
    <div class="radio-box">
        <div class="radio-title">주관기관</div>
        <div class="radio">
            <SelectBox {items} placeholder="주관기관" long />
        </div>
    </div>
    <div class="radio-box">
        <div class="radio-title">제품</div>
        <div class="radio">
            {#each productRadio as item, index}
                <label style={selectedProduct != item ? "color:#757779" : ""}>
                    <input
                        checked={selectedProduct == item}
                        on:change={onChangeProduct}
                        type="radio"
                        name="product"
                        value={item}
                    />
                    <span class="fw-500"> {item}</span>
                </label>
            {/each}
        </div>
    </div>

    <div class="radio-box">
        <div class="radio-title">연령대별</div>
        <div class="radio">
            {#each ageRadio as item, index}
                <label style={selectedAge != item.value ? "color:#757779" : ""}>
                    <input
                        checked={selectedAge == item.value}
                        on:change={onChangeAge}
                        type="radio"
                        name="age"
                        value={item.value}
                    />
                    <span class="fw-500"> {item.value}({item.total})</span>
                </label>
            {/each}
        </div>
    </div>
    <div class="radio-box">
        <div class="radio-title">성별</div>
        <div class="radio">
            {#each genderRadio as item, index}
                <label style={selectedGender != item ? "color:#757779" : ""}>
                    <input
                        checked={selectedGender == item}
                        on:change={onChangeGender}
                        type="radio"
                        name="gender"
                        value={item}
                    />
                    <span class="fw-500"> {item}</span>
                </label>
            {/each}
        </div>
    </div>
    <div class="radio-box">
        <div class="radio-title">기간</div>
        <div class="radio">
            <SelectBox {items} placeholder="일간" />
            <div class="radio-btn">
                {#each dateRadio as item, index}
                    <button on:click={onChangeDate(item.value)}>
                        <div
                            class="custom {selectedDate === item.value
                                ? 'active'
                                : ''}"
                        >
                            {item.label}
                        </div>
                    </button>
                {/each}
            </div>
            <div class="radio-date-box ml-20">
                <div class="dateBox">
                    <SelectBoxBorderNone {items} placeholder="2023" />
                </div>
                <div class="dateBox">
                    <SelectBoxBorderNone {items} placeholder="12" />
                </div>
                <div class="dateBox">
                    <SelectBoxBorderNone {items} placeholder="25" />
                </div>
                </div>
                <p class="ml-10 mr-10">-</p>
                <div class="radio-date-box">
                <div class="dateBox">
                    <SelectBoxBorderNone {items} placeholder="2023" />
                </div>
                <div class="dateBox">
                    <SelectBoxBorderNone {items} placeholder="12" />
                </div>
                <div class="dateBox">
                    <SelectBoxBorderNone {items} placeholder="25" />
                </div>
            </div>
        </div>
    </div>
</div>

<style lang="scss">
    @import "src/lib/scss/style.scss";
    .btn-primary {
        margin: 0 0 0 auto;
    }
    label {
        font-size: 18px;
        line-height: 2rem;
        padding: 0.2em 0.4em;
    }

    .radio-group {
        padding-top: 10px;
        .radio-box {
            display: grid;
            grid-template-columns: 2fr 10fr;

            .radio-title {
                min-height: 50px;
                display: flex;
                font-size: 13px;
                align-items: center;
                background-color: #EFF1F2;
                padding-left: 20px;
            }
            .radio {
                min-height: 50px;
                background-color: white;
                align-items: center;
                display: flex;
                flex-wrap: wrap;
                padding-left: 20px;
                label {
                    font-size: 12px;
                    line-height: 2rem;
                    padding: 0.2em 0.4em;
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
                margin-left: 10px;
            }
        }
    }
    .radio-btn {
        display: flex;
        font-size: 12px;
        color: #2E3132;
        border-top: 1px solid #C5C7C8;
        border-bottom: 1px solid #C5C7C8;
        border-left: 1px solid #C5C7C8;
        .custom {
            text-align: center;
            border-right: 1px solid #C5C7C8;
            cursor: pointer;
            padding: 8px 10px;
            box-sizing: content-box;
        }
    }
    .active {
        background-color: #F5F5F5;
    }
    .radio-date-box{
         display: flex;
         border-top: 1px solid #C5C7C8;
        border-bottom: 1px solid #C5C7C8;
        border-left: 1px solid #C5C7C8;
        .dateBox {
        text-align: center;
        border-right: 1px solid #C5C7C8;
        cursor: pointer;
        padding: 1px 4px;
        box-sizing: content-box;
    }
    }
</style>
