<template>
  <section>
    <div id="chart">
      <h3>Most Viewers Currently</h3>
        <BarChart
        v-if="labels && viewerCounts" 
        :labels="labels"
        :viewerCounts="viewerCounts"
        />
    </div>
    <div id="list">
      <StreamsList :streams="streams" />
    </div>
  </section>
</template>

<script>
import BarChart from './BarChart';
import StreamsList from './StreamsList';
import api from '../../services/api';
export default {
  data() {
    return {
      streams: null,
      labels: null,
      viewerCounts: null,
      user: null
    };
  },
  components: {
    BarChart,
    StreamsList
  },
  created() {
    api.getTopStreamers()
      .then(response => {
        return this.streams = response;
      })
      .then(() => this.labels = this.getLabels())
      .then(() => this.viewerCounts = this.getViewerCounts());
  },
  methods: {
    getLabels() {
      return this.streams.map(stream => {
        return stream.user_name;
      });
    },
    getViewerCounts() {
      return this.streams.map(stream => {
        return stream.viewer_count;
      });
    }
  }
};
</script>

<style scoped>
h3 {
  text-align: center;
  font-size: 6vh;
  margin: 2vh 35vw 2vh 35vw;
  border: solid gray 2px;
  border-radius: 20vw;
  color: gray;
  width: 25vw;
  justify-content: center;
}
#list {
  background-color: rgba(227, 227, 227, 0.5);
  padding: 1vh;
}
</style>