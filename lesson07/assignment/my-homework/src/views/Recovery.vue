<template>
  <div class="history">
    <h1>This is an about Recovery</h1>
    <p>There randomly shows a similar project about desert recovery. Fresh page to see if there is any difference.</p>
<!-- Randomly show one similar project about this topic -->
    <div v-if="Math.random() > 0.5">
      <img src="/assets/KubuqiNow.png" alt="Kubuqi is green Now">
    </div>
    <div v-else>
      <img src="/assets/saihanbaNow.png" alt="saihanba is a green forest Now">
    </div>
  </div>
</template>
