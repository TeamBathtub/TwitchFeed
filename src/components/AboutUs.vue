<template>
  <section>
    <h1>About Us</h1>

    <div class="person">
      <div class="container">
        <img src="../../assets/tyler.jpg" alt="Avatar" class="image" style="width:100%">
          <div class="middle">
            <div class="text">Tyler Corbett</div>
          </div>
      </div>
      <p>The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. Line up at the start. The running speed starts slowly, but gets faster each minute after you hear this signal. [beep] A single lap should be completed each time you hear this sound. [ding] Remember to run in a straight line, and run as long as possible. The second time you fail to complete a lap before the sound, your test is over. The test will begin on the word start. On your mark, get ready, start.</p>
    </div>

    <div class="person">
      <div class="container">
        <img src="../../assets/marcy.jpg" alt="Avatar" class="image" style="width:100%">
          <div class="middle">
            <div class="text">Marcy Silverman</div>
          </div>
      </div>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In tempore, reiciendis voluptas amet commodi impedit at corrupti esse nisi minus voluptates repellat vitae excepturi assumenda officia optio ipsam enim pariatur.</p>
    </div>

    <div class="person">
      <div class="container">
        <img src="../../assets/kristen.jpg" alt="Avatar" class="image" style="width:100%">
          <div class="middle">
            <div class="text">Kristen Hortsch</div>
          </div>
      </div>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In tempore, reiciendis voluptas amet commodi impedit at corrupti esse nisi minus voluptates repellat vitae excepturi assumenda officia optio ipsam enim pariatur.</p>
    </div>

  </section>
</template>

<style scoped>
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
