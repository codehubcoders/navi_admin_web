<script>
	import CreateVideo from './../modal/CreateVideo.svelte';
    import Icon from "@iconify/svelte";
    // import ProductDetailModal from "./modal/ProductDetailModal.svelte";
    import FixedIcon from "../../../assets/icons/fixed.svg";
    let videoTab1Table = [
        {
            Thumbnail: "fix",
            title: "집에서 할 수 있는 건강튼튼영상",
            state: "전체",
            agency: "전체",
            tag: "건강",
            startDate: "2023.12.12",
            endDate: "2024.02.21",
            
        },
        {
            Thumbnail: "fix",
            title: "노인 낙상예방운동",
            state: "서울시 강남구",
            agency: "노인복지센터",
            tag: "홍보",
            startDate: "2023.12.12",
            endDate: "2024.02.21",
            
        },
        {
            Thumbnail: "",
            title: "7분 하체운동",
            state: "인천서구",
            agency: "치매안심센터",
            tag: "기타",
            startDate: "2023.12.12",
            endDate: "2024.02.21",
            
        },
        {
            Thumbnail: "",
            title: "두뇌쑥쑥 체조",
            state: "전체",
            agency: "전체",
            tag: "기타",
            startDate: "2023.12.12",
            endDate: "2024.02.21",
            
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

    function searchNewsTab1Table() {
        var input, filter, table, tr, i;
        input = document.getElementById("searchVideoTab1");
        filter = input.value.toUpperCase().split(" ");
        table = document.getElementById("videoTab1-data-table");
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

    function sortVideoTab1Table(n) {
        var table,
            rows,
            switching,
            i,
            x,
            y,
            shouldSwitch,
            dir,
            switchcount = 0;
        table = document.getElementById("videoTab1-data-table");
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

    export let showCreateVideo = false;
    const handleCreateVideo = () => {
        showCreateVideo = !showCreateVideo;
    };
  
</script>

<section class="seach-sort-table">
    <CreateVideo {showCreateVideo}  on:click={handleCreateVideo}/>
    <div class="seach-sort-table__header">
        <p class="title">영상 관리</p>
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
           
                    <button class="btn-primary-border-none" on:click={handleCreateVideo}
                        >등록</button
                >
                <div class="search-input">
                    <input type="text" id="searchVideoTab1" placeholder="검색" />
                    <Icon icon="iconamoon:search" color="#c5c7c8" width="18" />
                </div>
                <button
                    class="btn-primary-border-none"
                    id="search-btn"
                    on:click={searchNewsTab1Table}>검색</button
                >
            {/if}
        </div>
    </div>

    <div id="data-table" class="seach-sort-table__table">
        <table id="videoTab1-data-table">
            <thead>
                <tr>
                    <th>썸네일</th>
                    <th on:click={() => sortVideoTab1Table(1)}>제목 <Icon
                        icon="fluent:arrow-fit-16-filled"
                        color="#e1e3e4"
                        width="15"
                        rotate={1}
                    /></th>
                    <th>게시지역</th>
                    <th>주관기관</th>
                    <th>태그</th>
                    <th on:click={() => sortVideoTab1Table(4)}
                        >게시기간 <Icon
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
                                        videoTab1Table.length}
                                /></label
                            >
                        {:else}
                            세부정보
                        {/if}
                    </th>
                </tr>
            </thead>
            <tbody>
                {#each videoTab1Table as item, int}
                    <tr>
                        <td>
                            <div class="thumbnail">
                                <div class="box" />
                                {#if item.Thumbnail == "fix"}
                                    <div class="fixed"><FixedIcon /></div>
                                {/if}
                            </div>
                        </td>
                        <td>{item.title}</td>
                        <td>{item.state}</td>
                        <td>{item.agency}</td>
                        <td>{item.tag}</td>
                        <td>{item.startDate} - {item.endDate}</td>
                      

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
                                    >상세내역</button
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

    .thumbnail {
        position: relative;
        display: flex;
        justify-content: center;

        .box {
            background-color: #D9D9D9;
            width: 100px;
            height: 56px;
        }
        .fixed {
            position: absolute;
            top: -15px;
            right: 20px;
        }
    }
</style>
