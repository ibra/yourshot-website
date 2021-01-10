<template>
  <div class="beta">
    <h1>A Demo is coming soon...</h1>
    <h2>I have no idea when soon is.</h2>
    <p>
      (but in the mean time you can stay up to touch on the
      <a href="https://ibrahim.thedev.id/" draggable="false" target="_blank"
        >blog</a
      >)
    </p>
  </div>
</template>

<style>
.beta {
  display: flex;
  text-align: center;
  justify-content: center;
  flex-direction: column;
  color: white;
}
.beta h1 {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  height: 90vh;
  -ms-flex-line-pack: center;
      align-content: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}
.beta h2 {
  margin-top: 70%;
  margin-bottom: 30px;
}
.beta p {
  font-size: 12px;
}
.beta p a {
  text-decoration: none;
  color: #8fdd4f;
}
</style>
