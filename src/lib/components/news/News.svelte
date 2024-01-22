<script>
    import EditMenuNews from "./EditMenuNews.svelte";
    import CardNews from "./CardNews.svelte";
    import AlarmCard from "./../globalComponents/AlarmCard.svelte";
    import Icon from "@iconify/svelte";
</script>

<section class="news">
    <div class="news__card">
        <AlarmCard title="공통소식(5)">
            <div slot="topicon" class="search-area">
                <div class="search-input">
                    <input type="text" id="search" placeholder="검색" />
                    <Icon icon="iconamoon:search" color="#c5c7c8" width="18" />
                </div>
                <button class="btn-primary-border-none" id="search-btn" on:click
                    >검색</button
                >
            </div>
            <div class="content">
                <CardNews />
            </div>
            <EditMenuNews />
        </AlarmCard>
        <AlarmCard title="지역소식(5)">
            <div slot="topicon" class="search-area">
                <div class="search-input">
                    <input type="text" id="search" placeholder="검색" />
                    <Icon icon="iconamoon:search" color="#c5c7c8" width="18" />
                </div>
                <button class="btn-primary-border-none" id="search-btn" on:click
                    >검색</button
                >
            </div>
            <div class="content">
                <CardNews />
            </div>
            <EditMenuNews />
        </AlarmCard>
    </div>
</section>

<style lang="scss">
    .news {
        margin-top: 10px;
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
