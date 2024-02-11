<script>
    export let label = "";
    // export let bindValue =''
    export let placeholder = "";
    export let register;
    export let signUp;
    export let myPage;
    export let disabled;
    export let defalut;
    export let value ="";
</script>

<div class="input-madal">
    <label class="label{signUp ? '-sign-up': register ? '-register' : myPage ? '-my-page' : ''} ">{label}</label>
    <input {placeholder} type="text" disabled={disabled} value={value} >
</div>

<style lang="scss">
    @import "src/lib/scss/style.scss";
    .input-madal {
        text-align: left;
        padding: 5px 5px;
        .label {
            display: inline-block;
            margin-bottom: 3px;
            font-size: 13px;
            color: #444748;
            &-register {
                font-size: 16px;
            }
            &-sign-up {
                font-size: 12px;
                color: #333;
                font-weight: 500;
            }
            &-my-page {
                font-size: 16px;
                color: #444748;
            }
         
        }
        input {
            color: #8E9192;
           
        }
    }
</style>
