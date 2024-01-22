<script>
	import SearchTableCs from './../customComponents/table/SearchTableCs.svelte';
	import SelectBoxBorderNone from './../customComponents/selectbox/SelectBoxBorderNone.svelte';
    import CardBoxRight from "./CardBoxRight.svelte";
    import CardBox from "./CardBox.svelte";
    import EditButton from "./../globalComponents/EditButton.svelte";
    import AlarmCard from "./../globalComponents/AlarmCard.svelte";
    let items = [
    { title: "12월", value: 1 },
    { title: "1월", value: 2 },
  ];
   let editIcon = false;
</script>

<section class="cs">
    <div class="cs__top">
        <AlarmCard title="최근 CS" heightLong="true">
            <CardBox />

            <EditButton />
        </AlarmCard>
        <AlarmCard title="원격관리" heightLong="true" custom="ture">
        
            <p slot="topicon">     <SelectBoxBorderNone {items} /> </p>
            <CardBoxRight />
            <EditButton {editIcon} />
        </AlarmCard>
    </div>
    <SearchTableCs />
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
