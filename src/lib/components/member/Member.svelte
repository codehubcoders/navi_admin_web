<script>
	import SearchTableMember from './../customComponents/table/SearchTableMember.svelte';
import SearchTable from '../customComponents/table/searchTable.svelte';


	import MemberTop from './MemberTop.svelte';

  
</script>

<section class="memeber">
  <MemberTop />

  <SearchTable  />
  <SearchTableMember />
</section>

<style lang="scss">
    //  @import url('https://gthomas-appfolio.github.io/bootstrap-coastline/bootstrap-coastline.css');
    .btn-primary {
        margin: 0 0 0 auto;
    }
    label {
        font-size: 18px;
        line-height: 2rem;
        padding: 0.2em 0.4em;
    }

    .radio-group {
        padding-top: 10px;
        .radio-box {
            display: grid;
            grid-template-columns: 2fr 10fr;

            .radio-title {
                min-height: 50px;
                display: flex;
                font-size: 13px;
                align-items: center;
                background-color: #EFF1F2;
                padding-left: 20px;
            }
            .radio {
                min-height: 50px;
                background-color: white;
                align-items: center;
                display: flex;
                flex-wrap: wrap;
                padding-left: 20px;
                label {
                    font-size: 13px;
                    line-height: 2rem;
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
        }
    }
    .radio {
        .date {
            position: relative;
        }
        .date-bg {
            position: absolute;
            background: none;
        }
    }
</style>
