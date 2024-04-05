<script>
	// import RegisterTextAreaForm from './../../local-components/local-news/register/RegisterTextAreaForm.svelte';
    // import ModalTextForm from "./../../globalComponents/ModalTextForm.svelte";
    // import ModalTextForm from './../globalComponents/ModalTextForm.svelte';
    import Icon from "@iconify/svelte";
    export let showRelese = false;
    const handleRelesClick = () => {
        showRelese = !showRelese;
    };
    
</script>

{#if showRelese}
    <div class="backdrop" on:click|self>
        <div class="modal">
            <div class="modal__header">
                <p>해제사유</p>
           
            <div class="modal__body">
                <div class="inputBox">
                    <div class="info mb-10">
                        <div class="title">아이디</div>
                        <input type="text" value="ASDF" />
                    </div>
                    <div class="info mb-10">
                        <div class="title">기관</div>
                        <input type="text" value="강남구 노인복지센터" />
                    </div>
                    <div class="info mb-10">
                        <div class="title">내용</div>
                        <div class="content">
                            <textarea placeholder="상담내용을 입력하세요" />
                            <div class="upload-bar">
                                <div class="icon">
                                    <Icon icon="uil:upload-alt" color="#8e9192" width="18" />
                                </div>
                            </div>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>

            <div class="modal__button">
                <button class="btn-detail-gray mr-10" on:click={handleRelesClick}
                >취소</button
            >
                <button class="btn-primary-small" on:click={handleRelesClick}
                    >확인</button
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
            font-size: 16px;
            font-weight: 400;
            color: #8E9192;
            line-height: 1.4em;

         
            .inputBox {
                padding: 20px 0 0 0;

                input[type="text"] {
                    margin: 5px 0;
                    height: 30px;
                    color:#444748;
                    border-radius: 4px;
                    font-size: 12px;
                }
                // input::placeholder {
                //     font-size: 12px;
                //     color: #5C5F60;
                //     font-weight: 300;
                // }

                .title {
                    color: #000000;
                    font-weight: 500;
                    font-size: 12px;
                }

               
            }
            .content {
            position: relative;

            textarea {
                font-size: 12px;
                    color: #444748;
                    font-weight: 300;
                height: 200px;
               
            }
            textarea::placeholder {
                    font-size: 12px;
                    color: #444748;
                    font-weight: 300;
                }
            .upload-bar {
                position: absolute;
                width: calc(100% - 2px);
                background-color: #F5F5F5;
                bottom: 0px;
                border: 1px solid #E1E3E4;
                border-top: none;
                border-radius: 0 0 12px 12px;
                padding: 8px 0px;
                .icon {
                    padding-left: 20px;
                }
            }
        }
        }

        &__button {
            // margin-top: 20px;
            margin-bottom: 20px;
            display: flex;

            justify-content: end;
        
        }
    }
</style>
