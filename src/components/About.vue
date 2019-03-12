<template>
    <section
    id="about">
        <v-layout class="pa-5 wrap" id="about-me">
            <!-- Background Image -->
            <v-img
            :src="require('@/assets/abstract-1.png')"
            width="613"
            height="528"
            class="abstract-1">
            </v-img>

            <!-- The basic info page -->
            <v-flex
            xs12
            md7>
                <!-- Section 1, Who I am -->
                <section>
                    <h2 class="display-2 font-weight-bold primary--text mb-4">
                        Who I am.
                    </h2>
                    <v-layout
                    justify-space-between
                    wrap>
                        <!-- Info and signature -->
                        <v-flex
                        xs12
                        md7>
                            <div class="subheading mb-5 mb-0">
                                <p>
                                    I am front-end developer that specializes in Vue and Veutify development. Consectetur adipisicing elit, sed do eiusmod tempor. Quisque viverra quam urna, ac commodo augue convallis et. In vel nisl imperdiet, cursus elit ac, efficitur sem. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quom placerat facer possim assum.
                                </p>

                                <!--  The Image -->
                                <v-img
                                src="https://material-portfolio-dark.vuetifyjs.com/img/signature.0302022c.png"
                                width="150"
                                class="ml-auto">
                                </v-img>
                            </div>
                        </v-flex>

                        <!-- Second flex, contact details -->
                        <v-flex
                        xs12
                        md4
                        mb-5>
                            <v-layout
                            align-center>
                                <!-- Flex 1 as headings -->
                                <v-flex
                                xs6
                                text-uppercase
                                primary--text 
                                font-weight-medium>
                                    <div class="mb-3">Location</div>
                                    <div class="mb-3">Email</div>
                                    <div class="mb-3">Phone</div>
                                    <div>Telegram</div>
                                </v-flex>

                                <!-- Flex 2 as info -->
                                <v-flex
                                xs6
                                no-wrap
                                subheading>
                                    <div class="mb-3">Somewhere in India</div>
                                    <div class="mb-3">me@nicksuniversum.com</div>
                                    <div class="mb-3">123456789</div>
                                    <div>t.me/ydvnick</div>
                                </v-flex>
                            </v-layout>
                        </v-flex>
                    </v-layout>
                </section>

                <!-- Section 2, What I can do for you -->
                <section>
                    <!-- Heading -->
                    <h2 class="display-2 primary--text font-weight-bold mb-4">
                        What I can do for you.
                    </h2>

                    <div>
                        <!-- Vueetify expansion panel -->
                        <v-expansion-panel popout>
                            <v-expansion-panel-content
                             v-for="(item, i) in aboutItems"
                             :key="i"
                             class="transparent"
                            >
                                <template v-slot:header>
                                    <div class="title font-weight-light">
                                        <div>{{ item.title }}</div>
                                    </div>
                                </template>

                                <div>
                                    <v-card>
                                        <v-card-text>
                                            <div>
                                                {{ item.description }}
                                            </div>
                                        </v-card-text>
                                    </v-card>
                                </div>
            
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                    </div>
                </section>
            </v-flex>

            <!-- Second flex that covers the rest of the webpage with image -->
            <v-flex
            hidden-sm-and-down
            md5
            text-xs-right
            text-uppercase>
                <div class="display-1">
                    Software Engineer
                </div>
                <span class="primary--text headline font-weight-light">
                    Nick
                </span>

                <!-- That image -->
                <v-img
                contain
                src="https://material-portfolio-dark.vuetifyjs.com/img/john.d70ed315.png"
                style="height: 100%; margin-right: -48px;">
                </v-img>
            </v-flex>
        </v-layout>
    </section>
</template>


<script>
export default {
    data () {
        return {
            aboutItems: [
                {"title": "Web Development", "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do tempor. Lorem ipsum dolor sit amet consectetur adipisicing elit, eiusmod tempor. Proin luctus nulla elit, vitae varius massa.Etiam massa sapien, ultricies quis enim at, tempor fringilla metus. Nulla rhoncus enim sed consectetur. Mauris et eros feugiat, tincidunt eget, dictum neque. Maecenas dapibus sodales magna, eget lectus vehicula non."},
                {"title": "Design", "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do tempor. Lorem ipsum dolor sit amet consectetur adipisicing elit, eiusmod tempor. Proin luctus nulla elit, vitae varius massa.Etiam massa sapien, ultricies quis enim at, tempor fringilla metus. Nulla rhoncus enim sed consectetur. Mauris et eros feugiat, tincidunt eget, dictum neque. Maecenas dapibus sodales magna, eget lectus vehicula non."},
                {"title": "Marketing", "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do tempor. Lorem ipsum dolor sit amet consectetur adipisicing elit, eiusmod tempor. Proin luctus nulla elit, vitae varius massa.Etiam massa sapien, ultricies quis enim at, tempor fringilla metus. Nulla rhoncus enim sed consectetur. Mauris et eros feugiat, tincidunt eget, dictum neque. Maecenas dapibus sodales magna, eget lectus vehicula non."},
                {"title": "Support", "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do tempor. Lorem ipsum dolor sit amet consectetur adipisicing elit, eiusmod tempor. Proin luctus nulla elit, vitae varius massa.Etiam massa sapien, ultricies quis enim at, tempor fringilla metus. Nulla rhoncus enim sed consectetur. Mauris et eros feugiat, tincidunt eget, dictum neque. Maecenas dapibus sodales magna, eget lectus vehicula non."}
            ]
        }
    }
}
</script>


<style scoped>
    section {
        position: relative;
    }

    .abstract-1 {
        position: absolute !important;
        left: -48px;
        top: -48px;
        z-index: 0 !important;
    }

    .v-expansion-panel > li {
        border-top: 1px solid hsla(0,0%,100%,.12)!important;
    }

    .v-expansion-panel > li:nth-child(1) {
        border-top: none !important;
    }
</style>
