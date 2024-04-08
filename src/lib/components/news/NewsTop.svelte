<script>

    import SelectBox from "./../customComponents/selectbox/SelectBox.svelte";
    
    
    let selecteState = "전체";
    let stateRadio = ["전체", "상세설정"];

    function onChangeState(event) {
        selecteState = event.currentTarget.value;
    }

 
    let selectedDeadline = "전체";
    let dadlineRadio = ["전체", "진행중", "마감"];

    function onChangeDeadline(event) {
        selectedDeadline = event.currentTarget.value;
    }

    let selectedTag = "전체";
    let tagRadio = ["전체", "건강", "홍보", "기타"];

    function onChangeTag(event) {
        selectedTag = event.currentTarget.value;
    }

    let items = [
        { title: "서울", value: 1 },
        { title: "경기", value: 2 },
        { title: "대전", value: 3 },
    ];


</script>
<div class="radio-group">
    
    <div class="radio-box">
        <div class="radio-title">지역</div>
        
        <div class="radio">
            {#each stateRadio as item, index}
            <label style={selecteState != item ? "color:#757779" : ""}>
                <input
                    checked={selecteState == item}
                    on:change={onChangeState}
                    type="radio"
                    name="state"
                    value={item}
                />
                <span class="fw-500"> {item}</span>
            </label>
        {/each}
        <div class="mr-10"></div>
            <SelectBox {items} placeholder="대분류" />
            <SelectBox {items} placeholder="중분류" />
            <SelectBox {items} placeholder="소분류" />
        </div>
    </div>

    <div class="radio-box">
        <div class="radio-title">주관기관</div>
        <div class="radio">
            <SelectBox {items} placeholder="전체" long />
        </div>
    </div>

    <div class="radio-box">
        <div class="radio-title">마감</div>
        <div class="radio">
            {#each dadlineRadio as item, index}
                <label style={selectedDeadline != item ? "color:#757779" : ""}>
                    <input
                        checked={selectedDeadline == item}
                        on:change={onChangeDeadline}
                        type="radio"
                        name="dedline"
                        value={item}
                    />
                    <span class="fw-500"> {item}</span>
                </label>
            {/each}
        </div>
    </div>

    <div class="radio-box">
        <div class="radio-title">태그</div>
        <div class="radio">
            {#each tagRadio as item, index}
                <label style={selectedTag != item ? "color:#757779" : ""}>
                    <input
                        checked={selectedTag == item}
                        on:change={onChangeTag}
                        type="radio"
                        name="tag"
                        value={item}
                    />
                    <span class="fw-500"> {item}</span>
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
