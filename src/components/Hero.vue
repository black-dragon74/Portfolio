<template>
    <v-img
            :src="heroImage"
            style="height: 100vh;">

            <v-layout
            fill-height
            justify-end
            align-end
            pa-5 text-xs-right>
                <div>
                    <div class="text-uppercase display-4">
                    Nick
                </div>
                <h2 class="primary--text text-uppercase display-4">Software Engineer</h2>
                </div>
            </v-layout>
    </v-img>
</template>


<script>
export default {
    data () {
        return {
            heroImage: require('../assets/hero.png')
        }
    }
}
</script>


<style>

</style>
