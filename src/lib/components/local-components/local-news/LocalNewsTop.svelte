<script>
import SelectBox from "../../customComponents/selectbox/SelectBox.svelte";




    

 
    let selectedDeadline = "전체";
    let dadlineRadio = ["전체", "진행중", "마감"];

    function onChangeDeadline(event) {
        selectedDeadline = event.currentTarget.value;
    }

    let selectedTag = "건강";
    let tagRadio = ["건강", "홍보", "기타"];

    function onChangeTag(event) {
        selectedTag = event.currentTarget.value;
    }



</script>
<div class="radio-group">
   
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
