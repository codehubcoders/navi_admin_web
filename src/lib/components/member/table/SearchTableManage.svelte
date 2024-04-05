<script>
	import ManageDetail from './../modal/ManageDetail.svelte';
  import ReleseHistory from '../modal/ReleseHistory.svelte';
  import Icon from "@iconify/svelte";
import MemberDialog from '../dialog/memberDialog.svelte';
  
   let showDialog = true;
   const handleDialogClick = () => {
    showDialog = !showDialog;
    };

   let showManageDetail = false;
    const handleManageDetailClick = () => {
      showManageDetail = !showManageDetail;
    };

    let showRelese = false;
    const handleRelesClick = () => {
        showRelese = !showRelese;
    };
  let newData = [
    {
      memberName: "장범준",
      age: 72,
      local: "서울시 강남구 개포동",
      managerInfo: "강남구청 노인복지관",
      releseTarget: "경고",
      releaseDate: "2024.01.02 14:52",
      detail: "",
    },
    {
      memberName: "장범준",
      age: 72,
      local: "서울시 강남구 개포동",
      managerInfo: "강남구청 노인복지관",
      releseTarget: "경고",
      releaseDate: "2024.01.02 14:52",
      detail: "",
    },
   
  ];
  let current = "name";
  // onMount(() => {
  //   var btnSortName = document.getElementById("sortName");
  //   var btnSortAge = document.getElementById("sortAge");
  //   var btnSortlocal = document.getElementById("sortLocal");

  //   btnSortName.addEventListener("click", (e) => {
  //     current = "name";
  //     sortTable(1);
  //   });
  //   btnSortAge.addEventListener("click", (e) => {
  //     current = "age";
  //     sortTable(2);
  //   });
  //   btnSortlocal.addEventListener("click", (e) => {
  //     current = "local";
  //     sortTable(0);
  //   });
  // });

  function searchTable() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("search");
    filter = input.value.toUpperCase().split(" ");
    table = document.getElementById("html-data-table");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      const tableData = tr[i].getElementsByTagName("td");
      let allTextContent = "";
      for (let ind = 0; ind < tableData.length; ind++) {
        allTextContent += tableData[ind].innerText;
      }

      if (allTextContent) {
        if (allTextContent.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }

  function sortTable(n) {
    var table,
      rows,
      switching,
      i,
      x,
      y,
      shouldSwitch,
      dir,
      switchcount = 0;
    table = document.getElementById("html-data-table");
    switching = true;
    dir = "asc";
    while (switching) {
      switching = false;
      rows = table.getElementsByTagName("TR");
      for (i = 1; i < rows.length - 1; i++) {
        shouldSwitch = false;
        x = rows[i].getElementsByTagName("TD")[n];
        y = rows[i + 1].getElementsByTagName("TD")[n];
        if (dir == "asc") {
          if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
            shouldSwitch = true;
            break;
          }
        } else if (dir == "desc") {
          if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
            shouldSwitch = true;
            break;
          }
        }
      }
      if (shouldSwitch) {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
        switchcount++;
      } else {
        if (switchcount == 0 && dir == "asc") {
          dir = "desc";
          switching = true;
        }
      }
    }
  }
  let items = [
    { title: "10명", value: 1 },
    { title: "20명", value: 2 },
  ];
</script>

<section class="seach-sort-table">
  <div class="seach-sort-table__header">
    <p class="title">관리이력</p>
    <div class="right">
      <!-- <button class="btn-primary-small" on:click={handleCreateMember}>등록</button> -->
      <div class="search-box">
        <div class="search-input">
          <input type="text" id="search" placeholder="검색" />
          <Icon icon="iconamoon:search" color="#c5c7c8" width="18" />
        </div>
        <button
        class="btn-primary-border-none ml-10"
        id="search-btn"
        on:click={searchTable}>검색</button
      >
      </div>


    </div>
  </div>
  <div class="seach-sort-table__sortBtns">
    <!-- <div class="buttons">
      <button class:active={current === "name"} id="sortName">이름순</button>|
      <button class:active={current === "age"} id="sortAge">나이순</button>|
      <button class:active={current === "local"} id="sortLocal">지역순</button>
    </div> -->
    <!-- <SelectBox {items} /> -->
  </div>
  <div id="data-table" class="seach-sort-table__table">
    <table id="html-data-table">
      <thead>
        <tr>
          <th>
            나비회원 </th
          >
          <th>
            지역 </th
          >
          <th>
            담당자 정보 </th
          >
          <th>
            해제대상 </th
          >
          <th>해제일시 </th>
        
          <th>세부정보</th>
        </tr>
      </thead>
      <tbody>
        {#each newData as item}
          <tr>
            <td on:click = {handleRelesClick}>{item.memberName}({item.age}세)</td>
            <td on:click = {handleRelesClick}>{item.local}</td>
            <td on:click = {handleRelesClick}> {item.managerInfo}</td>
            <td on:click = {handleRelesClick}>{item.releseTarget}</td
            >
            <td on:click = {handleRelesClick}>{item.releaseDate}</td>
        
            <td> 
            
              <button class="btn-detail-gray" on:click={handleManageDetailClick}>상세내역</button></td>
          </tr>
        {/each}
      </tbody>
    </table>
    <ManageDetail {showManageDetail} on:click={handleManageDetailClick}/>
    <ReleseHistory  {showRelese} on:click={handleRelesClick}  />
    <MemberDialog {showDialog} on:click={handleDialogClick}  type="119"/>
  </div>

</section>
<div class="pagenation mt-20">
  <button class="round-box">
     <Icon icon="ep:arrow-left-bold" />
  </button>
  <button class="activePage">
      1
  </button>
  <button class="round-box">
      2
  </button>
  <button class="round-box">
        <Icon icon="ep:arrow-right-bold" />
  </button>
</div>
<style lang="scss">
        @import 'src/lib/scss/style.scss';
  .seach-sort-table {
    background-color: white;
    border-radius: 16px;
    &__header {
      padding: 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      @media (max-width: 535px) {
        display: inline-block;
      }
      button {
        color: white;
        @media (max-width: 535px) {
            margin-top: 5px;
         
          }
      }
      .title {
        font-size: 18px;
        font-weight: 500;
      }
      .right {
        display: flex;
        align-items: center;
        gap: 10px;
        @media (max-width: 535px) {
          display: inline-block;
        
        }
        .search-box{
          display: flex;

        }
        .search-input {
          display: flex;
          align-items: center;
    
          border: 1px solid #C5C7C8;
          width: 200px;
          height: 30px;
          padding: 0 10px;

          @media (max-width: 535px) {
            margin-top: 5px;
            width: 50%;
          }
          input[type="text"] {
            padding: 0px;
            width: 200px;
            height: fit-content;
            border: none;
          }
          input::placeholder {
            font-size: 13px;
            color: #A9ABAD;
          }
        }
      }
    }
    &__sortBtns {
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #E1E3E4;
      padding: 0 15px;

      .buttons {
        display: flex;
        gap: 10px;
        justify-content: space-between;
        align-items: center;
        font-size: 12px;
      }
    }
    &__table {
      table {
        width: 100%;
        color: #5C5F60;

        thead {
          background-color: #F4F4F4;
          th {
            padding: 10px 0;
            font-size: 13px;
            cursor: pointer;
            font-weight: 500;
          }
        }
        tbody {
          tr td {
            padding: 15px 0;
            text-align: center;
            font-size: 13px;
            .btn-detail-gray {
              display: inline-block;
              color: #333;
              font-size: 12px;
              padding: 7px 15px;
            }
          }
        }
      }
    }
  }

  // .active {
  //   color: #333;
  //   font-weight: 500;
  // }

  // button {
  //   display: block;
  //   color: #E1E3E4;
  //   font-size: 12px;
  // }
  .green {
    color: #2DCE89;
  }
  .gray {
    color: #C5C7C8;
  }
  .bg_yellow {
    background-color: #FFFF00;
  }
  .bg_red {
    background-color: #F5365C;
    color: white;
  }
</style>
