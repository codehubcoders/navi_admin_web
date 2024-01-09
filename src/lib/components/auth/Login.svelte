<script>
	import { goto } from '$app/navigation';

	//function to be called on click
	function logined() {
			goto(`/dashboard`);
       }
</script>

<section class="login">
  <div class="card login">
    <h1 class="center mb-20">로그인</h1>

      <p class="pt-20">아이디</p>
      <input type="text" id="id"  placeholder="아이디를 입력하세요">
      <p class="mt-15">비밀번호</p>
      <input type="text" id="password" placeholder="비밀번호를 입력하세요">
      <button class="btn-primary mt-15 m-auto" on:click={logined}>로그인</button>
  
    <div class="d-f center mt-20">
      <a href={'#'}>회원가입</a>
      <p class="gray">|</p>
      <a href={'#'}>아이디 찾기</a>
    </div>
  </div>

</section>
<style lang="scss">
@import '../../scss/style.scss';

  a{
    color: #C5C7C8;
    font-weight: 400;
     font-size:0.9em;
  }
  .gray{
      color: #C5C7C8;
      padding: 0 10px;
      font-size: 0.8em;
  }
  
</style>
