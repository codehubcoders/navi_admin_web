<script>
    // import DatePickerUi from "./../../customComponents/datePicker/DatePickerUi.svelte";
    // import SelectBoxBgW from "./../../customComponents/selectbox/SelectBoxBgW.svelte";

    // import Icon from "@iconify/svelte";

    export let showDetailPermission = false;
    const handleDetaiPermission = () => {
        showDetailPermission = !showDetailPermission;
    };


</script>

{#if showDetailPermission}
    <div class="backdrop" on:click|self>
        <div class="modal">
            <div class="modal__header">
                <p>상세보기</p>
            </div>
            <div class="modal__body">
                <div class="inputBox">
                    <div class="title">이름</div>
                    <input type="text" placeholder="홍길동" />
                </div>
                <div class="inputBox">
                    <div class="title">유형</div>
                    <input type="text" placeholder="기관회원" />
                </div>
                <div class="inputBox">
                    <div class="title">지역</div>
                    <input type="text" placeholder="서울시 강남구" />
                </div>
                <div class="inputBox">
                    <div class="title">기관</div>
                    <input type="text" placeholder="강남구노인복지센터" />
                </div>
                <div class="inputBox">
                    <div class="title">아이디</div>
                    <input type="text" placeholder="QWERFTYH" />
                </div>
                <div class="inputBox">
                    <div class="title">비밀번호</div>
                    <input type="text" placeholder="***********" />
                </div>
                <div class="inputBox">
                    <div class="title">비밀번호 재설정</div>
       
                </div>

                <div class="password d-f">
                    <button class="btn-detail-gray mr-10" on:click={handleDetaiPermission}
                    >비밀번호 초기화</button
                >
                <div class="pass-info">비밀번호 재설정시 최초 비밀번호인<br>
                    123456789로 변경됩니다</div>
                </div>
            </div>

            <div class="modal__button">
                <button class="btn-white" on:click={handleDetaiPermission}
                >삭제</button
            >
                <div class="d-f">
                    <button class="btn-detail-gray mr-10" on:click={handleDetaiPermission}
                    >취소</button
                >
                <button class="btn-primary-small" on:click={handleDetaiPermission}
                    >수정</button
                >
                </div>
              
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
            .inputBox {
                padding: 0px 0;

                input[type="text"] {
                    height: 30px;
                    border-radius: 4px;
                }
                input::placeholder {
                    font-size: 12px;
                    color: #5C5F60;
                    font-weight: 300;
                }

                .title {
                    color: #2E3132;
                    font-weight: 400;
                    width: 140px;
                    span {
                        color: #A9ABAD;
                        font-size: 12px;
                    }
                }
            }
        }
        &__button {
            margin-bottom: 20px;
            display: flex;
            justify-content: space-between;
        }
    }

    .btn-white{
        padding: 8px 15px;
        border-radius: 4px;
    }
.password{
    margin: 20px 0 30px 0;
    align-items: center;
    .pass-info{
        font-size: 12px;
        color: #8E9192;
        line-height: 1.15em;
       
    }
}

</style>
