<template>
       <tr>
         <td> {{stat.user_name}} </td>
         <td> {{stat.average}} </td>
       </tr>
</template>

<script> 
export default {
  props: {
    stat: Object
  }
};
</script>

<style>
tr {
  text-align: center;
}
table tr:nth-child(odd) td{
  background-color: rgb(241, 241, 241);
}
table tr:nth-child(even) td{
  background-color: rgb(227, 227, 227);
}
</style>
