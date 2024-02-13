<script>
    // import SelectBoxMember from "../SelectBoxMember.svelte";
    import Icon from "@iconify/svelte";
    let items = [
        { title: "서울", value: 1 },
        { title: "경기", value: 2 },
        { title: "대전", value: 3 },
    ];
</script>
<div class="tab2">
  
    <div class="inputBox">

        <div class="thumbnail">
            <Icon icon="lets-icons:add-square-light" width="60" />
            <p>내 컴퓨터에서 업로드</p>
        </div>
    </div>
  <button class="excel-btn">Excel양식</button>
</div>


<style lang="scss">
     @import "src/lib/scss/style.scss";
 

    .thumbnail {
        background-color: white;
        font-size: 12px;
        text-align: center;
        border-radius: 8px;
        border: 1px solid #E1E3E4;
        padding: 30px;
        margin-bottom: 30px;
    }
    .excel-btn {
        margin: 0 auto;
        padding: 5px 10px;
        font-size: 12px;
        border: 1px solid #E1E3E4;
            color: #444748;
            border-radius: 4px;
        
    }
</style>
