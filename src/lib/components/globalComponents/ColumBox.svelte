<script>
    export let columnList;
    export let selected = "";
    export let columnList2;
    export let columnList3;
</script>

<div class="column-box">
    {#if columnList}
        {#each columnList as item}
            <div
                class="box {selected === item.left ? 'selecete' : ''}"
                on:click={() => (selected = item.left)}
            >
                <p>
                    <span>
                        {item.left}
                    </span>
                </p>
                <p>{item.right} {item.last}</p>
            </div>
        {/each}
    {/if}
    {#if columnList2}
        {#each columnList2 as item}
            <div
                class="box2 {selected === item.left ? 'selecete' : ''}"
                on:click={() => (selected = item.left)}
            >
                <p>
                        {item.left}
                </p>
                <p>{item.right} {item.last}</p>
            </div>
        {/each}
    {/if}

    {#if columnList3}
        {#each columnList3 as item}
            <div
                class="box2 {selected === item.left ? 'selecete' : ''}"
                on:click={() => (selected = item.left)}
            >
                <p>
                        {item.left}
                </p>
                <p>{item.right} {item.last}</p>
            </div>
        {/each}
    {/if}
</div>

<style lang="scss">
    .column-box {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .box {
            padding: 10px 20px;
            border-radius: 8px;
            background-color: white;
            display: flex;
            justify-content: space-between;
            @media (max-width: 620px) {
               margin-bottom: 10px;
            }
            p {
                font-size: 14px;
                font-weight: 500;
                span {
                    font-size: 12px;
                    font-weight: 400;
                }
            }
        }
        .box2 {
            margin-bottom: 10px;
            padding: 3px 20px;
            border-radius: 8px;
            background-color: white;
            display: flex;
            justify-content: space-between;
            p {
                font-size: 14px;
                font-weight: 500;
                span {
                    font-size: 12px;
                    font-weight: 400;
                }
            }
        }
    }

    .selecete {
        border: 1px solid #C5C7C8;
        box-shadow: 0 5px 10px rgba(173, 181, 217, 0.4);
    }
</style>
