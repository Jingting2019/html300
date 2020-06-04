<template>

  <div class="home">
    <Header></Header>
    <h1 slot="page">The overview about the desert</h1>
    <div class="container mt-5">
      <p>What did the explorer say when he found water in three different places in the desert?</p>
      <button class="btn-success m-5" type="button" data-toggle="tooltip" data-placement="right" title="Well, well, well.">Hover here to see the answer</button>

    </div>
  </div>
</template>

<script>
  import Header from '../components/Header.vue';
  export default {
    components: {
      Header
    },

  }
</script>
