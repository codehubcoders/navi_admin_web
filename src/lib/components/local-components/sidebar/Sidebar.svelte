<script>
  import { onMount } from "svelte";
  import { page } from "$app/stores";
  import Icon from "@iconify/svelte";
  import MainIcon from "../../../assets/icons/main_icon.svg";
  import Notice from "../../../assets/icons/notification_icon.svg";
  import Logo from "../../../assets/images/logo.svg";
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
  <div class="userInfo">
    <div class="logo"><Logo /></div>
    <p>홍길동</p>
    <p><a href="" class="my">마이페이지</a></p>
    <p class="fw-300">경기도부천시</p>
  <a href="/" class="logout"><button class="btn-logout">로그아웃</button>  </a> 
  </div>
  <div class="box-w">
    <button
      on:click={arrowActive}
      class="dropdown-btn {path == '/local-monitoring' ||
      '/local-member' ||
      '/localmonitoring'
        ? ''
        : 'active'}"
      id="name"
      ><div class="title"><MainIcon /> 대시보드</div>
      {#if arrowUpDw == true}
        <Icon class="arrow-color" icon="mdi:chevron-up" />
      {:else}
        <Icon class="arrow-color" icon="mdi:chevron-down" />
      {/if}
    </button>
    <div class="dropdown-container">
      <a
        href={"/local-monitoring"}
        class="non-click">실시간 모니터링</a
      >
      <a
        href={"/local-monitoring"}
        class="non-click {path == '/local-monitoring' ? 'click' : ''}">통계현황</a
      >
      <a
      href={"/local-member"}
      class="non-click {path == '/local-member' ? 'click' : ''} {path == '/local-member/detail' ? 'click' : ''}">회원관리</a
    >
    </div>
    <button
      on:click={arrowActive2}
      class="dropdown-btn sevice aling-bt"
      id="service"
    >
      <div class="title">
        <Notice />
        소식관리
      </div>
      {#if arrowUpDw2 == true}
        <Icon class="arrow-color" icon="mdi:chevron-up" />
      {:else}
        <Icon class="arrow-color" icon="mdi:chevron-down" />
      {/if}
    </button>
    <div class="dropdown-container">
      <a href={"/member"} class="non-click {path == '/member' ? 'click' : ''} {path == '/member/detail' ? 'click' : ''}"
        >소식관리</a
      >

    </div>

    <button class="dropdown-btn" id="notice" on:click={arrowActive3}>
      <div class="title"><Notice /> 공지관리</div>
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
          : ''}">공지사항</a
      >
   
    </div>
  </div>
</div>

<style lang="scss">
  @import "src/lib/scss/style.scss";
  .pr-10 {
    padding-right: 10px;
  }
  .sidenav {
    height: 100vh;
    width: 180px;
    position: absolute;
    z-index: 10;
    top: 20px;
    left: 0;
    background-color: #F8FAFB;
    padding-top: 10px;
    color: #585858;
    @media (max-width: 1300px) {
      left: 10px;
    }
    @media (max-width: 960px) {
      display: none;
    }
  }
  .userInfo {
    padding: 15px 10px;
    margin-bottom: 20px;
    font-size: 15px;
    background-color: white;
    border-radius: 10px;
    .logout {
        font-size: 14px;
        color: #fff;
        background-color: white;
        padding: 0;
        height: auto;
      }
    p {
      font-size: 14px;
      color: #5C5F60;
      line-height: 1.8em;
      .my {
        font-size: 14px;
        color: #5C5F60;
        background-color: white;
        padding: 0;
        height: auto;
      }
     
    }

    .btn-logout {
      width: 100%;
      background-color: $primary-orange;
      color: white;
      font-size: 12px;
      padding: 10px 0px;
      border-radius: 4px;
      margin-top: 10px;
    }
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
    gap: 10px;
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
    .title {
      display: flex;
      gap: 10px;
      justify-content: center;
      align-items: center;
    }
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
