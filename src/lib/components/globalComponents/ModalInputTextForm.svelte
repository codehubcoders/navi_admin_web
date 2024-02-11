<script>
    export let label = "";
    // export let bindValue =''
    export let placeholder = "";

    export let value ="";
</script>

<div class="input-madal">
    <label class="label">{label}</label>
    <input {placeholder} type="text" disabled={disabled} value={value}>
</div>

<style lang="scss">
    @import "src/lib/scss/style.scss";
    .input-madal {
        text-align: left;
        padding: 5px 5px;
        .label {
            display: inline-block;
            margin-bottom: 3px;
            font-size: 12px;
        }
        input {
            color: #444748;
            height: 33px;
        }
    }
</style>
