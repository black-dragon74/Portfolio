<template>
    <v-img
            :src="heroImage"
            style="height: 100vh;">

            <v-layout fill-height="true" justify-end="true" align-end="true" class="pa-5 text-xs-right">
                <div>
                    <div class="text-uppercase display-3">
                    Niraj Yadav
                </div>
                <h1 class="primary--text text-uppercase display-4">Software Engineer</h1>
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
