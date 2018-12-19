<template>
  <section>
    <div class="item">
      <h3> {{ stream.user_name }}</h3>
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
    stream: Object
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
  background-color: purple;
}
button {
  display: block;
  margin: 0 auto;
  padding: 5px;
}
</style>