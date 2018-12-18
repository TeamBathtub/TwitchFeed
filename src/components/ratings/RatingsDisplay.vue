<template>
    <div id="randomStreamer">
      <h2>{{ randomName }}</h2>
      <img :src="randomThumbnail">
    </div>
</template>

<script>
export default {
  props: {
    randomName: String,
    randomThumbnail: String
  },
};
</script>

<style scoped>
#randomStreamer {
    display: flex;
    flex-flow: column;
    justify-content: center;
    width: 100px;
}
img {
    width: 100%;
    height: 100%;
}
</style>