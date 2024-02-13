<script>
    import DetailAgency2 from "./modal/DetailAgency2.svelte";
    import CreateAgency2 from "./modal/CreateAgency2.svelte";
    import CreateAgency from "./modal/CreateAgency.svelte";
    import CreateLocal from "./modal/CreateLocal.svelte";
    import Icon from "@iconify/svelte";
    let showCreateLocal = false;
    const handleCreateLocal = () => {
        showCreateLocal = !showCreateLocal;
    };

    let showCreateAgency = false;
    const handleCreateAgency = () => {
        showCreateAgency = !showCreateAgency;
    };

    export let showCreateAgency2 = false;
    const handleCreateAgency2 = () => {
        showCreateAgency2 = !showCreateAgency2;
    };

    export let showDetailAgency2 = false;
    const handleDetailAgency2 = () => {
        showDetailAgency2 = !showDetailAgency2;
    };
</script>

<section class="cs">
    <CreateLocal {showCreateLocal} on:click={handleCreateLocal} />
    <CreateAgency {showCreateAgency} on:click={handleCreateAgency} />
    <CreateAgency2 {showCreateAgency2} on:click={handleCreateAgency2} />
    <DetailAgency2 {showDetailAgency2} on:click={handleDetailAgency2} />
    <button on:click={handleCreateLocal} class="btn-primary">지역생성</button>
    <div class="cs__top">
        <div class="local-box">
            <div class="head" style="border-left: 1px solid #E1E3E4;">
                지역 (시・도)
            </div>
            <div class="body" style="border-left: 1px solid #E1E3E4;">
                <button class="btn-primary-local"
                    >서울특별시<span
                        ><Icon
                            icon="oui:arrow-right"
                            width="20px"
                            height="20px"
                            style="color: white"
                        /></span
                    >
                </button>
                <button class="btn-local"
                    >경기도<span
                        ><Icon
                            icon="oui:arrow-right"
                            width="20px"
                            height="20px"
                            style="color: #C5C7C8"
                        /></span
                    >
                </button>
            </div>
        </div>
        <div class="local-box">
            <div class="head">지역 (군・구)</div>
            <div class="body">
                <button class="btn-primary-local"
                    >강남구<span
                        ><Icon
                            icon="oui:arrow-right"
                            width="20px"
                            height="20px"
                            style="color: white"
                        /></span
                    >
                </button>
                <button class="btn-local"
                    >서초구<span
                        ><Icon
                            icon="oui:arrow-right"
                            width="20px"
                            height="20px"
                            style="color: #C5C7C8"
                        /></span
                    >
                </button>
            </div>
        </div>
        <div class="local-box">
            <div class="head">기관 1</div>
            <div class="body">
                <button class="btn-primary-local"
                    >강남구청<span
                        ><Icon
                            icon="oui:arrow-right"
                            width="20px"
                            height="20px"
                            style="color: white"
                        /></span
                    >
                </button>
                <button class="btn-local"
                    ><p>강남구 보건소</p>
                    <Icon
                        icon="oui:arrow-right"
                        width="20px"
                        height="20px"
                        style="color: #C5C7C8"
                    />
                </button>
                <button class="m-auto" on:click={handleCreateAgency}
                    ><Icon
                        icon="carbon:add-filled"
                        width="35px"
                        style="color: #5E72E4"
                    /></button
                >
            </div>
        </div>
        <div class="local-box">
            <div class="head">기관 2</div>
            <div class="body">
                <button class="btn-local">
                    치매안심센터 <button on:click={handleDetailAgency2} class="btn-gray-small">상세내역</button
                    >
                </button>
                <button class="m-auto" on:click={handleCreateAgency2}
                    ><Icon
                        icon="carbon:add-filled"
                        width="35px"
                        style="color: #5E72E4"
                    /></button
                >
            </div>
        </div>
    </div>
</section>

<style lang="scss">
    @import "src/lib/scss/style.scss";
    .cs__top {
        margin-top: 10px;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        .local-box {
            .head {
                background-color: #F5F5F5;
                padding: 15px 15px;
                border-right: 1px solid #E1E3E4;

                border-top: 1px solid #E1E3E4;
            }
            .body {
                border-right: 1px solid #E1E3E4;
                border-bottom: 1px solid #E1E3E4;
                border-top: 1px solid #E1E3E4;
                background-color: white;
                min-height: 500px;
                padding: 10px 15px;
                .btn-primary-local {
                    width: 100%;
                    background-color: #5E72E4;
                    padding: 10px 15px;
                    color: white;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    border-radius: 8px;
                    margin-bottom: 10px;
                }
                .btn-local {
                    width: 100%;
                    display: inline-block;
                    // background-color: #5E72E4;
                    padding: 10px 15px;
                    color: #757779;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    border-radius: 8px;
                    margin-bottom: 10px;
                    font-weight: 400;
                }
                .btn-gray-small {
                    font-size: 10px;
                    background-color: #EFF1F2;
                    color: #A9ABAD;
                    border-radius: 4px;
                    padding: 3px 8px;
                }
            }
        }
    }

    .btn-primary {
        margin: 0 0 0 auto;
    }
</style>
