<script>
    import EditIcon from "../../assets/icons/edit-icon.svg";
</script>

<button on:click class="edit-btn">
    <EditIcon />
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
