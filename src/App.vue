<template>
  <v-app dark>
    <!-- The navigation drawer -->
    <Drawer />

    <v-content class="hide-overflow" style="padding-left: 300px">
      <div>
        <!-- The background image cover with the name -->
        <Hero />

      </div>
    </v-content>
  </v-app>
</template>

<script>
import Drawer from "./components/Drawer.vue";  // The fixed drawer on the left side
import Hero from "./components/Hero.vue";  // Hero image and the name with title

export default {
  name: 'App',
  components: {
    Drawer,
    Hero
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

