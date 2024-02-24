<script>
	import AlarmCard from './../../globalComponents/AlarmCard.svelte';
    import Icon from "@iconify/svelte";
	import { goto } from '$app/navigation';
</script>
<section class="local-notice-detail">
<AlarmCard title="공지제목가나다라마바사아자차카타파하">
<div class="contents">
    <div class="box">
        <div class="title">
            더인츠 임기채 대표, 복약관리 솔루션 ‘나비’로 시니어 삶의 활력
        </div>
        <div class="body">
            [바이오타임즈] 지금의 대한민국은 2025년 초고령 사회를 앞두고 있다. <br>
유엔(UN)은 65세 이상 고령자 비중이 전체 인구의 7% 이상 차지하면 ‘고령화 사회’(Aging Society), 14% 이상은 ‘고령사회’(Aged Society), <br>
20% 이상은 ‘후기 고령사회’(Post-aged Society) 또는 ‘초고령 사회’로 정의를 내렸다. <br>
<br>
행정안전부의 ‘주민등록 인구통계’에 따르면 2023년 3월 기준 전체 주민등록 인구수는 5,141만 4,281명인데, <br>
이 중 65세 이상 노인 인구수는 939만 7,055명으로 전체의 약 18.3%를 차지하며 고령사회에 들어와 있다. <br>
<br>
다만, 통계청은 지난 9월 발표한 ‘2022년 고령자 통계’를 통해 2025년 한국 고령자 비중이 2025년 20.6%를 넘어서며 <br>
초고령사회에 진입할 것으로 예측했다. <br>
<br>
학계에서는 지속적인 생활수준 향상과 보건∙의료 기술의 발달에 따른 평균 수명의 연장 등이 고령사회, 또는 <br>
초고령 사회로의 진입 원인으로 보고 있다. <br>
<br>
초고령 사회로의 진입과 함께 주목해야 할 것은 ‘고령자 복약사고’다. <br>
일각에서는 대부분 고령자 시력과 청력, 미각 등의 감각기능이 둔해지는 데다 기억력이 감퇴해 <br>
이들을 대상을 한 복약지도가 매우 중요하다고 입을 모은다. <br>
<br>
더인츠는 고령자의 복약 관리부터 일상 및 정서적 건강관리, 응급지원, 치매 예방까지 <br>
통합된 노인 돌봄 서비스를 제공하는 에이지테크 전문 기업이다. <br>
<br>
4차 산업기술과 제론테크놀로지(노인학과 기술의 합성어, Gerontechnology)를 융합한 나비(나만의 약비서)를 개발했다. <br>
임기채 대표는 “고령자 2명 중 1명은 5가지 이상 약을 복약하고 노인 환자의 미복용율은 30%에 육박하는 만큼, 고령자에게 복약사고는 <br>
사망에까지 이르게 할 수 있는 큰 문제”라며 “대한민국 초고령사회에 맞춰 우리의 삶이 정말로 필요로 하는 기술을 만드는, <br>
그래서 사회적 책임을 다하는 기업을 지향한다”고 전했다. <br>
        </div>
        <button class="btn-white-small" on:click={()=>goto(`/local-notice`)}>목록으로</button>
    </div>

</div>
</AlarmCard>
</section>
<style lang="scss">
    @import 'src/lib/scss/style.scss';
    .local-notice-detail{
        padding: 30px 0;
        height: 800px;
        .contents{
            padding: 30px ;
            .box{
            background-color: white;
            padding: 0 30px 30px;
            border-radius: 8px;
            
            .title{
                color:#444748;
                font-size: 24px;
                padding: 30px 0;
                border-bottom: 1px solid #A9ABAD;
            }
            .body{
                padding: 30px 0;
                margin-bottom: 20px;
                font-size: 17px;
                color: #757779;
                line-height: 25px;
                border-bottom: 1px solid #A9ABAD;
            }
            .btn-white-small{
                color: #444748;
                font-size: 12px;
                border: 1px solid #A9ABAD;
                border-radius: 4px;
                padding: 10px 12px;
                margin: 0 auto;
                box-shadow: 0 5px 10px rgba(173, 181, 217, 0.4);
            }
        }
        }
     
    }
</style>