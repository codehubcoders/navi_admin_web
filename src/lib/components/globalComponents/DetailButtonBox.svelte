<script>
    export let detaileBoxItems = [{}];
</script>

<div class="card-body">
    {#each detaileBoxItems as item}
        <div class="w-box">
            <div>
                <p>
                    {item.localName}
                    {#if item.total}({item.total}){/if}
                </p>
                {#if item.productName}
                    <p>{item.productName}</p>
                {/if}
            </div>
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
            line-height: 1.5em;
        }
    }
</style>
