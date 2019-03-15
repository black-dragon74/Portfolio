<template>
    <section
    id="experience">
        <v-layout pa-5 wrap>
            <!-- 12 col span -->
            <v-flex
            xs12>
                <h2 class="display-2 font-weight-bold primary--text mb-4">
                    Down the memory lane
                </h2>
            </v-flex>

            <!-- Another 12 col span to get the timeline -->
            <v-flex
            xs12
            md9
            mx-auto>
                <v-timeline
                :dense="$vuetify.breakpoint.xsOnly"
                style="z-index: 1 !important;">
                    <v-timeline-item
                    v-for="(item, i) in places"
                    :key="i"
                    color="primary"
                    large
                    >
                    <template v-slot:opposite>
                        <span>{{ item.year }}</span>
                    </template>
                    <v-card class="pa-3">
                        <h3 class="subheading font-weight-bold">{{ item.title }}</h3>
                        <div>
                            {{ item.desc }}
                        </div>
                    </v-card>
                    </v-timeline-item>
                </v-timeline>
            </v-flex>
        </v-layout>
    </section>
</template>


<script>
export default {
    data() {
        return {
            places: [
                {"title": "Year 2016 and forward", "desc": "Entered mainstream development and I almost write code daily till date. Some of my works are used by thousands of people on a daily basis. Check my GitHub repo.", "year": "2016"},
                {"title": "Created own JARVIS", "desc": "A personal JAVA based speech recognisation program that could be used to control your WINDOWS PC vocally. Using Google Speech API.", "year": "2015"},
                {"title": "Entered Hackintosh Arena", "desc": "Did some graphical researches and fiddled with the macOS operating system in order to make it able to run on PCs. I still do this as an hobby.", "year": "2012"},
                {"title": "LMS using JAVA", "desc": "Created my first big Java project. It was a Library Management System with full Bcrypt database encryption and could be operated over network.", "year": "2010"}
            ]
        }
    }
}
</script>


<style scoped>
    section {
        position: relative;
    }
</style>
