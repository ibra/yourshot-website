<template>
  <div>
    <Nav />
    <Demo />
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
    title: 'YourShot - Demo',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'A demo?!! For the epic indie JRPG YourShot?!!'
      }
    ],
  }
}
</script>

<style>
@import url("~assets/style/main.style.css");
</style>
