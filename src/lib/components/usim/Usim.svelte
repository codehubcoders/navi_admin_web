<script>

    import Icon from "@iconify/svelte";
    // import ProductDetailModal from "./modal/ProductDetailModal.svelte";

    let usimTable = [
        {
            usimNum: "8982300921002778145F",
            productCode: "321GE51GS63",
            phone: "010-6542-8736",
            callHistory: "1건",
            dater: "1.6/2Gb",
            status: "사용중",
        },
        {
            usimNum: "8982300921002778145F",
            productCode: "321GE51GS63",
            phone: "010-6542-8736",
            callHistory: "-",
            dater: "1.6/2Gb",
            status: "사용안함",
        },
        {
            usimNum: "8982300921002778145F",
            productCode: "321GE51GS63",
            phone: "010-6542-8736",
            callHistory: "3건",
            dater: "1.6/2Gb",
            status: "사용중",
        },
        {
            usimNum: "8982300921002778145F",
            productCode: "321GE51GS63",
            phone: "010-6542-8736",
            callHistory: "2건",
            dater: "1.6/2Gb",
            status: "사용안함",
        },
    ];
    let process = false;
    let processSelected = [];

    const handleProcess = () => {
        process = !process;
    };
    // $: allSelected = productTable.length === processSelected.length
    function toggleAll() {
        selected = e.target.checked ? [...items] : [];
    }


    function searchUsimTable() {
        var input, filter, table, tr, i;
        input = document.getElementById("searchUsim");
        filter = input.value.toUpperCase().split(" ");
        table = document.getElementById("usim-data-table");
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

    function sortUsimTable(n) {
        var table,
            rows,
            switching,
            i,
            x,
            y,
            shouldSwitch,
            dir,
            switchcount = 0;
        table = document.getElementById("usim-data-table");
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
<button class="btn-primary mt-5 mb-5" style="margin:  0 0 0 auto;">Excel다운로드</button>
<section class="seach-sort-table">

    <div class="seach-sort-table__header">
        <p class="title">USIM(123)</p>
        <div class="right">
            <button class="btn-white" on:click={handleProcess}>
                {#if process}
                    취소
                {:else}
                    선택
                {/if}
            </button>
            {#if process}
                <button class="btn-primary-border-none" on:click>삭제</button>
            {/if}

            {#if !process}
             <button class="btn-primary-border-none" on:click>등록</button>
                <div class="search-input">
                    <input type="text" id="searchUsim" placeholder="검색" />
                    <Icon icon="iconamoon:search" color="#c5c7c8" width="18" />
                </div>
                <button
                    class="btn-primary-border-none"
                    id="search-btn"
                    on:click={searchUsimTable}>검색</button
                >
            {/if}
        </div>
    </div>
    <!-- <div class="seach-sort-table__sortBtns">
    <div class="buttons">
     <button class:active={current === "user"} id="sortUser">이름순</button>|
      <button class:active={current === "birth"} id="sortUserAge">나이순</button> 
   <button class:active={current === "local"} id="sortLocal">지역순</button>
    </div> -->

    <!-- </div> -->
    <div id="data-table" class="seach-sort-table__table">
        <table id="usim-data-table">
            <thead>
                <tr>
                    <th>UISM 번호</th>
                    <th>제품코드</th>
                    <th>전화번호</th>
                    <th on:click={() => sortUsimTable(3)}
                        >신고이력  <Icon
                        icon="fluent:arrow-fit-16-filled"
                        color="#e1e3e4"
                        width="15"
                        rotate={1}
                    /></th>
                    <th on:click={() => sortUsimTable(4)}
                        >데이터사용량 <Icon
                            icon="fluent:arrow-fit-16-filled"
                            color="#e1e3e4"
                            width="15"
                            rotate={1}
                        /></th
                    >
                    <th on:click={() => sortUsimTable(5)}
                        >사용현황 <Icon
                            icon="fluent:arrow-fit-16-filled"
                            color="#e1e3e4"
                            width="15"
                            rotate={1}
                        /></th
                    >

                    <th>
                        {#if process}
                            <label
                                ><input
                                    type="checkbox"
                                    on:click={toggleAll}
                                    checked={processSelected.length ==
                                        noticeTab1Table.length}
                                /></label
                            >
                        {:else}
                        상세보기
                        {/if}
                    </th>
                </tr>
            </thead>
            <tbody>
                {#each usimTable as item, int}
                    <tr>
                        <td>{item.usimNum}</td>
                        <td>{item.productCode}</td>
                        <td>{item.phone}</td>
                        <td>{item.callHistory} </td>
                        <td>{item.dater}</td>
                        <td class={item.status =="사용중" ? "green" :"red"}>
                            
                            {item.status}</td>

                        <td>
                            {#if process}
                                <label
                                    ><input
                                        type="checkbox"
                                        bind:group={processSelected}
                                        value={int + 1}
                                    /></label
                                >
                            {:else}
                                <button on:click class="btn-detail-gray m-auto"
                                    >상세보기</button
                                >
                            {/if}
                        </td>
                    </tr>
                {/each}
            </tbody>
        </table>
        <!-- <ProductDetailModal {showDetail} on:click={handleDetailClick} /> -->
    </div>
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
        margin-top: 0px;
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
                        vertical-align: middle;
                        cursor: pointer;
                        font-weight: 500;
                    }
                }
                tbody {
                    tr td {
                        padding: 20px 0;
                        text-align: center;
                        font-size: 13px;
                        vertical-align: middle;
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


    .red {
        color: #F5365C;
        font-weight: 500;
    }
    .green {
        color: #2DCE89;
    }
</style>
