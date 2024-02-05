<script>
    import ModalTextForm from "./../../globalComponents/ModalTextForm.svelte";
    // import ModalTextForm from './../globalComponents/ModalTextForm.svelte';
    export let showDetail = false;
    const handleDetailClick = () => {
        showDetail = !showDetail;
    };
</script>

{#if showDetail}
    <div class="backdrop" on:click|self>
        <div class="modal">
            <div class="modal__header">
                <p>모바일앱 회원관리 상세내역</p>
            </div>
            <div class="modal__body">
                <div class="inputBox">
                    <div class="info">
                        <div class="title">성함</div>
                        <input type="text" value="김옥자" />
                    </div>
                    <div class="info">
                        <div class="title">성별</div>
                        <input type="text" value="여" />
                    </div>

                    <div class="info">
                        <div class="title">생년월일</div>
                        <input type="text" value="1954.03.04" />
                    </div>
                    <div class="info">
                        <div class="title">전화번호</div>
                        <input type="text" value="010-1234-5678" />
                    </div>
                    <div class="info">
                        <div class="title">전화번호</div>
                        <input type="text" value="010-1234-5678" />
                    </div>
                </div>
            </div>
            <div class="modal__header mt-5">
                <p>나비회원</p>
            </div>
            <div class="modal__body">
                <div class="inputBox">
                    <div class="info">
                        <div class="title">성함</div>
                        <input type="text" value="김옥자" />
                    </div>
                    <div class="info">
                        <div class="title">주관기관</div>
                        <input type="text" value="노인안심센터" />
                    </div>
                    <div class="title">지역</div>
                </div>
              
                <div class="local-box">
                    
                  
                    <input type="text" value="서울시" />
                    <input type="text" value="강남구" />
                    <input type="text" value="도산동" />
                </div>
            </div>

            <div class="modal__button">
                <button class="btn-primary" on:click={handleDetailClick}
                    >비밀번호초기화</button
                >
                <div class="row">
                    <button
                        class="btn-detail-gray"
                        style="background-color:#E1E3E4"
                        on:click={handleDetailClick}
                        ><div style="color:white">삭제</div></button
                    >
                    <button
                        class="btn-primary-small"
                        on:click={handleDetailClick}>취소</button
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
            font-size: 16px;
            font-weight: 400;
            color: #8E9192;
            line-height: 1.4em;
            margin-bottom: 20px;
            .local-box {
                padding: 0px 0;
                display: grid;
                grid-template-columns: 1fr 1fr 1fr;
                column-gap: 15px;
                
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
                    // margin-top: 5px;
                    color: #2E3132;
                    font-weight: 500;
                    // width: 140px;
                    font-size: 12px;
                }
            }
            .inputBox {
                padding: 0px 0;
                display: grid;
                grid-template-columns: 1fr 1fr;
                column-gap: 15px;
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
                    // margin-top: 5px;
                    color: #2E3132;
                    font-weight: 500;
                    // width: 140px;
                    font-size: 12px;
                }

                .row {
                    display: flex;
                    width: 100%;
                    justify-content: space-between;
                }
            }
            .btn-white {
                border: 1px solid #C5C7C8;
                padding: 5px 10px;
                font-size: 12px;
                border-radius: 4px;
                margin: 0 auto;
            }
        }

        &__button {
            margin-top: 20px;
            margin-bottom: 20px;
            display: flex;
            justify-content: space-between;
            // justify-content: end;
            .row {
                display: flex;
                gap: 10px;
            }
        }
    }
</style>
