

<script>
  import MyImage from '../components/my-image.vue';
  import Header from '../components/Header.vue';
  import { showHide } from '~/assets/toggleBorder.js'

  export default {
    components: {
      MyImage,
      Header
    },

    mixins: [showHide],

    data() {
      return {
        // Vue require me create an assets folder in public folder. I could not use the path under the src folder
        pictures: ['./assets/acient.png', './assets/hourses.png', './assets/begin.png', './assets/grown.png'],
      }
    }
  }
</script>

<template>
  <div class="history">
    <Header></Header>
    <h1 slot="page">This is about history</h1>
    <!-- use component for showing images -->
    <MyImage src="/acient.png" alt="acient" title="acient" ></MyImage>
    <MyImage src="/hourses.png" alt="hourses" title="hourses" ></MyImage>
    <MyImage src="/begin.png" alt="begin" title="begin" ></MyImage>
    <MyImage src="/grown.png" alt="grown" title="grown" ></MyImage>
  </div>
</template>


<style>
  .img-fluid {
    max-height: 350px;

  }

  .img-mixinBorder {
    outline: 10px solid red;
  }
</style>
