<script>
    import { onMount } from "svelte";
	let getHour="";
    let getMinute=""
    let getAPm="";
    onMount(() => {
       
        //시간
        const scrollHour = document.querySelector(".hour");
        const scrollMinute = document.querySelector(".minute");
        const scrollAmpm = document.querySelector(".ampm");
        // const selectedName = document.querySelector(".selected-name");

        scrollHour.addEventListener("scroll", () => {
            const scrollItems = Array.from(
                document.querySelectorAll(".scroll-item")
            );
            const itemHeight = scrollItems[0].offsetHeight;
            const selectedIndex = Math.round(
                scrollHour.scrollTop / itemHeight
            );
  
            // selectedName.textContent = scrollItems[selectedIndex].textContent;
            
            getHour =  scrollItems[selectedIndex].textContent;
           
        });
        scrollMinute.addEventListener("scroll", () => {
            const scrollItems = Array.from(
                document.querySelectorAll(".scroll-item")
            );
            const itemHeight = scrollItems[0].offsetHeight;
            const selectedIndex = Math.round(
                scrollMinute.scrollTop / itemHeight
            );
  
            // selectedName.textContent = scrollItems[selectedIndex].textContent;
            
            getMinute =  scrollItems[selectedIndex].textContent;
           
        });
        scrollAmpm.addEventListener("scroll", () => {
            const scrollItems = Array.from(
                document.querySelectorAll(".scroll-item")
            );
            const itemHeight = scrollItems[0].offsetHeight;
            const selectedIndex = Math.round(
                scrollAmpm.scrollTop / itemHeight
            );
  
            // selectedName.textContent = scrollItems[selectedIndex].textContent;
            
            getAPm =  scrollItems[selectedIndex].textContent;
           
        });
        
    });

    let amPm = ["","AM", "PM",""];
</script>

<div class="scroll-picder">
    <!-- {getHour} {getMinute} {getAPm} -->
    <div class="hour">
        {#each Array(12) as _, i}
            <div class="scroll-item">{1+i}</div>
        {/each}
    </div>
    <div class="minute">
        {#each Array(60) as _, i}
            <div class="scroll-item">{i}</div>
        {/each}
    </div>

    <div class="ampm">
        {#each amPm as item}
            <div class="scroll-item">{item}</div>
        {/each}
    </div>
</div>

<div class="selected-name" />

<style lang="scss">
    ::-webkit-scrollbar {
        display: none;
    }
    .scroll-picder {
        display: flex;
        gap: 20px;
    }
    .hour, .minute, .ampm {
        overflow-y: scroll;
        
        scroll-snap-type: x mandatory;
        height: 65px;
        width: 50px;
    }

    .scroll-item {
        scroll-snap-align: center;
        height: 30px;
        font-size: 14px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-top: 1px solid rgb(171, 205, 251);
    }

    .selected-name {
        margin-top: 20px;
        font-size: 24px;
        text-align: center;
    }
</style>
