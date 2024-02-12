<script>
    import Icon from "@iconify/svelte";

    let messageTable = [
        {
            division: "119",
            target: "119 / 치매안심센터",
            member: "홍승현",
            agency: "인천서구 치매안심센터",
            date: "23.10.06 12:22",
        },
        {
            division: "연결요청",
            target: "119 / 010 - 1234 - 5678",
            member: "감순향",
            agency: "인천서구 치매안심센터",
            date: "23.10.06 12:22",
        },
        {
            division: "119",
            target: "119 / 치매안심센터",
            member: "김양재",
            agency: "부천시 부천시청",
            date: "23.10.06 12:22",
        },
        {
            division: "연결요청",
            target: "119 / 010 - 1234 - 5678",
            member: "박부천",
            agency: "강남구 노인통합센터",
            date: "23.10.05 16:32",
        },
    ];
    

    // function searchNewsTab1Table() {
    //     var input, filter, table, tr, i;
    //     input = document.getElementById("searchNewsTab1");
    //     filter = input.value.toUpperCase().split(" ");
    //     table = document.getElementById("newsTab1-data-table");
    //     tr = table.getElementsByTagName("tr");
    //     for (i = 0; i < tr.length; i++) {
    //         const tableData = tr[i].getElementsByTagName("td");
    //         let allTextContent = "";
    //         for (let ind = 0; ind < tableData.length; ind++) {
    //             allTextContent += tableData[ind].innerText;
    //         }

    //         if (allTextContent) {
    //             if (allTextContent.toUpperCase().indexOf(filter) > -1) {
    //                 tr[i].style.display = "";
    //             } else {
    //                 tr[i].style.display = "none";
    //             }
    //         }
    //     }
    // }

    function sortMessageTable(n) {
        var table,
            rows,
            switching,
            i,
            x,
            y,
            shouldSwitch,
            dir,
            switchcount = 0;
        table = document.getElementById("message-data-table");
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

    <div id="data-table" class="seach-sort-table__table mt-15">
        <table id="message-data-table">
            <thead>
                <tr>
                    <th on:click={() => sortMessageTable(0)}>구분 <Icon
                        icon="fluent:arrow-fit-16-filled"
                        color="#e1e3e4"
                        width="15"
                        rotate={1}
                    /></th>
                    <th>발송대상</th>
                    <th>나비회원</th>
                    <th on:click={() => sortMessageTable(3)}>주관기관 <Icon
                        icon="fluent:arrow-fit-16-filled"
                        color="#e1e3e4"
                        width="15"
                        rotate={1}
                    /></th>
                    <th on:click={() => sortMessageTable(4)}
                        >일시 <Icon
                            icon="fluent:arrow-fit-16-filled"
                            color="#e1e3e4"
                            width="15"
                            rotate={1}
                        /></th
                    >

                   
                </tr>
            </thead>
            <tbody>
                {#each messageTable as item, int}
                    <tr>
                        <td>{item.division}</td>
                        <td>{item.target}</td>
                        <td>{item.member}</td>
                        
                        <td>{item.agency}</td>
                        <td>{item.date}</td>

          
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
