<template>
  <div class="history">
    <Header></Header>
    <h1 slot="page">This is about Desertification</h1>
    <div class="container">
      <!--Accordion-->
      <div id="accordion">
        <div class="card" v-for="desertification in desertifications" v-bind:key="desertification">
          <div class="card-header" role="tab">
            <h5>
              <a :data-target="'#' + desertification.id" data-toggle="collapse">
                {{desertification.header}}
              </a>
            </h5>
          </div>
          <div :id="desertification.id" class="collapse" data-parent="#accordion">
            <div class="card-body">
              <p>{{desertification.paragraph}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Header from '../components/Header.vue';
  export default {
    components: {
      Header
    },
    data() {
      return {
        desertifications: [
          {id: 'begin', header: 'Begin of Desertification', paragraph: 'Mu Us Desert began to turn to the desert about 1200 years ago and became worse and worse. It gave people a lot of trouble not only in daily life but also in the whole ecosystem.'},
          {id: 'reason', header: 'Reason of Desertification', paragraph: 'On the one hand, the herdsmen uncontrolled reclamation caused the problem, and on the other hand, the impact of inter-ethnic wars also made the problem worse.'},
          {id: 'result', header: 'Result of Desertification', paragraph: 'All the traces of human activity destroyed nature enveriment. Finally, a small sandy land appeared in the Mu Us Desert area during the Tang Dynasty. Then, like infectious skin diseases, the sand expands little by little, the turf is bitterly swallowed little by little, people had no choice but to escape.'},
          ],
      }
    }
  }
</script>
