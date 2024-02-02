<script>
    export let showDialog = false;
    export let showDialog2 = false;
    export let title = "";
    export let content;
    export let content2 = "";
 export let handleClick;
 export let handleClick2;
</script>

{#if showDialog}
    <div class="backdrop" on:click|self>
        <div class="modal">
            <div class="modal__header">
                <p>{title}</p>
            </div>
            <div class="modal__body">
                <slot name="content" class="con" />

                <p class="con2">{content2}</p>
            </div>
            <div class="modal__button">
                <button
                    class="btn-primary m-auto"
                    on:click={handleClick}>닫기</button
                >
            </div>
        </div>
    </div>
{/if}
{#if showDialog2}
    <div class="backdrop" on:click|self>
        <div class="modal">
            <div class="modal__header">
                <p>{title}</p>
            </div>
            <div class="modal__body">
                <slot name="content" class="con" />

                <p class="con2">{content2}</p>
            </div>
            <div class="modal__button">
                <button
                    class="btn-primary m-auto"
                    on:click={handleClick2}>닫기</button
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
    }
    .modal {
        padding: 10px;
        border-radius: 10px;
        max-width: 400px;
        height: 280px;
        margin: 10% auto;
        text-align: center;
        background-color: white;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        &__header {
            margin-top: 30px;
            p {
                font-size: 20px;
                font-weight: 500;
                color: #444748;
            }
        }

        &__body {
            font-size: 16px;
            font-weight: 400;
            color: #8E9192;
            line-height: 1.4em;
            .con2 {
                font-size: 28px;
                font-weight: 700;
                color: #444748;
                margin-top: 10px;
            }
        }

        &__button {
            margin-bottom: 30px;
        }
    }
</style>
