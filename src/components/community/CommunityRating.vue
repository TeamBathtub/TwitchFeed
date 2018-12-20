<template>
<section>
  <table align="center" v-if="stat">
     <thead>
       <tr>
         <th>Streamer</th>
         <th>Average</th>
       </tr>
     </thead>
     <tbody>
       <tr>
         <td> {{stat.user_name}} </td>
         <td> {{stat.average}} </td>
       </tr>
     </tbody>
    </table>
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
