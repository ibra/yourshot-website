<template>
  <div class="demo">
    <h1>Demo coming soon...</h1>
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
.demo {
  display: flex;
  text-align: center;
  justify-content: center;
  flex-direction: column;
  color: white;
  line-height: 300%;
}
.demo h1 {  
  display: flex;
  justify-content: center;
  align-items: center;
  height: 960px;
}
.demo h2 {
  margin-top: 70%;
  margin-bottom: 30px;
}
.demo p {
  font-size: 12px;
  color: #494949;
}
.demo p a {
  text-decoration: none;
  color: #8fdd4f;
}
@media (max-width: 500px) {
  .demo h2 {
    margin-top: 110%;
    margin-bottom: 30px;
  }
}
</style>
