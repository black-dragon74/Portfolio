<template>
    <section id="portfolio">
        <v-layout
        pa-5
        wrap>
            <!--  That abstract image -->
            <v-img
            :src="require('@/assets/abstract-3.png')"
            class="abstract-3"
            height=100%
            width=100%
            ></v-img>

            <!--  The header -->
            <h2 class="display-2 font-weight-bold primary--text mb-4">What I've done</h2>

            <!-- The carousel for the rest of the part of this page -->
            <v-carousel
            class="elevation-0"
            height=600
            hide-controls
            :interval="5000"
            :cycle="true">
                <v-carousel-item
                v-for="(item,i) in items"
                :key="i"
                >
                    <v-sheet
                    class="transparent pa-5"
                    height=100%>
                        <!-- The caoursel content is contained in the sheet -->
                        <div class="text-xs-center mb-5">
                            <h2 class="primary--text title font-weight-light mb-1">{{ item.title }}</h2>
                            <span class="subheading">{{ item.subtitle }}</span>
                        </div>

                        <!-- The description of the current project -->
                        <v-layout
                        wrap>
                            <!-- Flex 1 -->
                            <v-flex shrink>
                                <div class="mb-3" style="max-width: 500px;">
                                    <!-- Details -->
                                    <h2 class="primary--text title font-weight-light mb-3">Project Details</h2>

                                    <div class="subheading mb-5">
                                        {{ item.desc }}
                                    </div>

                                    <!-- Info -->
                                    <h2 class="primary--text title font-weight-light">Project Info</h2>
                                    <v-list class="transparent">
                                        <v-list-tile>
                                            <v-list-tile-action>
                                                <v-icon color="primary">mdi-code-tags</v-icon> 
                                            </v-list-tile-action>
                                            <v-list-tile-title class="mr-2">{{ item.lang }}</v-list-tile-title>
                                        </v-list-tile>

                                        <v-list-tile>
                                            <v-list-tile-action>
                                                <v-icon color="primary">mdi-github-box</v-icon> 
                                            </v-list-tile-action>
                                            <v-list-tile-title class="mr-2">
                                                <a :href="item.source" class="white--text" target="_blank">External Link <v-icon>mdi-link-variant</v-icon></a>
                                            </v-list-tile-title>
                                        </v-list-tile>

                                        <v-list-tile>
                                            <v-list-tile-action>
                                                <v-icon color="primary">mdi-calendar</v-icon> 
                                            </v-list-tile-action>
                                            <v-list-tile-title class="mr-2">{{ item.year }}</v-list-tile-title>
                                        </v-list-tile>
                                    </v-list>
                                </div>
                            </v-flex>

                            <!-- The flex that will be hidden on small and down -->
                            <v-flex hidden-sm-and-down>
                                <v-img
                                height=400
                                width=500
                                :aspect-ratio="1920/1080"
                                contain
                                :src="item.img"
                                class="mx-auto"></v-img>
                            </v-flex>
                        </v-layout>
                    </v-sheet>
                </v-carousel-item>
            </v-carousel>
        </v-layout>
    </section>
</template>


<script>
export default {
    data() {
        return {
            items: [
                {
                    title: "Take2 Films & Equipments",
                    subtitle: "Rentals Website",
                    desc: "A website created for Take2 Films, a production house based off New Delhi, India. The site features full rentals booking and equiry system. The website is fully responsive.",
                    lang: "PHP, MySQL",
                    source: "http://take2films.co.in",
                    year: "2019",
                    img: require('@/assets/work/take2.png')
                },
                {
                    title: "Nick's Universum",
                    subtitle: "Blogging Website",
                    desc: "A personal blogging website created by Nick for writing his feelings and thoughts. The website is fully responsive and provides a reader mode for true reading experience.",
                    lang: "Wordpress",
                    source: "http://nicksuniversum.com",
                    year: "2016",
                    img: require('@/assets/work/blog.png')
                },
                {
                    title: "Nick's Portfolio",
                    subtitle: "This portfolio website",
                    desc: "A personal portfolio created in 1 day just because I was getting bored and also it can be used to showcase my work.",
                    lang: "Vue.JS",
                    source: "http://portfolio.nicksuniversum.com",
                    year: "2019",
                    img: require('@/assets/work/portfolio.png')
                },
                {
                    title: "Chocolaty.in",
                    subtitle: "A web portal for sending gifts",
                    desc: "A website for booking and sending gifts/flowers to your loved ones.",
                    lang: "Codeigniter",
                    source: "http://chocolaty.in",
                    year: "2017",
                    img: require('@/assets/work/chocolaty.png')
                },
                {
                    title: "MUJ Convocations",
                    subtitle: "Convocation Registration Portal",
                    desc: "A website created for Manipal University, Jaipur for automating convocation registrations. The website features alumni registration and a payment gateway.",
                    lang: "Codeigniter",
                    source: "http://convocationmuj.net",
                    year: "2019",
                    img: require('@/assets/work/convocation.png')
                },
                {
                    title: "SNP College",
                    subtitle: "Website for SN Pareek Women's TT College",
                    desc: "A website for SN Pareek Women's Teacher's Training college, Pushkar. It fully features an interactive CMS so that user can update website without writing any code!",
                    lang: "Joomla 3.x",
                    source: "http://snpcollege.co.in",
                    year: "2019",
                    img: require('@/assets/work/snp_college.png')
                },
                {
                    title: "SNP Advocates",
                    subtitle: "Website for SN Pareek Advocates Group",
                    desc: "A website for SN Pareek Advocates Group located in Jaipur & Ajmer. A fully responsive website with slick slider.",
                    lang: "HTML, CSS & JavaScript",
                    source: "http://snpareekadvocates.com",
                    year: "2019",
                    img: require('@/assets/work/snp_advocates.png')
                },
                {
                    title: "Bunaai",
                    subtitle: "Online shopping website",
                    desc: "A website for Bunaai, A clothing brand birthed out of Jaipur. Needs no further introduction",
                    lang: "Shopify CMS",
                    source: "http://bunaai.com",
                    year: "2018",
                    img: require('@/assets/work/bunaai.png')
                }
            ]
        }
    }
}
</script>


<style scoped>
    section {
        position: relative;
    }

    .abstract-3 {
        position: absolute !important;
        left: 0;
        right: 0;
        z-index: 0 !important;
    }
    
    .abstract-3~* {
        z-index: 1 !important;
    }

    a {
        text-decoration: none;
    }
</style>
