<template>
<section>
     <tbody>
       <tr>
         <td> {{stat.user_name}} </td>
         <td> {{stat.average}} </td>
       </tr>
     </tbody>
  </section>
</template>

<script> 
export default {
  props: {
    stat: Object
  }
};
</script>

<style>

</style>
