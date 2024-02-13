<script>
import TabsCreateMember from "../../customComponents/tabs/TabsCreateMember.svelte";



    import Tab1 from "./Tab1.svelte";
    import Tab2 from "./Tab2.svelte";

    export let showCreateUsim = false;
    const handleCreateUsim = () => {
        showCreateUsim = !showCreateUsim;
    };

    export let activeTabValue = 1;
    let tabItems = [
        { label: "대량등록", value: 1, component: Tab1 },
        { label: "개별등록", value: 2, component: Tab2 },
    ];
</script>

{#if showCreateUsim}
    <div class="backdrop" on:click|self>
        <div class="modal">
            <div class="modal__header">
                <p>USIM 등록</p>
            </div>
            <div class="modal__body">

                <TabsCreateMember {tabItems} {activeTabValue} />
            </div>
            <div class="modal__button">
                <button  class="btn-detail-gray mr-15"
                style="background-color:#E1E3E4" on:click={handleCreateUsim}
                >취소</button
            >
                <button class="btn-primary-small" on:click={handleCreateUsim}
                    >생성</button
                >
            </div>
        </div>
    </div>
{/if}

<style lang="scss">
    @import "src/lib/scss/style.scss";
    .backdrop {
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.8);
        z-index: 99;
        overflow-y: auto;
    }
    .modal {
        padding: 10px 20px;
        border-radius: 10px;
        max-width: 450px;
        margin: 10% auto;
        // text-align: center;
        background-color: white;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        &__header {
            margin-top: 20px;
            margin-bottom: 20px;
            font-weight: 500;
            font-size: 18px;
        }

        &__body {
            text-align: left;
            font-size: 12px;
            font-weight: 400;
            color: #8E9192;
            line-height: 1.4em;
            margin-bottom: 20px;
        }
        &__button {
            margin-bottom: 20px;
            display: flex;
            justify-content: end;
        }
    }
</style>
