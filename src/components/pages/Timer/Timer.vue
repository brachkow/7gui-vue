<template>
  <main style="min-width: 300px">
    <label class="block mb-2 bg-gray-200 p-4 rounded">
      Elapsed Time ({{ elapsed }}s):
      <progress
        :value="elapsed"
        :max="duration"
        class="block w-full mt-1"
      ></progress>
    </label>
    <label class="block mb-2 bg-gray-200 p-4 rounded"
      >Duration ({{ duration }}s):
      <input
        type="range"
        min="0"
        max="60"
        step="1"
        v-model="duration"
        class="w-full block mt-1"
      />
    </label>
    <button
      class="bg-blue-600 text-white leading-loose px-4 rounded w-full focus:outline-none transition-colors"
      @click="elapsed = 0"
    >
      Reset
    </button>
  </main>
</template>

<script>
  export default {
    data() {
      return {
        elapsed: 0,
        duration: 100,
      };
    },
    mounted() {
      setInterval(() => {
        if (this.elapsed < this.duration) {
          this.elapsed = this.elapsed + 1;
        }
      }, 100);
    },
  };
</script>
