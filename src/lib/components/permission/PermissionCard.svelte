<script>
    // import Icon from "@iconify/svelte";

    let localtems = [
        {
            subTitle: "마스터 계정",
            title: "가나라마가나다라마바사아자차카타파하바사",
            date: "2024.1.13 16:43",
            
        },
        {
            subTitle: "마스터 계정",
            title: "가나라마가나다라마바사아자차카타파하바사",
            date: "2024.1.13 16:43",
            
        },
        {
            subTitle: "마스터 계정",
            title: "가나라마가나다라마바사아자차카타파하바사",
            date: "2024.1.13 16:43",
            
        },
    ];
</script>

<div class="card-body">
    {#each localtems as item}
        <div class="w-box">
            <p class="sub">{item.subTitle}</p>
            <p class="mt-5">{item.title}</p>
            <p class="sub mt-20">{item.date}</p>
        </div>
    {/each}
</div>

<style lang="scss">
          @import 'src/lib/scss/style.scss';
    .card-body {
        overflow-x: hidden;
        height: 400px;
        padding: 15px;
        display: flex;
        flex-direction: column;
        gap: 15px;
        overflow: scroll;
    }
    .w-box {
        background-color: white;
        padding: 15px 20px;
        border-radius: 4px;
       p{
        font-size: 14px;
        font-weight: 500;
       }
       .sub{
        font-size: 12px;
        color: #C5C7C8;
        font-weight: 400;
       }
    }

</style>
