<script>
  import SelectBox from "./../selectbox/SelectBox.svelte";
  import { onMount } from "svelte";
  import Icon from "@iconify/svelte";

  let newData = [
    {
      local: "개포동",
      name: "홍길동",
      age: 72,
      birth: "1956.02.01",
      charge: "ON",
      phone: "010-1234-5678",
      sign: "경고",
      detail: "",
    },
    {
      local: "봉천동",
      name: "김길동",
      age: 80,
      birth: "1956.02.01",
      charge: "OFF",
      phone: "010-1234-5678",
      sign: "",
      detail: "",
    },
    {
      local: "월계동",
      name: "이길동",
      age: 90,
      birth: "1956.02.01",
      charge: "OFF",
      phone: "010-1234-5678",
      sign: "위험",
      detail: "",
    },
    {
      local: "개포동",
      name: "전길동",
      age: 100,
      birth: "1956.02.01",
      charge: "ON",
      phone: "010-1234-5678",
      sign: "",
      detail: "",
    },
  ];
  let current = "name";
  onMount(() => {
    var btnSortName = document.getElementById("sortName");
    var btnSortAge = document.getElementById("sortAge");
    var btnSortlocal = document.getElementById("sortLocal");

    btnSortName.addEventListener("click", (e) => {
      current = "name";
      sortTable(1);
    });
    btnSortAge.addEventListener("click", (e) => {
      current = "age";
      sortTable(2);
    });
    btnSortlocal.addEventListener("click", (e) => {
      current = "local";
      sortTable(0);
    });
  });

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
    <p class="title">대상자(00명)</p>
    <div class="right">
      <button class="btn-primary-small">등록</button>
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
    <div class="buttons">
      <button class:active={current === "name"} id="sortName">이름순</button>|
      <button class:active={current === "age"} id="sortAge">나이순</button>|
      <button class:active={current === "local"} id="sortLocal">지역순</button>
    </div>
    <SelectBox {items} />
  </div>
  <div id="data-table" class="seach-sort-table__table">
    <table id="html-data-table">
      <thead>
        <tr>
          <th on:click={() => sortTable(0)}
            >지역 <Icon
              icon="fluent:arrow-fit-16-filled"
              color="#e1e3e4"
              width="15"
              rotate={1}
            /></th
          >
          <th on:click={() => sortTable(1)}
            >사용자(나이) <Icon
              icon="fluent:arrow-fit-16-filled"
              color="#e1e3e4"
              width="15"
              rotate={1}
            /></th
          >
          <th on:click={() => sortTable(2)}
            >생년월일 <Icon
              icon="fluent:arrow-fit-16-filled"
              color="#e1e3e4"
              width="15"
              rotate={1}
            /></th
          >
          <th on:click={() => sortTable(3)}
            >충전 <Icon
              icon="fluent:arrow-fit-16-filled"
              color="#e1e3e4"
              width="15"
              rotate={1}
            /></th
          >
          <th on:click={() => sortTable(4)}
            >전화번호 <Icon
              icon="fluent:arrow-fit-16-filled"
              color="#e1e3e4"
              width="15"
              rotate={1}
            /></th
          >
          <th on:click={() => sortTable(5)}
            >경고/위험해제 <Icon
              icon="fluent:arrow-fit-16-filled"
              color="#e1e3e4"
              width="15"
              rotate={1}
            /></th
          >
          <th>세부정보</th>
        </tr>
      </thead>
      <tbody>
        {#each newData as item}
          <tr
            class={item.sign === "경고"
              ? "bg_yellow"
              : item.sign === "위험"
              ? "bg_red"
              : ""}
          >
            <td>{item.local}</td>
            <td>{item.name}({item.age}세)</td>
            <td>{item.birth}</td>
            <td class={item.charge === "ON" ? "green" : "gray"}
              >{item.charge}</td
            >
            <td>{item.phone}</td>
            <td
              >{#if item.sign != ""}
                <button class="btn-gray">확인</button>
              {/if}</td
            >
            <td><button class="btn-gray">상세내역</button></td>
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
            .btn-gray {
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

  .active {
    color: #333;
    font-weight: 500;
  }

  button {
    display: block;
    color: #E1E3E4;
    font-size: 12px;
  }
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
