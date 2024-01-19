<script>
	import PermissionCardRight from './PermissionCardRight.svelte';
	import DetailButtonBox from './../globalComponents/DetailButtonBox.svelte';
    import MoreMenu from "./moreMenu.svelte";
    import EditButton from "./../globalComponents/EditButton.svelte";
    import AlarmCard from "./../globalComponents/AlarmCard.svelte";
    import SearchTablePermission from "./../customComponents/table/SearchTablePermission.svelte";
    import SelectBox from "../customComponents/selectbox/SelectBox.svelte";
    let selectedeManager = "전체";
    let managerRadio = ["전체", "운영자", "지역관리자", "담당자"];
    import Icon from "@iconify/svelte";
import PermissionCard from './PermissionCard.svelte';
    function onChangeManager(event) {
        selectedeManager = event.currentTarget.value;
    }

    let items = [
        { title: "서울", value: 1 },
        { title: "경기", value: 2 },
        { title: "대전", value: 3 },
    ];
    let items2 = [
        { title: "강남구", value: 1 },
        { title: "깅북구", value: 2 },
        { title: "구로구", value: 3 },
    ];
    let items3 = [
        { title: "개포동", value: 1 },
        { title: "노원구", value: 2 },
        { title: "가산동", value: 3 },
    ];
    let selected;

    let detaileBoxItems = [
        { localName: "인천서구", productName: " 플러스" },
        { localName: "강남구", productName: " 플러스" },
        { localName: "부천구", productName: " 플러스" },
        { localName: "가평군", productName: " 스탠다드(시범)" },
        { localName: "가평군", productName: " 스탠다드(구매)" },
    ];
</script>

<section class="permission">
    <button class="btn-primary  mt-5">아이디 생성</button>
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
    </AlarmCard>
</div>

        
    </div>
</section>

<style lang="scss">
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
    }
</style>
