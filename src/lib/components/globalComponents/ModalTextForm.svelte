<script>
    export let label =''
    // export let bindValue =''
</script>

<div class="input-madal">
    <label>{label}</label>
    <input placeholder="" type="text"/>
</div>

<style lang="scss">
    .input-madal {
        text-align: left;
        padding:5px 5px;
        label {
            display: inline-block;
            margin-bottom: 3px;
            font-size: 13px;
        }
        input {
            color: #8E9192;
        }
    }
</style>
