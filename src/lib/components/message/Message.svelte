<script>
    import AlarmCard from "./../globalComponents/AlarmCard.svelte";
    import Icon from "@iconify/svelte";
    let textList = [
        {
            leftText:'연락처',
            rightText : '01012345678'
        },
        {
            leftText:'긴급연락처',
            rightText : '01023456789'
        },
        {
            leftText:'이름',
            rightText : '홍길동'
        },
        {
            leftText:'혈액형',
            rightText : 'A'
        },
        {
            leftText:'생년월일',
            rightText : '1996.09.01'
        },
        {
            leftText:'주소',
            rightText : '서울시 서초구 남부순환로 358길 28, 4층'
        },
        {
            leftText:'신고사항',
            rightText : '화재발생'
        },
        {
            leftText:'특이사항',
            rightText : '왼쪽 눈 백내장 수술로 시야가 어두움'
        },

    ]
</script>

<section class="message">
    <div class="message__card">
        <AlarmCard title="119 문자내용 예시">
            <p slot="topicon"><Icon icon="uiw:more" color="#a9abad" /></p>
            <div class="content">
                <div class="box">
                    <div class="top_text">
                        본 신고문자는 노인 스마트 돌봄 장치(나비)로부터 어르신이
                        직접 신고를 한 실제 응급 신고 문자입니다. 출동 전 아래
                        연락처를 통하여 확인이 필요합니다.
                    </div>
                    <div class="title">
                        &lt;&lt;신고자 정보 &gt;&gt;
                    </div>
                    {#each textList as item}
                    <div class="text-box">
                        <p class="left">{item.leftText}</p>
                        <p class="blue">{item.rightText}</p>
                    </div>
                    {/each}

                    <p>해당 정보는 어르신의 동의하에 제공드리는 정보입니다.</p>
                </div>
            </div>
        </AlarmCard>
        <AlarmCard title="나비 APP 문자">
            <p slot="topicon"><Icon icon="uiw:more" color="#a9abad" /></p>
            <div class="content">
                <div class="box">
                    <div class="top_text">
                        전화기능 내 연동된 문자입니다
                    </div>
                    <div class="title">
                        &lt;&lt;신고자 정보 &gt;&gt;
                    </div>
                    {#each textList as item}
                    <div class="text-box">
                        <p class="left">{item.leftText}</p>
                        <p class="blue">{item.rightText}</p>
                    </div>
                    {/each}

                    <p>해당 정보는 어르신의 동의하에 제공드리는 정보입니다.</p>
                </div>
            </div>
        </AlarmCard>
    </div>
</section>

<style lang="scss">
    .message {
        margin-top: 10px;
        margin-bottom: 10px;
        &__card {
            
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 30px;
            @media (max-width: 535px) {
                grid-template-columns: 1fr;
            }
            .content {
                height: 100%;
                padding: 15px;
                .box {
                       height: 100%;
                    background-color: #F8FAFB;
                    padding: 15px;
                    .top_text{
                        font-size: 12px;
                        font-weight: 400;
                        // width: 255px;
                        line-height: 1.25em;
                    
                    }
                    .title{
                        font-size: 14px;
                        font-weight: 500;
                        padding: 15px 0;
                    }
                    .text-box{
         
                        width: 100%;
                        display: flex;
                        padding-bottom: 13px;
                        .left{
                            width: 70px;
                        }
                        .blue{
                                color: #596DDF;
                            }
                    }
                    p{
                        font-size: 12px;
                        font-weight: 400;
                    }
                }
            }
        }
    }
</style>
