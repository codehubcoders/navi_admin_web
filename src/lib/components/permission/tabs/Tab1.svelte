<script>
    import Icon from "@iconify/svelte";

    let selectType = 1;
    const onChangeType = (value) => () => (selectType = value);

    let typeList = [
        {
            title: "마스터",
            value: 1,
        },
        {
            title: "운영자",
            value: 2,
        },
        {
            title: "기관회원",
            value: 3,
        },
    ];
    let checboxList = [
        {
            title: "대시보드",
            value: 1,
            subTitle: [
                { name: "대시보드1", value: 1 },
                { name: "대시보드2", value: 2 },
                { name: "대시보드3", value: 3 },
                { name: "대시보드4", value: 4 },
            ],
        },
        {
            title: "서비스관리",
            value: 2,
            subTitle: [
                { name: "서비스관리1", value: 1 },
                { name: "서비스관리2", value: 2 },
                { name: "서비스관리3", value: 3 },
                { name: "서비스관리4", value: 4 },
            ],
        },
        {
            title: "공지관리",
            value: 3,
            subTitle: [
                { name: "공지관리1", value: 1 },
                { name: "공지관리2", value: 2 },
                { name: "공지관리3", value: 3 },
                { name: "공지관리4", value: 4 },
            ],
        },
    ];
</script>

<section class="permission">
    <div class="permission__top">
        <div class="local-box">
            <div class="head" style="border-left: 1px solid #E1E3E4;">유형</div>
            <div class="body" style="border-left: 1px solid #E1E3E4;">
                {#each typeList as item}
                    <button
                        class={item.value === selectType
                            ? "btn-primary-local"
                            : "btn-local"}
                        on:click={onChangeType(item.value)}
                        >{item.title}<span
                            ><Icon
                                icon="oui:arrow-right"
                                width="20px"
                                height="20px"
                                style={item.value === selectType
                                    ? "color:white"
                                    : "color: #C5C7C8"}
                            /></span
                        >
                    </button>
                {/each}

                <button class="m-auto"
                    ><Icon
                        icon="carbon:add-filled"
                        width="35px"
                        style="color: #5E72E4"
                    /></button
                >
            </div>
        </div>
        <div class="local-box">
            <div class="head">권한설정</div>
            <div class="body">
                <input type="checkbox" id="title" />
                <label for="title">더인츠 시스템</label>
                <div class="content mb-15">
                    {#each checboxList as item}
                    <div class="checked-box">
                        <div class="top">
                            <input type="checkbox" id="title" value={item.value}/>
                            <label for="title">{item.title}</label>
                        </div>
                        {#each item.subTitle as subItem}
                        <div class="subMenu">
                            <div class="item">
                                <input type="checkbox" id="title" value={subItem.value} />
                                <label for="title">{subItem.name}</label>
                            </div>
                         
                        </div>
                        {/each}
                        
                    </div>
                    {/each}
                   
                </div>
                <input type="checkbox" id="title" class="mt-15" />
                <label for="title">기관 시스템</label>
                <div class="content mb-15">
                    {#each checboxList as item}
                    <div class="checked-box">
                        <div class="top">
                            <input type="checkbox" id="title" value={item.value}/>
                            <label for="title">{item.title}</label>
                        </div>
                        {#each item.subTitle as subItem}
                        <div class="subMenu">
                            <div class="item">
                                <input type="checkbox" id="title" value={subItem.value} />
                                <label for="title">{subItem.name}</label>
                            </div>
                         
                        </div>
                        {/each}
                        
                    </div>
                    {/each}
                   
                </div>
            </div>
        </div>
    </div>
</section>

<style lang="scss">
    @import "src/lib/scss/style.scss";
    .permission__top {
        color: #444748;
        display: grid;
        grid-template-columns: 1fr 3fr;
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
                padding: 15px 15px;
                color: #444748;
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
            }
        }
    }
  
    .content {
        display: flex;
        color: #444748;
       padding-top: 10px;
        .checked-box{
            padding-right: 50px;
            .top {
                font-size: 14px;
                padding: 10px 0;

            }
            .subMenu {
                padding-left: 15px;
                font-size: 14px;
                
                .item{
                    padding: 6px 0;
                }
            }
        }
    }
</style>
