<template>
  <div>
    <Nav />
    <Gallery />
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({});
</script>

<script>
export default {
  head: {
    title: 'YourShot?',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'So.. what exactly is the 2D TopDown JRPG YourShot?'
      }
    ],
  }
}
</script>

<style>
@import url("~assets/style/main.style.css");
</style>
