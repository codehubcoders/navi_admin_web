<script>
  // import SelectBox from "./../selectbox/SelectBox.svelte";
  // import { onMount } from "svelte";
  import Icon from "@iconify/svelte";
import MobileDetail from "../modal/MobileDetail.svelte";
  let showDetail = false;
const handleDetailClick =() => {
  showDetail = !showDetail
}
  let newData = [
    {
      local: "서울시 강남구",
      agency: "강남구청",
      user: "정준범",
      gender: "남",
      relationship:"보호자",
      birth: "1988.02.01",
      phone: "010-1234-5678",
      member: "정군수",
    },
    {
      local: "경기도 부천시",
      agency: "부천시청",
      user: "홍성우",
      gender: "여",
      relationship:"본인",
      birth: "1956.02.01",
      phone: "010-1234-5678",
      member: "홍성우",
    },
    {
      local: "인천서구",
      agency: "치매안심센터",
      user: "이선규",
      gender: "남",
      relationship:"보호자",
      birth: "1956.02.01",
      phone: "010-1234-5678",
      member: "정군수",
    },
    {
      local: "전라남도 화순군",
      agency: "나들이복지관",
      user: "김성환",
      gender: "남",
      relationship:"보호자",
      birth: "1956.02.01",
      phone: "010-1234-5678",
      member: "정군수",
    },
    {
      local: "서울시 강남구",
      agency: "강남구청",
      user: "정준범",
      gender: "남",
      relationship:"보호자",
      birth: "1988.02.01",
      phone: "010-1234-5678",
      member: "정군수",
    },
    {
      local: "경기도 부천시",
      agency: "부천시청",
      user: "홍성우",
      gender: "여",
      relationship:"본인",
      birth: "1956.02.01",
      phone: "010-1234-5678",
      member: "홍성우",
    },
    {
      local: "인천서구",
      agency: "치매안심센터",
      user: "이선규",
      gender: "남",
      relationship:"보호자",
      birth: "1956.02.01",
      phone: "010-1234-5678",
      member: "정군수",
    },
    {
      local: "전라남도 화순군",
      agency: "나들이복지관",
      user: "김성환",
      gender: "남",
      relationship:"보호자",
      birth: "1956.02.01",
      phone: "010-1234-5678",
      member: "정군수",
    },
  ];
  // let current = "user";
  // onMount(() => {
  //   var btnSortUser = document.getElementById("sortUser");
  //   var btnsortUserAge = document.getElementById("sortUserAge");
  //   // var btnSortlocal = document.getElementById("sortLocal");

  //   btnSortUser.addEventListener("click", (e) => {
  //     current = "user";
  //     sortMemberTable(0);
  //   });
  //   btnsortUserAge.addEventListener("click", (e) => {
  //     current = "birth";
  //     sortMemberTable(1);
  //   });
  //   // btnSortlocal.addEventListener("click", (e) => {
  //   //   current = "local";
  //   //   sortTable(0);
  //   // });
  // });

  function searchTable() {
    var input, filter, table, tr, i;
    input = document.getElementById("searchMember");
    filter = input.value.toUpperCase().split(" ");
    table = document.getElementById("member-data-table");
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

  function sortMemberTable(n) {
    var table,
      rows,
      switching,
      i,
      x,
      y,
      shouldSwitch,
      dir,
      switchcount = 0;
    table = document.getElementById("member-data-table");
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

</script>

<section class="seach-sort-table">
  <div class="seach-sort-table__header">
    <p class="title">모바일앱 회원</p>
    <div class="right">
      <div class="search-input">
        <input type="text" id="searchMember" placeholder="검색" />
        <Icon icon="iconamoon:search" color="#c5c7c8" width="18" />
      </div>
      <button
        class="btn-primary-border-none"
        id="search-btn"
        on:click={searchTable}>검색</button
      >
    </div>
  </div>
  <div class="seach-sort-table__sortBtns">
    <!-- <div class="buttons">
      <button class:active={current === "user"} id="sortUser">이름순</button>|
      <button class:active={current === "birth"} id="sortUserAge">나이순</button
      > -->
      <!-- <button class:active={current === "local"} id="sortLocal">지역순</button> -->
    <!-- </div>
    <SelectBox {items} /> -->
  </div>
  <div id="data-table" class="seach-sort-table__table">
    <table id="member-data-table">
      <thead>
        <tr>
          <th on:click={() => sortMemberTable(0)}>지역 
            <Icon
            icon="fluent:arrow-fit-16-filled"
            color="#e1e3e4"
            width="15"
            rotate={1}
          /></th>
       
          <th on:click={() => sortMemberTable(1)}
            >주관기관 <Icon
              icon="fluent:arrow-fit-16-filled"
              color="#e1e3e4"
              width="15"
              rotate={1}
            /></th
          >
          <th>성함</th>
          <th>성별</th>
          <th on:click={() => sortMemberTable(4)}
            >관계<Icon
            icon="fluent:arrow-fit-16-filled"
            color="#e1e3e4"
            width="15"
            rotate={1}
          /></th>
          <th>생년월일</th>
          <th>전화번호</th>
          <th on:click={() => sortMemberTable(7)}
            >나비회원<Icon
            icon="fluent:arrow-fit-16-filled"
            color="#e1e3e4"
            width="15"
            rotate={1}
          /></th>
          <th>세부정보</th>
        </tr>
      </thead>
      <tbody>
        {#each newData as item}
          <tr>
            <td>{item.local}</td>
            <td>{item.agency}</td>
            <td>{item.user}</td>
            <td>{item.gender}</td>
            <td>{item.relationship}</td>
            <td>{item.birth}</td>
            <td>{item.phone}</td>
            <td>{item.member}</td>
            <td>
              <button class="btn-detail-gray m-auto " on:click={handleDetailClick}>상세내역</button>
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
  <div></div>
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

<MobileDetail {showDetail} on:click={handleDetailClick}/>
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
          margin-top: 10px;
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
        .search-input {
          display: flex;
          align-items: center;
          border: 1px solid #C5C7C8;
          width: 200px;
          height: 30px;
          padding: 0 10px;
          @media (max-width: 535px) {
            width: 50%;
            margin-top: 10px;
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
    // &__sortBtns {
    //   display: flex;
    //   justify-content: space-between;
    //   align-items: center;
    //   color: #E1E3E4;
    //   padding: 0 15px;
    //   .buttons {
    //     display: flex;
    //     gap: 10px;
    //     justify-content: space-between;
    //     align-items: center;
    //     font-size: 12px;
    //   }
    // }
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


</style>
