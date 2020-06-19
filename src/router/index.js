//
//  Code is poetry
//  Created by Nick aka black.dragon74
//
//  The vue-router that handles all the routes in my app
//

import Vue from "vue";
import VueRouter from "vue-router";
import {
    Hero,
    About,
    Skills,
    Portfolio,
    Experience,
    Contact
} from "../components/Components";

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
        component: About
    },
    {
        name: "Experience",
        path: "/experience",
        component: Experience
    },
    {
        name: "Skills",
        path: "/skills",
        component: Skills
    },
    {
        name: "Portfolio",
        path: "/portfolio",
        component: Portfolio
    },
    {
        name: "Contact",
        path: "/contact",
        component: Contact
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