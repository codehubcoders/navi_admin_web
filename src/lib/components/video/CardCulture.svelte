<script>
    import Icon from "@iconify/svelte";
</script>

<div class="card-body">
   
    <div class="text-box">
        <div class="title  mb-5">
            <p class="mb-5">시인 - 시 제목 <span class="ml-10">02:12</span></p>
            <button
                ><Icon
                    icon="material-symbols:close"
                    color="#8e9192"
                    width="16"
                />
            </button>
        </div>
  
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
        padding: 12px;
        height: fit-content;
        // border: 1px solid #5E72E4;
 
        .text-box {
            width: 100%;
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
