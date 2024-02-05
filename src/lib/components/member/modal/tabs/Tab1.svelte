<script>
    import SelectBoxMember from "../SelectBoxMember.svelte";
    import Icon from '@iconify/svelte';
    let items = [
        { title: "서울", value: 1 },
        { title: "경기", value: 2 },
        { title: "대전", value: 3 },
    ];
</script>
<div class="tab2">
    <div class="inputBox">
        <div class="title">지역설정</div>
        <div class="row">
            <SelectBoxMember {items} placeholder="시" />
            <SelectBoxMember {items} placeholder="군" />
            <SelectBoxMember {items} placeholder="구" />
        </div>
    </div>
    <div class="inputBox">
        <div class="title">주관기관</div>
        <SelectBoxMember {items} placeholder="주관기관" />
    </div>
    <div class="lineBox">
 <button class="btn-upLoad mb-10">
    <Icon icon="ph:plus-thin" width="24" height="24" color="#444748" />
 </button>
 <p style="text-align: center;">내 컴퓨터에서 업로드</p>
    </div>
    <div class="button">
        <button class="btn-white">Excel 양식</button>
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
            margin-top: 5px;
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
    .btn-white{
        border: 1px solid #C5C7C8;
        padding: 5px 10px;
        font-size: 12px;
        border-radius: 4px;
        margin: 0 auto;
    }
    }
    .lineBox{
        margin: 20px 0;
            border: 1px solid #E1E3E4;
            border-radius: 8px;
            padding: 25px 0;
        }
</style>
