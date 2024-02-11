<script>
    import ModalInputForm from "./../globalComponents/ModalTextForm.svelte";
    export let showAsDetailModal = true;
   ../../../globalComponents/ModalTextForm.svelte
        {
            history : '상자불량',
            state: '교환',
            date: '2023.02.10'
        },
        {
            history : '화면불량',
            state: '수리',
            date: '2023.02.10'
        },
        {
            history : '장비불량',
            state: '교환',
            date: '2023.02.10'
        },
    ]
</script>

{#if showAsDetailModal}
    <div class="backdrop" on:click|self>
        <div class="modal">
            <div class="modal__header">
                <p>상세내역</p>
            </div>
            <div class="modal__button">
                <div class="as-history">
                    <div class="label">수리이력</div>
                 
                    <div class="content">
                        {#each asHistoryList as item}
                        <div class="list-items">
                            <p>{item.history} - {item.state}</p>
                            <p>{item.date}</p>
                        </div>
                 
                        {/each}
                    </div>
               
           
                </div>
                <ModalInputForm label="IMEI" />
                <ModalInputForm label="MAC" />
                <ModalInputForm label="USIM" />
                <ModalInputForm label="Serial No." />
                <button class="btn-primary">생성</button>
            </div>
        </div>
    </div>
{/if}

<style lang="scss">
          @import 'src/lib/scss/style.scss';
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
        max-width: 500px;
        margin: 10% auto;
        text-align: center;
        background-color: white;
        padding: 20px 30px;
        
        &__header {
            display: flex;
            justify-content: space-between;
            margin-bottom: 20px;
            p {
                font-size: 18px;
                font-weight: 500;
            }
            .button {
                font-size: 13px;
                display: flex;
            }
        }
    }
    .as-history {
      
        .label{
            font-size: 13px;
            font-weight: 500;
            text-align: left;
            margin: 8px 5px;
        }
        .content {
            display: inline-block;
            width: 100%;
            height: 80px;
            padding: 10px 0px;
            margin: 8px 5px;
            display: inline-block;
            border: 1px solid #E1E3E4;
            border-radius: 8px;
            box-sizing: border-box;
            overflow: auto;
            .list-items{
                padding: 6px 25px;
                display: flex;
            justify-content: space-between;
                p{
                color: #444748;
                font-size: 12px;
            }
            }
      
        }
    }
    button{
        margin:  0  0 0 auto;
    }
    /* .promo .modal {
        background: crimson;
        color: white;
    } */
</style>
