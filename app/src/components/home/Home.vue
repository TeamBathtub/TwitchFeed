<template>
  <section>
    <div>
        <BarChart
        v-if="labels && viewerCounts" 
        :labels="labels"
        :viewerCounts="viewerCounts"
        />
    </div>
    <div>
      <!-- <StreamsList :streams="streams" /> -->
    </div>
   </section>
</template>

<script>
import BarChart from './BarChart';
// import StreamsList from './StreamsList';
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
    BarChart
    // StreamsList
  },
  created() {
    api.getTopStreamers()
      .then(response => {
        console.log('response', response);
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

<style>

</style>