import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from '@/pages/Home'
import Videos from '@/pages/Videos'
import About from '@/pages/About'
import Contact from '@/pages/Contact'


const routes = [
    {
        path:'/',
        component: Home
    },
    {
        path:'/videos',
        component: Videos
    },
    {
        path:'/about',
        component: About
    },
    {
        path:'/contact',
        component: Contact
    }
];

const router = new VueRouter({
    routes,
    mode:'history'
})

export default router