<template>
  <article class="person">
    <div class="container">
      <img :src="image" alt="Avatar" class="image" style="width:100%">
      <div class="middle">
        <div class="text">{{name}}</div>
      </div>
    </div>
    <p>
      <slot/>
    </p>
  </article>
</template>

<script>
export default {
  props: {
    name: String,
    image: String
  }
}
</script>

<style scoped>
section {
  font-family: 'Permanent Marker', cursive;
  font-size: 15pt;
}
.container {
  position: relative;
  width: 25%;
  border: gray outset 8px;
}
.image {
  opacity: 1;
  display: block;
  width: 100%;
  height: auto;
  transition: .5s ease;
  backface-visibility: hidden;
}
.middle {
  transition: .5s ease;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
}
.container:hover .image {
  opacity: 0.3;
}
.container:hover .middle {
  opacity: 1;
}
.text {
  background-color: rgb(177, 158, 214);
  color: white;
  font-size: 16px;
  font-weight: bold;
  padding: 16px 32px;
  border-radius: 20px;
}
.person {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  margin: 0 3vw 3vw 3vw;
}
.person p {
  width: 50%;
  margin: 3vw;
  font-size: 4vh;
}
h1 {
  align-content: center;
  text-align: center;
  font-size: 6vh;
  margin: 2vh 35vw 2vh 35vw;
  border: solid gray 2px;
  border-radius: 20vw;
  color: gray;
  width: 25vw;
  justify-content: center;
}
</style>