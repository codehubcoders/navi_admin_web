<script>
	import LocalDelCard from './LocalDelCard.svelte';
    import DetailButtonBox from "./../globalComponents/DetailButtonBox.svelte";
    import MoreMenu from "./moreMenu.svelte";
    import EditButton from "./../globalComponents/EditButton.svelte";
    import AlarmCard from "./../globalComponents/AlarmCard.svelte";
    let detaileBoxItems = [
        { localName: "인천서구", productName: " 플러스" },
        { localName: "강남구", productName: " 플러스" },
        { localName: "부천구", productName: " 플러스" },
        { localName: "가평군", productName: " 스탠다드(시범)" },
        { localName: "가평군", productName: " 스탠다드(구매)" },
    ];
</script>

<section class="cs">
    <div class="cs__top">
        <AlarmCard title="지역관리" heightLong="true">
            <DetailButtonBox {detaileBoxItems} />
            <p slot="topicon"><MoreMenu /></p>
            <EditButton />
        </AlarmCard>
        <AlarmCard title="지역공지(3)" heightLong="true">
            <p slot="topicon"><MoreMenu /></p>
            <LocalDelCard />
        </AlarmCard>
    </div>
</section>

<style lang="scss">
          @import 'src/lib/scss/style.scss';
    .cs__top {
        margin-top: 10px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 30px;
        @media (max-width: 535px) {
            grid-template-columns: 1fr;
        }
    }
</style>
