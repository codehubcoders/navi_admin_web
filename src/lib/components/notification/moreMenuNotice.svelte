<script>
    import Icon from "@iconify/svelte";

	let showMenu = false
	function handleMenuOpen() {
		showMenu = true
		console.log('open')
		document.body.addEventListener('click', handleMenuClose)
	}
	function handleMenuClose() {
		showMenu = false
		console.log('close')
		document.body.removeEventListener('click', handleMenuClose)
	}

</script>

<div class="more-menu">
    <button  on:click|stopPropagation={handleMenuOpen} class="icon"
        ><Icon icon="uiw:more" color="#a9abad" /></button
    >
    {#if showMenu}
        <div class="menu" on:click|stopPropagation={()=>{}}>
            <a href="/notification/notice-register">  <p>
               <span><Icon icon="mynaui:send" width="15" /></span>공지등록
            </p></a>
            <p>
                <span class="mr-10"><Icon icon="gg:check-r" width="13" /></span
                >정보변경하기
            </p>
            <p>
                <span><Icon icon="mynaui:file" width="15" /></span>공지설정
            </p>
        </div>
    {/if}
</div>

<style lang="scss">
          @import 'src/lib/scss/style.scss';
    .more-menu {
        position: relative;
        display: inline-block;
        z-index: 11;
        overflow: visible;
        .menu {
            position: absolute;
            right: -10px;
            background-color: white;
            display: inline-block;
            padding: 15px 0;
            width: 160px;
            border-radius: 12px;
            border: 1px solid #C5C7C8;
            p {
                color: #8E9192;
                vertical-align: middle;
                font-size: 12px;
                line-height: 2.5em;
                padding: 0px 0px 0px 15px;
                &:hover {
                    background-color: #F8FAFB;
                    border-radius: 12px;
                    padding: 0 10px;
                    color: #333;
                    cursor: pointer;
                }
                span {
                    color: #333;
                    vertical-align: middle;
                    margin-right: 8px;
                }
            }
        }
    }
</style>
