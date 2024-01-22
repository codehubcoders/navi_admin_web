<script>
	import SelectBox from '../customComponents/selectbox/SelectBox.svelte';
    import DatePickerUi from "../customComponents/datePicker/DatePickerUi.svelte";
    let selectedAge = "전체";
    let ageRadio = ["전체", "60대", "70대", "80대", "90대"];

    function onChangeAge(event) {
        selectedAge = event.currentTarget.value;
    }

    let selectedProduct = "전체";
    let ProductRadio = ["전체", "스탠다드", "플러스"];

    function onChangeProduct(event) {
        selectedProduct = event.currentTarget.value;
    }

    let selectedAlarm = "전체";
    let AlarmRadio = ["전체", "경고", "위험"];

    function onChangeAlarm(event) {
        selectedAlarm = event.currentTarget.value;
    }

    let items = [
    { title: "서울", value: 1},
    { title: "경기", value: 2 },
    { title: "대전", value: 3},
  ];
  let items2= [
    { title: "강남구", value: 1},
    { title: "깅북구", value: 2 },
    { title: "구로구", value: 3},
  ];
  let items3= [
    { title: "개포동", value: 1},
    { title: "노원구", value: 2 },
    { title: "가산동", value: 3},
  ];
   let selected
</script>
    <div class="radio-group">
        <div class="radio-box">
            <div class="radio-title">연령대별</div>
            <div class="radio">
                {#each ageRadio as item, index}
                    <label>
                        <input
                            checked={selectedAge === item}
                            on:change={onChangeAge}
                            type="radio"
                            name="age"
                            value={item}
                        />
                        <span class="fw-500"> {item}</span>
                    </label>
                {/each}
            </div>
        </div>
        <div class="radio-box">
            <div class="radio-title">제품출고일</div>
            <div class="radio">
                <DatePickerUi /> <span class="mr-10 ml-10">~</span>
                <DatePickerUi />
            </div>
        </div>
        <div class="radio-box">
            <div class="radio-title">제품별</div>
            <div class="radio">
                {#each ProductRadio as item, index}
                    <label>
                        <input
                            checked={selectedProduct === item}
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
            <div class="radio-title">경고/위험</div>
            <div class="radio">
                {#each AlarmRadio as item, index}
                    <label>
                        <input
                            checked={selectedAlarm === item}
                            on:change={onChangeAlarm}
                            type="radio"
                            name="amount"
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
                <SelectBox {items} placeholder="대분류" />
                <SelectBox {items2} placeholder="중분류" />
                <SelectBox {items3} placeholder="소분류" />
            </div>
        </div>
    </div>

<style lang="scss">
          @import 'src/lib/scss/style.scss';
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
            @media (max-width: 535px) {
                grid-template-columns: 1fr;
            }
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
                    font-size: 13px;
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
        }
    }
    .radio {
        .date {
            position: relative;
        }
        .date-bg {
            position: absolute;
            background: none;
        }
    }
</style>
