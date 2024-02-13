<script>
    import SelectBoxBgW from "./../../customComponents/selectbox/SelectBoxBgW.svelte";
    import Icon from "@iconify/svelte";
    export let showCreateAgency2 = false;
    const handleCreateAgency2 = () => {
        showCreateAgency2 = !showCreateAgency2;
    };

    let items = [
        { title: "서울", value: 1 },
        { title: "경기", value: 2 },
        { title: "대전", value: 3 },
    ];
</script>

{#if showCreateAgency2}
    <div class="backdrop" on:click|self>
        <div class="modal">
            <div class="modal__header">
                <p>기관 2 생성</p>
            </div>

            <div class="modal__body">
                <p class="title">기관 1</p>
                <input type="text" value="강남구청" />
                <p class="title mt-10">기관생성</p>
                <input type="text" placeholder="기관명" />
                <div class="row">
                    <input type="text" value="서울특별시" />
                    <input type="text" value="강남구" />
                    <SelectBoxBgW {items} width="100%" placeholder="지역선택" />
                </div>
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
                    on:click={handleCreateAgency2}
                    ><div style="color:white">취소</div></button
                >
                <button
                    class="btn-primary-small ml-10"
                    on:click={handleCreateAgency2}>생성</button
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

    .row {
        display: flex;
        justify-content: space-between;
        gap: 10px;
        input[type="text"] {
            height: 33px;
            border: 1px solid #A9ABAD;
        }
    }
    .row-box {
        padding: 10px;
        color: #C5C7c8;
        border: 1px solid #E1E3E4;
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
