<script>
	import AlarmModal from './modal/AlarmModal.svelte';
    // import EditMenuMember from "./EditMenuMember.svelte";
    import CollapsibleSection from "./Expand.svelte";
    import Icon from "@iconify/svelte";
    let expanded = true;
    let localList = [
        {
            name: "삼성동",
            num: 10,
            subLocal: [
                { name: "가길동", status: "yellow" },
                { name: "가길동", status: "" },
                { name: "가길동", status: "" },
                { name: "가길동", status: "red" },
                { name: "가길동", status: "" },
                { name: "가길동", status: "" },
                { name: "가길동", status: "orange" },
            ],
        },
        {
            name: "신사동",
            num: 15,
            subLocal: [
                { name: "나길동", status: "" },
                { name: "나길동", status: "" },
                { name: "나길동", status: "" },
                { name: "나길동", status: "" },
                { name: "나길동", status: "" },
                { name: "나길동", status: "" },
                { name: "나길동", status: "" },
            ],
        },
    ];
    let body1 = [
        {
            left: "이름",
            right: "이름",
        },
        {
            left: "성별",
            right: "성별",
        },
        {
            left: "이름",
            right: "이름",
        },
        {
            left: "나이",
            right: "나이",
        },
        {
            left: "주소",
            right: "주소",
        },
        {
            left: "충전",
            right: "충전",
        },
        {
            left: "전화번호",
            right: "전화번호",
        },
        {
            left: "긴급전화번호",
            right: "긴급전화번호",
        },
        {
            left: "혈액형",
            right: "혈액형",
        },
        {
            left: "특이사항",
            right: "특이사항",
        },
    ];
    let body2 = [
        {
            date: "2023-12-12 09:00",
            content: "BMS 미연결",
        },
        {
            date: "2023-12-12 09:00",
            content: "약상자가 열렸습니다.",
        },
        {
            date: "2023-12-12",
            content: "약을 미복용 하셨습니다.",
        },
        {
            date: "2023-12-12",
            content: "화재신고 발생",
        },
        {
            date: "2023-12-12",
            content: "화재신고 발생",
        },
    ];
    let showAlarm = false;
    const handleAlarmClick = () => {
        showAlarm = !showAlarm;
  };
    let body3 = [
        {
            name: "홍길동",
            relationship: "자녀",
            phone: "010-1234-5678",
        },
        {
            name: "홍길동",
            relationship: "생활지원사",
            phone: "010-1234-5678",
        },
        {
            name: "홍길동",
            relationship: "자녀",
            phone: "010-1234-5678",
        },
        {
            name: "홍길동",
            relationship: "손녀",
            phone: "010-1234-5678",
        },
    ];
    import WarlkIcon from "../../../../assets/icons/walk.svg";
    import DistanceIcon from "../../../../assets/icons/distance.svg";
    import HartIcon from "../../../../assets/icons/hart.svg";
    import BloodIcon from "../../../../assets/icons/blood.svg";
    import O2kIcon from "../../../../assets/icons/o2.svg";
import HealthDetailModal from './modal/HealthDetailModal.svelte';
import MedicationlModal from './modal/MedicationlModal.svelte';

import AlarmCard from '../../../globalComponents/AlarmCard.svelte';
     let showHealth = false;
    const handleHealthClick = () => {
        showHealth = !showHealth;
    };

    let body5 = [
        {
            title: "걸음",
            healthData: "8000",
            unit: "걸음",
            svg: WarlkIcon,
        },
        {
            title: "거리",
            healthData: "3.5",
            unit: "km",
            svg: DistanceIcon,
        },
        {
            title: "맥박",
            healthData: "72",
            unit: "BPM",
            svg: HartIcon,
        },
        {
            title: "혈압",
            healthData: "76/128",
            unit: "mm/hg",
            svg: BloodIcon,
        },
        {
            title: "혈중산소",
            healthData: "87",
            unit: "SPo2",
            svg: O2kIcon,
        },
    ];


     let showMedication= false;
    const handleMedicationClick = () => {
        showMedication = !showMedication;
    };
    let body4 = [
        {
            week: "일",
            day: [
                {
                    morning: "",
                    lunch: "복용",
                    evning: "",
                },
            ],
        },
        {
            week: "월",
            day: [
                {
                    morning: "",
                    lunch: "복용",
                    evning: "",
                },
            ],
        },
        {
            week: "화",
            day: [
                {
                    morning: "",
                    lunch: "복용",
                    evning: "",
                },
            ],
        },

        {
            week: "수",
            day: [
                {
                    morning: "",
                    lunch: "미복용",
                    evning: "",
                },
            ],
        },
        {
            week: "목",
            day: [
                {
                    morning: "",
                    lunch: "복용",
                    evning: "",
                },
            ],
        },
        {
            week: "금",
            day: [
                {
                    morning: "",
                    lunch: "복용",
                    evning: "관심",
                },
            ],
        },
        {
            week: "토",
            day: [
                {
                    morning: "",
                    lunch: "미복용",
                    evning: "",
                },
            ],
        },
    ];
 
    
 
</script>

<section class="member-detail">
    <div class="local-side">
        <a href="/member"><button class="btn-primary mb-15">목록으로</button></a
        >
        <div class="side-menu">
            {#each localList as item}
                <CollapsibleSection
                    headerText={item.name + "(" + item.num + ")"}
                    {expanded}
                >
                    {#each item.subLocal as subItem}
                        <div class="sub-locla {subItem.status}">
                            {subItem.name}
                        </div>
                    {/each}
                </CollapsibleSection>
            {/each}
        </div>
    </div>
    <div class="info-box">
        <div class="top">
            <!-- 카드1 -->
            <div class="box">
                <div class="title">
                    상세정보
                    <button class="btn-detail-gray">수정하기</button>
                </div>
                <div class="body1">
                    {#each body1 as item}
                        <div class="row">
                            <div class="right">
                                {item.left}
                            </div>
                            <div class="left">
                                {item.right}
                            </div>
                        </div>
                    {/each}

                    <div class="row">
                        <div class="right">제품코드</div>
                        <div class="left">
                            2145692305
                            <button class="btn-white">연동해제</button>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 카드2 -->
            <AlarmCard title="최근알림">
                <div slot="topicon">
                    <button class="btn-detail-gray" on:click={handleAlarmClick}>전체보기</button>
                    <AlarmModal {showAlarm} on:click={handleAlarmClick} />
                </div>
                <div class="body2">
                    {#each body2 as item, index}
                        <div class="row">
                            <div class="avatar">
                                {index + 1}
                            </div>
                            <div class="text">
                                <div class="top">{item.date}</div>
                                <div class="">{item.content}</div>
                            </div>
                        </div>
                    {/each}
                </div>
            </AlarmCard>
            <!-- 카드3-->
            <div class="box">
                <div class="title">보호자</div>
                <div class="body3">
                    {#each body3 as item}
                        <div class="row py-8">
                            <div class="text">
                                {item.name}
                                <div class="bottom">{item.relationship}</div>
                            </div>
                            <div class="phone">{item.phone}</div>
                        </div>
                    {/each}
                </div>
            </div>
            <!-- 카드4-->
            <MedicationlModal {showMedication}  on:click={handleMedicationClick}/>
            <div class="box">
                <div class="title">
                    복약통계
                    <button on:click={handleMedicationClick}
                        ><Icon
                            icon="bx:chart"
                            width="20"
                            style="color: #5E72E4"
                        /></button
                    >
                </div>
                <div class="body4">
                    <div class="head">
                        <p>아침<span>설정없음</span></p>
                        <p>점심<span>12:00</span></p>
                        <p>저녁<span>19:00</span></p>
                    </div>
                    <div class="box-body4">
                        <div class="week">
                            <div class="day">
                                <p class="mb-5">&nbsp;</p>
                                <div class="day-h"><p>아침</p></div>
                                <div class="day-h"><p>점심</p></div>
                                <div class="day-h"><p>저녁</p></div>
                            </div>
                            {#each body4 as item}
                                <div class="day">
                                    <p
                                        class="mb-5"
                                        style={item.week == "일"
                                            ? "color:#F5365C"
                                            : item.week == "토"
                                            ? "color:#3D23E1"
                                            : ""}
                                    >
                                        {item.week}
                                    </p>
                                    {#each item.day as subItem}
                                        <div
                                            class="color-box"
                                            style={subItem.morning == ""
                                                ? "background-color: #EBEBEB"
                                                : subItem.morning == "복용"
                                                ? "background-color: #2DCE89"
                                                : subItem.morning == "관심"
                                                ? "background-color: #FF9933"
                                                : subItem.morning == "미복용"
                                                ? "background-color: #F5365C"
                                                : ""}
                                        />
                                        <div
                                            class="color-box"
                                            style={subItem.lunch == ""
                                                ? "background-color: #EBEBEB"
                                                : subItem.lunch == "복용"
                                                ? "background-color: #2DCE89"
                                                : subItem.lunch == "관심"
                                                ? "background-color: #FF9933"
                                                : subItem.lunch == "미복용"
                                                ? "background-color: #F5365C"
                                                : ""}
                                        />
                                        <div
                                            class="color-box"
                                            style={subItem.evning == ""
                                                ? "background-color: #EBEBEB"
                                                : subItem.evning == "복용"
                                                ? "background-color: #2DCE89"
                                                : subItem.evning == "관심"
                                                ? "background-color: #FF9933"
                                                : subItem.evning == "미복용"
                                                ? "background-color: #F5365C"
                                                : ""}
                                        />
                                    {/each}
                                </div>
                            {/each}
                        </div>
                    </div>
                </div>
            </div>
            <!-- 카드5-->
            <HealthDetailModal {showHealth} on:click={handleHealthClick} />
            <div class="box" on:click={handleHealthClick}>
            
                <div class="title">
                    건강
                    <button class="btn-text"
                        ><Icon
                            icon="radix-icons:update"
                            width="12px"
                            style="color: #B3A9AA"
                        />업데이트 된 시간 09:00</button
                    >
                </div>
                <div class="body5">
                    {#each body5 as item, int}
                        <div
                            class="row-data"
                            style={int == 4 ? "border-bottom : none" : ""}
                        >
                            <div class="left">
                                <span class="icon"
                                    ><svelte:component this={item.svg} /></span
                                >
                                {item.title}
                            </div>
                            <div class="right">
                                {item.healthData} <span>{item.unit}</span>
                            </div>
                        </div>
                    {/each}
                </div>
            </div>
            <!-- 카드6-->
            <AlarmCard title="메모">
                <div slot="topicon">
                   <button><Icon icon="mynaui:send" width="18" height="18"  style="color: #1b1b1b" /></button> 
                   
                </div>
                <div class="body6">
                    <div class="inner-card">
                        <div class="head">2023.12.13 16:12 <button class="btn-detail-gray">상세내역</button></div>
                        <div class="body">
                         
                            <div class="text">
                                기기 사용시 알람으로 연락주심
                            </div>
                        </div>
                    </div>
                </div>
            </AlarmCard>
         
    </div>
    <div class="py-30"></div>
</section>

<style lang="scss">
    @import "src/lib/scss/style.scss";

    .member-detail {
        position: relative;
        padding-top: 50px;
        .local-side {
            width: 180px;
            background-color: #fff;
            color: #8E9192;
            .btn-primary {
                width: 180px;
                height: 40px;
                font-size: 16px;
            }
            .sub-locla {
                // background-color: #fff;
                margin: 0 auto;
                display: flex;
                justify-content: center;
                align-items: center;

                height: 40px;
                font-weight: 300;
                font-size: 15px;
                border-bottom: 1px solid #E1E3E4;
            }
        }
        .info-box {
            position: absolute;
            left: 200px;
            top: 55px;
            width: 860px;
            .top {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 30px;
            }
        }
    }
    .box {
        background-color: white;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 5px 10px rgba(173, 181, 217, 0.4);

        .title {
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 18px;
            font-weight: 500;
        }

        .body1 {
            margin-top: 10px;
            .row {
                display: flex;
                font-weight: 300;
                padding: 7px 0;

                .right {
                    font-size: 16px;
                    width: 120px;
                }
                .left {
                    width: 62%;
                    display: flex;
                    justify-content: space-between;
                    color: #A9ABAD;
                    .btn-white {
                        font-size: 10px;
                        border: 1px solid #C5C7C8;
                        border-radius: 4px;
                        padding: 4px 5px;
                        box-shadow: 0 1px 8px rgba(173, 181, 217, 0.4);
                    }
                }
            }
        }
    }
    .yellow {
        background-color: #FFFF00;
    }
    .red {
        background-color: #F5365C;
        color: white;
    }
    .orange {
        background-color: #FF9933;
        color: white;
    }
    .my-30 {
        margin: 30px 0;
    }
    .btn-text {
        font-size: 10px;
        font-weight: 300;
        color: #B3A9AA;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 5px;
    }
    .body2 {
        padding: 15px;
        .row {
            display: flex;
            align-items: center;
            margin-bottom: 10px;
            .avatar {
                display: flex;
                justify-content: center;
                align-items: center;

                width: 48px;
                height: 48px;
                border-radius: 100%;
                background-color: #D9D9D9;
            }
            .text {
                margin: 0 20px;
                font-size: 16px;
                .top {
                    color: #8E9192;
                    font-size: 14px;
                    padding-bottom: 5px;
                }
            }
        }
    }
    .body3 {
        padding: 15px 0;
        .row {
            display: flex;
            align-items: flex-end;
            justify-content: space-between;
            margin-bottom: 10px;
            border-bottom: 1px solid #E1E3E4;
            // padding: 8px 0;
            .text {
                font-size: 12px;
                font-weight: 500;
                .bottom {
                    padding-top: 8px;
                    color: #444748;
                    font-size: 12px;
                    font-weight: 400;
                }
            }
            .phone {
                color: #444748;
                font-size: 12px;
            }
        }
    }
    .body4 {
        .head {
            display: flex;
            gap: 20px;
            margin-top: 20px;
            p {
                color: #8E9192;
                font-size: 14px;

                span {
                    color: #444748;
                    font-weight: 500;
                    padding-left: 5px;
                }
            }
        }
        .box-body4 {
            text-align: center;
            margin-top: 30px;
            .week {
                font-size: 15px;
                font-weight: 500;
                display: grid;
                grid-template-columns: 0.8fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
                gap: 0.8px;
                margin-top: 10px;
                .day {
                    .color-box {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        height: 48px;
                    }
                    .day-h {
                        display: flex;
                        align-items: center;
                        justify-content: flex-start;
                        height: 48px;
                    }
                }
            }
        }
    }
    .body5 {
        margin-top: 10px;
        .row-data {
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid #d9d9d9;
            padding: 12px 0;

            .left {
                display: flex;
                align-items: center;
                font-size: 14px;
                font-weight: 300;
                span {
                    margin-right: 10px;
                }
            }
            .right {
                font-size: 20px;
                font-weight: 600;
                span {
                    font-size: 14px;
                    color: #AFAFAF;
                    font-weight: 300;
                    margin-left: 5px;
                }
            }
        }
    }
    .body6 {
        max-height: 230px;
        padding: 20px;
        .inner-card {
            padding-bottom: 10px;
            .head {
                display: flex;
                justify-content: space-between;
                align-items: center;
                background-color: white;
                padding: 20px;
                font-size: 14px;
                span {
                    font-size: 12px;
                    color: #1A1E2C;
                    font-weight: 300;
                }
            }
            .body {
                padding: 20px;
                background-color: #F8FAFB;
                .top {
                    color: #757779;
                    font-size: 11px;
                }
                .text {
                    margin-top: 10px;
                    color: #191C1D;
                    font-size: 12px;
                    line-height: 1.2em;
                }
            }
         
    
        }
    }

    
 
    .py-30 {
        padding: 30px 0;
    }
    .py-8 {
        padding: 8px 0;
    }

</style>
