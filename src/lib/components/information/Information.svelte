<script>
	import EditMenuInfo from './../information/EditMenuInfo.svelte';

    import AlarmCard from "./../globalComponents/AlarmCard.svelte";
    import Icon from "@iconify/svelte";
import CardInfo from "../information/CardInfo.svelte";
</script>

<section class="info">
    <div class="info__card">
       
        <AlarmCard title="개인정보처리방침">
            <p slot="topicon"><Icon icon="uiw:more" color="#a9abad" /></p>
            <div class="content">
                <CardInfo />
            </div>
            <EditMenuInfo />
        </AlarmCard>
        <AlarmCard title="이용약관 동의내용">
            <p slot="topicon"><Icon icon="uiw:more" color="#a9abad" /></p>
            <div class="content">
                <CardInfo />
            </div>
            <EditMenuInfo />
        </AlarmCard>
      
    </div>
</section>

<style lang="scss">
          @import 'src/lib/scss/style.scss';
    section{
        margin-top: 10px;
    }
    .info {

        &__card {
            height: 500px;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 30px;
            @media (max-width: 535px) {
                grid-template-columns: 1fr;
            }
            .content {
                height: 500px;
                padding: 15px;
            }
        }
    }
</style>
