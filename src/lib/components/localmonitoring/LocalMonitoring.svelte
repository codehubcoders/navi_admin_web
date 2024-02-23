<script>
	import Icons from './Icons.svelte';
	import Replaytxt from './../globalComponents/Replaytxt.svelte';
    import RowBar from "./RowBar.svelte";
    import AlarmCard from "./../globalComponents/AlarmCard.svelte";
    import WarningSign from "../../assets/icons/01.svg";
    import Ambulance from "../../assets/icons/02.svg";
    import Fire from "../../assets/icons/03.svg";
    import CallAmbulance from "../../assets/icons/04.svg";
    import CicleProgress from "../globalComponents/CicleProgress.svelte";
	let size = 48
    let topBox = [
        { number: 23, name: "주의", color: "#FFD600" },
        { number: 12, name: "경고", color: "#FF9933" },
        { number: 3, name: "위험", color: "#F5365C" },
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


</script>

<div class="top_info">
    전체사용인원 : 100명
    <Replaytxt />
    </div>
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
        <AlarmCard title="응급신고 현황" >
            <div class="alarm-padding">
                <div class="left">
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
                <div class="right">
                    <div class="w_card">
                         화재신고
                         <div class="b_item">
                            <Icons Fire {size}/>
                            <div class="mb-10"> 10</div>
                        </div>
                  
                    </div>
                    <div class="w_card">
                        <p>환자발생</p>
                        <div class="b_item">
                     
                            <Icons CallAmbulance {size}/>
               
                            <div class="mb-10"> 10</div>

                        </div>
                     
                    </div>
                    <div class="w_card">
                        <p>기타신고</p>
                           <div class="b_item">
                            <div class="mt-10"> <Icons WarningSign {size}/></div>
                           
                            10
                        </div>
                    
                    </div>
                </div>
            </div>
        </AlarmCard>
        <div class="chart-card">
            <AlarmCard title="보호자 연결 현황" iconName="uiw:mor" >
                <div class="list-padding">
                    <div class="chart-card">
                        <CicleProgress
                            percentage="72"
                            sub="대"
                            title="스텐다드"
                            titleNum="123"
                        />
                    </div>
                </div>
            </AlarmCard>
            <AlarmCard title="사용률 ON" iconName="uiw:mor" >
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
            </AlarmCard>
        </div>
        
       
    </div>
</section>

<style lang="scss">
          @import 'src/lib/scss/style.scss';
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
            // grid-template-columns: 1fr 1fr;
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
        height: 250px;
        display: grid;
        grid-template-columns: 1fr 1.5fr;
        gap: 20px;
        padding: 0px;
        background-color: #fff;
        .left{
            padding: 30px 30px 0 30px;
            background-color: #F5F5F5;
        }
        .right{
            background-color: #F5F5F5;
            font-size: 28px;
            font-weight: 500;
            display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 20px;
        padding: 20px;
        .w_card{
            padding:25px;
            background-color: #fff;
            height: 150px;
            border-radius: 8px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            .b_item{
                display: flex;
                justify-content: space-between;
                align-items: center;
                vertical-align: middle;
                font-size: 54px;
            }
        }
        }
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

    .top_info{
        padding-top: 2em;
        font-size: 16px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
</style>
