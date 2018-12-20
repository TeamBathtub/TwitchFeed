<template>
<transition name="fade">
  <div class="modal" @click="onClose" @keyup.esc="onClose">
    <div class="content" @click.stop="">
    <button class="close" @click="onClose">X</button>
      <h2>Display Name : {{stream.user_name}}</h2>
      <h3>Current Streaming View Counts: {{stream.viewer_count}}</h3>
      <!-- <button @click="handleAdd"> Add to Favorites </button> -->
    </div>
  </div>
 </transition>
</template>

<script>
export default {
  props: {
    onClose: Function, 
    stream: Object
  },
  data() {
    return {
      show: false,
      name: null,
      thumbnails: null
    };
  }, 
  created() {
    console.log('Modal created');
    this.documentListener = event => {
      if(event.keyCode === 27) {
        console.log('closing');
        this.onClose();
      }
    };
    document.addEventListener('keyup', this.documentListener);
  
  },
  destroyed() {
    document.removeEventListener('keyup', this.documentListener);
  }
};
</script>

<style>
.modal {
  margin-top: 20pt;
  position: fixed;
  top: 0; left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  z-index: 99;
  justify-content: center;
  align-items: center;
  background-color:rgba(187, 15, 173, .9);
}
.content {
  position: relative;
  background: white;
  padding: 40px;
  border-radius: 10pt;
}
.close {
  position: absolute;
  top: 5px;
  right: 5px;
  border: 1px solid black;
  border-radius: 10pt;
}
.modal-image {
  width: 200px;
  height: 200px;
} 
.fade-enter-active, .fade-leave-active {
  transition: all 1s;
  background-color:rgba(187, 15, 173, 0.8);
}
.fade-enter, .fade-leave-to {
  opacity: 0;
  background-color:rgba(187, 15, 173, 0.8);
}
</style>