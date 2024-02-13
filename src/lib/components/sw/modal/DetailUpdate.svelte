<script>


    export let showDetailUpdate = false;
    const handleDetailUpdate = () => {
        showDetailUpdate = !showDetailUpdate ;
    };


</script>

{#if showDetailUpdate}
    <div class="backdrop" on:click|self>
        <div class="modal">
            <div class="modal__header">
                <p>업데이트관리</p>
            </div>

            <div class="modal__body">
                <p class="title">구분</p>
                <input type="text" value="S/W" />
                <p class="title mt-10">종류</p>
                <input type="text" value="필수(Major)" />
                <p class="title mt-10">버전</p>
                <input type="text" value="Ver 2.1" />
                <p class="title mt-10">서비스</p>
                <input type="text" value="모바일 APP" />
                <p class="title mt-10">대상</p>
                <input type="text" value="강남구노인복지센터" />
                <p class="title mt-10">등록일시</p>
                <input type="text" value="2023.02.01 16:32" />
                <p class="title mt-10">승인일시</p>
                <input type="text" value="2023.02.01 16:32" />
                <p class="title mt-10">베포일시</p>
                <input type="text" value="2023.02.01 16:32" />
            </div>

            <div class="modal__button">
                <button
                    class="btn-detail-gray"
                    style="background-color:#E1E3E4"
                    on:click={handleDetailUpdate}
                    ><div style="color:white">취소</div></button
                >
                <button
                    class="btn-primary-small ml-10"
                    on:click={handleDetailUpdate}>확인</button
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
            color: #444748;
            line-height: 1.4em;
            margin-bottom: 20px;
            .title {
                font-size: 12px;
                font-weight: 500;
            }
            input[type="text"]{
                height: 36px;
                color: #444748;
            }
        }
        &__button {
            margin-bottom: 20px;
            display: flex;
            justify-content: end;
        }
    }


</style>
