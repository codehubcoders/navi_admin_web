<script>
import DashTop from "./DashTop.svelte";
import DashBottom from "./DashBottom.svelte";
import Icon from '@iconify/svelte';
</script>
<div class="dash-main">

<DashTop/>
<DashBottom/>
    <div class="pagenation">
        <button class="round-box">
           <Icon icon="ep:arrow-left-bold" />
        </button>
        <button class="round-box">
            1
        </button>
        <button class="round-box">
            2
        </button>
        <button class="round-box">
              <Icon icon="ep:arrow-right-bold" />
        </button>
    </div>
</div>
<style lang="scss">
@import '../../scss/style.scss';
//    .dash-main{
//     padding-left:200px;
//          @media (max-width: 960px) {
//          padding-left:0px;
//          padding : 0 20px;
//     }
//    }
</style>