<template>
<transition name="fade">
  <div class="modal" @click="onClose" @keyup.esc="onClose">
    <div class="content" @click.stop="">
    <button class="close" @click="onClose">X</button>
    </div>
  </div>
  </transition>
</template>

<script>
export default {
  props: {
    onClose: Function
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
  background-color:rgba(245, 176, 176, 0.5);
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
  background-color:rgba(245, 176, 176, 0.5);
}
.fade-enter, .fade-leave-to {
  opacity: 0;
  background-color:rgba(245, 176, 176, 0.5);
}
</style>