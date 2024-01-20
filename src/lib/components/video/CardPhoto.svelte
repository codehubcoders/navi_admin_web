<script>
    import Icon from "@iconify/svelte";
</script>

<div class="card-body">
    <div class="img-box">썸네일</div>
    <div class="text-box">
        <div class="title">
            <p class="sub">서울특별시 강남구</p>
            <button class="btn-detail-gray">상세내역 </button>
        </div>
        <p class="sub">2023.12.31 - 2024.01.21</p>

    </div>
</div>

<style lang="scss">
    .card-body {
        display: flex;
        align-items: center;
        background-color: white;
        border-radius: 8px;
        padding: 8px;
        height: fit-content;
        .img-box {
            width: 120px;
            height: 85px;
            border-radius: 4px;
            background-color: #D9D9D9;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 12px;
        }
        .text-box {
            width: 100%;
            height: 60px;
            margin-left: 20px;
            margin-right: 5px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            
            .title {
                font-size: 14px;
                display: flex;
                align-items: center;
                justify-content: space-between;
            }
            .sub {
                text-align: right;
                color: #C5C7C8;
                font-size: 12px;
                line-height: 1.4em;
                span {
                    display: inline-block;
                }
            }
        }
    }
</style>
