<script>
	import SelectBoxProduct from './../SelectBoxProduct.svelte';

    // let items = [
    //     { title: "서울", value: 1 },
    //     { title: "경기", value: 2 },
    //     { title: "대전", value: 3 },
    // ];
    let items = [
        { title: "인천서구 | 렌탈 | 2023.12.02", value: 1 , right: 123456},
        { title: "인천서구 | 렌탈 | 2023.12.02", value: 2 , right: 123456},
        { title: "인천서구 | 렌탈 | 2023.12.02", value: 3 , right: 123456},
    ];

</script>
<div class="tab2">

    <div class="inputBox">
        <div class="title">계약번호<span>(필수)</span></div>
        <SelectBoxProduct {items} placeholder="인천서구 | 렌탈 | 2023.12.02" />
    </div>
    <!-- <div class="long-box">
        <div class="info-long">
            <div class="title mb-10">계약번호<span>(필수)</span></div>
            <div class="row">
                <input
                    type="text"
                    value="인천서구 | 렌탈 | 2023.12.02"
                />
                <input
                    type="text"
                    value="123456"
                    style="text-align: right;"
                />
            </div>
        </div>
    </div> -->
    <div class="inputBox">
        <div class="title">제품코드<span>(필수)</span></div>
        <input type="text" placeholder="" />
    </div>
    <div class="inputBox">
        <div class="title">IMEI</div>
        <input type="text" placeholder="" />
    </div>
    <div class="inputBox">
        <div class="title">MAC</div>
        <input type="text" placeholder="" />
    </div>
    <div class="inputBox">
        <div class="title">USIM</div>
        <input type="text" placeholder="" />
    </div>

    <div class="inputBox">
        <div class="title">Serial No.</div>
        <input type="text" placeholder="" />
    </div>
    <div class="inputBox">
        <div class="title">제품출고일</div>
        <input type="text" placeholder="" />
    </div>

</div>


<style lang="scss">
     @import "src/lib/scss/style.scss";
    .tab2{
        .inputBox {
        padding: 0px 0;

        input[type="text"] {
            height: 30px;
            border-radius: 4px;
        }
        input::placeholder {
            font-size: 12px;
            color: #5C5F60;
            font-weight: 300;
        }

        .title {
            color: #2E3132;
            font-weight: 400;
            width: 140px;
            span {
                color: #A9ABAD;
                font-size: 12px;
            }
        }
        .contents {
            color: #A9ABAD;
            font-weight: 300;
        }
        .row {
            display: flex;
            width: 100%;
            justify-content: space-between;
        }
    }
    }

    .long-box {
        span {
                color: #A9ABAD;
                font-size: 12px;
            }
        .info-long {
            color: #2E3132;
            font-weight: 500;
            font-size: 12px;
             margin: 10px 0;
            .row {
                height: 33px;
                border: 1px solid #E1E3E4;
                display: flex;
                border-radius: 4px;
                width: 100%;
                justify-content: space-between;
                // padding-bottom: 5px;
            }
            input[type="text"] {
                vertical-align: middle;
                padding: 0 10px;
                font-size: 12px;
                border-radius: 4px;
                border: none;
                color: #444748;
            }
            input::placeholder {
                font-size: 12px;
                color: #5C5F60;
                font-weight: 300;
            }
        }
    }
   
</style>
