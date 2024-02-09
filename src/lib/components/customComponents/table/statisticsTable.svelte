<script>
    const rowData=[
        {
            date: '12/01',
            result: '2528'
        },
        {
            date: '12/01',
            result: '2528'
        },
        {
            date: '12/02',
            result: '2528'
        },
        {
            date: '12/03',
            result: '2528'
        },
        {
            date: '12/04',
            result: '2528'
        },
        {
            date: '12/05',
            result: '2528'
        },
        {
            date: '12/06',
            result: '2528'
        },
        {
            date: '12/07',
            result: '2528'
        },
        {
            date: '12/08',
            result: '2528'
        },
        {
            date: '12/09',
            result: '2528'
        },
        {
            date: '12/10',
            result: '2528'
        },
    ]
</script>

<table class="table_border">
    <tr>
        {#each rowData as item, idx}
        <td>{item.date}</td>
        {/each}
        
    </tr>
    <tr>
        {#each rowData as item, idx}
        <td>{item.result}</td>
        {/each}
    </tr>
</table>

<style lang="scss">
          @import 'src/lib/scss/style.scss';
          .box {
        background-color: white;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 5px 10px rgba(173, 181, 217, 0.4);}
    .table_border {
        width: 100%;
        border: 1px solid #A9ABAD;
        border-collapse: collapse;
        tr {
            
            border: 1px solid #A9ABAD;
            border-collapse: collapse;
        }
        td {
            padding: 8px 0px;
            font-size: 9px;
            color:#A9ABAD;
            text-align: center;
        }
    }
</style>
