<script>
	import LineChart from './../chart/LineChart.svelte';
    import Icon from "@iconify/svelte";
    export let showModal = true;
    // export let isPromo = true;
    export let title = '';
    
</script>

{#if showModal}
    <div class="backdrop" on:click|self>
        <div class="modal">
            <!-- <div class="modal__close">
                <button on:click={() => (showModal = false)}>
                    <Icon icon="zondicons:close"  width="23" /></button
                >
            </div> -->
            <div class="modal__header">
                <p>{title}</p>
                <div class="button ">
                    <button class="pr-15"
                        ><Icon icon="solar:graph-up-linear" /> 차트보기</button
                    >
                    <button
                        ><Icon icon="heroicons-outline:save" /> 그래프 저장</button
                    >
                </div>
            </div>
            <div class="modal__body">
                <LineChart />
            </div>
        </div>
    </div>
{/if}

<style lang="scss">
          @import 'src/lib/scss/style.scss';
    .backdrop {
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.8);
        z-index: 99;
    }
    .modal {
        padding: 10px;
        border-radius: 10px;
        max-width: 800px;
        margin: 10% auto;
        text-align: center;
        background-color: white;
        padding: 20px 30px;
        &__close {
            margin-right: 0;
            display: flex;
            justify-content: end;
            margin: 20px 0;
        }
        &__header{
            display: flex;
            justify-content: space-between;
            margin-bottom: 20px;
            p{
                font-size: 18px;
                font-weight: 500;
            }
            .button{
                font-size: 13px;
                display: flex; 
            }
        }
    }
    /* .promo .modal {
        background: crimson;
        color: white;
    } */
</style>
