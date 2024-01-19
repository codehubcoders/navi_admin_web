<script>
  import { onMount } from "svelte";
  import { page } from "$app/stores";
  import Icon from "@iconify/svelte";
  import MainIcon from "../../assets/icons/main_icon.svg";
  import Service from "../../assets/icons/service_icon.svg";
  // import Contents from "../../assets/icons/contents_icon.svg";

  let path;

  $: path = $page.url.pathname;

  onMount(() => {
    var dropdown = document.getElementsByClassName("dropdown-btn");
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

<div class="sidenav">
  <div class="logo">로고</div>
  <div class="userInfo">
    <p>이름</p>
    <p>지역</p>
    <button class="m-auto">로그아웃</button>
  </div>
  <div class="box-w">
    <button
      on:click={arrowActive}
      class="dropdown-btn {path == '/dashboard' ||
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
        class="non-click {path == '/dashboard' ? 'click' : ''}">대시보드</a
      >
      <a
        href={"/statistics"}
        class="non-click {path == '/statistics' ? 'click' : ''}">통계현황</a
      >
      <a
        href={"/localmonitoring"}
        class="non-click {path == '/localmonitoring' ? 'click' : ''}"
        >지역 모니터링 보기</a
      >
    </div>
    <button
      on:click={arrowActive2}
      class="dropdown-btn sevice aling-bt"
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
      <a href={"/member"} class="non-click {path == '/member' ? 'click' : ''}"
        >회원관리</a
      >
      <a href={"/product"} class="non-click {path == '/product' ? 'click' : ''}"
        >제품관리</a
      >
      <a href={"/cs"} class="non-click {path == '/cs' ? 'click' : ''}">CS관리</a
      >
      <a href={"/local"} class="non-click {path == '/local' ? 'click' : ''}"
        >지역관리</a
      >
      <a href={"/sw"} class="non-click {path == '/sw' ? 'click' : ''}"
        >S/W관리</a
      >
      <a
        href={"/permission"}
        class="non-click {path == '/permission' ? 'click' : ''}">권한관리</a
      >
    </div>

    <button class="dropdown-btn" id="notice" on:click={arrowActive3}>
      <div class="center"><MainIcon class="pr-10" /> 컨텐츠 관리</div>
      {#if arrowUpDw3 == true}
        <Icon class="arrow-color" icon="mdi:chevron-up" />
      {:else}
        <Icon class="arrow-color" icon="mdi:chevron-down" />
      {/if}
    </button>
    <div class="dropdown-container">
      <a
        href={"/notification"}
        class="non-click {path == '/notification' ? 'click' : ''}">공지관리</a
      >
      <a href={"#"}>소식관리</a>
      <a href={"#"}>미디어관리</a>
      <a href={"#"}>이용안내관리</a>
      <a href={"#"}>약관관리</a>
      <a href={"#"}>문자관리</a>
    </div>
  </div>
</div>

<!-- <div class="contain">

<slot />
</div> -->
<style lang="scss">
  /* Fixed sidenav, full height */
  .sidenav {
    height: 100vh;
    width: 180px;
    position: absolute;
    z-index: 10;
    top: 20px;
    left: 0;
    background-color: #F8FAFB;

    padding-top: 10px;
    margin-bottom: 20px;
    color: #585858;
    @media (max-width: 1300px) {
      left: 10px;
    }
    @media (max-width: 960px) {
      display: none;
    }
  }
  .userInfo {
    text-align: center;
    font-weight: 500;
    margin: 10px 0px;
    font-size: 15px;
    p {
      display: block;
      line-height: 1.5em;
    }
    button {
      background-color: #F8FAFB;
      line-height: 3em;
      cursor: pointer;
    }
  }

  .logo {
    border-radius: 10px;
    background-color: #ebebeb;
    width: 100%;
    height: 63px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  // .arrow-color{
  //     color:#898D90;
  //     margin-left: auto;

  // }
  /* Style the sidenav links and the dropdown button */
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
    display: block;
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
