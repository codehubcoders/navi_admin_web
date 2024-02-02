<script>
    import Icon from "@iconify/svelte";
    import ModalTextForm from "./../globalComponents/ModalTextForm.svelte";
    export let showSignUp = true;

    let handleSignUp = () => {
        showSignUp = false;
    };

    let agree1 = false;
    let agree2 = false;
</script>

{#if showSignUp}
    <div class="backdrop" on:click|self>
        <div class="modal">
            <div class="modal__header">
                <p>개인정보 입력</p>
            </div>
            <div class="modal__body">
                <p class="mt-15 mb-15">
                    나비는 어르신 개인정보 보호를 위하여<br />최선을 다하고
                    있습니다.<br /><br />아래의 정보를 기입해주세요.
                </p>
                <ModalTextForm
                    label="소속"
                    signUp
                    placeholder="소속을 입력하세여."
                />
                <ModalTextForm
                    label="성함"
                    signUp
                    placeholder="성함을 입력하세요."
                />
                <ModalTextForm
                    label="연락처"
                    signUp
                    placeholder="연락처를 입력하세여."
                />
                <ModalTextForm
                    label="이메일"
                    signUp
                    placeholder="이메일을 입력하세여."
                    
                />
            </div>
            <div class="modal__check">
                <input  bind:checked={agree1}   type="checkbox"  id="checkbox"/>
                <label for="checkbox" />
                <div class="label">
                    <p>개인정보처리 방침 [동의]</p>
                    <button ><Icon icon="bxs:down-arrow" width="10"  style="color: #D9D9D9"/></button>
                </div>
            </div>
            <div class="modal__check mb-20 mt-10">
                <input type="checkbox" bind:checked={agree2}  id="checkbox2" />
                <label for="checkbox2" />
                <div class="label">
                    <p>이용약관 [필수]</p>
                    <button ><Icon icon="bxs:down-arrow" width="10"  style="color: #D9D9D9"/></button>
                </div>
            </div>
            <div class="modal__button">
                <button class="btn-primary" on:click={handleSignUp}
                    >회원가입</button
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
        padding: 20px;
        border-radius: 10px;
        width: 400px;

        margin: 10% auto;
        background-color: white;

        &__header {
            margin-top: 10px;

            p {
                font-size: 20px;
                font-weight: 500;
                color: #444748;
            }
        }

        &__body {
            
            font-size: 14px;
            font-weight: 300;
            line-height: 1.4em;
            p {
                color: #8E9192;
            }
        }
        &__check {
            padding: 0 10px;
            position: relative;
            display: flex;
            align-items: center;
            label {
             
                background-color: #fff;
                border: 1px solid #A9ABAD;
                border-radius: 50%;
                cursor: pointer;
                height: 15px;
                width: 15px;
                left: 0;
                position: absolute;
                top: 1;
                
            }
            .label {
                width: 100%;
                font-size: 12px;
                font-weight: 400;
                padding-left: 0px;
                color: #1A1E2C;
                display: flex;
                align-items: center;
                justify-content: space-between;
            }
            label:after {
                border: 1px solid #5E72E4;
                background-color: #5E72E4;
                border-radius: 50%;
                content: "";
                height: 9px;
                left: 2px;
                opacity: 0;
                position: absolute;
                top: 2px;
                width: 9px;
            }

            input[type="checkbox"] {
                visibility: hidden;
            }

            input[type="checkbox"]:checked + label {
                border-color: #596DDF;
            }

            input[type="checkbox"]:checked + label:after {
                opacity: 1;
            }
        }
        &__button {
            margin-bottom: 10px;
        }
    }
</style>
