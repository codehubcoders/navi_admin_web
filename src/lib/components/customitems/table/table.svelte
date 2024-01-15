<script>
    import SvelteTable from "svelte-table";
// define some sample data...
const rows = [
  { id: 1, first_name: "Marilyn", last_name: "Monroe", pet: "dog" },
  { id: 2, first_name: "Abraham", last_name: "Lincoln", pet: "dog" },
 
  // etc...
];

// define column configs
const columns = [
  {
    key: "id",
    title: "ID",
    value: v => v.id,
    // sortable: true,
    // filterOptions: rows => {
    //   // generate groupings of 0-10, 10-20 etc...
    //   let nums = {};
    //   rows.forEach(row => {
    //     let num = Math.floor(row.id / 10);
    //     if (nums[num] === undefined)
    //       nums[num] = { name: `${num * 10} to ${(num + 1) * 10}`, value: num };
    //   });
    //   // fix order
    //   nums = Object.entries(nums)
    //     .sort()
    //     .reduce((o, [k, v]) => ((o[k] = v), o), {});
    //   return Object.values(nums);
    // },
    filterValue: v => Math.floor(v.id / 10),
    headerClass: "text-left",
  },
  {
    key: "first_name",
    title: "FIRST_NAME",
    value: v => v.first_name,
    // sortable: true,
    // filterOptions: rows => {
    //   // use first letter of first_name to generate filter
    //   let letrs = {};
    //   rows.forEach(row => {
    //     let letr = row.first_name.charAt(0);
    //     if (letrs[letr] === undefined)
    //       letrs[letr] = {
    //         name: `${letr.toUpperCase()}`,
    //         value: letr.toLowerCase(),
    //       };
    //   });
    //   // fix order
    //   letrs = Object.entries(letrs)
    //     .sort()
    //     .reduce((o, [k, v]) => ((o[k] = v), o), {});
    //   return Object.values(letrs);
    // },
    filterValue: v => v.first_name.charAt(0).toLowerCase(),
  },
  {
    key: "last_name",
    title: "LAST_NAME",
    value: v => v.last_name,
    // sortable: true,
    // filterOptions: rows => {
    //   // use first letter of last_name to generate filter
    //   let letrs = {};
    //   rows.forEach(row => {
    //     let letr = row.last_name.charAt(0);
    //     if (letrs[letr] === undefined)
    //       letrs[letr] = {
    //         name: `${letr.toUpperCase()}`,
    //         value: letr.toLowerCase(),
    //       };
    //   });
    //   // fix order
    //   letrs = Object.entries(letrs)
    //     .sort()
    //     .reduce((o, [k, v]) => ((o[k] = v), o), {});
    //   return Object.values(letrs);
    // },
    filterValue: v => v.last_name.charAt(0).toLowerCase(),
  },
  {
    key: "pet",
    title: "Pet",
    value: v => v.pet,
    // renderValue: v => v.pet.charAt(0).toUpperCase() + v.pet.substring(1), // capitalize
    // sortable: true,
    // filterOptions: ["bird", "cat", "dog"], // provide array
  },
];
  </script>
  
  <SvelteTable columns="{columns}" rows="{rows}"></SvelteTable>