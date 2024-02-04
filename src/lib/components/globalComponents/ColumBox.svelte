<script>
    export let columnList;
    export let selected = "";
    export let columnList2;
    export let columnList3;
    export let columnListSub;
    export let columnListSub2;
    export let columnListDown;
    export let item;
</script>

<div class="column-box">
    {#if columnList}
        {#each columnList as item}
            <div
                class="box {selected === item.left ? 'selecete' : ''}"
                on:click={() => (selected = item.left)}
            >
                <div class="items">
                    <p>
                        <span>
                            {item.left}
                        </span>
                    </p>
                    <p>{item.right} {item.last}</p>
                </div>
            </div>
        {/each}
    {/if}
    {#if columnList2}
        {#each columnList2 as item}
            <div
                class="box2 {selected === item.left ? 'selecete' : ''}"
                on:click={() => (selected = item.left)}
            >
                <div class="items">
                    <p>
                        <span>
                            {item.left}
                        </span>
                    </p>
                    <p>{item.right} {item.last}</p>
                </div>
            </div>
        {/each}
    {/if}

    {#if columnList3}
        {#each columnList3 as item}
            <div
                class="box {selected === item.left ? 'selecete' : ''}"
                on:click={() => (selected = item.left)}
            >
                <div class="items">
                    <p>
                        {item.left}
                    </p>
                    <p>{item.right} {item.last}</p>
                </div>
            </div>
        {/each}
    {/if}
    {#if columnListSub}
        {#each columnListSub as item}
            <div
                class="box3 {selected === item.left ? 'selecete' : ''}"
                on:click={() => (selected = item.left)}
            >
                <p class="sub">{item.sub}</p>
                <div class="items">
                    <p>
                        {item.left}
                    </p>
                    <p>{item.right} {item.last}</p>
                </div>
            </div>
        {/each}
    {/if}
    {#if columnListSub2}
        {#each columnListSub2 as item}
            <div
                class="box3 {selected === item.left ? 'selecete' : ''}"
                on:click={() => (selected = item.left)}
            >
                <p class="sub">{item.sub}</p>
                <p>
                    {item.left}
                </p>
                <p>{item.right} {item.last}</p>
            </div>
        {/each}
    {/if}

    {#if columnListDown}

    <div
    class="box3 {selected === columnListDown.left ? 'selecete' : ''}"
on:click
>
    <p class="sub">{columnListDown.sub}</p>
    <p>
        {columnListDown.left}
    </p>
    <p>{columnListDown.right} {columnListDown.last}</p>
  
</div>
    
{/if}
</div>

<style lang="scss">
    .column-box {
        display: flex;
        flex-direction: column;
        .box {
            padding: 5px 20px;
            border-radius: 8px;
            background-color: white;
            margin-bottom: 10px;
            @media (max-width: 620px) {
                margin-bottom: 10px;
            }
            .items {
                display: flex;
                justify-content: space-between;
                margin: 0;
                padding: 12px 5px;
                p {
                    font-size: 14px;
                    font-weight: 500;
                    margin: 0;
                    span {
                        font-size: 12px;
                        font-weight: 400;
                    }
                }
            }
        }
        .box2 {
            margin-bottom: 10px;
            padding: 3px 20px;
            border-radius: 8px;
            background-color: white;
            .items {
                display: flex;
                justify-content: space-between;
                margin: 0;
                padding: 12px 5px;
            p {
                font-size: 14px;
                font-weight: 500;
                margin: 0;
                span {
                    font-size: 12px;
                    font-weight: 400;
                }
            }}
        }
        .box3 {
            margin-bottom: 10px;
            padding: 12px 20px;
            border-radius: 8px;
            background-color: white;
            .sub {
                font-size: 10px;
                color: #A9ABAD;
                margin: 0;
                margin-bottom: 5px;
            }
            .items {
                margin: 0;
                display: flex;
                justify-content: space-between;
                font-size: 14px;
                font-weight: 500;
                p {
                    margin: 0;
                }
            }

            @media (max-width: 620px) {
                margin-bottom: 10px;
            }
        }
    }

    .selecete {
        border: 1px solid #C5C7C8;
        box-shadow: 0 5px 10px rgba(173, 181, 217, 0.4);
    }
</style>
