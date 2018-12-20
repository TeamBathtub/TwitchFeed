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
</style>
