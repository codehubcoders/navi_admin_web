

<script>
	import { onMount } from 'svelte';
    import Icon from '@iconify/svelte';
    import MainIcon from "../../assets/icons/main_icon.svg";
    import Service from "../../assets/icons/service_icon.svg";
    import Contents from "../../assets/icons/contents_icon.svg";

onMount(()=>{
    var dropdown = document.getElementsByClassName("dropdown-btn");
    var i;

    for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
        } else {
        dropdownContent.style.display = "block";

        }
    });
    }
})
</script>

<div class="sidenav">
  <button class="dropdown-btn"><div class="center"><MainIcon class="pr-10" /> 메인</div> 
 <Icon class="arrow-color" icon="mdi:chevron-up" />
  </button>
  <div class="dropdown-container">
    <a href={"#"}>대시보드</a>
    <a href={"#"}>통계현황</a>
    <a href={"#"}>지역 모니터링 보기</a>
  </div>

    <button class="dropdown-btn sevice aling-bt">
    <div class="center">
    <Service class="pr-10" />
    서비스 관리 
    </div>
 
     <Icon class="arrow-color" icon="mdi:chevron-up" />

   
  </button>
  <div class="dropdown-container">
    <a href={"#"}>회원관리</a>
    <a href={"#"}>제품관리</a>
    <a href={"#"}>CS관리</a>
    <a href={"#"}>지역관리</a>
    <a href={"#"}>S/W관리</a>
    <a href={"#"}>권한관리</a>
  </div>


  <button class="dropdown-btn"><div class="center"><MainIcon class="pr-10" /> 컨텐츠 관리</div> 
 <Icon class="arrow-color" icon="mdi:chevron-up" />
  </button>
  <div class="dropdown-container">
    <a href={"#"}>공지관리</a>
    <a href={"#"}>소식관리</a>
    <a href={"#"}>미디어관리</a>
    <a href={"#"}>이용안내관리</a>
    <a href={"#"}>약관관리</a>
    <a href={"#"}>문자관리</a>
  </div>
</div>

<div class="contain">

<slot />
</div>

<style lang="scss">


/* Fixed sidenav, full height */
.sidenav {
  height: 100%;
  width: 180px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: white;
  overflow-x: hidden;
  padding-top: 10px;
  color:#585858;
}
.arrow-color{
    color:#898D90;
    margin-left: auto;

}
/* Style the sidenav links and the dropdown button */
.sidenav a, .dropdown-btn {
  border-radius:10px;
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
    background-color:#F5F8FC;



}

/* Main content */
.contain {
  margin-left: 200px; /* Same as the width of the sidenav */
  font-size: 20px; /* Increased text to enable scrolling */
  padding: 0px 10px;
  
}

/* Add an active class to the active dropdown button */
.active {
  background-color: green;
  color: white;
}

/* Dropdown container (hidden by default). Optional: add a lighter background color and some left padding to change the design of the dropdown content */
.dropdown-container {
  display: block;

   background-color: white;
   padding-left:20px;
    padding-bottom: 10px;
  a{
     background-color: white;
       font-weight: 300;
     font-size:15px;
     padding: 12px 0px;
     height:auto;
     color:#A9ABAD;
       justify-content: flex-start;


  }
}

/* Optional: Style the caret down icon */


/* Some media queries for responsiveness */
@media screen and (max-height: 450px) {
  .sidenav {padding-top: 15px;}
  .sidenav a {font-size: 18px;}
}
</style>