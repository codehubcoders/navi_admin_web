<script>
  import SelectBox from "./../selectbox/SelectBox.svelte";
  import { onMount } from "svelte";
  import Icon from "@iconify/svelte";

  let productTable = [
    {
      division: "스탠다드",
      code: "4653258",
      SWversion: "Ver2.1",
      FWversion: "2.01",
      local: "서울시 OO구",
      state: "연동",
      member: "정군수",
      create: "2023.03.01",
      ShippingDate: "2023.04.01",
      installDate: "2023.03.10",
    },
    {
      division: "고급형",
      code: "4653258",
      SWversion: "Ver2.1",
      FWversion: "2.01",
      local: "서울시 OO구",
      state: "연동",
      member: "정군수",
      create: "2023.03.01",
      ShippingDate: "2023.05.01",
      installDate: "2023.03.10",
    },
    {
      division: "스탠다드",
      code: "4653258",
      SWversion: "Ver2.1",
      FWversion: "2.01",
      local: "서울시 OO구",
      state: "연동",
      member: "정군수",
      create: "2023.04.01",
      ShippingDate: "2023.06.01",
      installDate: "2023.03.10",
    },
    {
      division: "고급형",
      code: "4653258",
      SWversion: "Ver2.1",
      FWversion: "2.01",
      local: "서울시 OO구",
      state: "연동",
      member: "정군수",
      create: "2023.03.01",
      ShippingDate: "2023.07.01",
      installDate: "2023.06.10",
    },
  ];
  let current = "name";
  onMount(() => {
    // var btnproducName= document.getElementById("productName");
    // var btnsortUserAge = document.getElementById("sortUserAge");
    // var btnSortlocal = document.getElementById("sortLocal");

    // btnSortUser.addEventListener("click", (e) => {
    //   current = "user";
    //   sortMemberTable(0);
    // });
    // btnsortUserAge.addEventListener("click", (e) => {
    //   current = "birth";
    //   sortMemberTable(1);
    // });
    // btnSortlocal.addEventListener("click", (e) => {
    //   current = "local";
    //   sortTable(0);
    // });
  });

  function searchProductTable() {

  var input, filter, table, tr,  i;
  input = document.getElementById("searchProduct");
  filter = input.value.toUpperCase().split(' ');
  table = document.getElementById("product-data-table");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    const tableData = tr[i].getElementsByTagName("td");
    let allTextContent = '';
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

  
  function sortProductTable(n) {
    var table,
      rows,
      switching,
      i,
      x,
      y,
      shouldSwitch,
      dir,
      switchcount = 0;
    table = document.getElementById("product-data-table");
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
    <p class="title">제품리스트</p>
    <div class="right">
   
      <div class="search-input">
        <input type="text" id="searchProduct" placeholder="검색" />
        <Icon icon="iconamoon:search" color="#c5c7c8" width="18" />
      </div>
      <button
        class="btn-primary-border-none"
        id="search-btn"
        on:click={searchProductTable}>검색</button
      >
    </div>
  </div>
  <div class="seach-sort-table__sortBtns">
    <div class="buttons">
      <!-- <button class:active={current === "user"} id="sortUser">이름순</button>|
      <button class:active={current === "birth"} id="sortUserAge">나이순</button> -->
      <!-- <button class:active={current === "local"} id="sortLocal">지역순</button> -->
    </div>
    <SelectBox {items} />
  </div>
  <div id="data-table" class="seach-sort-table__table">
    <table id="product-data-table">
      <thead>
        <tr>
          <th  on:click={() => sortProductTable(0)}
            >제품구분  <Icon
            icon="fluent:arrow-fit-16-filled"
            color="#e1e3e4"
            width="15"
            rotate={1}
          /></th
          >
          <th 
            >제품코드</th
          >
          <th 
            >S/W 버전</th
          >
          <th 
            >F/W 버전</th
          >
          <th on:click={() => sortProductTable(4)}
            >설치지역  <Icon
            icon="fluent:arrow-fit-16-filled"
            color="#e1e3e4"
            width="15"
            rotate={1}
          /></th
          >
          <th on:click={() => sortProductTable(5)}>연동상태  <Icon
            icon="fluent:arrow-fit-16-filled"
            color="#e1e3e4"
            width="15"
            rotate={1}
          /></th>
          <th>연동회원 </th>
          <th on:click={() => sortProductTable(7)}>제품등록일  <Icon
            icon="fluent:arrow-fit-16-filled"
            color="#e1e3e4"
            width="15"
            rotate={1}
          /></th>
          <th on:click={() => sortProductTable(8)}>출고일  <Icon
            icon="fluent:arrow-fit-16-filled"
            color="#e1e3e4"
            width="15"
            rotate={1}
          /></th>
          <th on:click={() => sortProductTable(9)}>설치일  <Icon
            icon="fluent:arrow-fit-16-filled"
            color="#e1e3e4"
            width="15"
            rotate={1}
          /></th>
        </tr>
      </thead>
      <tbody>
        {#each productTable as item}
          <tr>
            <td>{item.division}</td>
            <td>{item.code}</td>
            <td>{item.SWversion}</td>
            <td>{item.FWversion}</td>
            <td>{item.local}</td>
            <td>{item.state}</td>
            <td>{item.member}</td>
            <td>{item.create}</td>
            <td>{item.ShippingDate}</td>
            <td>{item.installDate}</td>
          </tr>
        {/each}
      </tbody>
    </table>
    <div class="excel-btn">
      <button class="btn-primary">Excel 양식 다운로드</button>
    </div>

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
            cursor: pointer;
            font-weight: 500;
          }
        }
        tbody {
          tr td {
            padding: 20px 0;
            text-align: center;
            font-size: 13px;
           
          }
        }
      }
    }
  }

  // .active {
  //   color: #333;
  //   font-weight: 500;
  // }

  button {
    display: block;
    color: #E1E3E4;
    font-size: 12px;
  }

.excel-btn{
padding: 20px;
  button{
    margin: 0 auto;
    display: block;
    color: white;
  }
}
</style>
