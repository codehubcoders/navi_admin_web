<script>
    // import Icon from "@iconify/svelte";

    let localtems = [
        {
            subTitle: "OO노인복지관",
            title: "서울시 OO구",
            date: "2023.12.31 16:43",
        },
        {
            subTitle: "OO노인복지관",
            title: "서울시 OO구",
            date: "2023.12.31 16:43",
        },
    ];
</script>

<div class="card-body">
    {#each localtems as item}
        <div class="w-box">
            <div>
                <p class="sub">{item.subTitle}</p>
                <p class="mt-5">{item.title}</p>
                <p class="sub mt-20">{item.date}</p>
            </div>

            <button class="btn-detail-gray" on:click>모니터링</button>
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
        padding: 10px 20px;
        border-radius: 4px;
        display: flex;
        justify-content: space-between;
        p {
            font-size: 14px;
            font-weight: 500;
        }
        .sub {
            font-size: 12px;
            color: #C5C7C8;
            font-weight: 400;
        }
        button{
            height: fit-content;
        }
    }
</style>
