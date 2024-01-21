<script>
	import RegisterTextAreaForm from './RegisterTextAreaForm.svelte';

	// import ModalITextAreaForm from './../../globalComponents/ModalITextAreaForm.svelte';
	import ModalTextForm from './../../globalComponents/ModalTextForm.svelte';

</script>
<section class="register">
<div class="register__header">
    <p>소식등록</p>
    <div class="round">
        <input type="checkbox" checked id="checkbox" />
        <label for="checkbox"> </label>
        <div class="label">고정</div>
      </div>
</div>
<div class="register__body">
<div class="title">
    <ModalTextForm label="제목" placeholder="제목을 입력해주세요" register="true" />
    <RegisterTextAreaForm label="내용" />
</div>
</div>
</section>

<style lang="scss">
.register{
    box-shadow: 0 5px 20px rgba(173, 181, 217, 0.4);
    margin-top: 10px;
    background-color: white;
    &__header{
        font-size: 18px;
        font-weight: 500;
        padding: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    &__body{
        background-color: #F8FAFB;
        padding: 20px;
    }
}

.round {
  position: relative;
  display: flex;
  align-items: center;
}

.round label {
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 50%;
  cursor: pointer;
  height: 15px;
  left: 0;
  position: absolute;
  top: 0;
  width: 15px;
}
.label{
    font-size: 12px;
    font-weight: 400;
    color: #A9ABAD;

}
.round label:after {
  border: 2px solid #fff;
  border-top: none;
  border-right: none;
  content: "";
  height: 5px;
  left: 4px;
  opacity: 0;
  position: absolute;
  top: 3px;
  transform: rotate(-45deg);
  width: 5px;
}

.round input[type="checkbox"] {
  visibility: hidden;
}

.round input[type="checkbox"]:checked + label {
  background-color: #596DDF;
  border-color: #596DDF;
}

.round input[type="checkbox"]:checked + label:after {
  opacity: 1;
}





</style>