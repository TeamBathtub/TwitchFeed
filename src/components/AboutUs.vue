<template>
  <section>
    <link href="https://fonts.googleapis.com/css?family=Permanent+Marker" rel="stylesheet">
    <h1>About Us</h1>
    <div class="person">
      <div class="container">
        <img src="../../assets/tyler.jpg" alt="Avatar" class="image" style="width:100%">
          <div class="middle">
            <div class="text">Tyler Corbett</div>
          </div>
      </div>
      <p>Video game and coffee enthusist. Proud father of two golden retrievers. @thetylercorbett</p>
    </div>
    <div class="person">
      <div class="container">
        <img src="../../assets/marcy.jpg" alt="Avatar" class="image" style="width:100%">
          <div class="middle">
            <div class="text">Marcy Silverman</div>
          </div>
      </div>
      <p>Budding Developer that loves napping, working out, eating, and petting dogs.</p>
    </div>
    <div class="person">
      <div class="container">
        <img src="../../assets/kristin.jpg" alt="Avatar" class="image" style="width:100%">
          <div class="middle">
            <div class="text">Kristin Hortsch</div>
          </div>
      </div>
      <p>
        Avid laugher, sports fan, stalker of cats, and coding (Codewars) addict!<br/>
        <a href="https://twitter.com/KristinMH33?ref_src=twsrc%5Etfw" class="twitter-follow-button" data-show-count="false">Follow @KristinMH33</a>
      </p>
    </div>
  </section>
</template>

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
