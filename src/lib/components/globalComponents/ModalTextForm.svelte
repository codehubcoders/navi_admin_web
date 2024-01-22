<script>
    export let label =''
    // export let bindValue =''
    export let placeholder =''
    export let register = true
</script>

<div class="input-madal">
    <label class="label{register ? "-register": ""}">{label}</label>
    <input placeholder={placeholder} type="text"  />
</div>

<style lang="scss">
          @import 'src/lib/scss/style.scss';
    .input-madal {
        text-align: left;
        padding:5px 5px;
        .label {
            display: inline-block;
            margin-bottom: 3px;
            font-size: 13px;
            &-register{
                font-size: 16px;
            }
        }
        input {
            color: #8E9192;
        }
    }

</style>
