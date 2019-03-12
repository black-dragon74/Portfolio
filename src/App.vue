<template>
  <v-app dark>
    <!-- The navigation drawer -->
    <Drawer />

    <v-content class="hide-overflow" style="padding-left: 300px">
      <div>
        <!-- The background image cover with the name -->
        <Hero />

        <!-- The parent div that will contain the rest of the sections for our SPA -->
        <div class="container py-5 px-0 fluid">
            <!-- The about me section -->
            <About />

            <!-- The experience section -->
            <Experience />

            <!-- The skills section -->
            <Skills />
        </div>

      </div>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  components: {
    Drawer: () => import('@/components/Drawer'),
    Hero: () => import('@/components/Hero'),
    About: () => import('@/components/About'),
    Experience: () => import('@/components/Experience'),
    Skills: () => import('@/components/Skills')
  },
  data () {
    return {
      // Data to return
    }
  },
}
</script>

<!-- Global styling -->
<style>

</style>

