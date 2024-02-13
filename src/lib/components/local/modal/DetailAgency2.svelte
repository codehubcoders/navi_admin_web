<script>
    import SelectBoxBgW from "./../../customComponents/selectbox/SelectBoxBgW.svelte";
    import Icon from "@iconify/svelte";
    export let showDetailAgency2 = false;
    const handleDetailAgency2 = () => {
        showDetailAgency2 = !showDetailAgency2;
    };

    let items = [
        { title: "서울", value: 1 },
        { title: "경기", value: 2 },
        { title: "대전", value: 3 },
    ];
</script>

{#if showDetailAgency2}
    <div class="backdrop" on:click|self>
        <div class="modal">
            <div class="modal__header">
                <p>기관 2 상세보기</p>
            </div>

            <div class="modal__body">
                <p class="title">기관 1</p>
                <input type="text" value="강남구청" />
                <p class="title mt-10">기관 2</p>
                <input type="text" value="치매안심센터" />
                <div class="row-box">
                    <div class="box-item">
                        서울시 강남구 도곡동<Icon
                            icon="carbon:close-outline"
                            width="16"
                            height="16"
                            style="color: #C5C7c8"
                        />
                    </div>
                    <div class="box-item">
                        서울시 강남구 도곡동<Icon
                            icon="carbon:close-outline"
                            width="16"
                            height="16"
                            style="color: #C5C7c8"
                        />
                    </div>
                    <div class="box-item">
                        서울시 강남구 도곡동<Icon
                            icon="carbon:close-outline"
                            width="16"
                            height="16"
                            style="color: #C5C7c8"
                        />
                    </div>
                </div>
            </div>

            <div class="modal__button">
                <button
                    class="btn-detail-gray"
                    style="background-color:#E1E3E4"
                    on:click={handleDetailAgency2}
                    ><div style="color:white">취소</div></button
                >
                <button
                    class="btn-primary-small ml-10"
                    on:click={handleDetailAgency2}>생성</button
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
        margin: 10% auto;
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
            color: #8E9192;
            line-height: 1.4em;
            margin-bottom: 20px;
            .title {
                font-size: 12px;
                font-weight: 500;
            }
            input[type="text"] {
                height: 36px;
            }
        }
        &__button {
            margin-bottom: 20px;
            display: flex;
            justify-content: end;
        }
    }


    .row-box {
        padding: 10px;
        color: #444748;
        border: 1px solid #A9ABAD;
        border-radius: 8px;
        height: 80px;
        overflow-x:scroll;
        .box-item {
            padding: 6px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-bottom: 1px solid #E1E3E4;
        }
    }
</style>
