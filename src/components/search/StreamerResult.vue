<template>
  <li>
    <h2>{{streamer.display_name}}</h2>
    <div class="container">
      <div class="info">
        <p><span>View Count:</span><br/><br/>
          {{streamer.view_count}}
        </p>
        <button @click="handleSubmit">Add to Favorites</button>
      </div>
      <img v-bind:src="streamer.profile_image_url">
    </div>
  </li>
</template>

<script>
export default {
  data() {
    return {
      favorite: false
    };
  },
  props: {
    streamer: Object,
    onAdd: Function
  },
  methods: {
    handleSubmit() {
      const streamer = this.streamer;
      streamer.user_name = streamer.login;
      this.onAdd(streamer);
    }
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
.message {
  z-index: 100;
  background: green;
  height: 500px;
}
</style>
