import {createRouter, createWebHistory} from "vue-router";

import Main from "@/Pages/Main";
import PostsPage from "@/Pages/PostsPage";
import About from "@/Pages/About";
import PostPage from "@/Pages/PostPage";
import PostsPageWithStore from "@/Pages/PostsPageWithStore";
import PostsPageWithComposition from "@/Pages/PostsPageWithComposition";

const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/posts',
        component: PostsPage
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/posts/:id',
        component: PostPage
    },
    {
        path: '/store',
        component: PostsPageWithStore
    },
    {
        path: '/composition',
        component: PostsPageWithComposition
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;