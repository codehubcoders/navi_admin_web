<script>
	import TabsMember from './../customComponents/tabs/TabsMember.svelte';
	import PermissionTop from './PermissionTop.svelte';
import Tab1 from './tabs/Tab1.svelte';
import Tab2 from './tabs/Tab2.svelte';

    export let activeTabValue = 1;
  let items = [
    { label: "권한설정", value: 1, component: Tab1},
    { label: "관리자", value: 2,  component: Tab2},

  ];
</script>

<section class="permission">
    <PermissionTop />
<TabsMember {items} { activeTabValue}/>
    <!-- <button class="btn-primary  mt-5">아이디 생성</button>
    <div class="radio-group">
        <div class="radio-box">
            <div class="radio-title">권한</div>
            <div class="radio">
                {#each managerRadio as item, index}
                    <label>
                        <input
                            checked={selectedeManager === item}
                            on:change={onChangeManager}
                            type="radio"
                            name="age"
                            value={item}
                        />
                        <span class="fw-500"> {item}</span>
                    </label>
                {/each}
            </div>
        </div>

        <div class="radio-box">
            <div class="radio-title">지역</div>
            <div class="radio">
                <SelectBox {items} placeholder="대분류" />
                <SelectBox {items2} placeholder="중분류" />
                <SelectBox {items3} placeholder="소분류" />
            </div>
        </div>
        <SearchTablePermission />
<div class="bottomCards">
    <AlarmCard title="관리자 공지(3)">
        <PermissionCard/>
        <p slot="topicon"><MoreMenu /></p>
        <EditButton />
    </AlarmCard>
    <AlarmCard title="지역선택">
        <PermissionCardRight/>
        <p slot="topicon"><MoreMenu /></p>
    </AlarmCard> -->
<!-- </div> -->

        
    <!-- </div> -->
</section>

<style lang="scss">
          @import 'src/lib/scss/style.scss';
    .btn-primary {
        margin: 0 0 0 auto;
    }
    label {
        font-size: 18px;
        line-height: 2rem;
        padding: 0.2em 0.4em;
    }

    .radio-group {
        padding-top: 10px;
        .radio-box {
            display: grid;
            grid-template-columns: 2fr 10fr;
            @media (max-width: 535px) {
                grid-template-columns: 1fr;
        }

            .radio-title {
                min-height: 50px;
                display: flex;
                font-size: 13px;
                align-items: center;
                background-color: #EFF1F2;
                padding-left: 20px;
            }
            .radio {
                min-height: 50px;
                background-color: white;
                align-items: center;
                display: flex;
                flex-wrap: wrap;
                padding-left: 20px;
                label {
                    font-size: 13px;
                    line-height: 2rem;
                    padding: 0.2em 0.4em;
                }
                [type="radio"],
                span {
                    vertical-align: middle;
                }
                [type="radio"] {
                    width: 1.25em;
                    height: 1.25em;
                }
            }
        }
    }
    .bottomCards{
        margin-top: 30px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
        @media (max-width: 535px) {
                grid-template-columns: 1fr;
        }
    }
</style>
