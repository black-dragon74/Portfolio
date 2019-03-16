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
            :cycle=false>
                <v-carousel-item
                v-for="(item,i) in items"
                :key="i"
                >
                    <v-sheet
                    class="transparent pa-5"
                    height=100%>
                        <!-- The caoursel content is contained in the sheet -->
                        <div class="text-xs-center mb-5">
                            <h2 class="primary--text title font-weight-light mb-1">Advanced Library Management</h2>
                            <span class="subheading">Created for fun</span>
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
                                                <a :href="item.source" class="white--text">External Link <v-icon>mdi-link-variant</v-icon></a>
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
                                height=350
                                width=500
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
                    desc: "A library management system written in JAVA. Uses MySQL for the database management. All the data is encrypted using BCrypt. This was my first big project and was coded by me in 7th Grade.",
                    lang: "JAVA",
                    source: "abc.zyx",
                    year: "2010",
                    img: require('@/assets/hero.jpg')
                },

                {
                    desc: "A library management system written in JAVA. Uses MySQL for the database management. All the data is encrypted using BCrypt. This was my first big project and was coded by me in 7th Grade.",
                    lang: "JAVA",
                    source: "abc.zyx",
                    year: "2010",
                    img: ""
                },

                {
                    desc: "A library management system written in JAVA. Uses MySQL for the database management. All the data is encrypted using BCrypt. This was my first big project and was coded by me in 7th Grade.",
                    lang: "JAVA",
                    source: "abc.zyx",
                    year: "2010",
                    img: ""
                },

                {
                    desc: "A library management system written in JAVA. Uses MySQL for the database management. All the data is encrypted using BCrypt. This was my first big project and was coded by me in 7th Grade.",
                    lang: "JAVA",
                    source: "abc.zyx",
                    year: "2010",
                    img: ""
                },

                {
                    desc: "A library management system written in JAVA. Uses MySQL for the database management. All the data is encrypted using BCrypt. This was my first big project and was coded by me in 7th Grade.",
                    lang: "JAVA",
                    source: "abc.zyx",
                    year: "2010",
                    img: ""
                },
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
