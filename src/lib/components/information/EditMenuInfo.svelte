<script>
	import CreateAgree from './modal/CreateAgree.svelte';
	import EditButton from './../globalComponents/EditButton.svelte';
    import Icon from "@iconify/svelte";

	let showMenu = false
export	function handleMenuOpen() {
		showMenu = true
		console.log('open')
		document.body.addEventListener('click', handleMenuClose)
	}
	function handleMenuClose() {
		showMenu = false
		console.log('close')
		document.body.removeEventListener('click', handleMenuClose)
	}

 let showCreateAgree = false;
    const handleCreateAgree = () => {
        showCreateAgree = !showCreateAgree;
    };

</script>
<CreateAgree {showCreateAgree} on:click={handleCreateAgree}/>
<div class="more-menu">
    <button  on:click|stopPropagation={handleMenuOpen} class="icon"
    ><EditButton /></button
    >
    {#if showMenu}
        <div class="menu" on:click|stopPropagation={handleMenuClose}>
            <p  on:click={handleCreateAgree}>
                <span><Icon icon="mynaui:send" width="15" /></span>공지등록
            </p>

            <p>
                <span class="mr-10"><Icon icon="gg:check-r" width="13" /></span
                    >정보변경하기
            </p>
        </div>
    {/if}
</div>

<style lang="scss">
          @import 'src/lib/scss/style.scss';
    .more-menu {
        // position: relative;
        display: inline-block;
        z-index: 11;
        overflow: visible;
        .menu {
            position: absolute;
            right: 20px;
            bottom: 65px;
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
