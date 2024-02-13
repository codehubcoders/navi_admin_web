<script>
    import DatePickerUi from "./../../customComponents/datePicker/DatePickerUi.svelte";
    import SelectBoxBgW from "./../../customComponents/selectbox/SelectBoxBgW.svelte";

    import Icon from "@iconify/svelte";

 

    export let showCreateId = false;
    const handleCreateId = () => {
        showCreateId = !showCreateId;
    };
   
    let items = [
        { title: "서울", value: 1 },
        { title: "경기", value: 2 },
        { title: "대전", value: 3 },
    ];
</script>


{#if showCreateId}
    <div class="backdrop" on:click|self> 
        <div class="modal">
            <div class="modal__header">
                <p>아이디 생성</p>
            </div>
            <div class="modal__body">
                <div class="title">유형</div>
                <SelectBoxBgW {items} width="100%" placeholder="권한" />
                <div class="title">지역설정</div>
                <div class="row">
                    <SelectBoxBgW {items} width="100%" placeholder="대분류" />
                    <SelectBoxBgW {items} width="100%" placeholder="중분류" />
                </div>
                <div class="title">주관기관</div>
                    <SelectBoxBgW {items} width="100%" placeholder="주관기관" />


                <div class="title">아이디</div>
                <div class="row">

                    <input type="text" placeholder="아이디" class="inputBox" />
                    <button class="btn-primary-small" style="width: 90px;"> 중복확인</button>
                </div>
              
      
             
            </div>

            <div class="modal__button">
                <button class="btn-detail-gray mr-10" on:click={handleCreateId}
                    >취소</button
                >
                <button class="btn-primary-small" on:click={handleCreateId}
                    >생성</button
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
        margin: 5% auto;
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
            // color: #8E9192;
            line-height: 1.4em;
            margin-bottom: 20px;
            .title {
                margin-top: 10px;
                font-weight: 400;
                span {
                    color: #A9ABAD;
                    font-size: 12px;
                }
            }
            .inputBox {
                padding: 0px 10px;
                height: 33px;
                input[type="text"] {
                    height: 33px;
                    border-radius: 4px;
                }
                input::placeholder {
                    font-size: 12px;
                    color: #5C5F60;
                    font-weight: 300;
                }
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
        width: 100%;
        gap: 10px;
        align-items: center;
    }

</style>
