<script>
	import TabsMember from './../customComponents/tabs/TabsMember.svelte';

    import NotificationTop from "./NotificationTop.svelte";
import Tab1 from './tabs/Tab1.svelte';
import Tab2 from './tabs/Tab2.svelte';
import Tab3 from './tabs/Tab3.svelte';
    export let activeTabValue = 1;
  let items = [
    { label: "나비회원", value: 1, component: Tab1},
    { label: "모바일회원", value: 2,  component: Tab2},
    { label: "지역관리자", value: 3,  component: Tab3},

  ];
</script>

<section class="notification">
    <NotificationTop />
    <TabsMember {items}  {activeTabValue}/> 
    <!-- <div class="card-area">
        <AlarmCard title="공지(4)">
            <p slot="topicon"><MoreMenuNotice /></p>
            <div class="content"><CardsNotice /><CardsNotice /></div>
            <EditButton />
        </AlarmCard>
    </div> -->
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
