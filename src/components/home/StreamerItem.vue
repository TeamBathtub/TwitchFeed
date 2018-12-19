<template>
  <section>
    <div>
      <h3> {{ stream.user_name }}</h3>
      <button class="detail-button" @click="show = true">View Details</button>
      <Modal :stream="stream" v-if="show" :onClose="() => show = false">
      </Modal>
    </div>
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

<style>
h3 {
  box-shadow: 1pt 1pt 1pt black;
  text-align: center;
}
h3:hover {
  background-color: purple;
}
button {
    display: block;
    margin: 0 auto;
}
</style>