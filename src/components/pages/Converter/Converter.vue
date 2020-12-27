<template>
  <main>
    <label class="flex justify-between leading-loose mb-4"
      >Celsius:
      <input
        type="number"
        class="bg-gray-200 leading-loose px-4 ml-4 rounded focus:outline-none text-right"
        v-model="celsius"
        placeholder="0"
    /></label>
    <label class="flex justify-between leading-loose"
      >Fahrenheit:
      <input
        type="number"
        class="bg-gray-200 leading-loose px-4 ml-4 rounded focus:outline-none text-right"
        v-model="fahrenheit"
        placeholder="0"
    /></label>
  </main>
</template>

<script>
  export default {
    data() {
      return {
        dataCelsius: 0,
        dataFahrenheit: 0,
      };
    },
    computed: {
      celsius: {
        get: function () {
          return Math.round(Number(this.dataCelsius));
        },
        set: function (value) {
          this.dataCelsius = value;
          this.dataFahrenheit = value * (9 / 5) + 32;
        },
      },
      fahrenheit: {
        get: function () {
          return Math.round(Number(this.dataFahrenheit));
        },
        set: function (value) {
          this.dataCelsius = (value - 32) * (5 / 9);
          this.dataFahrenheit = value;
        },
      },
    },
  };
</script>
