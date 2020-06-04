<template>

  <div class="home">
    <Header></Header>
    <h3>The weather of GeoHack desert</h3>
    <p v-if="loading">loading data</p>
    <Weather v-if="!loading" :main=weathers.daily[0].weather[0].main :tempMin=weathers.daily[0].temp.min :tempMax=weathers.daily[0].temp.max :humidity=weathers.daily[0].humidity></Weather>
    <h1 slot="page">A joke about the desert</h1>
    <div class="container mt-5">
      <p>What did the explorer say when he found water in three different places in the desert?</p>
      <button class="btn-success m-5" type="button" data-toggle="tooltip" data-placement="right" title="Well, well, well.">Hover here to see the answer</button>

    </div>
  </div>
</template>

<script>
  import Header from '../components/Header.vue';
  import Weather from '../components/Weather.vue';
  import axios from 'axios';
  export default {
    components: {
      Header,
      Weather
    },
    data() {
      return {
        loading: true,
        weathers: null,
        errored: false
      }
    },
    mounted () {
    axios
      .get('https://api.openweathermap.org/data/2.5/onecall?lat=35.008333&lon=-115.475&units=metric&%20exclude=hourly,daily&appid=782ce4e01609afcd56aadeaa6dbd8611')

      .then((response) => {
        this.weathers = response.data;
        console.log("respons:" + response.toString());
         console.log("weathers is here" + this.weathers.lat);
         console.log("document is here" + document);
          document.weathers = this.weathers;
       })
      .catch(error => {
        console.log(error)
        this.errored = true
      })
      .finally(() => this.loading = false)

    }

  }
</script>
