<template>
  <section>
    <div class="item">
      <h3> #{{ index + 1 }} {{ stream.user_name }}</h3>
      <button class="detail-button" @click="show = true">View Details</button>
    </div>
    <Modal :stream="stream" v-if="show" :onClose="() => show = false">
    </Modal>
  </section>
</template>

<script>
import Modal from '../shared/Modal'; 

export default {
  props: {
    stream: Object,
    index: Number
  },
  components: {
    Modal
  }, 
  data() {
    return {      
      show: false
    };
  }
};
</script>

<style scoped>
.item {
  box-shadow: 1pt 1pt 1pt black;
  text-align: center;
  padding-bottom: 10px;
}
.item:hover {
  background-color: rgba(177, 158, 214, 0.2);
  box-shadow: 3pt 3pt 3pt black;
}
button {
  display: block;
  margin: 0 auto;
  padding: 5px;
}
/* .hvr-float {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: transform;
  transition-property: transform;
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
}
.hvr-float:hover, .hvr-float:focus, .hvr-float:active {
  -webkit-transform: translateY(-8px);
  transform: translateY(-8px);
} */
</style>