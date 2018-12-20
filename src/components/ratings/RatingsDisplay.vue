<template>
    <div id="randomStreamer">
      <h2>{{ randomName }}</h2>
      <img :src="randomThumbnail">
      <a :href="url">View Stream</a>
      <RatingsForm
      :randomName="randomName"
      :onAdd="onAdd"
      />
    </div>
</template>

<script>
import RatingsForm from './RatingsForm';

export default {
  props: {
    randomName: String,
    randomThumbnail: String,
    url: String,
    onAdd: Function
  },
  components: {
    RatingsForm
  }
};
</script>

<style scoped>
#randomStreamer {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  background-color: slateblue;
  padding: 2vw;
  color: white;
  border: gray outset 7px;
}
h2 {
  font-size: 20px;
  background-color: gray;
  padding: 10px;
  border: gray outset 4px;
}
a {
  color: white;
  background-color: rgba(178, 178, 178, 0.6);
  border-radius: 20px;
  text-decoration: none;
  padding: 8px;
  margin: 1vh;
  text-align: center;
  border: gray 2px solid;
}
a:hover {
  color: white;
  background-color: rgb(178, 178, 178);
  border-radius: 20px;
  text-decoration: none;
  padding: 8px;
  margin: 1vh;
  text-align: center;
  border-color: #B19ED6;
}
img {
    width: 100%;
    height: 100%;
    border: black solid 5px;
}
</style>
