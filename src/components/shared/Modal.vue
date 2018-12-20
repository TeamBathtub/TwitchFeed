<template>
<transition name="fade">
  <div class="modal" @click="onClose" @keyup.esc="onClose">
    <div class="content" @click.stop="">
    <button class="close" @click="onClose">X</button>
      <h2>{{stream.user_name}}</h2>
      <h3>👤{{stream.viewer_count}}</h3>
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
    this.documentListener = event => {
      if(event.keyCode === 27) {
        this.onClose();
      }
    };
    document.addEventListener('keyup', this.documentListener);
    console.log(this.stream);
  
  },
  destroyed() {
    document.removeEventListener('keyup', this.documentListener);
  },
};
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0; left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  z-index: 99;
  justify-content: center;
  align-items: center;
  background-color:rgba(218, 218, 218, 0.747);
  text-align: center;
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
  background-color:rgba(218, 218, 218, 0.747);
}
.fade-enter, .fade-leave-to {
  opacity: 0;
  background-color:white;
}
</style>