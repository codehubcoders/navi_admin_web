<script>
	import { goto } from '$app/navigation';
  import Icon from "@iconify/svelte";
  import CreateContract from "./modal/CreateContract.svelte";
  function moveDetail() {
    goto(`/contract/detail`);
}

  let contractTable = [
    {
      number: "2312S0112301001",
      subject: "치매안심센터",
      dot: true,
      method: "구매",
      state: "서울특별시 어디구",
      startDate: "2023.06.01",
      endDate: "2024.03.01",
      supportNumber: "14855896",
      yellow: true,
    },
    {
      number: "2312S0112301001",
      subject: "노인복지회관",
      dot: false,
      method: "렌탈",
      state: "서울특별시 어디구",
      startDate: "2023.06.01",
      endDate: "2024.03.01",
      supportNumber: "14855896",
    },
    {
      number: "2312S0112301001",
      subject: "강남구복지관",
      dot: false,
      method: "시범",
      state: "서울특별시 어디구",
      startDate: "2023.06.01",
      endDate: "2024.03.01",
      supportNumber: "14855896",
      yellow: true,
    },
    {
      number: "2312S0112301001",
      subject: "경기도 청",
      dot: false,
      method: "유지보수",
      state: "서울특별시 어디구",
      startDate: "2023.12.00",
      endDate: "2024.02.00",
      supportNumber: "14855896",
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

  function searchContractTable() {
    var input, filter, table, tr, i;
    input = document.getElementById("searchContract");
    filter = input.value.toUpperCase().split(" ");
    table = document.getElementById("contract-data-table");
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

  function sortContractTable(n) {
    var table,
      rows,
      switching,
      i,
      x,
      y,
      shouldSwitch,
      dir,
      switchcount = 0;
    table = document.getElementById("contract-data-table");
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

  let showCreateContract;
  const handleCreateContract = () => {
    showCreateContract = !showCreateContract;
  };
</script>

<section class="seach-sort-table">
  <div class="seach-sort-table__header">
    <p class="title">계약관리</p>
    <div class="right">
      <button class="btn-primary-border-none" on:click={handleCreateContract}
        >등록</button
      >
      <div class="search-input">
        <input type="text" id="searchContract" placeholder="검색" />
        <Icon icon="iconamoon:search" color="#c5c7c8" width="18" />
      </div>
      <button
        class="btn-primary-border-none"
        id="search-btn"
        on:click={searchContractTable}>검색</button
      >
    </div>
  </div>

  <div id="data-table" class="seach-sort-table__table">
    <table id="contract-data-table">
      <thead>
        <tr>
          <th on:click={() => sortContractTable(0)}
            >계약번호 <Icon
              icon="fluent:arrow-fit-16-filled"
              color="#e1e3e4"
              width="15"
              rotate={1}
            /></th
          >
          <th on:click={() => sortContractTable(1)}
            >계약대상 <Icon
              icon="fluent:arrow-fit-16-filled"
              color="#e1e3e4"
              width="15"
              rotate={1}
            /></th
          >
          <th on:click={() => sortContractTable(2)}
            >계약방법 <Icon
              icon="fluent:arrow-fit-16-filled"
              color="#e1e3e4"
              width="15"
              rotate={1}
            /></th
          >

          <th on:click={() => sortContractTable(3)}
            >지역 <Icon
              icon="fluent:arrow-fit-16-filled"
              color="#e1e3e4"
              width="15"
              rotate={1}
            /></th
          >
          <th>기간</th>
          <th on:click={() => sortContractTable(5)}
            >조달청 계약번호 <Icon
              icon="fluent:arrow-fit-16-filled"
              color="#e1e3e4"
              width="15"
              rotate={1}
            /></th
          >
        </tr>
      </thead>
      <tbody>
        {#each contractTable as item}
          <tr style={item.yellow == true ? "background-color:#FFFF00" : ""} on:click={moveDetail}>
            <td
              >{item.number}
              {#if item.dot == true}
                <span class="red-dot">●</span>
              {/if}
            </td>
            <td>{item.subject}</td>
            <td>{item.method}</td>
            <td><p>{item.state}</p></td>
            <td>{item.startDate}-{item.endDate}</td>
            <td>{item.supportNumber}</td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
  <CreateContract {showCreateContract} on:click={handleCreateContract} />
</section>
<div class="pagenation mt-20">
  <button class="round-box">
    <Icon icon="ep:arrow-left-bold" />
  </button>
  <button class="activePage"> 1 </button>
  <button class="round-box"> 2 </button>
  <button class="round-box">
    <Icon icon="ep:arrow-right-bold" />
  </button>
</div>

<style lang="scss">
  @import "src/lib/scss/style.scss";
  .seach-sort-table {
    background-color: white;
    border-radius: 16px;
    margin-top: 10px;
    &__header {
      padding: 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      @media (max-width: 535px) {
        display: inline-block;
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
            cursor: pointer;
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

  .red-dot {
    color: #f5365c;
    font-size: 8px;
  }
</style>
