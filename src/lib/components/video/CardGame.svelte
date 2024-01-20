<script>
    // import Icon from "@iconify/svelte";
</script>

<div class="card-body">
    <div class="img-box">스도쿠 이미지</div>
    <div class="text-box">
        <div class="title">
            <p class="sub">작성자</p>
            <button class="btn-detail-gray">상세내역 </button>
        </div>
        <p class="mb-5 fs-14 fw-500">스도쿠</p>
        <!-- <p class="sub">2023.12.31 - 2024.01.21</p> -->

    </div>
</div>

<style lang="scss">
    .card-body {
        display: flex;
        // align-items: center;
        background-color: white;
        border-radius: 8px;
        padding: 8px;
        height: fit-content;
        // border: 1px solid #5E72E4;
        
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
       
            margin: 5px 5px 0 20px;
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
