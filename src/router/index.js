import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '../components/HelloWorld'

Vue.use(Router)

const routes = [
    {
        path: '/',
        redirect: '/sr/home'
    },
    {
        path: '/sr/home',
        component: HelloWorld,
        name: 'home'
    }
]

const router = new Router({
    mode: 'history',
    routes
})

export default router