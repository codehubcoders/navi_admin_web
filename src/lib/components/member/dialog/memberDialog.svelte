<script>
    import Ambulance from "../../../assets/icons/icon_ambulance.svg";
    import Warning from "../../../assets/icons/icon_warning.svg";
    import Circular from "../../../assets/icons/icon_circular.svg";
    export let showDialog = false;
    export let type ='';

export const handleDialogClick = ()=>{
    showDialog = !showDialog;
 }
</script>

{#if showDialog}
    <div class="backdrop" on:click|self>
        <div class="modal">
            <div class="modal__header {type == 'loading' ? 'header2' : ''}" >
                {#if type == '119'}
                <Ambulance />
                {:else if  type == 'warning'}
                <Warning />
                {:else if type == 'loading'}
                <Circular />
                {:else}
                
                {/if}
            </div>
            <div class="modal__body">
           
                {#if type == '119'}
                <p class="title">119 신고 발생</p>
                <p class="con2">119신고가 1건 발생하였습니다</p>
                {:else if  type == 'warning'}
                <p class="title">주의 발생</p>
                <p class="con2">주의가 1건 발생하였습니다</p>
                {:else}
                <p class="con3">데이터를 안전하게 불러오고 있습니다. <br/>잠시만 기다려주세요.</p>
                {/if}
  
            </div>
            <div class="modal__button">
                <button
                    class="btn-primary m-auto"
                    on:click={handleDialogClick}>확인</button
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
        padding: 40px 10px;
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
            margin: 30px 0 50px 0;
         
        }
   
        &__body {
            font-size: 16px;
            font-weight: 400;
            color: #8E9192;
            line-height: 1.4em;
            .title {
                font-size: 20px;
                font-weight: 500;
                color: #000000;
            }
            .con2 {
                font-size: 16px;
                font-weight: 500;
                color: #8E9192;
                margin-top: 20px;
            }
            .con3 {
                font-size: 16px;
                font-weight: 500;
                line-height: 25px;
                color: #8E9192;
            }
        }

        &__button {
            margin: 25px 0;
        }
    }

    .header2{
        margin: 20px  0;
    }
</style>
