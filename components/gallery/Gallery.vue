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
      <div
        class="card card-tall card-wide"
        style="background-image:url('https://images.unsplash.com/photo-1558981359-219d6364c9c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80')"
      ></div>
      <div
        class="card card-tall"
        style="background-image:url('https://images.unsplash.com/photo-1558981359-219d6364c9c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80')"
      ></div>
      <div
        class="card"
        style="background-image:url('https://images.unsplash.com/photo-1558981359-219d6364c9c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80')"
      ></div>
      <div
        class="card"
        style="background-image:url('https://images.unsplash.com/photo-1558981359-219d6364c9c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80')"
      ></div>

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
  padding-top: 200px;
  display: grid;
  width: 70vw;
  gap: 3rem;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  grid-auto-rows: 250px;
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