//
//  Code is poetry
//  Created by Nick aka black-dragon74
//
//  A static route description used for drawer and app bars
//


// Structure definition
// Title: Navigation button title
// Link: Actual router link, must be same as defined in index.js of 'router'
// Icon: A material design icon identifier, used to show icon on nav menu if applicable
const navItems = [
    {
        "title": "Home",
        "link": "/",
        "icon": "mdi-home"
    },
    {
        "title": "About",
        "link": "/about",
        "icon": "mdi-information"
    },
    {
        "title": "Experience",
        "link": "/experience",
        "icon": "mdi-clipboard-text"
    },
    {
        "title": "Skills",
        "link": "/skills",
        "icon": "mdi-pen"
    },
    {
        "title": "Portfolio",
        "link": "/portfolio",
        "icon": "mdi-github-circle"
    },
    {
        "title": "Contact",
        "link": "/contact",
        "icon": "mdi-comment-text"
    }
];

export default navItems;