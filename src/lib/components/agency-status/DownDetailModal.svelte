<script>
	import ModalTextForm from './../globalComponents/ModalTextForm.svelte';
    export let showDetail = false;
    const handleDetailClick = () => {
        showDetail = !showDetail;
    };

    let detailList = [
        {
            title: "지역",
            contents: "서울시 OO구",
        },
        {
            title: "소속",
            contents: "노인복지센터",
        },
        {
            title: "이름",
            contents: "홍길동",
        },
        {
            title: "유형",
            contents: "엑셀",
        },
        {
            title: "항목",
            contents: "회원관리",
        },
        {
            title: "자료상세정보",
            contents: "주간 / 맥박",
        },
        {
            title: "일시",
            contents: "2023.12.05 16:50",
        },
    ];
</script>

{#if showDetail}
    <div class="backdrop" on:click|self>
        <div class="modal">
            <div class="modal__header">
                <p>다운로드 이력 상세정보</p>
            </div>
            <div class="modal__body">
                {#each detailList as item}
                <div class="row">
                    <div class="title">{item.title}</div>
                    <div class="contents">{item.contents}</div>
                </div>
                {/each}
               
                <div class="row">
                    <div class="title">마스킹 해제여부</div>
                    <div class="contents pr-20">해제</div>
                    <input type="text" placeholder="해제사유가 적혀져 있음"/>
                </div>
            </div>
        </div>
    </div>
{/if}

<style lang="scss">
    @import "src/lib/scss/style.scss";
    .backdrop {
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.8);
        z-index: 99;
    }
    .modal {
        padding: 10px 20px;
        border-radius: 10px;
        max-width: 30rem;
        margin: 10% auto;
        // text-align: center;
        background-color: white;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        &__header {
            margin-top: 20px;
            margin-bottom: 20px;
            font-weight: 500;
            font-size: 18px;
        }

        &__body {
            text-align: left;
            font-size: 16px;
            font-weight: 400;
            color: #8E9192;
            line-height: 1.4em;
            margin-bottom: 20px;
           .row{
            display: flex;
            align-items: center;
            padding: 7px 0;
         
            input[type="text"]{
                width: 55%;
                height:25px;
                border-radius: 4px;
            }
            input::placeholder {
            font-size: 12px;
            color: #5C5F60;
            font-weight: 300;
          }
            .title{
                color: #2E3132;
                font-weight: 400;
                width: 140px;
            }
            .contents{
                color:#A9ABAD;
                font-weight: 300;
                
            }
           }
        }

      
    }
</style>
