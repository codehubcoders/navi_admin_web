<script>
	import SignUp from './SignUp.svelte';
	import DefalutDialog from './../globalComponents/defalutDialog.svelte';
  import { goto } from "$app/navigation";

  //function to be called on click
  function logined() {
    goto(`/dashboard`);
  }

  let showDialog = false;
  const dialog = () => {
		showDialog = !showDialog;
    
	};

  let showDialog2 = false;


  const handleClick = () => {
    showDialog = false;
		showDialog2 = true;
	};

  const handleClick2 = () => {
    showDialog2 = false;
    showSignUp = !showSignUp;
	};

let showSignUp = false;
const signUpModal = () => {
  showSignUp = !showSignUp;
	};
</script>

<section class="login">
  <div class="card login">
    <h1 class="center mb-20 fs-20 fw-500">로그인</h1>

    <p class="pt-20 fs-12 fw-500">아이디</p>
    <input type="text" id="id" placeholder="아이디를 입력하세요" />
    <p class="mt-15 fs-12 fw-500">비밀번호</p>
    <input class="mb-20" type="text" id="password" placeholder="비밀번호를 입력하세요" />
    <button class="btn-primary m-auto mt-10" on:click={logined}>로그인</button>

    <div class="d-f center mt-20 pt-10">
      <button on:click={dialog}>아이디/비밀번호 찾기</button>
    </div>
  </div>
  <DefalutDialog {showDialog}  title="아이디/비밀번호 찾기" content="고객센터로 연락주세요" content2="02-577-778" handleClick={handleClick} >
    <div slot ="content">고객센터로 연락주세요</div>
  </DefalutDialog>
  <DefalutDialog {showDialog2} on:click={handleClick2} title="최초 로그인"  handleClick2={handleClick2}>
    <div slot ="content">최초 로그인시<br>
      비밀번호 변경이 필요합니다</div>
    </DefalutDialog>
    <SignUp {showSignUp}   on:click={signUpModal}/>
</section>

<style lang="scss">
  @import "../../scss/style.scss";

  button {
    color: #c5c7c8;
    font-weight: 400;
    font-size:  12px;
  }
</style>
