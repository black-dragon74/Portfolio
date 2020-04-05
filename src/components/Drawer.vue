<template>
    <v-navigation-drawer fixed dark app id="mainDrawer">
        <v-layout
        align-center
        fill-height
        py-5
        justify-center
        column>
            
            <!-- The name typed logo -->
            <h2 class="display-3 font-weight-black primary--text mb-2">NK</h2>

            <!-- Developer name -->
            <div class="display-1 mb-2">Nick</div>

            <!--  Designation -->
            <span class="title font-weight-light mb-5">Software Engineer</span>

            <!-- Buttons -->
            <v-btn v-for="item in navItems"
                   :key="item.title"
                   flat dark :to="item.link"
                   class="mb-3 text-capitalize subheading font-weight-medium"
            >
                {{ item.title }}
            </v-btn>

            <!-- Social Icons -->
            <div class="mt-auto">
                <!-- Now for each item, we create a new icon -->
                <div class="my-4">
                    <a v-for="item in socialIcons"
                    :key="item.name"
                    :href="item.link"
                    class="mx-2"
                    :title="item.name"
                    target="_blank"
                    >
                        <v-icon>{{ item.icon }}</v-icon>
                    </a>
                </div>
            </div>
        </v-layout>
    </v-navigation-drawer>
</template>

<script>
    import navItems from "../router/route-info";
export default {
    name: 'Drawer',
    data: () => ({
        navItems,
        socialIcons: [
            {"name": "Facebook", "link": "https://fb.me/ydvnick", "icon": "mdi-facebook"},
            {"name": "Github", "link": "https://github.com/black-dragon74", "icon": "mdi-github-circle"},
            {"name": "Telegram", "link": "https://t.me/ydvnick", "icon": "mdi-telegram"},
        ]
    })
}
</script>

<style scoped>
    #mainDrawer {
        height: 100%;
        margin-top: 0px;
        max-height: calc(100% - 0px);
        transform: translateX(0px) !important;
        width: 300px;
        background-color: rgb(24, 24, 24);
    }

    a {
        text-decoration: none;
    }
</style>


