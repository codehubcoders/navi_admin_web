<script>


    let items = [
        { title: "서울", value: 1 },
        { title: "경기", value: 2 },
        { title: "대전", value: 3 },
    ];
</script>
<div class="tab2">

   

    <div class="inputBox">
        <div class="title">USIM 번호</div>
        <input type="text" placeholder="USIM 번호" />
    </div>
    <div class="inputBox">
        <div class="title">전화번호</div>
        <input type="text" placeholder="전화번호" />
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
   
</style>
