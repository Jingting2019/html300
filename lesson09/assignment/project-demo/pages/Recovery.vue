<template>
  <div class="history">
    <Header></Header>
    <h1 slot="page">This is about Recovery</h1>
    <p>There randomly shows a similar project about desert recovery. Fresh page to see if there is any difference.</p>
<!-- Randomly show one similar project about this topic -->
    <div v-if="Math.random() > 0.5">
      <img src="/KubuqiNow.png" alt="Kubuqi is green Now">
    </div>
    <div v-else>
      <img src="/saihanbaNow.png" alt="saihanba is a green forest Now">
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
