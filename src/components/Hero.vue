<template>
    <v-img
            :src="heroImage"
            id="heroImageIDLocal"
    >

            <v-layout
            fill-height
            justify-end
            align-end
            pa-5 text-xs-right>
                <div>
                    <div class="text-uppercase display-3">
                    Nick
                </div>
                <h1 class="primary--text text-uppercase display-2">Software Engineer</h1>
                </div>
            </v-layout>
    </v-img>
</template>


<script>
export default {
    data () {
        return {
            heroImage: require('@/assets/hero.jpg')
        }
    }
}
</script>


<style scoped>
    #heroImageIDLocal {
        height: 100vh;
    }

    @media screen and (max-width: 960px) {
        #heroImageIDLocal {
            height: calc(100vh - 48px);
        }
    }
</style>
