<template>
    <section
    id="experience">
        <v-layout pa-5 wrap>
            <!-- 12 col span -->
            <v-flex
            xs12>
                <h2 class="display-2 font-weight-bold primary--text mb-4">
                    Where I've been
                </h2>
            </v-flex>

            <!-- Another 12 col span to get the timeline -->
            <v-flex
            xs12
            md9
            mx-auto>
                <v-timeline>
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
                {"title": "My Dummy company", "desc": "Lorem ipsum dolor sit amet, eum ex saperet euripidis. Amet consetetur conclusionemque eum id, eros petentium eam cu.", "year": "2018"},
                {"title": "My Another company", "desc": "Lorem ipsum dolor sit amet, eum ex saperet euripidis. Amet consetetur conclusionemque eum id, eros petentium eam cu.", "year": "2017"},
                {"title": "My Second company", "desc": "Lorem ipsum dolor sit amet, eum ex saperet euripidis. Amet consetetur conclusionemque eum id, eros petentium eam cu.", "year": "2016"},
                {"title": "My Own company", "desc": "Lorem ipsum dolor sit amet, eum ex saperet euripidis. Amet consetetur conclusionemque eum id, eros petentium eam cu.", "year": "2015"}
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
