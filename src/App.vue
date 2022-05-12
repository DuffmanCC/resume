<template>
  <div :class="{'dark': darkMode}">
    <div class="dark:bg-gray-900 text-gray-600">
      <div class="container max-w-7xl">
        <header class="p-4 sm:p-8 border-b dark:bg-gray-900 print:hidden">
          <div class="flex justify-end">
            <nav class="flex gap-2 sm:gap-8 container mx-auto dark:text-white">
              <router-link to="/">Home</router-link>
              <router-link to="/to-recruiters">To recruiters</router-link>
            </nav>

            <VSwitch v-model="darkMode" class="mr-2 sm:mr-8" ariaLabel="dark mode">
              <template v-slot:icon>
                <span
                  class="text-xs font-icon"
                  :class="[darkMode ? 'icon-moon' : 'icon-sun']"
                ></span>
              </template>
            </VSwitch>

            <VSwitch v-model="spanish" ariaLabel="change language">
              <span class="mr-2 dark:text-white hidden sm:inline">Language:</span>

              <template v-slot:icon>
                <span class="text-xs text-gray-600" v-text="spanish ? 'ES' : 'EN'"></span>
              </template>
            </VSwitch>
          </div>
        </header>

        <div class="lg:p-8 dark:bg-gray-900">
          <main class="sm:flex lg:shadow-2xl">
            <router-view :content="content" class="min-h-screen" />
          </main>
        </div> 
      </div>  
    </div>
  </div>
</template>

<script>
import VSwitch from "./components/VSwitch.vue"
import contentEn from "./data/en.json"
import contentEs from "./data/es.json"

export default {
  name: 'App',

  components: {
    VSwitch
  },

  data() {
    return {
      darkMode: false,
      spanish: false,
    }
  },

  computed: {
    content() {
      if (this.spanish === true) {
        return contentEs
      }

      return contentEn
    }
  },

  created() {
    document.documentElement.lang = 'en'
    document.title = "Carlos Ortiz Resume"
    const meta = document.createElement('meta')
    meta.name = "description"
    meta.content = "Full Stack developer specialized in WordPress and single-page applications. I have developed a wide range of websites using the latest trends and frameworks. Skilled at writing efficient, scalable, and maintainable code using current best practices."
    document.getElementsByTagName('head')[0].appendChild(meta)
  },

  updated() {
    const lang = this.spanish ? 'es' : 'en'

    document.documentElement.lang = lang

    const description = this.spanish ? 'Full Stack developer especializado en WordPress y aplicaciones de una sola página. He desarrollado una amplia gama de sitios web utilizando las últimas tendencias y frameworks. Habilidad para escribir código eficiente, escalable y mantenible utilizando las mejores prácticas actuales.' : 'Full Stack developer specialized in WordPress and single-page applications. I have developed a wide range of websites using the latest trends and frameworks. Skilled at writing efficient, scalable, and maintainable code using current best practices.'

    document.querySelector('meta[name="description"]').content = description
  }
}

</script>
