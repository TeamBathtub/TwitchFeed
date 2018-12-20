<template>
  <li>
    <div class="container">
      <h2 class="info">{{streamer.display_name}}</h2>
      <img v-bind:src="streamer.profile_banner">
      <div class="info">
        <p><span>Game:</span></p>
          <div v-if="streamer.game">
              {{streamer.game}}
          </div>
          <div v-else>
            Not Currently Online
          </div>
        <p><span>Followers:</span><br/><br/>
          {{streamer.followers}}
        </p>
        <p><span>Views:</span><br/><br/>
          {{streamer.views}}
        </p>
        <p><span><a v-bind:href="`${streamer.url}`" target="_blank">
          Stream Url</a></span>
        </p>
        <button @click="handleSubmit">Add to Favorites</button>
      </div>
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
  position: relative;
  align-items: center;
  border: 2px solid navy;
  box-shadow: 4px 4px 4px black;
  background: black;
  list-style-type: none;
}
span {
  font-weight: bold;
}
img {
  max-height: 300px;
  width: 100%;
  position: absolute;
  bottom: 10px;
  left: 0;
  right: 0;
  margin: auto;
  opacity: 0.5;
  object-fit: cover;
}
.info {
  position: relative;
  z-index: 1;
  color: white;
  text-align: center;
}
a {
  background: white;
  color: purple;
}
</style>
