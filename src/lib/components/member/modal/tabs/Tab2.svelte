<script>
    import SelectBoxMember from "../SelectBoxMember.svelte";

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
    <div class="inputBox">
        <div class="title">아이디<span>(필수)</span></div>
        <input type="text" placeholder="아이디" />
    </div>
    <div class="inputBox">
        <div class="title">비밀번호<span>(필수)</span></div>
        <input type="text" placeholder="아이디" />
    </div>
    <div class="inputBox">
        <div class="title">이름<span>(필수)</span></div>
        <input type="text" placeholder="아이디" />
    </div>
    <div class="inputBox">
        <div class="title">성별<span>(필수)</span></div>
        <input type="text" placeholder="아이디" />
    </div>
    <div class="inputBox">
        <div class="title">생년월일</div>
        <div class="row">
            <SelectBoxMember {items} placeholder="년" />
            <SelectBoxMember {items} placeholder="월" />
            <SelectBoxMember {items} placeholder="일" />
        </div>
    </div>
    <div class="inputBox">
        <div class="title">주소<span>(필수)</span></div>
        <input type="text" class="input" placeholder="아이디" />
    </div>
    <div class="inputBox">
        <div class="title">휴대폰번호<span>(필수)</span></div>
        <input type="text" placeholder="휴대폰번호" />
    </div>
    <div class="inputBox">
        <div class="title">긴급연락처</div>
        <input type="text" placeholder="긴급연락처" />
    </div>
    <div class="inputBox">
        <div class="title">특이사항</div>
        <input type="text" placeholder="특이사항" />
    </div>
    <div class="inputBox">
        <div class="title">혈액형</div>
        <SelectBoxMember {items} placeholder="혈액형" />
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
