<script>
    import SelectBoxBorderNone from "./../customComponents/selectbox/SelectBoxBorderNone.svelte";
    import SelectBox from "./../customComponents/selectbox/SelectBox.svelte";

    let selectedLocal = "전체";
    let localRadio = ["전체", "상세설정"];

    function onChangeLocal(event) {
        selectedLocal = event.currentTarget.value;
    }

    let selectedProduct = "전체";
    let productRadio = ["전체", "렌텔", "구매", "시범", "기타", "유지보수"];

    function onChangeProduct(event) {
        selectedProduct = event.currentTarget.value;
    }

    let selectedAge = "전체";
    let ageRadio = [
        { value: "전체", total: 123 },
        { value: "등록", total: 60 },
        { value: "출고", total: 30 },
        { value: "설치", total: 30 },
        { value: "회수", total: 3 },
    ];

    function onChangeAge(event) {
        selectedAge = event.currentTarget.value;
    }

    // let selectedGender = "전체";
    // let genderRadio = ["전체", "남성", "여성"];

    // function onChangeGender(event) {
    //     selectedGender = event.currentTarget.value;
    // }
    // let selectedDate = 1;

    // let dateRadio = [
    //     { value: 1, label: "1개월" },
    //     { value: 2, label: "3개월" },
    //     { value: 3, label: "1년" },
    //     { value: 4, label: "직접입력" },
    // ];

    export let activeTabValue = 1;

    const onChangeDate = (tabValue) => () => (selectedDate = tabValue);

    let items = [
        { title: "서울", value: 1 },
        { title: "경기", value: 2 },
        { title: "대전", value: 3 },
    ];
    // let items2 = [
    //     { title: "강남구", value: 1 },
    //     { title: "깅북구", value: 2 },
    //     { title: "구로구", value: 3 },
    // ];

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
        <div class="radio-title">현황</div>
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
        <div class="radio-title">구매부분</div>
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
        <div class="radio-title">계약대상</div>
        <div class="radio">
            <SelectBox {items} placeholder="계약대상" long />
        </div>
    </div>
    <div class="radio-box">
        <div class="radio-title">계약번호</div>
        <div class="radio">
            <SelectBox {items} placeholder="23.12.12 | 20214DSFR515SGH" long />
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

 

</style>
