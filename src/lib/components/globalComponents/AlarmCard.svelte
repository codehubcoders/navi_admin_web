<script>
	import DropdowMenu from './DropdowMenu.svelte';
    export let title = "";
    export let iconName = "";

</script>

<div class="alarm_card">
    <div class="alarm_card__header">
        <p class="title">{title}</p>
        <!-- {#if iconName}    <button>  <Icon icon={iconName} color="#a9abad" /></button>{/if} -->
        {#if iconName}    <DropdowMenu />{/if}
    </div>

    <div class="body">
        <slot/>
    </div>

</div>

<style lang="scss">
    .alarm_card {
        border-radius: 10px;
        box-shadow: 0 5px 20px rgba(173, 181, 217, 0.2);
        background-color: #F5F5F5;
        &__header {
            display: flex;
            justify-content: space-between;
            border-radius: 10px 10px 0px 0px;
            padding: 15px 20px;
            background-color: white;
            .title {
                font-size: 18px;
                font-weight: 500;
            }
        }
        .body {
            height: 240px;
            border-radius: 0px 0px 10px 10px;
            // padding:  30px;
            overflow: auto;
            @media (max-width: 535px) {
                height: auto;
            }
        }
    }

</style>
