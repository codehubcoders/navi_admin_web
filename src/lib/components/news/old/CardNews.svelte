<script>
    import Icon from "@iconify/svelte";
</script>

<div class="card-body">
    <div class="img-box">썸네일</div>
    <div class="text-box">
        <div class="title  mb-5">
            <p class="sub">건강</p>
            <button
                ><Icon
                    icon="material-symbols:close"
                    color="#8e9192"
                    width="16"
                />
            </button>
        </div>
        <p class="mb-5 fs-14 fw-500">가나다라마바사아자차카타파하</p>
        <div>
            <p class="sub">서울특별시 강남구</p>
            <p class="sub">
                <span>조회수 356</span><span>2023.12.31 - 2024.01.21</span>
            </p>
        </div>
    </div>
</div>

<style lang="scss">
          @import 'src/lib/scss/style.scss';
    .card-body {
        display: flex;
        align-items: center;
        background-color: white;
        border-radius: 8px;
        padding: 8px;
        height: fit-content;
        border: 1px solid #5E72E4;
        .img-box {
            width: 120px;
            height: 85px;
            border-radius: 4px;
            background-color: #D9D9D9;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .text-box {
            width: 100%;
            margin-left: 20px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            .title {
                font-size: 14px;
                font-weight: 500;
                display: flex;
                justify-content: space-between;
            }
            .sub {
                display: flex;
                justify-content: space-between;
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
