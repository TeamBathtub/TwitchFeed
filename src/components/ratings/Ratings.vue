<template>
  <section>
    <h1>I am Ratings</h1>
    <button v-on:click="getRandomStreamer()">Random Stream</button>
    <RatingsDisplay
    v-if="randomName"
    :randomName="randomName"
    :randomThumbnail="randomThumbnail"
    :url="url"
    />
    <RatingsForm/>
  </section>
</template>

<script>
import api from '../../services/api';
import RatingsDisplay from './RatingsDisplay';
import RatingsForm from './RatingsForm';

export default {
  data() {
    return {
      streams: null,
      labels: null,
      randomName: null,
      randomThumbnail: null,
      url: null
    };
  },
  created() {
    api.getTopStreamers()
      .then(response => {
        return this.streams = response;
      })
      .then(() => this.labels = this.getLabels());
  },
  methods: {
    getLabels() {
      return this.streams.map(stream => {
        return stream.user_name;
      });
    },
    getRandomStreamer() {
      let index = Math.floor((Math.random() * this.streams.length) + 1);
      this.randomName = this.labels[index];
      this.getStreamerThumbnail();
      this.makeUrl();
    },
    getStreamerThumbnail() {
      api.getStreamers(this.randomName)
        .then(response => {
          return this.randomThumbnail = response.data[0].profile_image_url;
        })
        .catch(err => {
          this.error = err.message;
        });
    },
    makeUrl() {
      return this.url = 'https://www.twitch.tv/' + this.randomName;
    }
  
  },
  components: {
    RatingsDisplay,
    RatingsForm
  }
};
</script>

<style scoped>
  
</style>


