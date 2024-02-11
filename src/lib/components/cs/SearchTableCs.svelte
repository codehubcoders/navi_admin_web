<script>
	import SelectBox from './../customComponents/selectbox/SelectBox.svelte';

  import { onMount } from "svelte";
  import Icon from "@iconify/svelte";

  let csTable = [
    {
      csCode: "148559896",
      csCategory: "설치 및 회수",
      receiptCategory :"어르신",
      name: "오동석",
      phone: "010-1234-5678",
      status: "처리중",
      creatDate: "2023.12.12",
    },
    {
      csCode: "2401B0001",
      csCategory: "서비스 이용",
      receiptCategory :"보호자",
      name: "김특허",
      phone: "010-1234-5678",
      status: "처리완료",
      creatDate: "2023.12.14",
    },
    {
      csCode: "2401C0001",
      csCategory: "제품이용",
      receiptCategory :"관리자",
      name: "하나비",
      phone: "010-1234-5678",
      status: "해결불가",
      creatDate: "2023.12.13",
    },
    {
      csCode: "2401D0001",
      csCategory: "고장 및 수리",
      receiptCategory :"기타",
      name: "이어른",
      phone: "010-1234-5678",
      status: "접수",
      creatDate: "2023.03.01",
    },
  ];
  // let current = "name";
  // onMount(() => {
  //   var btnStatus = document.getElementById("statusSort");
  //   var btnCs = document.getElementById("csSort");
  //   var btnMember = document.getElementById("memberSort");
  //   var btnLocal = document.getElementById("localSort");

  //   btnStatus.addEventListener("click", (e) => {
  //     current = "status";
  //     sortCsTable(7);
  //   });
  //   btnCs.addEventListener("click", (e) => {
  //     current = "cs";
  //     sortCsTable(1);
  //   });
  //   btnMember.addEventListener("click", (e) => {
  //     current = "member";
  //     sortCsTable(3);
  //   });
  //   btnLocal.addEventListener("click", (e) => {
  //     current = "local";
  //     sortCsTable(4);
  //   });
  // });

  function searchCsTable() {
    var input, filter, table, tr, i;
    input = document.getElementById("searchCs");
    filter = input.value.toUpperCase().split(" ");
    table = document.getElementById("cs-data-table");
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

  function sortCsTable(n) {
    var table,
      rows,
      switching,
      i,
      x,
      y,
      shouldSwitch,
      dir,
      switchcount = 0;
    table = document.getElementById("cs-data-table");
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
    <p class="title">CS관리</p>
    <div class="right">
    <a href="/cs/cs-register"> <button
      class="btn-primary-border-none"
   >등록</button
    ></a> 
      <div class="search-input">
        <input type="text" id="searchCs" placeholder="검색" />
        <Icon icon="iconamoon:search" color="#c5c7c8" width="18" />
      </div>
      <button
        class="btn-primary-border-none"
        id="search-btn"
        on:click={searchCsTable}>검색</button
      >
    </div>
  </div>
  <!-- <div class="seach-sort-table__sortBtns">
    <div class="buttons">
      <button class:active={current === "status"} id="statusSort"
        >처리현황</button
      >|
      <button class:active={current === "cs"} id="csSort">CS구분</button>|
      <button class:active={current === "member"} id="memberSort"
        >회원구분</button
      >|
      <button class:active={current === "local"} id="localSort">설치지역</button
      >
    </div>
    
    <SelectBox {items} />
  </div> -->
  <div id="data-table" class="seach-sort-table__table">
    <table id="cs-data-table">
      <thead>
        <tr>
          <th on:click={() => sortCsTable(0)}
            >CS관리코드 <Icon
              icon="fluent:arrow-fit-16-filled"
              color="#e1e3e4"
              width="15"
              rotate={1}
            /></th
          >
          <th on:click={() => sortCsTable(1)}
            >CS유형 <Icon
              icon="fluent:arrow-fit-16-filled"
              color="#e1e3e4"
              width="15"
              rotate={1}
            /></th
          >
          <th on:click={() => sortCsTable(2)}
            >접수유형 <Icon
              icon="fluent:arrow-fit-16-filled"
              color="#e1e3e4"
              width="15"
              rotate={1}
            /></th
          >
          <th>성함</th>
          <th
            >연락처 </th
          >
          <th on:click={() => sortCsTable(5)}>처리현황<Icon
            icon="fluent:arrow-fit-16-filled"
            color="#e1e3e4"
            width="15"
            rotate={1}
          /></th>
          <th 
            >등록일자</th
          >
          <th>세부정보</th>
        </tr>
      </thead>
      <tbody>
        {#each csTable as item}
          <tr>
            <td>{item.csCode}</td>
            <td>{item.csCategory}</td>
            <td>{item.receiptCategory}</td>
            <td
              ><p>{item.name}</p>
        </td
            >
            <td>{item.phone}</td>
            <td>{item.status}</td>
            <td>{item.creatDate}</td>
            <td><a href="/cs/detail"><button class="btn-detail-gray m-auto">상세내역</button></a></td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
</section>

<style lang="scss">
        @import 'src/lib/scss/style.scss';
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
            font-weight: 500;
            cursor: pointer;
          }
        }
        tbody {
          tr td {
            vertical-align: middle;
            padding: 20px 0;
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

  button {
    display: block;
    color: #E1E3E4;
    font-size: 12px;
  }
</style>
