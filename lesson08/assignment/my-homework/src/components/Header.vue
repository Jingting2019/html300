

<template>
  <header class="jumbotron">
  <div class="container">
    <h1 class="text-primary mt-5">Restoration of Mu Us Desert Ecosystems</h1>
    <p>{{text | uppercase}}</p>
    <slot name="page">In Half Centery</slot>

  </div>
  </header>
</template>


<script>
  export default {
    name: 'Header',
    data () {
    return {
      text: "a desert's story"
    }
  },

    filters: {
       uppercase(value){
         return value.toUpperCase();
       }
     }
  }
</script>
