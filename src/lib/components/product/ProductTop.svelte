<script>
    import DetailButtonCardBox from "./../globalComponents/DetailButtonCardBox.svelte";
    import DetailButtonBox from "./../globalComponents/DetailButtonBox.svelte";
    import EditButton from "./../globalComponents/EditButton.svelte";
    import AlarmCard from "./../globalComponents/AlarmCard.svelte";
    let detaileBoxItems = [
        {
            localName: "인천서구",
            total: 30,
        },
        {
            localName: "강남구",
            total: 30,
        },
        {
            localName: "부천시",
            total: 30,
        },
        {
            localName: "가평군",
            total: 30,
        },
        {
            localName: "화순군",
            total: 30,
        },
    ];
</script>

<section class="product">
    <button class="btn-primary  mt-5">Excel다운로드</button>
    <div class="product__top">
        <AlarmCard title="장비조회" iconName="uiw:more" heightLong="true">
            <DetailButtonBox {detaileBoxItems} />
            <EditButton />
        </AlarmCard>
        <AlarmCard
            title="A/S 관리(이력관리)"
            iconName="uiw:more"
            heightLong="true"
        >
            <DetailButtonCardBox />
            <EditButton />
        </AlarmCard>
    </div>
</section>

<style lang="scss">
    .btn-primary {
        margin: 0 0 0 auto;
    }

           .product__top {
            margin-top: 10px;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 30px;
            @media (max-width: 535px) {
                grid-template-columns: 1fr;
            }
        }
    
</style>
