<script>

    export let showEditInput;

    const handleEditInput = () => {
        showEditInput = !showEditInput;
    };


</script>

{#if showEditInput}
    <div class="backdrop" >
        <div class="modal">
            <div class="modal__header">
                <p>계약등록</p>
        <span>아래 사항을 기입해주세요</span> 
            </div>
            <div class="modal__body">
                
                <div class="title">사유</div>
                <input type="text" placeholder="사유" class="inputBox" />
                <div class="title">수정자</div>
                <input type="text" placeholder="수정자" class="inputBox" />
           
            </div>

            <div class="modal__button">
                <button class="btn-gray mr-10" on:click={handleEditInput}
                    >취소</button
                >
                <button class="btn-primary" on:click={handleEditInput}
                    >등록하기</button
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
    span {
                        color: #A9ABAD;
                        font-size: 12px;
                    }
</style>
