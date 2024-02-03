<script>
    import ColumBox from "./../globalComponents/ColumBox.svelte";
    import CicleProgress from "./../globalComponents/CicleProgress.svelte";
    import AlarmCard from "./../globalComponents/AlarmCard.svelte";
    import SelectBox from "./../customComponents/selectbox/SelectBox.svelte";
    let localselected = "전체";
    function localRadio(event) {
        localselected = event.currentTarget.value;
    }

    let items = [
        { title: "서울", value: 1 },
        { title: "경기", value: 2 },
        { title: "대전", value: 3 },
    ];
    let items2 = [
        { title: "강남구", value: 1 },
        { title: "깅북구", value: 2 },
        { title: "구로구", value: 3 },
    ];

    let columnList = [
        { left: "미복용", right: 3, last: "명" },
        { left: "관심복용", right: 4, last: "명" },
        { left: "과다복용 의심", right: 3, last: "명" },
    ];
    let columnList2 = [
        { left: "실시간 이용률", right: 70, last: "%" },
        { left: "전원 off", right: 15, last: "명" },
        { left: "배터리  미연결", right: 24, last: "명" },
        { left: "모바일 앱 연동률(본인)", right: 24, last: "명" },
        { left: "모바일 앱 연동률(보호자)", right: 24, last: "명" },
    ];

    // let topBox = [
    //     { number: 23, name: "주의", color: "#FFD600" },
    //     { number: 12, name: "경고", color: "#FF9933" },
    //     { number: 3, name: "위험", color: "#F5365C" },
    // ];
    // import ReplayIcon from "../../assets/icons/replay_icon.svg";
</script>

<section class="top">
    <div class="top__search-box">
        <div class="title">지역</div>
        <div class="box">
            <div class="radio">
                <label style={localselected != "전체" ? "color:#757779" : ""}>
                    <input
                        checked={localselected === "전체"}
                        on:change={localRadio}
                        type="radio"
                        name="local"
                        value="전체"
                    /> <span>전체</span>
                </label>
                <label
                    style={localselected != "상세설정" ? "color:#757779" : ""}
                >
                    <input
                        checked={localselected === "상세설정"}
                        on:change={localRadio}
                        type="radio"
                        name="local"
                        value="상세설정"
                    /> <span>상세설정</span>
                </label>
            </div>
            {#if localselected == "상세설정"}
                <div class="detail">
                    <SelectBox {items} placeholder="대분류" />
                    <SelectBox {items2} placeholder="중분류" />
                    <SelectBox {items2} placeholder="주관기관" long />
                </div>
            {/if}
        </div>
    </div>
    <div class="top__top-box mt-20">
        <AlarmCard title="모니터링">
            <div class="content">
                <div class="num ">
                    <p class="t_left mb-20">주의</p>
                    <p class="t_right pt-20"><span>12</span>명</p>
                </div>
                <div class="num">
                    <p class="t_left mb-20">경고</p>
                    <p class="t_right pt-20"><span class="orange">1</span>명</p>
                </div>
                <div class="num">
                    <p class="t_left mb-20">위험</p>
                    <p class="t_right pt-20"><span class="red">3</span>명</p>
                </div>
            </div>
        </AlarmCard>
        <AlarmCard title="응급신고 현황">
            <div class="content">
                <div class="num ">
                    <p class="t_left mb-20">기타신고</p>
                    <p class="t_right pt-20"><span>12</span>명</p>
                </div>
                <div class="num">
                    <p class="t_left mb-20">환자발생</p>
                    <p class="t_right pt-20"><span class="orange">1</span>명</p>
                </div>
                <div class="num">
                    <p class="t_left mb-20">화재신고</p>
                    <p class="t_right pt-20"><span class="red">3</span>명</p>
                </div>
            </div>
        </AlarmCard>
    </div>

    <!-- <div class="top-box">
        <div class="left">
            {#each topBox as item, index}
                <div class="sub-box" style="background-color:{item.color}">
                    <p class="name">{item.name}</p>
                    <p class="num">{item.number}</p>
                </div>
            {/each}
        </div>
        <div class="card-main">
            <div class="header"><p class="txt">알림창</p></div>

            <div class="contents">
                {#each { length: 6 } as _, i}
                    <div class="item">
                        <div class="icon-avatar mr-10">아이콘</div>
                        <div>
                            <p class="con-txt">
                                가나다 어르신이 화재신고를 하였습니다.
                            </p>
                            <p class="date-txt">2023-12-12 09:00</p>
                        </div>
                    </div>
                {/each}
            </div>
        </div>
    </div> -->
</section>

<style lang="scss">
    @import "../../scss/style.scss";
    .top {
        padding-top: 5px;
        &__search-box {
            // height: 46px;
            width: 100%;
            display: grid;
            grid-template-columns: 1fr 4fr;

            @media (max-width: 800px) {
                grid-template-columns: 1fr;
            }
            .title {
                padding: 15px;
                display: flex;
                background-color: #EFF1F2;
                align-items: center;
                padding-left: 20px;
                font-size: 14px;
                color: #2E3132;
                @media (max-width: 800px) {
                    grid-template-columns: 1fr;
                }
            }
            .box {
       
                background-color: white;
                display: grid;
                grid-template-columns: 1fr 3fr;
                @media (max-width: 960px) {
                    grid-template-columns: 1fr;
                    padding: 15px;
                }
                .radio {
                    background-color: white;
                    flex-wrap: wrap;
                    display: flex;
                    align-items: center;
                    label {
                        font-size: 12px;
                        // line-height: 2rem;
                        padding: 0.2em 0.4em;
                    }
                    [type="radio"],
                    span {
                        vertical-align: middle;
                    }
                    [type="radio"] {
                        width: 1.25em;
                        height: 1.25em;
                    }
                }
                .detail {
                    display: flex;
                    flex-wrap: wrap;

                }
            }
        }
        &__top-box {
            display: grid;
            grid-template-columns: 1fr 1fr;
            @media (max-width: 1100px) {
                grid-template-columns: 1fr;
            }
            gap: 30px;
            .content {
                display: grid;
                grid-template-columns: 1fr 1fr 1fr;
                gap: 100px;
                padding: 20px 40px;
                @media (max-width: 450px) {
                grid-template-columns: 1fr;
            }
                .num {
                    p {
                        color: #8E9192;
                        font-size: 16px;
                        span {
                            padding-right: 10px;
                            color: #FFD600;
                            font-size: 40px;
                            font-weight: 700;
                        }
                    }
                    .orange {
                        color: #FF9933;
                    }
                    .red {
                        color: #F5365C;
                    }
                }
            }
        }

        // &-box {
        //     display: grid;
        //     grid-template-columns: 2fr 1fr;
        //     gap: 20px;
        //     @media (max-width: 820px) {
        //         grid-template-columns: 1fr;
        //     }
        //     .left {
        //         display: grid;
        //         grid-template-columns: 1fr 1fr 1fr;
        //         background-color: white;
        //         border-radius: 10px;
        //         box-shadow: 0 5px 20px rgba(173, 181, 217, 0.2);
        //         padding: 20px 30px;
        //         gap: 1rem;
        //         height: fit-content;
        //         @media (max-width: 535px) {
        //             grid-template-columns: 1fr;
        //         }
        //         .sub-box {
        //             height: 90px;
        //             border-radius: 12px;
        //             display: flex;
        //             justify-content: space-between;
        //             align-items: center;
        //             p {
        //                 color: white;
        //                 padding: 0px 30px;
        //             }
        //             .name {
        //                 font-size: 24px;
        //             }
        //             .num {
        //                 font-size: 30px;
        //                 font-weight: 600;
        //             }
        //         }
        //     }
        //     .card-main {
        //         .contents {
        //             height: 250px;
        //             overflow: auto;
        //             .item {
        //                 padding: 10px 8px;
        //                 display: flex;
        //                 align-items: center;
        //                 .con-txt {
        //                     font-size: 12px;
        //                     font-weight: 500;
        //                 }
        //                 .date-txt {
        //                     font-size: 10px;
        //                     color: #A9ABAD;
        //                 }
        //             }
        //         }
        //     }
        // }
    }
</style>
