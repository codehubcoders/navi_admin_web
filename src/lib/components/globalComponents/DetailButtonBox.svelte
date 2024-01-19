<script>
    export let detaileBoxItems = [{}];
</script>

<div class="card-body">
    {#each detaileBoxItems as item}
        <div class="w-box">
            <p>{item.localName}({item.total})</p>
            <button on:click class="btn-detail-gray">상세내역</button>
        </div>
    {/each}
</div>

<style lang="scss">
    .card-body {
        overflow-x: hidden;
        height: 500px;
        padding: 15px;
        display: flex;
        flex-direction: column;
        gap: 15px;
        overflow: scroll;
    }

    .w-box {
        background-color: white;
        padding: 15px 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-radius: 4px;
        p {
            font-size: 14px;
            font-weight: 500;
        }
    }
</style>
