<template>
  <li>
    <h2>{{streamer.login}}</h2>
    <div class="container">
      <div class="info">
        <!-- <p><span>Description:</span><br/><br/>
          {{streamer.description}}
        </p> -->
        <p><span>View Count:</span><br/><br/>
          {{streamer.view_count}}
        </p>
        <button @click="handleAdd">Add to Favorites</button>
      </div>
      <img v-bind:src="streamer.profile_image_url">
    </div>
  </li>
</template>

<script>
export default {
  props: {
    streamer: Object
  }
};
</script>

<style scoped>
li {
  list-style-type: none;
  text-align: center;
}
.container {
  display: flex;
  justify-content: center;
}
.info {
   padding-right: 10px;
}
span {
  font-weight: bold;
}
img {
  height: 130px;
}
</style>
