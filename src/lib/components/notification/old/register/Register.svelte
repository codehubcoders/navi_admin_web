<script>
	import RegisterTextAreaForm from './../../globalComponents/RegisterTextAreaForm.svelte';
	// import ModalITextAreaForm from './../../globalComponents/ModalITextAreaForm.svelte';
	import ModalTextForm from './../../globalComponents/ModalTextForm.svelte';

</script>
<section class="register">
<div class="register__header">
    공지등록
</div>
<div class="register__body">
<div class="title">
    <ModalTextForm label="제목" placeholder="제목을 입력해주세요" register="true" />
    <RegisterTextAreaForm label="내용" />
</div>
</div>
</section>

<style lang="scss">
          @import 'src/lib/scss/style.scss';
.register{
    box-shadow: 0 5px 20px rgba(173, 181, 217, 0.4);
    margin-top: 10px;
    background-color: white;
    &__header{
        font-size: 18px;
        font-weight: 500;
        padding: 20px;
    }
    &__body{
        background-color: #F8FAFB;
        padding: 20px;
    }
}
</style>