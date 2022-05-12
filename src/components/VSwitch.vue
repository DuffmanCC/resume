<template>
  <div class="flex">
    <slot />

    <button class="flex cursor-pointer items-center" @click="switchComponent" :aria-label="ariaLabel">
      <div
        class="border-2 w-12 h-6 rounded-full flex mr-2 transition duration-200"
        :class="[
          switchValue 
          ? 'justify-end border-gray-500 bg-gray-500'
          : 'justfy-start border-gray-300 bg-gray-300'
        ]"
      >
        <div
          class="h-5 w-5 bg-white rounded-full relative flex items-center justify-center"
          :class="[switchValue ? '-right-px' : '-left-px']"
        >
          <slot name="icon"></slot>
        </div>
      </div>
    </button> 
  </div>
</template>

<script>
export default {
  name: "VSwitch",

  data() {
    return {
      switchValue: this.value
    }
  },

  props: {
    modelValue: Boolean,
    ariaLabel: String
  },
  /**
   *
   * https://www.webmound.com/use-v-model-custom-components-vue-3/
   *
   */
  model: {
    event: 'click'
  },

  methods: {
    switchComponent() {
      this.switchValue = !this.switchValue;
      /**
       * Fired on click
       *
       * @event click
       * @property {boolean}
       */
      this.$emit('update:modelValue', this.switchValue);
    }
  }
};
</script>

<script setup>

</script>
