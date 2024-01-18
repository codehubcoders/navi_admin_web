<script>
    import RowBar from "./RowBar.svelte";
    import LocalCard from "./../globalComponents/LocalCard.svelte";
    import AlarmCard from "./../globalComponents/AlarmCard.svelte";
    import WarningSign from "../../assets/icons/01.svg";
    import Ambulance from "../../assets/icons/02.svg";
    import Fire from "../../assets/icons/03.svg";
    import CallAmbulance from "../../assets/icons/04.svg";
    import CicleProgress from "../globalComponents/CicleProgress.svelte";

    let topBox = [
        { number: 23, name: "주의", color: "#FFD600" },
        { number: 12, name: "경고", color: "#FF9933" },
        { number: 3, name: "위험", color: "#F5365C" },
    ];
    let cardTitle = [
        { title: "생활반응 감지", icon: "uiw:more" },
        { title: "응급신고 상황", icon: "uiw:more" },
        { title: "제품 현황", icon: "uiw:more" },
        { title: "이용률 현황", icon: "uiw:more" },
        { title: "복약순응도", icon: "uiw:more" },
        { title: "지역현황" },
    ];
    let alarmList02 = [
        {
            title: "가나다 어르신이 화재신고를 하였습니다.",
            date: "2023-12-12 09:00",
            alarmText: "화재신고",
            alarmColor: "#F5365C",
        },
        {
            title: "가나다 어르신이 응급신고를 하였습니다.",
            date: "2023-12-12 09:00",
            alarmText: "응급신고",
            alarmColor: "#0097C2",
        },
        {
            title: "가나다 어르신이 기타신고를 하였습니다.",
            date: "2023-12-12 09:00",
            alarmText: "기타신고",
            alarmColor: "#FFD600",
        },
    ];
    let alarmList01 = [
        {
            title: "홍길동 어르신 미복용 연속 2회",
            date: "2023-12-12 09:00",
            alarmText: "경고",
            alarmColor: "#FFD600",
        },
        {
            title: "홍길동 어르신 24시간 내에 복약 반응이 없음",
            date: "2023-12-12 09:00",
            alarmText: "위험",
            alarmColor: "#F5365C",
        },
        {
            title: "홍길동 어르신 24시간 내에 복약 반응이 없음",
            date: "2023-12-12 09:00",
            alarmText: "위험",
            alarmColor: "#F5365C",
        },
        {
            title: "홍길동 어르신 미복용 연속 2회",
            date: "2023-12-12 09:00",
            alarmText: "경고",
            alarmColor: "#FFD600",
        },
    ];

    let list05 = [
        {
            title: "3일 이상 연속 미복용",
            number: 3,
        },
        {
            title: "지연복용",
            number: 4,
        },
        {
            title: "지연복용",
            number: 3,
        },
    ];
</script>

<section class="monitoring">
    <div class="monitoring__top">
        {#each topBox as item, index}
            <div class="sub-box" style="background-color:{item.color}">
                <p class="name">{item.name}</p>
                <p class="num">{item.number}</p>
            </div>
        {/each}
    </div>
    <div class="monitoring__card">
        {#each cardTitle as item, index}
            <AlarmCard
                title={item.title}
                iconName={item.icon}
                classsName="body"
            >
                <!-- 생활반응 감지-->
                {#if index == 0}
                    <slot>
                     
                        <div class="alarm-padding">
                            {#each alarmList01 as item}
                                <div class="alarm-list">
                                    <div class="alarm-list__icon">
                                        {#if item.alarmText == "경고"}
                                            <WarningSign />
                                        {/if}
                                        {#if item.alarmText == "위험"}
                                            <Ambulance />
                                        {/if}
                                    </div>
                                    <div class="alarm-list__txt">
                                        <p class="title">{item.title}</p>
                                        <p class="date">{item.date}</p>
                                        <div
                                            class="message-box"
                                            style="background-color:{item.alarmColor}"
                                        >
                                            {item.alarmText}
                                        </div>
                                    </div>
                                </div>
                            {/each}
                        </div>
                    </slot>
                {/if}

                <!-- 응급신고 상항 -->
                {#if index == 1}
                    <slot>
                        <div class="alarm-padding">
                            {#each alarmList02 as item}
                                <div class="alarm-list">
                                    <div class="alarm-list__icon">
                                        {#if item.alarmText == "화재신고"}
                                            <Fire />
                                        {/if}
                                        {#if item.alarmText == "응급신고"}
                                            <CallAmbulance />
                                        {/if}
                                        {#if item.alarmText == "기타신고"}
                                            <WarningSign />
                                        {/if}
                                    </div>
                                    <div class="alarm-list__txt">
                                        <p class="title">{item.title}</p>
                                        <p class="date">{item.date}</p>
                                        <div
                                            class="message-box"
                                            style="background-color:{item.alarmColor}"
                                        >
                                            {item.alarmText}
                                        </div>
                                    </div>
                                </div>
                            {/each}
                        </div>
                    </slot>
                {/if}
                <!-- 제품현황 -->
                {#if index == 2}
                    <slot>
                        <div class="list-padding">
                            <div class="chart-card">
                                <CicleProgress
                                    percentage="72"
                                    sub="대"
                                    title="스텐다드"
                                    titleNum="123"
                                />
                                <CicleProgress
                                    percentage="72"
                                    sub="대"
                                    title="플러스"
                                    titleNum="120"
                                />
                            </div>
                        </div>
                    </slot>
                {/if}
                <!-- 이용률 현황 -->
                {#if index == 3}
                    <slot>
                        <div class="list-padding">
                            <div class="chart-card">
                                <CicleProgress
                                    percentage="23"
                                    sub="%"
                                    title="실시간 이용율"
                                />
                                <RowBar />
                            </div>
                        </div>
                    </slot>
                {/if}

                <!-- 복약순응도 -->
                {#if index == 4}
                    <slot>
                        <div class="list-padding">
                            <div class="chart-card">
                                <CicleProgress
                                    percentage="23"
                                    sub="%"
                                    title="실시간 이용율"
                                />
                                <div class="list">
                                    {#each list05 as item}
                                        <div class="box-list">
                                            <div class="title">
                                                <p class="top">
                                                  {item.title}
                                                </p>
                                                <p class="bottom">{item.number}명</p>
                                            </div>
                                            <button class="btn-gray"
                                                >상세보기</button
                                            >
                                        </div>
                                    {/each}
                                </div>
                            </div>
                        </div>
                    </slot>
                {/if}

                <!-- 지역현황 -->
                {#if index == 5}
                    <slot>
                        <div class="list-padding">
                            <LocalCard />
                        </div>
                    </slot>
                {/if}
            </AlarmCard>
        {/each}
    </div>
</section>

<style lang="scss">
    .monitoring {
        margin-top: 10px;
        &__top {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            background-color: white;
            border-radius: 10px;
            box-shadow: 0 5px 20px rgba(173, 181, 217, 0.2);
            padding: 20px 30px;
            gap: 1rem;
            @media (max-width: 535px) {
                grid-template-columns: 1fr;
            }
            .sub-box {
                height: 90px;
                border-radius: 12px;
                padding: 15px 20px 5px;
                color: white;
                .name {
                    font-size: 23px;
                    color: white;
                    font-weight: 600;
                }
                .num {
                    font-size: 40px;
                    color: white;
                    font-weight: 600;
                    text-align: end;
                }
            }
        }
        &__card {
            margin-top: 30px;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
            @media (max-width: 960px) {
      grid-template-columns: 1fr;
    }
        }
    }

    .alarm-list {
        display: flex;
        align-items: center;
        gap: 15px;
        padding-bottom: 20px;
        &__icon {
            width: 32px;
            height: 32px;
            border-radius: 100%;
            background-color: white;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        &__txt {
            .title {
                font-size: 13px;
                font-weight: 500;
            }
            .date {
                font-size: 12px;
                color: #8E9192;
                padding: 4px 0;
            }
            .message-box {
                border-radius: 3px;
                color: white;
                font-size: 10px;
                display: inline-block;
                padding: 4px 8px;
            }
        }
    }

    .alarm-padding {
        padding: 30px;
    }
    .list-padding {
        padding: 15px;
    }

    .chart-card {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 15px;
        @media (max-width: 535px) {
                grid-template-columns: 1fr;
            }
    }
    .list {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .box-list {
            background-color: white;
            height: 30%;
            width: 100%;
            border-radius: 8px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            @media (max-width: 960px) {
    padding: 10px 0;
    margin-bottom: 8px;
    }
            .title {
                .top {
                    font-size: 12px;
                    font-weight: 500;
                    padding-left: 15px;
                }
                .bottom {
                    color: #5E72E4;
                    font-size: 18px;
                    font-weight: 500;
                    padding-left: 15px;
                    padding-top: 3px;
                }
            }
            .btn-gray {
                background-color: #EFF1F2;
                border-radius: 4px;
                padding: 8px 10px;
                font-size: 12px;
                height: fit-content;
                margin-right: 15px;
            }
        }
    }
</style>
