<template>
    <section id="skills">
        <v-layout
        pa-5
        justify-space-around
        wrap>
            <!-- The image in the background as a foilage -->
            <v-img
            :src="require('@/assets/abstract-2.png')"
            height=711
            width=778
            class="abstract-2">
            </v-img>

            <!-- The title with CV link -->
            <v-flex
            xs12
            mb-5
            position>
                <v-layout
                justify-space-between>
                    <h2 class="display-2 font-weight-bold primary--text mb-4">What I Know</h2>
                    <blockquote style="max-width: 230px;">
                        <p class="subheading font-weight-light font-italic">
                            Need a more professional description of me? Well, here's exactly that ;)
                        </p>
                        <footer class="text-xs-center">
                            <v-btn color="primary">Download CV</v-btn>
                        </footer>
                    </blockquote>
                </v-layout>
            </v-flex>

            <!-- Education on the left -->
            <v-flex
            xs12
            md3>
                <h3 class="headline font-weight-medium mb-4 primary--text">
                    My Education
                </h3>

                <v-sheet
                v-for="(edu, i) in educations"
                :key=i
                class="mb-5 transparent">
                <v-layout>
                    <v-sheet 
                    class="mr-3" 
                    color="primary"
                    height=100
                    width=1>
                    </v-sheet>

                    <v-flex>
                        <div class="mb-3">{{ edu.name }}</div>
                        <div class="text-xs-right">
                            <span class="title primary--text">
                                {{ edu.stream }}
                            </span>
                            <footer>
                                <div>{{ edu.alt }}</div>
                                <div>{{ edu.duration }}</div>
                            </footer>
                        </div>
                    </v-flex>
                </v-layout>
                </v-sheet>
            </v-flex>

            <!-- Skills on the right -->
            <v-flex
            xs12
            md4>
                <h3 class="headline font-weight-medium mb-4 primary--text">
                    My Skills
                </h3>
                <div 
                class="mb-4"
                v-for="(skill, i) in skills"
                :key=i>
                    <h4 class="text-uppercase mb-3 primary--text">{{ skill.skillName }}</h4>
                    <div class="pl-4">
                        <v-layout
                        align-center
                        v-for="(currSkill, i) in skill.skillSets"
                        :key=i
                        mb-2>
                            <v-flex xs5>
                                <h5 class="subheading">{{ currSkill.name }}</h5>
                            </v-flex>
                            <v-flex xs7>
                                <v-rating 
                                dense 
                                readonly
                                color="primary"
                                background-color="grey darken-4"
                                :full-icon="fullIcon"
                                :empty-icon="emptyIcon" 
                                :value=currSkill.exp>
                                </v-rating>
                            </v-flex>
                        </v-layout>
                    </div>
                </div>
            </v-flex>
        </v-layout>
    </section>
</template>


<script>
export default {
    data() {
        return {
            fullIcon: 'mdi-record',
            emptyIcon: 'mdi-record',
            educations: [
                {"name": "DAV Public School", "alt": "General Subjects", "stream": "Primary Schooling", "duration": "0000-0000"},
                {"name": "Rashtriya Military School", "alt": "Physcis, Chem & Maths", "stream": "Senior Secondary", "duration": "0000-0000"},
                {"name": "Manipal University", "alt": "Computer Sciences", "stream": "Bachelor of Computer Science", "duration": "2018-Present"},
            ],
            skills: [
                {"skillName": "Programming", "skillSets": [
                    {"name": "Swift", "exp": 5},
                    {"name": "Kotlin", "exp": 5},
                    {"name": "Java", "exp": 4},
                    {"name": "Python", "exp": 5},
                    {"name": "C & C++", "exp": 5},
                ]},
                {"skillName": "Others", "skillSets": [
                    {"name": "Wordpress", "exp": 5},
                    {"name": "LEMP Stack", "exp": 4},
                    {"name": "Shell Script", "exp": 5},
                    {"name": "Codeigniter", "exp": 5},
                    {"name": "Flask & Django", "exp": 5},
                ]},
                {"skillName": "Web Development", "skillSets": [
                    {"name": "Vue JS", "exp": 4},
                    {"name": "HTML 5", "exp": 5},
                    {"name": "SASS & CSS", "exp": 5},
                    {"name": "jQuery", "exp": 5},
                    {"name": "Node JS", "exp": 3},
                ]},
            ]
        }
    }
}
</script>


<style scoped>
    section {
        position: relative;
    }

    .abstract-2 {
        position: absolute !important;
        right: 0;
        top: -128px;
        z-index: 0 !important;
    }

    .abstract-2~* {
        z-index: 1 !important;
    }
</style>
