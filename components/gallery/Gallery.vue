<template>
  <div class="about-main">
    <div class="about-head">
      <a href="/" draggable="false">
        <img
          src="https://media.discordapp.net/attachments/750240410944798760/797211156883701860/ystransmall.png"
          alt="yourshot"
          draggable="false"
        />
      </a>
      <h4 class="typed">A 2D Top-Down Shooter with RPG Elements.</h4>
    </div>

    <div class="photo-grid">
      <h1>YourShot emphasizes on world-building and humour</h1>
      <div class="photos photos-top">
        <img
          src="https://raw.githubusercontent.com/ibra/yourshot-website/70fe970fa68b2b8bc1b93e1bec62274a8b53c72e/src/assets/images/dialogue/Important.png"
        />
        <img
          src="https://raw.githubusercontent.com/ibra/yourshot-website/70fe970fa68b2b8bc1b93e1bec62274a8b53c72e/src/assets/images/dialogue/hehehehe.png"
        />
      </div>
      <h1>Each Encounter Allows you to take down different kinds of enemies.</h1>
      <div class="photos">
        <img
          src="https://github.com/ibra/yourshot-website/blob/70fe970fa6/src/assets/images/dialogue/rock1.png?raw=true"
        />
        <img
          src="https://github.com/ibra/yourshot-website/blob/70fe970fa6/src/assets/images/dialogue/rock2.png?raw=true"
        />
      </div>
      <h1>As you unravel the mystery of how you lost your memory,</h1>
      <div class="photos">
        <img
          src="https://github.com/ibra/yourshot-website/blob/70fe970fa6/src/assets/images/dialogue/rock3.png?raw=true"
        />
        <img
          src="https://github.com/ibra/yourshot-website/blob/70fe970fa6/src/assets/images/dialogue/rock4.png?raw=true"
        />
      </div>
    </div>
  </div>
</template>

<style>
.about-main {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.about-main > .about-head {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50vh;
}
.about-head > a > img {
  width: 700px;
}
.about-head > h4 {
  color: white;
}
.photo-grid {
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
  line-height: 40px;
}
.photo-grid .photos {
  display: flex;
  justify-content: center;
}
.photo-grid img {
  border-radius: 12px;
  margin: 20px;
  width: 27%;
  transition: 0.1s linear;
}
.photo-grid img:hover {
  transform: translateY(-5px);
}
.photo-grid h1 {
  font-size: 24px;
  margin: 40px 0;
}
.card {
  border-radius: 5px;
  transition: 0.1s linear;
}
.card:hover {
  transform: translateY(-5px);
}
@media (max-width: 700px) {
  .about-head > a > img {
    width: 400px;
  }
  .photos {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .photo-grid img {
    border-radius: 12px;
    margin: 20px;
    width: 60%;
    transition: 0.1s linear;
  }
}
@media (max-width: 400px) {
  .about-head > a > img {
    width: 300px;
  }
  .about-head > h4 {
    line-height: 30px;
  }
}
</style>
