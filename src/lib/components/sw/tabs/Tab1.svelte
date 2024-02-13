<script>
	import UpdatConfirm from './../modal/UpdatConfirm.svelte';
	import DetailUpdate from './../modal/DetailUpdate.svelte';
    import Icon from "@iconify/svelte";
    // import ProductDetailModal from "./modal/ProductDetailModal.svelte";


    export let showDetailUpdate = false;
    const handleDetailUpdate = () => {
        showDetailUpdate = !showDetailUpdate ;
    };

    export let showUpdateConfirm = false;
    const handleUpdateConfirm = () => {
        showUpdateConfirm = !showUpdateConfirm ;
    };

    let swTab1Table = [
        {
            division: "F/W",
            type: "필수(Major)",
            ver: "Ver 2.1",
            service: "모바일 APP",
            target: "전체",
            createDate: "2023.12.12",
            confirmDate: "",
            deployDate: "",
        },
        {
            division: "F/W",
            type: "필수(Major)",
            ver: "Ver 2.1",
            service: "나비 APP",
            target: "강남구노인복지센터",
            createDate: "2023.12.12",
            confirmDate: "",
            deployDate: "",
        },
        {
            division: "S/W",
            type: "선택(Build)",
            ver: "2.0",
            service: "BMS",
            target: "인천서구치매안심센터",
            createDate: "2023.12.12",
            confirmDate: "2024.02.21",
            deployDate: "2024.02.21",
        },
        {
            division: "S/W",
            type: "선택(Build)",
            ver: "2.0",
            service: "모바일 APP",
            target: "전체",
            createDate: "2023.12.12",
            confirmDate: "2024.02.21",
            deployDate: "2024.02.21",
        },
    ];

    function searchSwTab1Table() {
        var input, filter, table, tr, i;
        input = document.getElementById("searchSwTab1");
        filter = input.value.toUpperCase().split(" ");
        table = document.getElementById("swtab1-data-table");
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

    function sortSwTab1Table(n) {
        var table,
            rows,
            switching,
            i,
            x,
            y,
            shouldSwitch,
            dir,
            switchcount = 0;
        table = document.getElementById("swtab1-data-table");
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
<DetailUpdate {showDetailUpdate} on:click={handleDetailUpdate} />
<UpdatConfirm {showUpdateConfirm} on:click={handleUpdateConfirm} />
<section class="seach-sort-table">
    <div class="seach-sort-table__header">
        <p class="title">업데이트관리</p>
        <div class="right">
            <div class="search-input">
                <input type="text" id="searchSwTab1" placeholder="검색" />
                <Icon icon="iconamoon:search" color="#c5c7c8" width="18" />
            </div>
            <button
                class="btn-primary-border-none"
                id="search-btn"
                on:click={searchSwTab1Table}>검색</button
            >
        </div>
    </div>

    <div id="data-table" class="seach-sort-table__table">
        <table id="swtab1-data-table">
            <thead>
                <tr>
                    <th>구분</th>
                    <th>종류</th>
                    <th>버전</th>
                    <th>서비스</th>
                    <th>대상</th>
                    <th>등록일자</th>
                    <th>승인일자</th>
                    <th>베포일자</th>
                    <th>세부정보</th>
                </tr>
            </thead><tbody>
                {#each swTab1Table as item, int}
                    <tr>
                        <td>{item.division}</td>
                        <td>{item.type}</td>
                        <td>{item.ver}</td>
                        <td>{item.service} </td>
                        <td>{item.target}</td>
                        <td>{item.createDate}</td>
                        <td style="padding: 0;">
                            {#if item.confirmDate == ""}
                                <button class="btn-white m-auto" on:click={handleUpdateConfirm}>승인</button>
                            {/if}
                            {item.confirmDate}</td
                        >
                        <td>
                            {#if item.deployDate == ""}
                                -
                            {/if}
                            {item.deployDate}</td
                        >
                        <td style="padding: 0;">
                            <button on:click={handleDetailUpdate} class="btn-detail-gray m-auto">상세내역</button>
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

</style>
