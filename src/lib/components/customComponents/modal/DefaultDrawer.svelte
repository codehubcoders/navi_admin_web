<script>
    import { onMount } from "svelte";
    import { page } from "$app/stores";
    import Icon from "@iconify/svelte";
    import MainIcon from "../../../assets/icons/main_icon.svg";
    import Service from "../../../assets/icons/service_icon.svg";
    import Notice from "../../../assets/icons/notification_icon.svg";

    export let showDrawer = true;

	function handleMenuClose() {
		showDrawer = false
		console.log('close')
		document.body.removeEventListener('click', handleMenuClose)
	}
    let path;

    $: path = $page.url.pathname;

    onMount(() => {
        var dropdown = document.getElementsByClassName("dropdown");
        var i;

        for (i = 0; i < dropdown.length; i++) {
            dropdown[i].addEventListener("click", function () {
                this.classList.toggle("active");

                var dropdownContent = this.nextElementSibling;
                if (dropdownContent.style.display === "none") {
                    dropdownContent.style.display = "block";
                } else {
                    dropdownContent.style.display = "none";
                }
            });
        }

        const nonClick = document.querySelectorAll(".non-click");

        function handleClick(event) {
            // div에서 모든 "click" 클래스 제거
            nonClick.forEach((e) => {
                e.classList.remove("click");
            });
            // 클릭한 div만 "click"클래스 추가
            event.target.classList.add("click");
        }

        nonClick.forEach((e) => {
            e.addEventListener("click", handleClick);
        });
    });

    let arrowUpDw = true;
    function arrowActive() {
        arrowUpDw = !arrowUpDw;
    }
    let arrowUpDw2 = true;
    function arrowActive2() {
        arrowUpDw2 = !arrowUpDw2;
    }

    let arrowUpDw3 = true;
    function arrowActive3() {
        arrowUpDw3 = !arrowUpDw3;
    }
</script>

{#if showDrawer}
    <div class="backdrop" on:click|stopPropagation={handleMenuClose}>
        <div class="modal">
            <div class="box-w">
                <button
                    on:click={arrowActive}
                    class="dropdown {path == '/dashboard' ||
                    '/statistics' ||
                    '/localmonitoring'
                        ? ''
                        : 'active'}"
                    id="name"
                    ><div class="center"><MainIcon class="pr-10" /> 메인</div>
                    {#if arrowUpDw == true}
                        <Icon class="arrow-color" icon="mdi:chevron-up" />
                    {:else}
                        <Icon class="arrow-color" icon="mdi:chevron-down" />
                    {/if}
                </button>
                <div class="dropdown-container">
                    <a
                        href={"/dashboard"}
                        class="non-click {path == '/dashboard' ? 'click' : ''}"
                        >대시보드</a
                    >
                    <a
                        href={"/statistics"}
                        class="non-click {path == '/statistics' ? 'click' : ''}"
                        >통계현황</a
                    >
                    <a
                        href={"/localmonitoring"}
                        class="non-click {path == '/localmonitoring'
                            ? 'click'
                            : ''}">지역 모니터링 보기</a
                    >
                </div>
                <button
                    on:click={arrowActive2}
                    class="dropdown sevice aling-bt"
                    id="service"
                >
                    <div class="center">
                        <Service class="pr-10" />
                        서비스 관리
                    </div>
                    {#if arrowUpDw2 == true}
                        <Icon class="arrow-color" icon="mdi:chevron-up" />
                    {:else}
                        <Icon class="arrow-color" icon="mdi:chevron-down" />
                    {/if}
                    <!-- <Icon class="arrow-color" icon="mdi:chevron-up" /> -->
                </button>
                <div class="dropdown-container">
                    <a
                        href={"/member"}
                        class="non-click {path == '/member' ? 'click' : ''}"
                        >회원관리</a
                    >
                    <a
                        href={"/product"}
                        class="non-click {path == '/product' ? 'click' : ''}"
                        >제품관리</a
                    >
                    <a
                        href={"/cs"}
                        class="non-click {path == '/cs' ? 'click' : ''}"
                        >CS관리</a
                    >
                    <a
                        href={"/local"}
                        class="non-click {path == '/local' ? 'click' : ''}"
                        >지역관리</a
                    >
                    <a
                        href={"/sw"}
                        class="non-click {path == '/sw' ? 'click' : ''}"
                        >S/W관리</a
                    >
                    <a
                        href={"/permission"}
                        class="non-click {path == '/permission' ? 'click' : ''}"
                        >권한관리</a
                    >
                </div>

                <button
                    class="dropdown"
                    id="notice"
                    on:click={arrowActive3}
                >
                    <div class="center"><Notice class="pr-10" /> 공지관리</div>
                    {#if arrowUpDw3 == true}
                        <Icon class="arrow-color" icon="mdi:chevron-up" />
                    {:else}
                        <Icon class="arrow-color" icon="mdi:chevron-down" />
                    {/if}
                </button>
                <div class="dropdown-container">
                    <a
                        href={"/notification"}
                        class="non-click {path == '/notification' ||
                        path == '/notification/notice-register'
                            ? 'click'
                            : ''}">공지관리</a
                    >
                    <a
                        href={"/news"}
                        class="non-click {path == '/news' ||
                        path == '/news/register'
                            ? 'click'
                            : ''}">소식관리</a
                    >
                    <a
                        href={"/video"}
                        class="non-click {path == '/video' ? 'click' : ''}"
                        >미디어관리</a
                    >
                    <a
                        href={"/information"}
                        class="non-click {path == '/information'
                            ? 'click'
                            : ''}">이용안내관리</a
                    >
                    <a href={"#"}>약관관리</a>
                    <a
                        href={"/message"}
                        class="non-click {path == '/message' ? 'click' : ''}"
                        >문자관리</a
                    >
                </div>
            </div>
        </div>
    </div>
{/if}

<style lang="scss">
    .backdrop {
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.8);
        z-index: 22;
    }
    .modal {
        padding: 10px;
        top: 0;
        border-radius: 0 10px 10px 10px;
        margin-left: 0 auto;
        text-align: center;
        width: 250px;
        height: 100%;
        background-color: white;
        padding: 20px 30px;

        &__header {
            display: flex;
            justify-content: space-between;
            margin-bottom: 20px;
            p {
                font-size: 18px;
                font-weight: 500;
            }
            .button {
                font-size: 13px;
                display: flex;
            }
        }
    }
    .sidenav a,
    .dropdown-btn {
        border-radius: 10px;
        padding: 6px 16px 6px 16px;
        text-decoration: none;
        font-size: 17px;
        height: 54px;
        color: #585858;
        display: flex;
        border: none;
        background: none;
        width: 100%;
        text-align: left;
        align-items: center;
        justify-content: space-between;
        cursor: pointer;
        outline: none;
        background-color: #F5F8FC;
        // background-color: white;
    }

    /* Add an active class to the active dropdown button */
    .active {
        background-color: white;
        // background-color:#F5F8FC;
        // color: white;
    }

    /* Dropdown container (hidden by default). Optional: add a lighter background color and some left padding to change the design of the dropdown content */
    .dropdown-container {
        display: flex;
        flex-direction: column;
        align-items: start;
        background-color: white;
        padding-left: 20px;
        padding-bottom: 10px;
        a {
            background-color: white;
            font-weight: 300;
            font-size: 15px;
            padding: 12px 0px;
            height: auto;
            color: #A9ABAD;
            justify-content: flex-start;
        }
        .click {
            color: #333333;
            background-color: white;
        }
    }

    .box-w {
        padding-top: 10px;
        background-color: white;
    }
</style>
