<script>

    let selectedService = "전체";
    let serviceRadio = ["전체", "나비 APP", "모바일 APP", "BMS"];

    function onChangeService(event) {
        selectedService = event.currentTarget.value;
    }
</script>

<button class="btn-primary  mt-5">Excel다운로드</button>
<div class="radio-group">
    <div class="radio-box">
        <div class="radio-title">서비스별</div>
        <div class="radio">
            {#each serviceRadio as item, index}
                <label style={selectedService != item ? "color:#757779" : ""}>
                    <input
                        checked={selectedService == item}
                        on:change={onChangeService}
                        type="radio"
                        name="service"
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
