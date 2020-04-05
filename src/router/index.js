//
//  Code is poetry
//  Created by Nick aka black.dragon74
//
//  The vue-router that handles all the routes in my app
//

import Vue from "vue";
import VueRouter from "vue-router";
import Hero from "../components/Hero";

Vue.use(VueRouter);

const routes = [
    {
        name: "Home",
        path: "/",
        component: Hero
    },
    {
        name: "About",
        path: "/about",
        component: () => import("../components/About")
    },
    {
        name: "Experience",
        path: "/experience",
        component: () => import("../components/Experience")
    },
    {
        name: "Skills",
        path: "/skills",
        component: () => import("../components/Skills")
    },
    {
        name: "Portfolio",
        path: "/portfolio",
        component: () => import("../components/Portfolio")
    },
    {
        name: "Contact",
        path: "/contact",
        component: () => import("../components/Contact")
    },
    {
        name: "404",
        path: "*",
        component: () => import("../components/404")
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;