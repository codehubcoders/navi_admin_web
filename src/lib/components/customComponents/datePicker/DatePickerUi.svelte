<script>
    import Icon from "@iconify/svelte";
    import DatePicker from "./DatePicker.svelte";

    const locale = {
        ko: {
            days: "일|월|화|수|목|금|토".split("|"),
            months: "1월|2월|3월|4월|5월|6월|7월|8월|9월|10월|11월|12월".split(
                "|"
            ),
            start: 0,
        },
    };

    let culture = "ko";

    let startDate = "";

    let showDatePicker = false;
    function handleDatePickerOpen() {
        showDatePicker = !showDatePicker;
        document.body.addEventListener("click", handleDatePickerClose);
      
    }
    function handleDatePickerClose() {
        showDatePicker = false;
        document.body.removeEventListener("click", handleDatePickerClose);
    }
    function datePickerOnOff(){
        showDatePicker = !showDatePicker;
    }
    export let width;
</script>

<div class="date-picker">
    <button class="date-picker__btn" style="width:{width}" on:click|stopPropagation={handleDatePickerOpen} >
        {#if startDate == ""}
            <Icon icon="uiw:date" color="#1b1b1b" width="15" />
        {:else}
            {startDate}
        {/if}
    </button>
    {#if showDatePicker}
    <div class="date-picker__body" on:click|stopPropagation={handleDatePickerClose}>
        <DatePicker bind:value={startDate} {...locale[culture]}  />
    </div>
    {/if}
</div>

<style lang="scss">
          @import 'src/lib/scss/style.scss';
    .date-picker {
        &__btn {
            // min-width: 120px;
            height: 30px;
            background-color: #F5F5F5;
            border-radius: 4px;
            font-size: 13px;
            position: relative;
        }
        &__body {
            position: absolute;
            background-color: white;
            padding: 10px;
            border-radius: 8px;
            box-shadow: 0 5px 20px rgba(173, 181, 217, 0.2);
        }
    }
</style>
