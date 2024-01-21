<!-- <script>


export let options;
export let options1;
export let options2;
  export let legend;
  export let userSelected = options[0].value;

</script>

<div class="radio-group">
    <div class="radio">
   
        {#each options as { value, label }}
        <input
          type="radio"
          id={label}
          bind:group={userSelected}
          value={value} />

        <label class="fw-500" for={label}> {label} </label>
      {/each}
     

    </div>
</div>

<style lang="scss">
    label {
        font-size: 18px;
        line-height: 2rem;
    }

    .radio-group {

        .radio {
            align-items: center;
            display: flex;
            flex-wrap: wrap;
            label {
                font-size: 13px;
                line-height: 2rem;
                // padding: 0.2em 0.4em;
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
    }
</style> -->
