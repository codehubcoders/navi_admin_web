<script>
  import SelectBox from "./../selectbox/SelectBox.svelte";
  import { onMount } from "svelte";
  import Icon from "@iconify/svelte";

  let permissionTable = [
    {
      local: "서울시 OO구",
      permission: "지역관리자",
      area: "OO노인복지관",
      id: "ASDF",
      
    },
    {
      local: "서울시 OO구",
      permission: "운영자",
      area: "OO노인복지관",
      id: "qwer",
      
    },
    {
      local: "서울시 OO구",
      permission: "담당자",
      area: "OO노인복지관",
      id: "zxcv",
      
    },
    {
      local: "서울시 OO구",
      permission: "어르신",
      area: "OO노인복지관",
      id: "tyui",
      
    },
    {
      local: "서울시 OO구",
      permission: "어르신",
      area: "OO노인복지관",
      id: "tyui",
      
    },  {
      local: "서울시 OO구",
      permission: "지역관리자",
      area: "OO노인복지관",
      id: "ASDF",
      
    },
    {
      local: "서울시 OO구",
      permission: "운영자",
      area: "OO노인복지관",
      id: "qwer",
      
    },
    {
      local: "서울시 OO구",
      permission: "담당자",
      area: "OO노인복지관",
      id: "zxcv",
      
    },
    {
      local: "서울시 OO구",
      permission: "어르신",
      area: "OO노인복지관",
      id: "tyui",
      
    },
    {
      local: "서울시 OO구",
      permission: "어르신",
      area: "OO노인복지관",
      id: "tyui",
      
    },
    
  ];
  // let current = "name";
  onMount(() => {
    // var btnStatus = document.getElementById("statusSort");
    // var btnCs = document.getElementById("csSort");
    // var btnMember = document.getElementById("memberSort");
    // var btnLocal = document.getElementById("localSort");

    // btnStatus.addEventListener("click", (e) => {
    //   current = "status";
    //   sortCsTable(7);
    // });
    // btnCs.addEventListener("click", (e) => {
    //   current = "cs";
    //   sortCsTable(1);
    // });
    // btnMember.addEventListener("click", (e) => {
    //   current = "member";
    //   sortCsTable(3);
    // });
    // btnLocal.addEventListener("click", (e) => {
    //   current = "local";
    //   sortCsTable(4);
    // });
  });

  function searchPermissionTable() {
    var input, filter, table, tr, i;
    input = document.getElementById("searchPermission");
    filter = input.value.toUpperCase().split(" ");
    table = document.getElementById("permission-data-table");
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

  function sortPermissionTable(n) {
    var table,
      rows,
      switching,
      i,
      x,
      y,
      shouldSwitch,
      dir,
      switchcount = 0;
    table = document.getElementById("permission-data-table");
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
    <p class="title">관리자 (00명)</p>
    <div class="right">
      <div class="search-input">
        <input type="text" id="searchPermission" placeholder="검색" />
        <Icon icon="iconamoon:search" color="#c5c7c8" width="18" />
      </div>
      <button
        class="btn-primary-border-none"
        id="search-btn"
        on:click={searchPermissionTable}>검색</button
      >
    </div>
  </div>
  <div class="seach-sort-table__sortBtns">
    <div class="buttons">
      <!-- <button class:active={current === "status"} id="statusSort"
        >처리현황</button
      >|
      <button class:active={current === "cs"} id="csSort">CS구분</button>|
      <button class:active={current === "member"} id="memberSort"
        >회원구분</button
      >|
      <button class:active={current === "local"} id="localSort">설치지역</button
      > -->
    </div>
    <!-- <SelectBox {items} /> -->
  </div>
  <div id="data-table" class="seach-sort-table__table">
    <table id="permission-data-table">
      <thead>
        <tr>
          <th on:click={() => sortPermissionTable(0)}
            >지역 <Icon
              icon="fluent:arrow-fit-16-filled"
              color="#e1e3e4"
              width="15"
              rotate={1}
            /></th
          >
          <th on:click={() => sortPermissionTable(1)}
            >권한 <Icon
              icon="fluent:arrow-fit-16-filled"
              color="#e1e3e4"
              width="15"
              rotate={1}
            /></th
          >
          <th on:click={() => sortPermissionTable(2)}
            >구역 <Icon
              icon="fluent:arrow-fit-16-filled"
              color="#e1e3e4"
              width="15"
              rotate={1}
            /></th
          >
          <th>아이디</th>
          <th 
            >상세보기 </th
          >
         
        </tr>
      </thead>
      <tbody>
        {#each permissionTable as item}
          <tr>
            <td>{item.local}</td>
            <td>{item.permission}</td>
            <td>{item.area}</td>
            <td
              >{item.id}</td>
            
            <td><button class="btn-detail-gray m-auto">상세보기</button></td>
     
          </tr>
        {/each}
      </tbody>
    </table>
    <div class="pagenation">
      <button class="round-box">
         <Icon icon="ep:arrow-left-bold" />
      </button>
      <button class="round-box">
          1
      </button>
      <button class="round-box">
          2
      </button>
      <button class="round-box">
            <Icon icon="ep:arrow-right-bold" />
      </button>
  </div>

  </div>
</section>

<style lang="scss">
  .seach-sort-table {
    background-color: white;
    border-radius: 16px;
    margin-top: 30px;
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
        margin-top: 10px;
        }
        .search-input {
          display: flex;
          align-items: center;
          border: 1px solid #C5C7C8;
          width: 200px;
          height: 30px;
          padding: 0 10px;
          @media (max-width: 535px) {
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
            vertical-align: middle;
            padding:15px 0;
            text-align: center;
            font-size: 13px;
            p {
              color: #5C5F60;
            }
          }
        }
      }
    }
  }

  .active {
    color: #333;
    font-weight: 500;
  }

  // button {
  //   display: block;
  //   color: #E1E3E4;
  //   font-size: 12px;
  // }
</style>
