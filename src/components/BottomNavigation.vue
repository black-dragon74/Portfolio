<template>
    <v-bottom-nav
            :value="initialButton"
            dark
            fixed
            grow
            id="mobile-bottom-nav"
            class="hidden-md-and-up pl-4 pr-4"
    >
        <v-btn
                v-for="item in navItems"
                :key="item.title"
                flat
                dark
                :to="item.link"
                color="primary"
        >
            <span>{{ item.title }}</span>
            <v-icon>{{ item.icon }}</v-icon>
        </v-btn>
    </v-bottom-nav>
</template>

<script>
    import navItems from "../router/route-info";
    export default {
        name: 'BottomNav',
        data: () => ({
            initialButton: '/',
            navItems
    })
    }
</script>
