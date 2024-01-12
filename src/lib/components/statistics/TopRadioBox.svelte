<script>
    let selectedAge = '';
	let ageRadio=[
        {value:'전체',total:123},
        {value:'60대',total:50},
        {value:'70대',total:43},
        {value:'80대',total:20},
        {value:'90대',total:10},
    ]
    
	function onChangeAge(event) {
		selectedAge = event.currentTarget.value;
	}

    let selectedGender = '';
	let genderRadio=[
        '전체',
        '남성',
        '여성',
    ]
    
	function onChangeGender(event) {
		selectedGender = event.currentTarget.value;
	}

</script>


    <button class="btn-primary  mt-5">Excel다운로드</button>
    <div class="radio-group">
       
        <div class="radio-box">
         <div class="radio-title">연령대별</div>
            <div class="radio">
            {#each ageRadio as item, index}
                <label>
                <input checked={selectedAge===item.value} 
                on:change={onChangeAge} 
                type="radio" 
                name="amount" 
                value={item.value} 
                />
                <span class="fw-500"> {item.value}({item.total})</span>
                </label>
            {/each}
        </div>
        </div>
        <div class="radio-box">
            <div class="radio-title">성별</div>
                <div class="radio">
                {#each genderRadio as item, index}
                    <label>
                    <input checked={selectedGender===item} 
                    on:change={onChangeGender} 
                    type="radio" 
                    name="amount" 
                    value={item} 
                    />
                    <span class="fw-500"> {item}</span>
                    </label>
            
                {/each}
                </div>
            </div>
    </div>



<style lang="scss">
    .btn-primary{
        margin: 0 0 0 auto;
    }
    label {
        font-size: 18px;
        line-height: 2rem;
        padding: 0.2em 0.4em;
    }

    .radio-group{
        padding-top:20px;
        .radio-box{
            display: grid;
            grid-template-columns: 2fr 10fr ;
            
            .radio-title{
                min-height:50px;
                display:flex;
                font-size: 13px;
                align-items:center;
                background-color:#EFF1F2;
                padding-left: 20px;
            }
            .radio{
                min-height:50px;
                background-color:white;
                align-items:center;
                display:flex;
                flex-wrap: wrap;
                padding-left: 20px;
                label {
                    font-size: 13px;
                    line-height: 2rem;
                    padding: 0.2em 0.4em;
                    }
                    [type="radio"], span {
                    vertical-align: middle;
                    }
                    [type="radio"] {
                    width: 1.25em;
                    height: 1.25em;
                }
            }
        }
         
    }
</style>