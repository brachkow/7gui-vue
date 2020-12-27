<template>
  <div class="flex">
    <input
      class="bg-gray-200 leading-loose px-4 rounded-l focus:outline-none text-right"
      type="text"
      v-model="number"
    />
    <button
      class="bg-blue-600 text-white leading-loose px-4 rounded-r focus:outline-none hover:bg-blue-700 active:bg-blue-800 focus:bg-blue-800 transition-colors"
      @click="number = Number(number) + 1"
    >
      Count
    </button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        number: 0,
      };
    },
  };
</script>
