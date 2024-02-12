<script>
	import EditButton from './../globalComponents/EditButton.svelte';
    import CardsNotice from "./CardsNotice.svelte";
    import MoreMenuNotice from "./moreMenuNotice.svelte";
    import AlarmCard from "./../globalComponents/AlarmCard.svelte";
    // import NotificationTop from "./NotificationTop.svelte";
</script>

<section class="notification">
    
    <div class="card-area">
        <AlarmCard title="공지(4)">
            <p slot="topicon"><MoreMenuNotice /></p>
            <div class="content"><CardsNotice /><CardsNotice /></div>
            <EditButton />
        </AlarmCard>
    </div>
</section>

<style lang="scss">
          @import 'src/lib/scss/style.scss';
    .notification{
        margin-bottom: 50px;
    }
    .card-area {
        margin-top: 30px;
        height: 600px;
    }
    .content {
        height: 600px;
        padding: 15px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 30px;
        @media (max-width: 535px) {
                grid-template-columns: 1fr;
                height:auto;
        }
    }
</style>
