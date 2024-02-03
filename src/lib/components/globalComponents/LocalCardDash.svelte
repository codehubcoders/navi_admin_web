<script>
    import CollapsibleSection from "../customComponents/expand/Expand.svelte";
    let selected = "";

    let localList = [
        {
            mainLocal: "서울",
            subLocal: [
                {name: "강남구", total: 22},
                {name: "서초구", total: 30}
            ],
        },
        {
            mainLocal: "경기도",
            subLocal: [
                {name: "강남구", total: 22},
                {name: "서초구", total: 30}
            ],
        },
        {
            mainLocal: "충청남도",
            subLocal: [
                {name: "강남구", total: 22},
                {name: "서초구", total: 30}
            ],
        },
    ];
</script>

{#each localList as item}
    <div class="state-detail mb-10">
   
            <CollapsibleSection
                headerText={item.mainLocal}
                headerTextRight={item.subLocal.length}
            >
                {#each item.subLocal as item}
                    <div
                        class="state-box  {selected === item.name
                            ? 'selecete'
                            : ''}"
                        on:click={() => (selected = item.name)}
                    >
                        <p class="txt">{item.name}</p>
                        <p class="txt">{item.total}</p>
                    </div>
                {/each}
            </CollapsibleSection>
    
    </div>
    {/each}

<style lang="scss">
    @import "src/lib/scss/style.scss";
    .state-detail {
        .state-box {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background-color: #F8FAFB;
            border-radius: 8px;
            padding: 15px 20px;
            .txt {
                font-weight: 500;
                font-size: 12px;
                color: #8E9192;
            }
        }
    }

    .selecete {
        border: 1px solid #C5C7C8;
        box-shadow: 0 5px 10px rgba(173, 181, 217, 0.4);
    }
</style>
