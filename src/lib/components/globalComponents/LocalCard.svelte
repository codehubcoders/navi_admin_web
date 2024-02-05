<script>
       import CollapsibleSection from "../customComponents/expand/Expand.svelte"; // your script goes here
</script>

<div class="contents">
    <div class="state-detail">
        <CollapsibleSection headerText={"서울(52)"} button>
            <div class="state-box">
                <p class="txt">OO동(12)</p>
                <p class="txt">2</p>
            </div>
            <div class="state-box">
                <p class="txt">OO동(12)</p>
                <p class="txt">2</p>
            </div>
        </CollapsibleSection>
    </div>

    <div class="state-detail">
        <CollapsibleSection headerText={"경기도"} headerTextRight={10}>
            <div class="state-box">
                <p class="txt">OO동(12)</p>
                <p class="txt">2</p>
            </div>
            <div class="state-box">
                <p class="txt">OO동(12)</p>
                <p class="txt">2</p>
            </div>
        </CollapsibleSection>
    </div>

    <div class="state-detail">
        <CollapsibleSection headerText={"충청남도"} headerTextRight={4}>
            <div class="state-box">
                <p class="txt">OO동(12)</p>
                <p class="txt">2</p>
            </div>
            <div class="state-box">
                <p class="txt">OO동(12)</p>
                <p class="txt">2</p>
            </div>
        </CollapsibleSection>
    </div>
    </div>

<style lang="scss">
          @import 'src/lib/scss/style.scss';
     .state-detail {
        // padding: 10px 10px 5px;
        padding-bottom: 10px;
        .state-box {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background-color: #F8FAFB;
            border-radius: 8px;
            padding: 10px 20px;

            .txt {
                font-weight: 500;
                font-size: 12px;
                color: #8E9192;
            }
        }
    }
</style>