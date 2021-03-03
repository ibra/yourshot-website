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
          src="https://raw.githubusercontent.com/ibra/yourshot-website/main/assets/images/dialogue/sc_pun_01.png"
        />
        <img
          src="https://raw.githubusercontent.com/ibra/yourshot-website/main/assets/images/dialogue/sc_pun_02.png"
        />
      </div>
      <h1>Each Encounter Allows you to take down different kinds of enemies.</h1>
      <div class="photos">
        <img
          src="https://raw.githubusercontent.com/ibra/yourshot-website/main/assets/images/dialogue/sc_combat_01.jpeg"
        />
        <img
          src="https://raw.githubusercontent.com/ibra/yourshot-website/main/assets/images/dialogue/sc_combat_02.jpeg"
        />
      </div>
      <h1>plus, theres an emphasis on worldbuilding and attention to detail</h1>
      <div class="photos">
        <img
          src="https://raw.githubusercontent.com/ibra/yourshot-website/main/assets/images/dialogue/sc_rock_02.png"
        />
        <img
          src="https://raw.githubusercontent.com/ibra/yourshot-website/main/assets/images/dialogue/sc_rock_01.png"
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
