<script>
	import DetailLog from './../modal/DetailLog.svelte';
    import Icon from "@iconify/svelte";
    // import ProductDetailModal from "./modal/ProductDetailModal.svelte";

    export let showDetailLog = false;
    const handleDetailLog = () => {
        showDetailLog = !showDetailLog ;
    };

    let swTab2Table = [
        {
            service: "모바일 APP",
            errorLog:
                "d4ht4y3gfd1h42j5uyer6gf2d1g45yrt51g2dgty46t12dty46rt32s1dy4t6e5s3dtyt5es1dy4t6e5s3dtyt5e+2r+2r6t12dty46rt32s1dy4t6e56t12dty46rt32s1dy4t6e56",
            createDate: "2023.12.12 16:31",
        },
        {
            service: "모바일 APP",
            errorLog:
                "d4ht4y3gfd1h42j5uyer6gf2d1g45yrt51g2dgty46t12dty46rt32s1dy4t6e5s3dtyt5e+2r6",
            createDate: "2023.12.12 16:31",
        },
        {
            service: "모바일 APP",
            errorLog:
                "d4ht4y3gfd1h42j5uyer6gf2d1g45yrt51g2dgty46t12dty46rt32s1dy4t6e5s3dtyt5e+2r6",
            createDate: "2023.12.12 16:31",
        },
        {
            service: "모바일 APP",
            errorLog:
                "d4ht4y3gfd1h42j5uyer6gf2d1g45yrt51g2dgty46t12dty46rt32s1dy4t6e5s3dtyt5e+2r6",
            createDate: "2023.12.12 16:31",
        },
    ];

    function searchSwTab2Table() {
        var input, filter, table, tr, i;
        input = document.getElementById("searchSwTab2");
        filter = input.value.toUpperCase().split(" ");
        table = document.getElementById("swtab2-data-table");
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

    function sortSwTab2Table(n) {
        var table,
            rows,
            switching,
            i,
            x,
            y,
            shouldSwitch,
            dir,
            switchcount = 0;
        table = document.getElementById("swtab2-data-table");
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
<DetailLog  {showDetailLog} on:click={handleDetailLog}/>
<section class="seach-sort-table">
    <div class="seach-sort-table__header">
        <p class="title">로그관리</p>
        <div class="right">
            <div class="search-input">
                <input type="text" id="searchSwTab2" placeholder="검색" />
                <Icon icon="iconamoon:search" color="#c5c7c8" width="18" />
            </div>
            <button
                class="btn-primary-border-none"
                id="search-btn"
                on:click={searchSwTab2Table}>검색</button
            >
        </div>
    </div>

    <div id="data-table" class="seach-sort-table__table">
        <table id="swtab2-data-table">
            <thead>
                <tr>
                    <th>서비스</th>
                    <th>오류로그</th>
                    <th>등록일자</th>
                    <th>세부정보</th>
                </tr>
            </thead><tbody>
                {#each swTab2Table as item, int}
                    <tr>
                        <td style="width: 15%;">{item.service} </td>
                        <td style="width: 30%;"> <div>{item.errorLog}</div></td>
                        <td style="width: 20%;">{item.createDate}</td>

                        <td style="padding: 0;width: 15%;">
                            <button class="btn-detail-gray m-auto" on:click={handleDetailLog}
                                >상세내역</button
                            >
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
                    td {
                        
                      div{
                        text-overflow: ellipsis;
                        overflow: hidden;
                        white-space: nowrap;
                        max-width: 600px;
                        text-align: left;
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

    button {
        display: block;
        color: #E1E3E4;
        font-size: 12px;
    }
</style>
