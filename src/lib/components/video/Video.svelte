<script>
	import TabsMember from './../customComponents/tabs/TabsMember.svelte';
import Tab1 from "./tabs/Tab1.svelte";
import Tab2 from "./tabs/Tab2.svelte";
import Tab3 from "./tabs/Tab3.svelte";
import Tab4 from "./tabs/Tab4.svelte";

import VideoTop from "./VideoTop.svelte";
export let activeTabValue = 1;
  let items = [
    { label: "영상", value: 1, component: Tab1},
    { label: "문화", value: 2,  component: Tab2},
    { label: "사진", value: 3, component: Tab3},
    { label: "게임", value: 4,  component: Tab4},

  ];

</script>

<section class="video">
   <VideoTop />
   <TabsMember {items}  {activeTabValue}/> 
</section>

<style lang="scss">
          @import 'src/lib/scss/style.scss';
    section{
        margin-top: 10px;
        margin-bottom: 2em;
    }
    .video {

        &__card {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 30px;
            @media (max-width: 535px) {
                grid-template-columns: 1fr;
            }
        
            .content {
                height: 500px;
                padding: 15px;
            }
        }
    }
</style>
