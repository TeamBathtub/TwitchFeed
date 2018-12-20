<template>
  <li>
    <div class="info">
      <h2>{{streamer.display_name}}</h2>
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
        <p><span><a v-bind:href="`${streamer.url}`">
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border: 2px solid navy;
  box-shadow: 4px 4px 4px black;
  background: black;
}
span {
  font-weight: bold;
}
img {
  max-height: 300px;
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
