<script>
import SelectBox from "../../customComponents/selectbox/SelectBox.svelte";


    // import SelectBoxBorderNone from "./../customComponents/selectbox/SelectBoxBorderNone.svelte";


   

    let selectedProduct = "전체";
    let productRadio = ["전체", "플러스", "스탠다드"];

    function onChangeProduct(event) {
        selectedProduct = event.currentTarget.value;
    }

    let selectedAge = "전체";
    let ageRadio = [
        { value: "전체"},
        { value: "경고"},
        { value: "위험"},
        { value: "주의" },
    ];

    function onChangeAge(event) {
        selectedAge = event.currentTarget.value;
    }



    let items = [
        { title: "서울", value: 1 },
        { title: "경기", value: 2 },
        { title: "대전", value: 3 },
    ];


</script>

<button class="btn-primary  mt-5">Excel다운로드</button>
<div class="radio-group">
    <div class="radio-box">
        <div class="radio-title">지역</div>
        <div class="radio">
    
                <SelectBox {items} placeholder="대분류" />
                <SelectBox {items} placeholder="중분류" />
                <SelectBox {items} placeholder="소분류" />
          
        </div>
    </div>
    
    <div class="radio-box">
        <div class="radio-title">제품별</div>
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
        <div class="radio-title">경고/위험</div>
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
                    <span class="fw-500"> {item.value}</span>
                </label>
            {/each}
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
