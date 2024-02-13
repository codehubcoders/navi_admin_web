<script>
    import SelectBoxBgW from "./../../customComponents/selectbox/SelectBoxBgW.svelte";

    export let showCreateAgency = false;
    const handleCreateAgency = () => {
        showCreateAgency = !showCreateAgency ;
    };

    let items = [
        { title: "서울", value: 1 },
        { title: "경기", value: 2 },
        { title: "대전", value: 3 },
    ];
</script>

{#if showCreateAgency}
    <div class="backdrop" on:click|self>
        <div class="modal">
            <div class="modal__header">
                <p>기관 1 생성</p>
            </div>

            <div class="modal__body">
                <p class="title">기관생성</p>
                <input type="text" placeholder="기관명" />
                <p class="title mt-10">기관생성</p>
                <div class="row">
                    <input type="text" value="서울특별시"/>
                    <input type="text" value="강남구" />
                </div>
             
            </div>

            <div class="modal__button">
                <button
                    class="btn-detail-gray"
                    style="background-color:#E1E3E4"
                    on:click={handleCreateAgency}
                    ><div style="color:white">취소</div></button
                >
                <button
                    class="btn-primary-small ml-10"
                    on:click={handleCreateAgency}>생성</button
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
            input[type="text"]{
                height: 36px;
            }
        }
        &__button {
            margin-bottom: 20px;
            display: flex;
            justify-content: end;
        }
    }

    .row{
        display: flex;
        justify-content: space-between;
        gap: 15px;
        input[type="text"]{
                height: 36px;
                border: 1px solid #5E72E4;
            }
    }
</style>
