<script>
    import SelectBoxBgW from "./../customComponents/selectbox/SelectBoxBgW.svelte";

    import Icon from "@iconify/svelte";
    // import RegisterTextAreaForm from './../globalComponents/RegisterTextAreaForm.svelte';
    // import ModalITextAreaForm from './../../globalComponents/ModalITextAreaForm.svelte';
    // import ModalTextForm from './../globalComponents/ModalTextForm.svelte';

    let selectedMember = "회원";
    let MemberRadio = ["회원", "비회원"];

    function onChangeMember(event) {
        selectedMember = event.currentTarget.value;
    }
    let items = [
        { title: "본인", value: 1 },
        { title: "경기", value: 2 },
        { title: "대전", value: 3 },
    ];
</script>

<section class="register">
    <div class="register__header">계약번호 2312S010005</div>
    <div class="register__body">
        <!-- <div class="label">접수유형</div>
        <SelectBoxBgW {items} width="50%" />
        <div class="label" >고객명(CS대상자)</div>
        <input type="text" placeholder="고객명" value="오동석" />
        <div class="label">고객연락처</div>
        <input type="text" placeholder="고객연락처" value="010-2345-6789"/>

        <div class="label">회원유무</div>

        {#each MemberRadio as item, index}
            <label style={selectedMember != item ? "color:#757779" : ""}>
                <input
                    checked={selectedMember == item}
                    on:change={onChangeMember}
                    type="radio"
                    name="member"
                    value={item}
                />
                <span class="fw-500"> {item}</span>
            </label>
        {/each}
        <div class="row">
            <div class="select-box d-f">
                <SelectBoxBgW {items} width="15%"  />
                <SelectBoxBgW {items} width="15%"  />
            </div>
        </div> -->
        <div class="member-box">
            <div class="row">
                <div class="label">계약대상</div>
                <input type="text" value="인천서구 치매안심센터" style="width: 100%;"/>
            </div>
            <div class="row">
                <div class="label">서비스제품</div>
                <input type="text" value="스탠다드" style="width: 100%;"/>
            </div>
            <div class="row">
                <div class="label">계약방법</div>
                <input type="text" value="구매    100대" style="width: 100%;"/>
            </div>
            <div class="row">
                <div class="label">조달청계약번호</div>
                <input type="text" value="23015ASG65DS5" style="width: 100%;"/>
            </div>
            <div class="row">
                <div class="label">납품기한</div>
                <input type="text" value="1943.05.21" style="width: 100%;"/>
            </div>
        
            <div class="d-f">
                <div style="width: 50%;" class="mr-10">
                    <div class="label">계약기간</div>
                    <input type="text" value="2023.01.02" style="width: 100%;"/>
                </div>
                <div style="width: 50%;">
                    <div class="label">유지보수기간</div>
                    <input type="text" value="2025.01.02" style="width: 100%;"/>
                </div>
            </div>
            <div class="row">
                <div class="label">지역</div>
                <input type="text" value="인천광역시 서구" style="width: 100%;"/>
            </div>
            <div class="row">
                <div class="label">첨부파일</div>
                <input type="text" value="인천광역시 서구" style="width: 100%;"/>
            </div>
        </div>
        <!-- <div class="content ">
            <div class="label mt-15 ">접수내용</div>
            <textarea placeholder="내용을 입력하세요.">나비를 직접구매하고싶은데 어떻게 해아하나요?
          </textarea>
            <div class="upload-bar">
                <div class="icon">
                    <Icon icon="uil:upload-alt" color="#8e9192" width="18" />
                </div>
            </div>
        </div> -->
        <div class="label mt-15 ">관련 첨부파일</div>
        <div class="add-local">
            <div class="local-list">
                <p>등록</p>
                <p>9대</p>
            </div>
            <div class="local-list">
                <p>출고</p>
                <p>20대</p>
            </div>
            <div class="local-list">
                <p>설치</p>
                <p>71대</p>
            </div>
            <div class="local-list">
                <p>회수</p>
                <p>1대</p>
            </div>

        </div>
        <div class="member-box">
            <div class="row">
                <div class="label mt-15">계약담당자</div>
                <input type="text" value="홍길동" style="width: 100%;"/>
            </div>
            <div class="row">
                <div class="label mt-15">메모</div>
                <input type="text" value="특이사항" style="width: 100%;"/>
            </div>
        </div>
        <div class="row pb-15">
            <div class="label mt-15 ">등록일자 </div>
           <p class="gray-small">최종 등록일자 24.01.03 16:32</p> 
           <p class="gray-small">최종 수정일자 24.01.03 18:32</p> 
        </div>
     <button class="btn-primary mt-15 ">삭제</button>
    </div>

</section>

<style lang="scss">
    @import "src/lib/scss/style.scss";
    .register {
        box-shadow: 0 5px 20px rgba(173, 181, 217, 0.4);
        margin-top: 10px;
        background-color: white;
        &__header {
            font-size: 18px;
            font-weight: 500;
            padding: 20px;
        }
        &__body {
            background-color: #F8FAFB;
            padding: 20px;

            .label {
                font-size: 16px;
                font-weight: 00;
                color: #444748;
                display: block;
                padding-bottom: 5px;
            }
            [type="text"] {
                height: 33px;
                width: 50%;
                color: #8E9192;
            }
            label {
                font-size: 12px;
                line-height: 2rem;
                padding-right: 1em;
                
            }
            [type="radio"],
            span {
                vertical-align: middle;
            }
            [type="radio"] {
                width: 1.25em;
                height: 1.25em;
            }
        }
    }

   

    .member-box {
        // background-color: white;
        border-radius: 8px;
        // border: 1px solid #E1E3E4;
        // padding: 15px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 15px;

        .row {
            .select-box {
                height: 100%;
                display: flex;
                align-items: flex-end;
            }
        }
    }



      .add-local {
        background-color: white;
        border-radius: 8px;
        border: 1px solid #E1E3E4;
        width:50%;
        padding: 5px 0;
        @media (max-width: 535px) {
                // display: inline-block;
                width: 100%;
            }
        .local-list {
            font-size: 12px;
            color: #5C5F60;
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 0px 20px;
            padding: 7px 0;
            border-bottom: 1px solid #EFF1F2;
            
            &:nth-last-child(1) {
                border-bottom: none;
            }
            p {
                font-size: 12px;
                color: #5C5F60;
            }
        }
    }
    .gray-small{
        color:#A9ABAD;
        font-size: 12px;
        margin-top: 5px;
    }
</style>
