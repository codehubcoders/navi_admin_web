<script>
    export let label = "";
    // export let bindValue =''
</script>

<div class="input-madal">
    <label>{label}</label>
    <textarea placeholder=""></textarea>
</div>

<style lang="scss">
          @import 'src/lib/scss/style.scss';
    .input-madal {
        text-align: left;
        padding: 5px 5px;
        display: block;
        label {
            display: inline-block;
            margin-bottom: 3px;
        }
        textarea {
            color: #8E9192;
            height: 100px;
        }
    }
</style>
