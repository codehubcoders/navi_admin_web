<script>
	import CsTop from './CsTop.svelte';
	import SearchTableCs from './SearchTableCs.svelte';
// 	import SelectBoxBorderNone from './../customComponents/selectbox/SelectBoxBorderNone.svelte';
//     import CardBoxRight from "./CardBoxRight.svelte";
//     import CardBox from "./CardBox.svelte";
//     import EditButton from "./../globalComponents/EditButton.svelte";
//     import AlarmCard from "./../globalComponents/AlarmCard.svelte";
//     let items = [
//     { title: "12월", value: 1 },
//     { title: "1월", value: 2 },
//   ];
//    let editIcon = false;
</script>

<section class="cs">
    
   <CsTop />
   
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
