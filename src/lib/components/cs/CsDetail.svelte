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
    <div class="register__header">CS등록</div>
    <div class="register__body">
        <div class="label">접수유형</div>
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
            <div class="select-box">
                <SelectBoxBgW {items} width="15%"  />
                <SelectBoxBgW {items} width="15%"  />
            </div>
        </div>
        <div class="member-box">
            <div class="row">
                <div class="label">주관기관</div>
                <input type="text" value="부천시청 노인복지관" style="width: 100%;"/>
            </div>
            <div class="row">
                <!-- <div class="select-box">
                    <SelectBoxBgW {items} width="100%" placeholder="대분류" />
                    <SelectBoxBgW {items} width="100%" placeholder="중분류" />
                </div> -->
            </div>
            <div class="row">
                <div class="label">성함</div>
                <input type="text" value="오길동" style="width: 100%;"/>
            </div>
            <div class="row">
                <div class="label">연락처</div>
                <input type="text" value="010-1234-5678" style="width: 100%;"/>
            </div>
            <div class="row">
                <div class="label">생년월일</div>
                <input type="text" value="1943.05.21" style="width: 100%;"/>
            </div>
            <div class="row">
                <div class="label">제품코드</div>
                <input type="text" value="2401D0001" style="width: 100%;"/>
            </div>
        </div>
        <div class="content ">
            <div class="label mt-15 ">접수내용</div>
            <textarea placeholder="내용을 입력하세요.">나비를 직접구매하고싶은데 어떻게 해아하나요?
          </textarea>
            <div class="upload-bar">
                <div class="icon">
                    <Icon icon="uil:upload-alt" color="#8e9192" width="18" />
                </div>
            </div>
        </div>
        <div class="label mt-15 ">관련 첨부파일</div>
        <div class="add-local">
            <div class="local-list">
                <p>파일명 : 캡쳐파일 236165456.jpg</p>
                <Icon icon="solar:download-linear" width="20px" height="20px"  style="color: #5E72E4" />
            </div>
            <div class="local-list">
                <p>파일명 : 캡쳐파일 236165456.jpg</p>
                <Icon icon="solar:download-linear" width="20px" height="20px"  style="color: #5E72E4" />
            </div>
        </div>
       
        <div class="label">처리현황</div>
        <SelectBoxBgW {items} width="50%" placeholder="처리현황" />
        <div class="label">담당자</div>
        <input type="text" value="임려원"/>
        <div class="flex-end">   <button class="btn-primary">등록</button></div>
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
                padding-top: 10px;
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

    .content {
        position: relative;

        textarea {
            color: #8E9192;
            height: 200px;
            width: 100%;
        }
        .upload-bar {
            position: absolute;
            width: calc(100% - 2px);
            background-color: #F5F5F5;
            bottom: 0px;
            border: 1px solid #E1E3E4;
            border-top: none;
            border-radius: 0 0 12px 12px;
            padding: 8px 0px;
            .icon {
                padding-left: 20px;
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
                gap: 10px;
            }
        }
    }


    .flex-end {
        padding: 10px 0;
        display: flex;
        justify-content: flex-end;
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

    .row {
            .select-box {
                height: 100%;
                display: flex;
                align-items: flex-end;
                gap: 10px;
            }}
</style>
