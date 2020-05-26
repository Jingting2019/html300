<template>
  <div class="history">
    <h1>This is an about history</h1>
    <!-- loop 4 images -->
    <img class="d-line img-fluid p-3" v-for="picture in pictures" v-bind:key="picture" :src="picture" alt="AB">
  </div>
</template>

<script>
  export default {
    data() {
      return {
        // Vue require me create an assets folder in public folder. I could not use the path under the src folder
        pictures: ['./assets/acient.png', './assets/hourses.png', './assets/begin.png', './assets/grown.png'],
      }
    }
  }
</script>

<style>
  .img-fluid {
    max-height: 350px;
  }
</style>
