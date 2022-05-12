<template>
  <div class="p-3 sm:py-8 sm:px-8 dark:text-white">
    <h1 class="text-4xl mb-8">To recruiters</h1>

    <p 
      class="mb-4" 
      v-for="(p, i) in content.toRecruiters" 
      :key="i"
      v-html="p"
    ></p>
  </div>
</template>

<script>
export default {
  name: "About",

  props: {
    content:  {
      type: Object
    }
  }
};
</script>
