<template>

    <img @click="toggleShowHide()" v-bind:class="{'img-mixinBorder' : outline }" class="d-line img-fluid p-3" :src=src :alt=alt :title=title>

</template>

<script>
  import { showHide } from '../toggleBorder.js'
  export default {
    name: 'MyImage',
    mixins: [showHide],
    props: {
      src: {
        type: String,
        required: true
      },
      alt: {
        type: String,
        required: true
      },
      title: {
        type: String,
        required: true
      },
    }
  }
</script>

<style>
  .img-mixinBorder {
    outline: 10px solid red;
  }
</style>
