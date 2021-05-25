<template>
  <div class="faq">
    <h1> Frequently Asked Questions </h1>
    <h3>When is YourShot coming out???</h3>
    <p>
      When its done.
    </p>
    <h3> What platforms will YourShot be available on? </h3>
    <p> Currently, i'm only targeting Windows, Mac and Linux, but that could possibly change in the future! </p>
    <h3> How long will YourShot be?</h3>
    <p> I'm not quite sure yet, and i don't really have a definite answer, but I'll be sure to update you both here and on the <NuxtLink to="/about" draggable="false">about page</NuxtLink>.</p>
    <h3>Is there somewhere where I can hear about YourShot updates?</h3>
    <p> Yes, you can join the <a href="https://discord.gg/nCerNRh">discord server</a>, or subscribe to the <a href="https://youtube.com/minidevs">youtube channel</a>.</p>
    <h3>Are you working on YourShot alone?</h3>
    <p> Im doing everything other than the music, so for the most part, yes. </p>
    <h3>What tools are you using to make YourShot?</h3>
    <p> The game engine i'm using is Unity, I use Aseprite for art, Audacity and LMMS for SFX, and my composer Peshti uses FL Studio for music.</p>
    <h3> Where can I contact you? </h3>
    <p> You could either contact me on <a href="https://twitter.com/minidevz">Twitter</a>, join the <a href="https://discord.gg/nCerNRh">Discord</a>, or email me at <a href="mailto:ibrahim@playyourshot.com">ibrahim@playyourshot.com</a></p>
  </div>
</template>

<style>
.faq {
    display: flex;
    text-align: center;
    justify-content: center;
    flex-direction: column;
    color: white;
    width: 75%;
}
.faq h1 {  
    display: flex;
    align-items: top;
    justify-content: center;
    margin-top: 5%;
    line-height: 300%;
    margin-bottom: 2%;
}

.faq h3
{
    text-align: left;
    color: #494949;
    margin-left: 15%;
    line-height: 280%;
}

.faq p {
    font-size: 16px;
    text-align: left;
    margin-left: 15%;
    overflow-wrap: break-word;
    line-height: 250%;
}

.faq p a {
    text-decoration: none;
    color: #8fdd4f;
}
</style>