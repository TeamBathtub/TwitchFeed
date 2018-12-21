<template>
  <section>
    <div class="item" @click="show = true">
      <h3> #{{ index + 1 }} {{ stream.user_name }}</h3>
    </div>
    <Modal :stream="stream" v-if="show" :onClose="() => show = false"></Modal>
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
  background-color: rgb(252, 252, 252);
  box-shadow: 1pt 1pt 1pt black;
  text-align: center;
  width: 20vw;
}
.item:hover {
  background-color: rgba(177, 158, 214, 0.2);
  box-shadow: 3pt 3pt 3pt black;
  cursor: pointer;
}
</style>