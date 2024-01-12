
<script>
import Icon from '@iconify/svelte';
let cardList= [
    {
        title: '평균 걸음수',
        // data: [
        //     {
        //     date: "12/01",
        //     dataNum: 2528,
        //  },
        // {
        //     date: "12/02",
        //     dataNum: 2528,
        //  },
        // {
        //     date: "12/03",
        //     dataNum: 2528,
        //  },
        // {
        //     date: "12/04",
        //     dataNum: 2528,
        //  },
        // {
        //     date: "12/05",
        //     dataNum: 2528,
        //  },
        //  {
        //     date: "12/06",
        //     dataNum: 2528,
        //  },
        // {
        //     date: "12/07",
        //     dataNum: 2528,
        //  },
        // {
        //     date: "12/08",
        //     dataNum: 2528,
        //  },
        // {
        //     date: "12/01",
        //     dataNum: 2528,
        //  },
        // {
        //     date: "12/01",
        //     dataNum: 2528,
        //  },
        // ]
    },
    {
        title: '걸음거리',
    },
    {
        title: '혈압',
    },
    {
        title: '산소포화도',
    },
    {
        title: '심박수',
    },
]
</script>

<div class="card-list">
{#each cardList as item, index}
<div class="card-main">
    <div class="header">
       <p> {item.title}</p>
        <button><Icon icon="solar:graph-up-linear" />그래프 보기</button>
    </div>
    <div class="contents">
        <div class="item">
                 {item.title} 테이블
        </div>
    </div>
    </div>
{/each}


</div>

<style lang="scss">
  button{
    background:white;
    font-size: 13px;
    font-weight: 400;
  }

  .card-list{
    margin-top:30px;
    display:grid;
   grid-template-columns: 1fr 1fr;
   gap: 30px;
       @media (max-width: 720px) {
      grid-template-columns: 1fr;
    }
  }
.card-main{

}
  .header{
    display:flex;
    justify-content: space-between;
    button{
      background:white;
      display:flex;
      justify-content: space-between;
      gap: 5px;
    }
  }
  .contents{
    height:200ox;
    background:white;
    padding: 20px 20px;
     border-radius: 0 0px 12px 12px;
    
  }
</style>