<script>
import TabsMember from "../../customComponents/tabs/TabsMember.svelte";


import LocalNewsTop from "./LocalNewsTop.svelte";

import Tab1 from "./tabs/Tab1.svelte";
import Tab2 from "./tabs/Tab2.svelte";


export let activeTabValue = 1;
  let items = [
    { label: "공통소식", value: 1, component: Tab1},
    { label: "지역소식", value: 2,  component: Tab2},

  ];
</script>

<section class="news">
    <LocalNewsTop />
    <TabsMember {items}  {activeTabValue}/> 
</section>

<style lang="scss">
          @import 'src/lib/scss/style.scss';
    .news {
        // margin-top: 10px;
        &__card {
      
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 30px;
            @media (max-width: 535px) {
                grid-template-columns: 1fr;
           
        }
            .content {
                padding: 15px;
                height: 600px;
            }
        }
    }

    .search-area {
        display: flex;
        gap: 10px;

        .search-input {
            display: flex;
            align-items: center;
            border: 1px solid #C5C7C8;
            width: 150px;
            height: 30px;
            border-radius: 4px;
            padding: 0 10px;
            input[type="text"] {
                padding: 0px;
                width: 130px;
                height: fit-content;
                border: none;
            }
            input::placeholder {
                font-size: 13px;
                color: #A9ABAD;
            }
        }
    }
</style>
