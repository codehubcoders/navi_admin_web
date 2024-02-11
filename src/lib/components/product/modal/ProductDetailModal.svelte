<script>


    export let showDetail = false;
    const handleDetailClick = () => {
        showDetail = !showDetail;
    };
    let asHistoryList = [
        {
            history: "상자불량",
            state: "교환",
            date: "2023.02.10",
        },
        {
            history: "화면불량",
            state: "수리",
            date: "2023.02.10",
        },
        {
            history: "장비불량",
            state: "교환",
            date: "2023.02.10",
        },
    ];

    let value = "";
</script>

{#if showDetail}
    <div class="backdrop" on:click|self>
        <div class="modal">
            <div class="modal__header">
                <p>상세내역</p>
            </div>
            <div class="modal__body">
                <div class="long-box">
                    <div class="info-long">
                        <div class="title mb-10">계약번호</div>
                        <div class="row">
                            <input
                                type="text"
                                value="인천서구 | 렌탈 | 2023.12.02"
                            />
                            <input
                                type="text"
                                value="123456"
                                style="text-align: right;"
                            />
                        </div>
                    </div>
                </div>
                <div class="inputBox">
                    <div class="info">
                        <div class="title">IMEI</div>
                        <input type="text" value="2157858578547854" />
                    </div>

                    <div class="info">
                        <div class="title">MAC</div>
                        <input type="text" value="1458285" />
                    </div>
                    <div class="info">
                        <div class="title">USIM</div>
                        <input type="text" value="dd81684135" />
                    </div>
                    <div class="info">
                        <div class="title">Serial No.</div>
                        <input type="text" value="dd81684135" />
                    </div>
                    <div class="info">
                        <div class="title">S/W 버전</div>
                        <input type="text" value="Ver 2.1" />
                    </div>
                    <div class="info">
                        <div class="title">F/W</div>
                        <input type="text" value="2.0" />
                    </div>
                    <div class="title">지역</div>
                </div>

                <div class="local-box">
                    <input type="text" value="서울시" />
                    <input type="text" value="강남구" />
                    <input type="text" value="도산동" />
                </div>
                <div class="inputBox">
                    <div class="info">
                        <div class="title">제품상태</div>
                        <input type="text" value="등록" />
                    </div>
                    <div class="info">
                        <div class="title">연동회원</div>
                        <input type="text" value="홍길동" />
                    </div>
                    <div class="info">
                        <div class="title">제품등록일</div>
                        <input type="text" value="2024.01.05" />
                    </div>
                    <div class="info">
                        <div class="title">제품출고일</div>
                        <input type="text" value="2024.01.08" />
                    </div>
                    <div class="info">
                        <div class="title">최초설치일</div>
                        <input type="text" value="2024.01.09" />
                    </div>
                </div>
                <div class="as-history">
                    <div class="label">수리이력</div>
                 
                    <div class="content">
                        {#each asHistoryList as item}
                        <div class="list-items">
                            <p>{item.history} - {item.state}</p>
                            <p>{item.date}</p>
                        </div>
                 
                        {/each}
                    </div>
               
           
                </div>
               
       
            </div>
           

            <div class="modal__button">
                <button
                    class="btn-detail-gray"
                    style="background-color:#E1E3E4"
                    on:click={handleDetailClick}
                    ><div style="color:white">취소</div></button
                >

                <button class="btn-primary-small" on:click={handleDetailClick}
                    >수정</button
                >
            </div>
        </div>
    </div>
{/if}s

<style lang="scss">
    @import "src/lib/scss/style.scss";
    .backdrop {
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.8);
        z-index: 99;
        overflow-y: auto;
    }
    .modal {
        padding: 10px 20px;
        border-radius: 10px;
        max-width: 450px;
        margin: 5% auto;
        background-color: white;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        &__header {
            margin-top: 20px;
            margin-bottom: 20px;
            font-weight: 500;
            font-size: 18px;
        }

        &__body {
            text-align: left;
            font-size: 16px;
            font-weight: 400;
            color: #8E9192;
            line-height: 1.4em;
            margin-bottom: 20px;
            .local-box {
                padding: 0px 0;
                display: grid;
                grid-template-columns: 1fr 1fr 1fr;
                column-gap: 15px;

                input[type="text"] {
                    height: 33px;
                    vertical-align: middle;
                padding: 0 10px;
                font-size: 12px;
                border-radius: 4px;
                color: #444748;
                }
                input::placeholder {
                    font-size: 12px;
                    color: #5C5F60;
                    font-weight: 300;
                }
                .title {
                    // margin-top: 5px;
                    color: #2E3132;
                    font-weight: 500;
                    // width: 140px;
                    font-size: 12px;
                }
            }
            .inputBox {
                padding: 0px 0;
                display: grid;
                grid-template-columns: 1fr 1fr;
                column-gap: 15px;

                input[type="text"] {
                    height: 33px;
                    vertical-align: middle;
                padding: 0 10px;
                font-size: 12px;
                border-radius: 4px;
                color: #444748;
                }
                input::placeholder {
                    font-size: 12px;
                    color: #5C5F60;
                    font-weight: 300;
                }

                .title {
                    // margin-top: 5px;
                    color: #2E3132;
                    font-weight: 500;
                    // width: 140px;
                    font-size: 12px;
                }

                .row {
                    display: flex;
                    width: 100%;
                    justify-content: space-between;
                }
            }
            .btn-white {
                border: 1px solid #C5C7C8;
                padding: 5px 10px;
                font-size: 12px;
                border-radius: 4px;
                margin: 0 auto;
            }
        }

        &__button {
            margin-top: 20px;
            margin-bottom: 20px;
            display: flex;
            justify-content: space-between;
            // justify-content: end;
            .row {
                display: flex;
                gap: 10px;
            }
        }
    }

    .long-box {
        .info-long {
            color: #2E3132;
            font-weight: 500;
            font-size: 12px;
             margin: 10px 0;
            .row {
                height: 33px;
                border: 1px solid #E1E3E4;
                display: flex;
                border-radius: 4px;
                width: 100%;
                justify-content: space-between;
                // padding-bottom: 5px;
            }
            input[type="text"] {
                vertical-align: middle;
                padding: 0 10px;
                font-size: 12px;
                border-radius: 4px;
                border: none;
                color: #444748;
            }
            input::placeholder {
                font-size: 12px;
                color: #5C5F60;
                font-weight: 300;
            }
        }
    }

    .as-history {
      
      .label{
        color: #2E3132;
                    font-weight: 500;
                    // width: 140px;
                    font-size: 12px;
      }
      .content {
          display: inline-block;
          width: 100%;
          height: 80px;
          padding: 10px 0px;
          margin: 5px 0px;
          display: inline-block;
          border: 1px solid #E1E3E4;
          border-radius: 8px;
          box-sizing: border-box;
          overflow: auto;
            color: #444748;
          .list-items{
              padding: 6px 25px;
              display: flex;
          justify-content: space-between;
              p{
            
              font-size: 12px;
          }
          }
    
      }
  }
</style>
