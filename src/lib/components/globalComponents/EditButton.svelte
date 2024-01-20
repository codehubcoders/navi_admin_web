<script>
    import EditIcon from "../../assets/icons/edit-icon.svg";
    import OxyIcon from "../../assets/icons/cs-oxy_icon.svg";
    export let editIcon = true;
    import { createEventDispatcher } from "svelte";

const dispatch = createEventDispatcher();

const sendEvent = () => {
  dispatch("buttonClick", "Hello");
}
</script>

<button on:click={sendEvent} class="edit-btn">
    {#if editIcon}
    <EditIcon />
    {:else}
    <OxyIcon />
    {/if}
</button>

<style lang="scss">
    .edit-btn {
        position: absolute;
        z-index: 9;
        bottom: 20px;
        right: 20px;
        width: 44px;
        height: 44px;
        border-radius: 100%;
        background-color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 0 5px 10px rgba(173, 181, 217, 0.4);
    }
</style>
