<template>
  <div>
    <Nav />
    <Questions />
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
    title: 'YourShot - FAQ',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Frequently asked questions about the indie JRPG YourShot.'
      }
    ],
  }
}
</script>


<style>
@import url("~assets/style/main.style.css");
</style>
