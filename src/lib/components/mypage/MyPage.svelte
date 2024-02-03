<script>
    import ModalTextForm from "./../globalComponents/ModalTextForm.svelte";

    import AlarmCard from "./../globalComponents/AlarmCard.svelte";
</script>

<section class="mypage">
    <div class="card-area">
        <AlarmCard title="내 정보">
            <div class="content">
                <ModalTextForm
                    label="관할지역"
                    myPage
                    disabled
                    value="서울시 OO구"
                />
                <ModalTextForm
                    label="소속"
                    myPage
                    disabled
                    value="치매안심센터"
                />
                <ModalTextForm
                    label="성함"
                    myPage
                    value="홍길동"
                />
                <ModalTextForm
                    label="연락처"
                    myPage
                    value="010-1234-5678"
                />
                <ModalTextForm
                    label="이메일"
                    myPage
                    value="asdf@naver.com"
                />
                <button class="btn-primary ml-5">수정</button>
            </div>
           
        </AlarmCard>
    </div>
</section>

<style lang="scss">
    @import "src/lib/scss/style.scss";
    .mypage {
        margin-bottom: 50px;
    }
    .card-area {
        margin-top: 5px;
        height: 600px;
    }
    .content {
        height: 600px;
        padding: 15px;

        @media (max-width: 535px) {
            
        }
    }
</style>
