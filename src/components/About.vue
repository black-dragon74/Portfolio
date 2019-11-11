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
                                    {{ aboutMe }}
                                </p>

                                <!--  The Image -->
                                <v-img
                                :src="require('@/assets/signature.png')"
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
                                </v-flex>

                                <!-- Flex 2 as info -->
                                <v-flex
                                xs6
                                no-wrap
                                subheading>
                                    <div class="mb-3">Jaipur, RJ, India</div>
                                    <div class="mb-3">me@nicksuniversum.com</div>
                                    <div class="mb-3">+91-8302716971</div>
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
                :src="require('@/assets/pic_abs.png')"
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
            aboutMe: "Hello there! I am Niraj Kumar Yadav. You can call me Nick. I am a computer programmer and a tech enthusiast. I have over 7+ years of programming experience in various languages. For me, sky's the limit.",

            aboutItems: [
                {"title": "Mobile Apps", "description": "I am primarily focused on iOS App Development using Swift. I love that language. I also have made a few apps in Java and Kotlin for the Android platform."},
                {"title": "Web Development", "description": "Count me in for any web type of web development. Be it frontend or backend. Just keep me away from Angular. I despise that. I have good knowledge of MEAN, LAMP and LEMP stack."},
                {"title": "Unix Kernel", "description": "I have written a few open source driver for the UNIX based Darwin kernel. So yeah, I am pretty familiar with that too."},
                {"title": "PHP Frameworks", "description": "I know this is not something to boast of but yeah I have pretty decent knowledge of Laravel and Codeigniter. Wrote an ERP software using them. All by myself ;)"},
                {"title": "REST APIs", "description": "You very well know what an API is, right? Well I know how to build one. My goto choice is Flask but I speak Node too."},
                {"title": "Linux Server", "description": "From deploying my own server in the cloud to managing/maintaining it. I know it all. The current website you're looking at is served directly off my own server running LEMP stack."},
                {"title": "Miscellaneous", "description": "I know many other languages like: C, Objective-C, C++, C#, Scala, Java, Ruby, Perl, Visual Basic, Shell Script, AppleScript, TypeScript just to name a few. More details are available on my GitHub repo."},
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
