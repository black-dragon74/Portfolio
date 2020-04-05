<template>
  <v-app dark>
    <!-- The navigation drawer -->
    <Drawer />

    <v-content class="hide-overflow" style="padding-left: 300px" id="mainContent">
<!--      <div>-->
<!--        &lt;!&ndash; The background image cover with the name &ndash;&gt;-->
<!--        <Hero />-->

<!--        &lt;!&ndash; The parent div that will contain the rest of the sections for our SPA &ndash;&gt;-->
<!--        <div class="container py-5 px-0 fluid">-->
<!--            &lt;!&ndash; The about me section &ndash;&gt;-->
<!--            <About />-->

<!--            &lt;!&ndash; The experience section &ndash;&gt;-->
<!--            <Experience />-->

<!--            &lt;!&ndash; The skills section &ndash;&gt;-->
<!--            <Skills />-->

<!--            &lt;!&ndash; The portfolio section &ndash;&gt;-->
<!--            <Portfolio />-->

<!--            &lt;!&ndash; The contact section, last one :D &ndash;&gt;-->
<!--            <Contact />-->
<!--        </div>-->

<!--      </div>-->
        <router-view/>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  components: {
    Drawer: () => import('@/components/Drawer'),
    // Hero: () => import('@/components/Hero'),
    // About: () => import('@/components/About'),
    // Experience: () => import('@/components/Experience'),
    // Skills: () => import('@/components/Skills'),
    // Portfolio: () => import('@/components/Portfolio'),
    // Contact: () => import('@/components/Contact')
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
@media screen and (max-width: 960px) {
  #mainContent {
    padding-left: 0 !important;
  }

  #mainDrawer {
    display: none;
  }
}
</style>

