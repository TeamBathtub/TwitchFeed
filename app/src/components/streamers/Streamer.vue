<template>
  <li>
    <RouterLink class="list" v-bind:to="`/streamers/${streamer.id}`">
      {{streamer.name}}
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

https://api.twitch.tv/helix/streams

client-ID=
Content Type