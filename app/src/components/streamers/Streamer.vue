<template>
  <li>
    <RouterLink class="list" v-bind:to="`/streamers/${streamer.id}`">
      {{streamer.login}}
    </RouterLink>
  </li>
</template>

<script>
export default {
  props: {
    streamer: Object
  }
};
</script>
