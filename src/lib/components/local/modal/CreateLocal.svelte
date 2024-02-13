<script>
	import SelectBoxBgW from './../../customComponents/selectbox/SelectBoxBgW.svelte';



    export let showCreateLocal = false;
    const handleCreateLocal = () => {
        showCreateLocal = !showCreateLocal;
    };

    let items = [
        { title: "서울", value: 1 },
        { title: "경기", value: 2 },
        { title: "대전", value: 3 },
    ];
</script>

{#if showCreateLocal}
    <div class="backdrop" on:click|self>
        <div class="modal">
            <div class="modal__header">
                <p>지역생성</p>
            </div>
      
            <div class="modal__body"> 
                <p class="title">지역설정</p>
                <SelectBoxBgW {items} width="100%" placeholder="시"/>
                <SelectBoxBgW {items} width="100%"  placeholder="군"/>
            </div>
            
            <div class="modal__button">
                <button
                class="btn-detail-gray"
                style="background-color:#E1E3E4"
                on:click={handleCreateLocal}
                ><div style="color:white">취소</div></button
            >
                <button class="btn-primary-small ml-10" on:click={handleCreateLocal}
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
            .title{
                font-size: 12px;
                font-weight: 500;
            }
        }
        &__button {
            margin-bottom: 20px;
            display: flex;
            justify-content: end;
        }
    }
</style>
