<script>
	import CardGame from './CardGame.svelte';
	import CardPhoto from './CardPhoto.svelte';
	import CardCulture from './CardCulture.svelte';
	import EditMenuVideo from './EditMenuVideo.svelte';
	import Cardvideo from './Cardvideo.svelte';
    import AlarmCard from "./../globalComponents/AlarmCard.svelte";
    import Icon from "@iconify/svelte";
</script>

<section class="video">
    <div class="video__card">
        <AlarmCard title="영상관리">
            <p slot="topicon"><Icon icon="uiw:more" color="#a9abad" /></p>
            <div class="content">
                <Cardvideo />
            </div>
            <EditMenuVideo />
        </AlarmCard>
        <AlarmCard title="문화관리">
            <p slot="topicon"><Icon icon="uiw:more" color="#a9abad" /></p>
            <div class="content">
                <CardCulture />
            </div>
            <EditMenuVideo />
        </AlarmCard>
        <AlarmCard title="사진관리">
            <p slot="topicon"><Icon icon="uiw:more" color="#a9abad" /></p>
            <div class="content">
              <CardPhoto />
            </div>
            <EditMenuVideo />
        </AlarmCard>
        <AlarmCard title="게임관리">
            <p slot="topicon"><Icon icon="uiw:more" color="#a9abad" /></p>
            <div class="content">
               <CardGame />
            </div>
            <EditMenuVideo />
        </AlarmCard>
    </div>
</section>

<style lang="scss">
    section{
        margin-top: 10px;
        margin-bottom: 2em;
    }
    .video {

        &__card {
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
