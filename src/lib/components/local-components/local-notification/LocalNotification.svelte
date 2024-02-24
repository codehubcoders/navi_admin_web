<script>
	import AlarmCard from './../../globalComponents/AlarmCard.svelte';
    import Icon from "@iconify/svelte";
	import { goto } from '$app/navigation';
    let noticeList= [
    {
        title: "가나다라마바사아자차카타파하",
        local: "서울특별시 강남구",
        clickNum: 585,
        startDate: "2023.12.31",
        endDate : "2024.02.12",
        border: true,
        bg:false
    },
    {
        title: "가나다라마바사아자차카타파하",
        local: "서울특별시 강남구",
        clickNum: 585,
        startDate: "2023.12.31",
        endDate : "2024.02.12",
        border: true,
        bg:false
    },
    {
        title: "가나다라마바사아자차카타파하",
        local: "서울특별시 강남구",
        clickNum: 585,
        startDate: "2023.12.31",
        endDate : "2024.02.12",
        border: false,
        bg:false
    },
    {
        title: "가나다라마바사아자차카타파하",
        local: "서울특별시 강남구",
        clickNum: 585,
        startDate: "2023.12.31",
        endDate : "2024.02.12",
        border: false,
        bg:false
    },
    {
        title: "가나다라마바사아자차카타파하",
        local: "서울특별시 강남구",
        clickNum: 585,
        startDate: "2023.12.31",
        endDate : "2024.02.12",
        border: false,
        bg:true
    },
    {
        title: "가나다라마바사아자차카타파하",
        local: "서울특별시 강남구",
        clickNum: 585,
        startDate: "2023.12.31",
        endDate : "2024.02.12",
        border: false,
        bg:true
    },
    ];
</script>
<section class="local_notice">

<AlarmCard title="관리자공지(15)">
    <div slot="topicon" class="d-f">
        <div class="search-input">
            <input type="text" id="search" placeholder="검색" />
            <Icon icon="iconamoon:search" color="#c5c7c8" width="18" />
          </div>
        <button class="btn-primary">검색</button>
    </div>
    <div class="contents">
        {#each noticeList as item}
        <button on:click={()=>goto(`/local-notice/detail`)}>
            <div class="item_box {item.border == true ? "border_blue" : ""} {item.bg == true ? "bg_gray" : "bg_white"}">
                <div class="title">
                    {item.title}
                </div>
                <div class="bottom">
                    <div class="local">{item.local}<span>조회 {item.clickNum}</span></div>
                    <div class="date">  {item.startDate } - {item.endDate}</div>
                </div>
            </div>
        </button>
        {/each}
    </div>
</AlarmCard>

</section>


<style lang="scss">
    @import 'src/lib/scss/style.scss';
    .local_notice{
        padding: 30px 0;
        height: 800px;
        .search-input {
          display: flex;
          align-items: center;
          margin-right: 10px;
          border: 1px solid #C5C7C8;
          border-radius: 4px;
          width: 200px;
          height: 30px;
          padding: 0 10px;

          @media (max-width: 535px) {
            margin-top: 5px;
            width: 50%;
          }
          input[type="text"] {
            padding: 0px;
            width: 200px;
            height: fit-content;
            border: none;
          }
          input::placeholder {
            font-size: 13px;
            color: #A9ABAD;
          }
        }
        .contents{
            display: flex;
            flex-direction: column;
            gap: 15px;
            padding: 20px;
            .item_box{
                padding: 25px;
                height: 60px;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                border-radius: 8px;
                .title{
                    font-size: 20px;
                    font-weight: 600;
                    text-align: left;
                }
                .bottom{
                    font-size: 12px;
                    color: #c5c7c8;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    .local{
                        span{
                            margin-left: 50px;
                        }
                    }
                }
            }
        }
        .border_blue{
        border: 1px solid #5E72E4;
        }
      
    }
    .bg_gray{
            background-color:#F8FAFB;
            color: #757779;
        }
        .bg_white{
            background-color: white;
        }

</style>