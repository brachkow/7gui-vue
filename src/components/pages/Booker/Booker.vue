<template>
  <main>
    <div class="flex justify-between mb-4">
      <button
        @click="isOneWayMode = true"
        class="leading-loose text-white leading-loose px-1 rounded-l w-full focus:outline-none transition-colors transition-opacity text-center"
        :class="
          isOneWayMode === false
            ? 'bg-gray-200 hover:bg-gray-300 active:bg-gray-400 focus:bg-gray-400 text-gray-500'
            : 'bg-blue-600 hover:bg-blue-700 active:bg-blue-800 focus:bg-blue-800 text-white'
        "
      >
        One way
      </button>
      <button
        class="leading-loose leading-loose px-1 rounded-r w-full focus:outline-none transition-colors transition-opacity text-center"
        @click="isOneWayMode = false"
        :class="
          isOneWayMode === true
            ? 'bg-gray-200 hover:bg-gray-300 active:bg-gray-400 focus:bg-gray-400 text-gray-500'
            : 'bg-blue-600 hover:bg-blue-700 active:bg-blue-800 focus:bg-blue-800 text-white'
        "
      >
        Return
      </button>
    </div>
    <div class="mb-4">
      <input
        type="text"
        class="bg-gray-200 leading-loose px-4 mb-2 rounded focus:outline-none block transition-colors placeholder-gray-500"
        placeholder="From"
        ref="from"
        v-model="fromValue"
        :class="{
          'text-red-500': !isFromCorrect && isFromCorrect !== null,
        }"
      />
      <input
        type="text"
        class="bg-gray-200 leading-loose px-4 rounded focus:outline-none block transition-colors transition-opacity placeholder-gray-500"
        placeholder="To"
        ref="to"
        v-model="toValue"
        :disabled="isOneWayMode"
        :class="{
          'opacity-50': isOneWayMode,
          'text-red': isToCorrect && isFromCorrect !== null,
        }"
      />
    </div>
    <button
      class="bg-blue-600 text-white leading-loose px-4 rounded w-full focus:outline-none transition-colors transition-opacity"
      :disabled="
        !(isOneWayMode && isFromCorrect) || (isFromCorrect && isToCorrect)
      "
      :class="
        (isOneWayMode && isFromCorrect) || (isFromCorrect && isToCorrect)
          ? 'hover:bg-blue-700 active:bg-blue-800 focus:bg-blue-800'
          : 'opacity-50'
      "
    >
      Book
    </button>
  </main>
</template>

<script>
  export default {
    data() {
      return {
        isOneWayMode: true,
        isFromCorrect: null,
        isToCorrect: null,
        fromValue: '',
        toValue: '',
      };
    },
    mounted() {
      const regex = /(\d\d).(\d\d).(\d\d\d\d)/;
      const validateValue = (value) => {
        return value.match(regex) !== null && value.length === 10;
      };
      const validateDate = (value) => {
        const valueMatch = value.match(regex);
        return !isNaN(
          Date.parse(`${valueMatch[3]}-${valueMatch[2]}-${valueMatch[1]}`),
        );
      };
      const validateRange = (fromValue, toValue) => {
        const fromMatch = fromValue.match(regex);
        const toMatch = toValue.match(regex);
        return (
          Date.parse(`${fromMatch[3]}-${fromMatch[2]}-${fromMatch[1]}`) <
          Date.parse(`${toMatch[3]}-${toMatch[2]}-${toMatch[1]}`)
        );
      };
      this.$refs.from.addEventListener('keyup', () => {
        this.isFromCorrect =
          validateValue(this.fromValue) &&
          validateDate(this.fromValue) &&
          (this.isOneWayMode || validateRange(this.fromValue, this.toValue));
      });
      this.$refs.to.addEventListener('keyup', () => {
        this.isToCorrect =
          validateValue(this.toValue) &&
          validateDate(this.toValue) &&
          (this.isOneWayMode || validateRange(this.fromValue, this.toValue));
      });
    },
  };
</script>
