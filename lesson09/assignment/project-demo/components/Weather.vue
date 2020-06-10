<template>
  <div class="weatherTile">
      <p class="mainWeather">{{main}}</p>
      <p class="tempMin">Min Temp:{{tempMin}}</p>
      <p class="tempMax">Max Temp:{{tempMax}}</p>
      <p class="humidity">Humidity:{{humidity}}</p>
  </div>

</template>

<script>
  export default {
    name: 'Weather',
    props: {
      main: {
        type: String,
        required: true
      },
      tempMin: {
        type: Number,
        required: true
      },
      tempMax: {
        type: Number,
        required: true
      },
      humidity: {
        type: Number,
        required: true
      }
    }
  }
</script>
