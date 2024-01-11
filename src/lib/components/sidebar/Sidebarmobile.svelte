

<script>
    import Icon from '@iconify/svelte';
    import MainIcon from "../../assets/icons/main_icon.svg";
    import Service from "../../assets/icons/service_icon.svg";
    import Contents from "../../assets/icons/contents_icon.svg";
	import { onMount } from 'svelte';
  import { page } from '$app/stores';
   let path;

</script>

<div class="sidenav">
<div class="box-w">
  <button class="dropdown-btn {path == '/dashboard' || '/statistics' || '/localmonitoring' ?  '' : 'active'}"><div class="center"><MainIcon class="pr-10" /> 메인</div> 
 <Icon class="arrow-color" icon="mdi:chevron-up" />
  </button>
  <div class="dropdown-container"  >
    <a href={"/dashboard" } class='non-click {path == '/dashboard'  ?  'click' : ''}'>대시보드</a>
    <a href={"/statistics"} class='non-click' >통계현황</a>
    <a href={"/localmonitoring"} class='non-click'>지역 모니터링 보기</a>
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
</div>


<style lang="scss">


.sidenav {
  height: 100vh;
  width: 300px;
  padding-top: 0px;
  color:#585858;
  margin: 0 auto;

}

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



</style>