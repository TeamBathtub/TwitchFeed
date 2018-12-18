<template>
  <li>
    <p>Name:
      {{streamer.login}}
    </p>
    <p>Description:
      {{streamer.description}}
    </p>
    <p>View Count:
      {{streamer.view_count}}
    </p>
    <img v-bind:src="streamer.profile_image_url">

  </li>
</template>

<script>
export default {
  props: {
    streamer: Object
  }
};
</script>
