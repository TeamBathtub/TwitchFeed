<template>
  <li>
    <h2>{{streamer.login}}</h2>
    <div class="container">
      <div class="info">
        <p><span>View Count:</span><br/><br/>
          {{streamer.view_count}}
        </p>
        <button @click="onAdd">{{ favorite ? 'Remove from Favorites' : 'Add to Favorites' }}</button>
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
      console.log('streamer', this.streamer);
      this.onAdd(this.streamer);
      this.favorite = true;
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
</style>
