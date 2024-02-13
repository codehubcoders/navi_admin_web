<script>


    export let showDetailLog = false;
    const handleDetailLog = () => {
        showDetailLog = !showDetailLog ;
    };


</script>

{#if showDetailLog}
    <div class="backdrop" on:click|self>
        <div class="modal">
            <div class="modal__header">
                <p>로그관리</p>
            </div>

            <div class="modal__body">
                <p class="title">서비스</p>
                <input type="text" value="모바일 APP" />
                <p class="title mt-10">오류로그</p>
                <textarea type="text" style="height: 200px; color:#5C5F60; font-size:12px" >f5h6ghtr5rfg4ytse5r62hyt54r5er56f2rs3gfhyjtr8t9u7t9uj7d6f32a1jt2io4tug35j43f2g14u6s51h23ds4ty6t5y4r65h68ht4f8yhhdthf5h6ghtr5rfg4ytse5r62hyt54r5er56f2rs3gfhyjtr8t9u7t9uj7d6f32a1jt2io4tug35j43f2g14u6s51h23ds4ty6t5y4r65h68ht4f8yhhdthf5h6ghtr5rfg4ytse5r62hyt54r5er56f2rs3gfhyjtr8t9u7t9uj7d6f32a1jt2io4tug35j43f2g14u6s51h23ds4ty6t5y4r65h68ht4f8yhhdthf5h6ghtr5rfg4ytse5r62hyt54r5er56f2rs3gfhyjtr8t9u7t9uj7d6f32a1jt2io4tug35j43f2g14u6s51h23ds4ty6t5y4r65h68ht4f8yhhdthf5h6ghtr5rfg4ytse5r62hyt54r5er56f2rs3gfhyjtr8t9u7t9uj7d6f32a1jt2io4tug35j43f2g14u6s51h23ds4ty6t5y4r65h68ht4f8yhhdthf5h6ghtr5rfg4ytse5r62hyt54r5er56f2rs3gfhyjtr8t9u7t9uj7d6f32a1jt2io4tug35j43f2g14u6s51h23ds4ty6t5y4r65h68ht4f8yhhdthf5h6ghtr5rfg4ytse5r62hyt54r5er56f2rs3gfhyjtr8t9u7t9uj7d6f32a1jt2io4tug35j43f2g14u6s51h23ds4ty6t5y4r65h68ht4f8yhhdthf5h6ghtr5rfg4ytse5r62hyt54r5er56f2rs3gfhyjtr8t9u7t9uj7d6f32a1jt2io4tug35j43f2g14u6s51h23ds4ty6t5y4r65h68ht4f8yhhdthf5h6ghtr5rfg4ytse5r62hyt54r5er56f2rs3gfhyjtr8t9u7t9uj7d6f32a1jt2io4tug35j43f2g14u6s51h23ds4ty6t5y4r65h68ht4f8yhhdthf5h6ghtr5rfg4ytse5r62hyt54r5er56f2rs3gfhyjtr8t9u7t9uj7d6f32a1jt2io4tug35j43f2g14u6s51h23ds4ty6t5y4r65h68ht4f8yhhdthf5h6ghtr5rfg4ytse5r62hyt54r5er56f2rs3gfhyjtr8t9u7t9uj7d6f32a1jt2io4tug35j43f2g14u6s51h23ds4ty6t5y4r65h68ht4f8yhhdthf5h6ghtr5rfg4ytse5r62hyt54r5er56f2rs3gfhyjtr8t9u7t9uj7d6f32a1jt2io4tug35j43f2g14u6s51h23ds4ty6t5y4r65h68ht4f8yhhdthf5h6ghtr5rfg4ytse5r62hyt54r5er56f2rs3gfhyjtr8t9u7t9uj7d6f32a1jt2io4tug35j43f2g14u6s51h23ds4ty6t5y4r65h68ht4f8yhhdthf5h6ghtr5rfg4ytse5r62hyt54r5er56f2rs3gfhyjtr8t9u7t9uj7d6f32a1jt2io4tug35j43f2g14u6s51h23ds4ty6t5y4r65h68ht4f8yhhdthf5h6ghtr5rfg4ytse5r62hyt54r5er56f2rs3gfhyjtr8t9u7t9uj7d6f32a1jt2io4tug35j43f2g14u6s51h23ds4ty6t5y4r65h68ht4f8yhhdthf5h6ghtr5rfg4ytse5r62hyt54r5er56f2rs3gfhyjtr8t9u7t9uj7d6f32a1jt2io4tug35j43f2g14u6s51h23ds4ty6t5y4r65h68ht4f8yhhdth
                    </textarea>
                <p class="title mt-10">등록일시</p>
                <input type="text" value="2023.02.01 16:32" />
            </div>

            <div class="modal__button">
                <button
                    class="btn-detail-gray"
                    style="background-color:#E1E3E4"
                    on:click={handleDetailLog}
                    ><div style="color:white">취소</div></button
                >
                <button
                    class="btn-primary-small ml-10"
                    on:click={handleDetailLog}>확인</button
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
