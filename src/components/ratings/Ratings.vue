<template>
  <section id="ratings">
    <h1>Ratings</h1>
    <RatingsDisplay
    v-if="randomName"
    :randomName="randomName"
    :randomThumbnail="randomThumbnail"
    :url="url"
    />
    <RatingsForm
    v-if="randomName"
    :getRandomStreamer="getRandomStreamer"
    :randomName="randomName"
    />
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
      .then(() => this.labels = this.getLabels())
      .then(() => this.getRandomStreamer());
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
h1 {
  text-align: center;
  font-size: 6vh;
  margin: 2vh 35vw 2vh 35vw;
  border: solid gray 2px;
  border-radius: 20vw;
  color: gray;
  width: 25vw;
  justify-content: center;
}
button {
  background-color: white;
  color: black;
  border: 2px solid gray;
  padding: 14px 40px;
}
#ratings {
  display: flex;
  flex-flow: column;
  align-items: center;
}

</style>


